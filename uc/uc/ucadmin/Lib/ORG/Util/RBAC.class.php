<?php

// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK IT ]
// +----------------------------------------------------------------------
// | Copyright (c) 2009 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: liu21st <liu21st@gmail.com>
// +----------------------------------------------------------------------
// $Id: RBAC.class.php 2601 2012-01-15 04:59:14Z liu21st $

/**
  +------------------------------------------------------------------------------
 * 基于角色的数据库方式验证类
  +------------------------------------------------------------------------------
 * @category   ORG
 * @package  ORG
 * @subpackage  Util
 * @author    liu21st <liu21st@gmail.com>
 * @version   $Id: RBAC.class.php 2601 2012-01-15 04:59:14Z liu21st $
  +------------------------------------------------------------------------------
 */
// 配置文件增加设置
// USER_AUTH_ON 是否需要认证
// USER_AUTH_TYPE 认证类型
// USER_AUTH_KEY 认证识别号
// REQUIRE_AUTH_MODULE  需要认证模块
// NOT_AUTH_MODULE 无需认证模块
// REQUIRE_AUTH_ACTION  需要认证的操作
// NOT_AUTH_ACTION 无需认证的操作
// USER_AUTH_GATEWAY 认证网关
// RBAC_DB_DSN  数据库连接DSN
// RBAC_ROLE_TABLE 角色表名称
// RBAC_USER_TABLE 用户表名称
// RBAC_ACCESS_TABLE 权限表名称
// RBAC_NODE_TABLE 节点表名称
/*
  -- --------------------------------------------------------
  CREATE TABLE IF NOT EXISTS `think_access` (
  `role_id` smallint(6) unsigned NOT NULL,
  `node_id` smallint(6) unsigned NOT NULL,
  `level` tinyint(1) NOT NULL,
  `module` varchar(50) DEFAULT NULL,
  KEY `groupId` (`role_id`),
  KEY `nodeId` (`node_id`)
  ) ENGINE=MyISAM DEFAULT CHARSET=utf8;

  CREATE TABLE IF NOT EXISTS `think_node` (
  `id` smallint(6) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `title` varchar(50) DEFAULT NULL,
  `status` tinyint(1) DEFAULT '0',
  `remark` varchar(255) DEFAULT NULL,
  `sort` smallint(6) unsigned DEFAULT NULL,
  `pid` smallint(6) unsigned NOT NULL,
  `level` tinyint(1) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `level` (`level`),
  KEY `pid` (`pid`),
  KEY `status` (`status`),
  KEY `name` (`name`)
  ) ENGINE=MyISAM  DEFAULT CHARSET=utf8;

  CREATE TABLE IF NOT EXISTS `think_role` (
  `id` smallint(6) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `pid` smallint(6) DEFAULT NULL,
  `status` tinyint(1) unsigned DEFAULT NULL,
  `remark` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `pid` (`pid`),
  KEY `status` (`status`)
  ) ENGINE=MyISAM  DEFAULT CHARSET=utf8 ;
 */
class RBAC {

	// 认证方法
	static public function authenticate($map, $model = '') {
		if (empty($model))
			$model = C('USER_AUTH_MODEL');
		//使用给定的Map进行认证
		return D($model)->where($map)->find();
	}

	//用于检测用户权限的方法,并保存到Session中
	static function saveAccessList($authId = null) {
		if (null === $authId)
			$authId = $_SESSION[C('USER_AUTH_KEY')];
		// 如果使用普通权限模式，保存当前用户的访问权限列表
		// 对管理员开发所有权限
		if (C('USER_AUTH_TYPE') != 2 && !$_SESSION[C('ADMIN_AUTH_KEY')])
			$_SESSION['_ACCESS_LIST'] = RBAC::getAccessList($authId);
		return;
	}

