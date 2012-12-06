<?php

/**
 * Public (后台公共页)
 *
 * @author		Cunzhang QQ:303918662 <http://www.balns.com>
 * @copyright	Copyright (c) 2012 Diexun(http://www.diexun.com)
 */
class PublicAction extends CommonAction {

	protected function _initialize() {
		//parent::_initialize();
		$this->assign('APP_PATH', APP_PATH);
		$this->assign('module_name', MODULE_NAME);
		$this->assign('action_name', ACTION_NAME);
		import('@.ORG.Util.Cookie');
	}

	// 检查用户是否登录
	public function checkUser() {
		if (!isset($_SESSION[C('USER_AUTH_KEY')])) {
			$this->assign('jumpUrl', U('Public/login'));
			$this->error('没有登录');
		}
	}

	public function checkPc($userId = '') {
		//return true;
		$SysA = D('UserAuthorized');
		$userId = !empty($userId) ? $userId : Cookie::get(C('USER_AUTH_KEY'));
		$userId = intval($userId);
//        if ($userId == 1) {
//            return true;
//        }
		$data = array();
		if ($userId && Cookie::get('computer_name') && Cookie::get('cpu_id') && Cookie::get('mac_id')) {
			$data['uid'] = $userId;
			$data['computer_name'] = Cookie::get('computer_name');
			$data['cpu_id'] = Cookie::get('cpu_id');
			$data['mac_id'] = Cookie::get('mac_id');
			$data['storage_id'] = Cookie::get('hd_id');
			$row = $SysA->field('id,status')->where($data)->find();
			$data['add_time'] = time();
//			echo $SysA->getLastSql();
//			dump($row);exit;
			if (empty($row)) {
				$data['id'] = $SysA->getNextId();
				$data['status'] = 1;
				$SysA->add($data);
			}
		}
		if ($row['status'] != 2) {
			$this->assign('jumpUrl', U(C('USER_AUTH_GATEWAY')));
			$this->error('账号已被锁定，请联系相关人员！');
		}
	}

	// 后台首页 查看系统信息
	public function main() {
		$this->checkUser();
		$info = array(
			'操作系统' => PHP_OS,
			'运行环境' => $_SERVER["SERVER_SOFTWARE"],
			'PHP运行方式' => php_sapi_name(),
			'ThinkPHP版本' => THINK_VERSION . ' [ <a href="http://thinkphp.cn" target="_blank">查看最新版本</a> ]',
			'上传附件限制' => ini_get('upload_max_filesize'),
			'执行时间限制' => ini_get('max_execution_time') . '秒',
			'服务器时间' => date("Y年n月j日 H:i:s"),
			'北京时间' => gmdate("Y年n月j日 H:i:s", time() + 8 * 3600),
			'服务器域名/IP' => $_SERVER['SERVER_NAME'] . ' [ ' . gethostbyname($_SERVER['SERVER_NAME']) . ' ]',
			'剩余空间' => round((@disk_free_space(".") / (1024 * 1024)), 2) . 'M',
			'register_globals' => get_cfg_var("register_globals") == "1" ? "ON" : "OFF",
			'magic_quotes_gpc' => (1 === get_magic_quotes_gpc()) ? 'YES' : 'NO',
			'magic_quotes_runtime' => (1 === get_magic_quotes_runtime()) ? 'YES' : 'NO',
		);
		$this->assign('info', $info);
		$this->display();
	}

	// 用户登录页面
	public function login() {
		if (!isset($_SESSION[C('USER_AUTH_KEY')])) {
			$this->display();
		} else {
			$this->redirect(U('Index/index'));
		}
	}

	public function index() {
		//如果通过认证跳转到首页
		redirect(__APP__);
	}

	// 用户登出
	public function logout() {
		$url = U('Public/login');
		$this->assign("jumpUrl", $url);
		if (isset($_SESSION[C('USER_AUTH_KEY')])) {
			unset($_SESSION[C('USER_AUTH_KEY')]);
			unset($_SESSION);
			session_destroy();
			$this->success('退出成功！');
		} else {
			$this->redirect($url);
		}
	}

