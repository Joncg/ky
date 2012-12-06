<?php

/**
 * Role (后台角色模块)
 *
 * @author		Cunzhang QQ:303918662 <http://www.balns.com>
 * @copyright	Copyright (c) 2012 Diexun(http://www.diexun.com)
 */
class RoleAction extends CommonAction {

	protected function _initialize() {
		parent::_initialize();
		$this->model = D('Role');
	}

	protected function _filter(&$map) {
		$name = isset($_GET['name']) ? trim($_GET['name']) : '';
		if ($name) {
			$map['name'] = array('like', $name);
		}
	}

	// 列表
	public function index() {
		if (!$this->mid) {
			$this->error('参数错误');
		}

		// 列表标题链接
		$listMenus = array(array('href' => U(MODULE_NAME . '/index', $this->param), 'title' => $this->menus[$this->mid]['title']));
		$this->assign('listMenus', $listMenus);

		$action_link = array();
		// 添加节点链接
		$ads = array('name' => '添加角色', 'url' => U(MODULE_NAME . "/add", $this->param));
		$action_link[] = array('text' => $ads['name'], 'href' => "javascript:Box.open({'id':'add','title':'$ads[name]','iframe': '$ads[url]','width':'400','height':'150'});");
		$this->assign('action_link', $action_link);

		$map = '';
		if (method_exists($this, '_filter')) {
			$this->_filter($map);
		}
		$field = 'id,name,status';
		$this->_list($this->model, $map, 'id', true, $field);
		$this->display();
	}

	/**
	 * 设置角色权限
	 */
	public function power() {
		if ($_POST['id']) {
			$this->savePowerNode();
			// 成功提示
			$this->assign('waitSecond', 0);
			$this->assign('jumpUrl', 'javascript:self.parent.main.location.reload()');
			$this->success('用户添加成功！');
		} else {
			$id = isset($_GET['id']) ? intval($_GET['id']) : '';
			$power = $this->getPowerNode($id);
			$this->assign('powerPublic', $power['public']);
			$this->assign('powerAll', $power['all']);
			$this->display();
		}
	}

	// 删除回调函数 删除角色相关信息
	protected function _delete_after($ids) {
		if (is_array($ids) && !empty($ids)) {
			$Access = M('Access');
			foreach ($ids as $id) {
				$condition['role_id'] = intval($id);
				$Access->where($condition)->delete();
			}
		}
	}

	/**
	 * 保存角色节点权限
	 * @param type $role_id
	 */
	protected function savePowerNode($role_id = '') {
		$role_id = intval($role_id ? $role_id : $_POST['id']);
		$powers = $_POST['power'];
		$Access = M('Access');
		// 添加操作日志
		$info = array('role_id'=>$role_id,'power'=>$powers);
		$this->addOperationLog($info);
		$data = array();
		if ($role_id) {
			$condition['role_id'] = $role_id;
			$Access->where($condition)->delete();
			if ($powers) {
				foreach ($powers as $node_id) {
					$data['role_id'] = $role_id;
					$data['node_id'] = intval($node_id);
					$Access->add($data);
				}
			}
		}
	}

	/**
	 * 获取角色权限
	 * @param int $role_id
	 * @return type
	 */
	protected function getPowerNode($role_id = '') {
		$role_id = intval($role_id);
		$power = array('0');
		// 获取角色已有权限
		if ($role_id) {
			$Access = D('Access');
			$p = $Access->where(array('role_id' => $role_id))->field('node_id')->select();
			if ($p) {
				foreach ($p as $val) {
					$power[] = $val['node_id'];
				}
			}
		}
		// 取出权限节点
		$Node = D("Node");
		$list = $Node->field('id,name,title,parent_id')->order('order_id asc')->select();
		// 公共模块的权限
		$powerPublic = array();
		foreach ($list as $key => $val) {
			$moduleName = $val['name'];
			if ('PUBLIC' == strtoupper($moduleName)) {
				$powerPublic[$moduleName] = $val;
				$powerPublic[$moduleName]['checked'] = in_array($val['id'], $power) ? 'checked' : '';
				foreach ($list as $k => $v) {
					if ($v['parent_id'] == $val['id']) {
						$powerPublic[$val['name']]['child'][$k] = $v;
						$powerPublic[$val['name']]['child'][$k]['checked'] = in_array($v['id'], $power) ? 'checked' : '';
					}
				}
				unset($list[$key]);
				break;
			}
		}
		// 全部模块的权限(非公共模块)
		$powerAll = array();
		foreach ($list as $key => $val) {
			if ($val['parent_id'] == 0) {
				$powerAll[$key] = $val;
				$powerAll[$key]['checked'] = in_array($val['id'], $power) ? 'checked' : '';
				foreach ($list as $ke => $va) {
					if ($val['id'] == $va['parent_id']) {
						$powerAll[$key]['child'][$ke] = $va;
						$powerAll[$key]['child'][$ke]['checked'] = in_array($va['id'], $power) ? 'checked' : '';
						foreach ($list as $k => $v) {
							if ($va['id'] == $v['parent_id']) {
								$powerAll[$key]['child'][$ke]['child'][$k] = $v;
								$powerAll[$key]['child'][$ke]['child'][$k]['checked'] = in_array($v['id'], $power) ? 'checked' : '';
							}
						}
					}
				}
			}
		}
		return array('public' => $powerPublic, 'all' => $powerAll);
	}

}
?>