	// 取得模块的所属记录访问权限列表 返回有权限的记录ID数组
	static function getRecordAccessList($authId = null, $module = '') {
		if (null === $authId)
			$authId = $_SESSION[C('USER_AUTH_KEY')];
		if (empty($module))
			$module = MODULE_NAME;
		//获取权限访问列表
		$accessList = RBAC::getModuleAccessList($authId, $module);
		return $accessList;
	}

	//检查当前操作是否需要认证
	static function checkAccess() {
		//如果项目要求认证，并且当前模块需要认证，则进行权限认证
		if (C('USER_AUTH_ON')) {
			$_module = array();
			$_action = array();
			if ("" != C('REQUIRE_AUTH_MODULE')) {
				//需要认证的模块
				$_module['yes'] = explode(',', strtoupper(C('REQUIRE_AUTH_MODULE')));
			} else {
				//无需认证的模块
				$_module['no'] = explode(',', strtoupper(C('NOT_AUTH_MODULE')));
			}
			//检查当前模块是否需要认证
			if ((!empty($_module['no']) && !in_array(strtoupper(MODULE_NAME), $_module['no'])) || (!empty($_module['yes']) && in_array(strtoupper(MODULE_NAME), $_module['yes']))) {
				if ("" != C('REQUIRE_AUTH_ACTION')) {
					//需要认证的操作
					$_action['yes'] = explode(',', strtoupper(C('REQUIRE_AUTH_ACTION')));
				} else {
					//无需认证的操作
					$_action['no'] = explode(',', strtoupper(C('NOT_AUTH_ACTION')));
				}
				//检查当前操作是否需要认证
				if ((!empty($_action['no']) && !in_array(strtoupper(ACTION_NAME), $_action['no'])) || (!empty($_action['yes']) && in_array(strtoupper(ACTION_NAME), $_action['yes']))) {
					return true;
				} else {
					return false;
				}
			} else {
				return false;
			}
		}
		return false;
	}

	// 登录检查
	static public function checkLogin() {
		//检查当前操作是否需要认证
		if (RBAC::checkAccess()) {
			//检查认证识别号
			if (!$_SESSION[C('USER_AUTH_KEY')]) {
				if (C('GUEST_AUTH_ON')) {
					// 开启游客授权访问
					if (!isset($_SESSION['_ACCESS_LIST']))
						// 保存游客权限
						RBAC::saveAccessList(C('GUEST_AUTH_ID'));
				}else {
					// 禁止游客访问跳转到认证网关
					redirect(U(C('USER_AUTH_GATEWAY')));
				}
			}
		}
		return true;
	}

	//权限认证的过滤器方法
	static public function AccessDecision($appName = APP_NAME) {
		//检查是否需要认证
		if (RBAC::checkAccess()) {
			//存在认证识别号，则进行进一步的访问决策
			$accessGuid = md5($appName . MODULE_NAME . ACTION_NAME);
			if (empty($_SESSION[C('ADMIN_AUTH_KEY')])) {
				if (C('USER_AUTH_TYPE') == 2) {
					//加强验证和即时验证模式 更加安全 后台权限修改可以即时生效
					//通过数据库进行访问检查
					$accessList = RBAC::getAccessList($_SESSION[C('USER_AUTH_KEY')]);
				} else {
					// 如果是管理员或者当前操作已经认证过，无需再次认证
					if ($_SESSION[$accessGuid]) {
						return true;
					}
					//登录验证模式，比较登录后保存的权限访问列表
					$accessList = $_SESSION['_ACCESS_LIST'];
				}
				//判断是否为组件化模式，如果是，验证其全模块名
				$module = defined('P_MODULE_NAME') ? P_MODULE_NAME : MODULE_NAME;
				if (!isset($accessList[strtoupper($module)][strtoupper(ACTION_NAME)])) {
					$_SESSION[$accessGuid] = false;
					return false;
				} else {
					$_SESSION[$accessGuid] = true;
				}
			} else {
				//管理员无需认证
				return true;
			}
		}
		return true;
	}