	// 登录检测
	public function checkLogin() {
		if (empty($_POST['username'])) {
			$this->error('帐号错误！');
		} elseif (empty($_POST['password'])) {
			$this->error('密码必须！');
		}
//		elseif (empty($_POST['verify'])) {
//			$this->error('验证码必须！');
//		}
		//生成认证条件
		$map = array();
		// 支持使用绑定帐号登录
		$map['account'] = $_POST['username'];
		$map["status"] = 2;
//		if ($_SESSION['verify'] != md5($_POST['verify'])) {
//			$this->error('验证码错误！');
//		}
		import('@.ORG.Util.RBAC');
		$authInfo = RBAC::authenticate($map);
		//使用用户名、密码和状态的方式进行认证
		if (!$authInfo) {
			$this->error('帐号不存在或已禁用！');
		} else {
			if ($authInfo['password'] != pwdHash($_POST['password'])) {
				$this->error('密码错误！');
			}
			//硬件信息
            Cookie::set('computer_name', trim($_POST['pc_name']) != 'undefined' ? trim($_POST['pc_name']) == '' ? 'undefined' : trim($_POST['pc_name']) : 'undefined');
            Cookie::set('cpu_id', trim($_POST['cpu_info']) != 'undefined' ? trim($_POST['cpu_info']) == '' ? 'undefined' : trim($_POST['cpu_info']) : 'undefined');
            Cookie::set('mac_id', trim($_POST['net_info']) != 'undefined' ? trim($_POST['net_info']) == '' ? 'undefined' : trim($_POST['net_info']) : 'undefined');
            Cookie::set('hd_id', trim($_POST['hd_info']) != 'undefined' ? trim($_POST['hd_info']) == '' ? 'undefined' : trim($_POST['hd_info']) : 'undefined');
			$this->checkPc($authInfo['id']);
			$_SESSION[C('USER_AUTH_KEY')] = $authInfo['id'];
			$_SESSION['loginUser'] = $authInfo['account'];
			$_SESSION['loginUserName'] = $authInfo['real_name'];
			$_SESSION['lastLoginTime'] = $authInfo['last_login_time'];
			$_SESSION['last_login_ip'] = $authInfo['last_login_ip'];
			$_SESSION['login_count'] = $authInfo['login_count'];
			if ($authInfo['role_id'] == 1) {
				$_SESSION[C('ADMIN_AUTH_KEY')] = true;
			}

			$time = time();
			$ip = get_client_ip();
			//保存登录信息
			$User = D('User');
			$data = array();
			$data['last_login_time'] = $time;
			$data['login_count'] = array('inc', 1);
			$data['last_login_ip'] = $ip;
			$condition = array('id' => $authInfo['id']);
			$User->where($condition)->save($data);
			//echo $User->getLastSql();
			//保存登录日志
			$Loginlog = D('UserLoginLog');
			$data = array();
			$data['id'] = $Loginlog->getNextId();
			$data['uid'] = $authInfo['id'];
			$data['login_ip'] = $ip;
			$data['login_time'] = $time;
			$Loginlog->create($data);
			$Loginlog->add();

			// 缓存访问权限
			RBAC::saveAccessList();
			$this->success('登录成功！');
		}
	}

	// 更换密码
	public function password() {
		$this->checkUser();
		$User = D('User');
		$auth_key = intval($_SESSION[C('USER_AUTH_KEY')]);
		if ($_POST) {
			$map = array();
			$map['password'] = pwdHash($_POST['oldpassword']);
			if (isset($_POST['account'])) {
				$map['account'] = $_POST['account'];
			} elseif (isset($auth_key)) {
				$map['id'] = $auth_key;
			}
			//检查用户
			if (!$User->where($map)->field('id')->find()) {
				$this->error('旧密码不符！');
			} else {
				$data = array('password' => pwdHash($_POST['password']));
				$User->where(array('id' => $auth_key))->save($data);
				$this->success('密码修改成功！');
			}
		} else {
			$info = $User->getById($auth_key);
			$this->assign('info', $info);
			$this->display();
		}
	}

	// 修改资料
	public function profile() {
		$this->checkUser();
		$User = D('User');
		$auth_key = intval($_SESSION[C('USER_AUTH_KEY')]);
		if ($_POST) {
			unset($_POST['dosubmit']);
			if (!$User->create()) {
				$this->error($User->getError());
			}
			$result = $User->where(array('id' => $auth_key))->save();
			if (false !== $result) {
				$this->success('资料修改成功！');
			} else {
				$this->error('资料修改失败!');
			}
		} else {
			$info = $User->getById($auth_key);
			$this->assign('info', $info);
			$this->display();
		}
	}

	// ajax检测资源是否可用
	public function checkResource() {
		$uri = $_REQUEST['uri'];
		if ($_REQUEST['rurl']) {
			$uri = $_REQUEST['rurl'];
		} elseif ($_REQUEST['listener']) {
			$uri = $_REQUEST['listener'];
		}
		if (checkResource($uri))
			exit('2');
		else
			exit('1');
	}

	// 验证码
	public function verify() {
		$type = isset($_GET['type']) ? $_GET['type'] : 'gif';
		import("@.ORG.Util.Image");
		Image::buildImageVerify(4, 1, $type);
	}

	// 图片上传
	public function picUpload() {
		$image = _upload();
		if (empty($image)) {
			exit('0');
		}
		$url = $image[0]['file_path'];
		$result = array('error' => 0);
		if ($url) {
			$result['url'] = show_file_path($url);
			exit(json_encode($result));
		}
		exit(json_encode($result));
	}

}

?>