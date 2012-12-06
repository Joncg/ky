<?php

/**
 * User (后台用户模块)
 *
 * @author		Cunzhang QQ:303918662 <http://www.balns.com>
 * @copyright	Copyright (c) 2012 Diexun(http://www.diexun.com)
 */
class UserAction extends CommonAction {

	protected $default_pwd = '123456'; // 默认重置密码

	protected function _initialize() {
		parent::_initialize();
		$this->model = D('User');
		// 调出角色缓存
		$this->roles = readCache('Role');
		$this->assign('roles', $this->roles);
	}

	protected function _filter(&$map) {
		$account = isset($_GET['account']) ? trim($_GET['account']) : '';
		if ($account) {
			$map['account|real_name'] = array('like', $account);
		}
	}

	function index() {
		if (!$this->mid) {
			$this->error('参数错误');
		}
		// 列表标题链接
		$listMenus = array(array('href' => U(MODULE_NAME . '/index', $this->param), 'title' => $this->menus[$this->mid]['title']));
		$this->assign('listMenus', $listMenus);

		$action_link = array();
		// 添加节点链接
		$ads = array('name' => '添加用户', 'url' => U(MODULE_NAME . "/add", $this->param));
		$action_link[] = array('text' => $ads['name'], 'href' => "javascript:Box.open({'id':'add','title':'$ads[name]','iframe': '$ads[url]','width':'450','height':'200'});");
		$this->assign('action_link', $action_link);

		$map = '';
		if (method_exists($this, '_filter')) {
			$this->_filter($map);
		}
		$field = 'id,account,role_id,real_name,last_login_time,last_login_ip,login_count,status';
		$this->_list($this->model, $map, 'id', FALSE, $field);
		$this->display();
	}

	//重置密码
	public function resetPwd() {
		$id = intval($_GET['id']);
		//初始密码
		$password = $this->default_pwd ? $this->default_pwd : '123456';
		if (!$id) {
			$this->error('非法操作！');
		}
		$data['password'] = pwdHash($password);
		$condition['id'] = $id;
		$result = $this->model->where($condition)->save($data);
		if (false !== $result) {
			// 添加操作日志
			$info = array('uid'=>$id,'password'=>$password);
			$this->addOperationLog($info);
			$this->success("密码修改为: <strong>$password</strong>");
		} else {
			$this->error('重置密码失败！' . $this->model->getError());
		}
	}

	//登陆日志列表
	public function loginLog() {
		// 列表标题链接
		$listMenus = array(array('href' => U(MODULE_NAME . '/index', $this->param), 'title' => $this->menus[$this->mid]['title']));
		$this->assign('listMenus', $listMenus);
		// 返回按钮
		$action_link = array();
		$action_link[] = array('text' => '返回用户列表', 'href' => 'javascript:history.back(-1);');
		$this->assign('action_link', $action_link);
		$id = intval($_GET['id']);
		if ($id) {
			$model = D('UserLoginLog');
			$field = '';
			$map['uid'] = $id;
			$keyword = isset($_GET['keyword']) ? trim($_GET['keyword']) : '';
			if ($keyword) {
				$map['login_ip|browser|system'] = array('like', $keyword);
			}
			$this->_list($model, $map, 'id', FALSE, $field);
			$this->display('login_log');
		} else {
			$this->error('查看日志出错！');
		}
	}
	
	public function pcPower() {
		// 快速操作硬件授权
		$acttype = $_REQUEST['acttype'];
		if ($acttype) {
			$this->model = D('UserAuthorized');
			if ($acttype == 'remove') {
				$this->delete();
			}
			else {
				$this->status();
			}
			exit;
		}
		// 列表标题链接
		$listMenus = array(array('href' => U(MODULE_NAME . '/index', $this->param), 'title' => $this->menus[$this->mid]['title']));
		$this->assign('listMenus', $listMenus);
		// 返回按钮
		$action_link = array();
		$action_link[] = array('text' => '返回用户列表', 'href' => U(MODULE_NAME . '/index', $this->param));
		$this->assign('action_link', $action_link);
		$id = intval($_GET['id']);
		if ($id) {
			$model = D('UserAuthorized');
			$field = '';
			$map['uid'] = $id;
			$keyword = isset($_GET['keyword']) ? trim($_GET['keyword']) : '';
			if ($keyword) {
				$map['computer_name|cpu_id|mac_id|storage_id'] = array('like', $keyword);
			}
			$this->_list($model, $map, 'id', FALSE, $field);
			$this->display('pc_power');
		} else {
			$this->error('查看日志出错！');
		}
	}
	
	//操作日志列表
	public function operationLog() {
		// 列表标题链接
		$listMenus = array(array('href' => U(MODULE_NAME . '/index', $this->param), 'title' => $this->menus[$this->mid]['title']));
		$this->assign('listMenus', $listMenus);
		// 返回按钮
		$action_link = array();
		$action_link[] = array('text' => '返回用户列表', 'href' => 'javascript:history.back(-1);');
		$this->assign('action_link', $action_link);
		$id = intval($_GET['id']);
		if ($id) {
			$model = D('UserOperationLog');
			$field = '';
			$map['uid'] = $id;
			$time_start = $_GET['time_start'];
//			$map['optime'] = array('between', array(strtotime($time_start . ' 00:00:00'),strtotime($time_end . ' 23:59:59')));
			if ($time_start) {
				$map['optime'][] = array('gte', strtotime($time_start . ' 00:00:00'));
			}
			$time_end = $_GET['time_end'];
			if ($time_end) {
				$map['optime'][] = array('lte', strtotime($time_end . ' 23:59:59'));
			}
			$keyword = isset($_GET['keyword']) ? trim($_GET['keyword']) : '';
			if ($keyword) {
				$map['module|action|opinfo'] = array('like', $keyword);
			}
			$this->_list($model, $map, 'id', FALSE, $field);
			$this->display('operation_log');
		} else {
			$this->error('查看日志出错！');
		}
	}
}
?>