	/**
	 * 取得当前认证号的所有权限列表
	 * @param int $authId 用户ID
	 * @return boolean
	 */
	static public function getAccessList($authId) {
		// 用户ID
		$authId = intval($authId);
		if (!$authId) {
			return false;
		}
		// 取出权限节点缓存
//		$Node = D("Node");
//		$condition = array('status'=>2);
//		$nodeList = $Node->field('id,name,title,status,parent_id')->where($condition)->order('order_id asc')->select();
		$nodeList = readCache('Node');
		// 获取用户角色
		$U = D('User');
		$condition = array('id' => $authId);
		$role_id = intval($U->where($condition)->getField('role_id'));
		// 权限主集
		$apps = array();
		// 获取角色已有权限
		$power = array(); // 拥有权限
		if ($authId) {
			$Access = D('Access');
			$p = $Access->where(array('role_id' => $role_id))->field('node_id')->select();
			if ($p) {
				foreach ($p as $val) {
					if ($nodeList[$val['node_id']]['parent_id'] == 0) {
						$apps[] = $nodeList[$val['node_id']];
					}
					$power[] = $val['node_id'];
				}
			}
		}
		// 公共模块的权限
		$publicAction = array();
		if ($apps) {
			foreach ($apps as $key => $val) {
				$moduleName = $val['name'];
				if ('PUBLIC' == strtoupper($moduleName)) {
					foreach ($nodeList as $k => $v) {
						if ($v['parent_id'] == $val['id'] && $v['status'] == 2 && in_array($v['id'], $power)) {
							$publicAction[$v['name']] = $v['id'];
							unset($nodeList[$val['id']]);
						}
					}
					unset($apps[$key]);
					break;
				}
			}
		}
		$access = array();
		if ($apps) {
			// 读取模块模块
			$modules = array();
			foreach ($apps as $key => $val) {
				foreach ($nodeList as $k => $v) {
					if ($val['id'] == $v['parent_id'] && $v['status'] == 2 && in_array($v['id'], $power)) {
						$modules[$k]['id'] = $v['id'];
						$modules[$k]['name'] = $v['name'];
						unset($nodeList[$k]);
					}
				}
			}
			// 读取操作权限
			if ($modules) {
				foreach ($modules as $val) {
					$moduleName = $val['name'];
					$action = array();
					foreach ($nodeList as $k => $v) {
						if ($val['id'] == $v['parent_id'] && $v['status'] == 2 && in_array($v['id'], $power)) {
							$action[$v['name']] = $v['id'];
						}
					}
					//和公共模块的操作权限合并
					$action += $publicAction;
					$access[strtoupper($moduleName)] = array_change_key_case($action, CASE_UPPER);
				}
			}
		}
		return $access;
	}

	// 读取模块所属的记录访问权限
	static public function getModuleAccessList($authId, $module) {
		$authId = intval($authId);
		if (!$authId) {
			return false;
		}
		// 获取用户角色
		$U = D('User');
		$condition = array('id' => $authId);
		$role_id = intval($U->where($condition)->getField('role_id'));
		// 获取角色已有权限
		$power = array(); // 拥有权限集
		if ($authId) {
			$Access = D('Access');
			$p = $Access->where(array('role_id' => $role_id))->field('node_id')->select();
			if ($p) {
				foreach ($p as $val) {
					$power[] = $val['node_id'];
				}
			}
		}
		// 取出权限节点缓存
		$nodeList = readCache('Node');
		$access = array();
		foreach ($nodeList as $val) {
			if ($val['name'] == $module && $val['status'] == 2 && in_array($val['id'], $power)) {
				$access[] = $val['id'];
				foreach ($nodeList as $k => $v) {
					if ($v['parent_id'] == $val['id'] && $v['status'] == 2 && in_array($v['id'], $power)) {
						$access[] = $v['id'];
					}
				}
			}
		}
		//dump($access);exit;
		return $access;
	}

}