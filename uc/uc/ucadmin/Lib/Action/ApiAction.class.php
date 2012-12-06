<?php

/**
 * 普通用户操作接口
 * @author Luffy Zhang <balncom@gmail.com>
 * @copyright (c) 2012, Diexun Inc
 */
class UserAction extends CommonAction {

	private $Member;
	private $_status = array(
		1 => 101, //参数不齐全
		2 => 200, //成功
		3 => 301, //服务不可用
	);

	public function _initialize() {
		header("Content-Type:text/html; charset=utf-8");
		parent::_initialize();
		$this->Member = D('Member');
	}

	public function index() {
		$where = array('login_count' => 7);
		$where = array('uid' => 1056);
		//$where['field'] = array('_id'=>0,'uid'=>1);
		//dump($this->Member->getAutoIncrementId(MODULE_NAME));exit;
		//dump($this->Member->select()->order(array('uid'=>false)))->limit(5);
		dump($this->Member->field("uid,name,login_count")->where($where)->order("status desc")->select());
		echo $this->Member->getLastSql();
		//echo $this->Member->getLastSql();
		//dump($this->Member);
	}

	/**
	 * 用户登陆
	 */
	public function login() {
		$username = $this->_request['username'];
		$password = $this->_request['password'];
		$condition['where'] = array('username' => $username);
		$condition['field'] = array('username' => 1, 'password' => 1);
		$data = $this->Member->find($condition);
		if (!$data) {
			$error = array("status" => $this->_status[1], "msg" => '用户名不存在');
			$this->response($error);
		}
		if ($data['password'] != md5($password)) {
			$error = array("status" => $this->_status[1], "msg" => '密码错误');
			$this->response($error);
		}
		$error = array("status" => $this->_status[2], "msg" => '登陆成功');
		$this->response($error);
	}

	/**
	 * 获取用户信息
	 */
	public function get_user() {
		$username = $this->_request['username'];
		if (empty($username)) {
			$error = array("status" => $this->_status[1], "msg" => '获取的信息不存在');
			$this->response($error);
		}
		$condition['where'] = array('username' => $username);
		$data = $this->Member->find($condition);
		if ($data) {
			$error = array("status" => $this->_status[2], "msg" => '', "data" => $data);
			$this->response($error);
		} else {
			$error = array("status" => $this->_status[1], "msg" => '获取的信息不存在');
			$this->response($error);
		}
	}

	/**
	 * 用户注册接口
	 */
	public function register() {
		$name = $this->_request['name'];
		$password = $this->_request['password'];
		$repassword = $this->_request['repassword'];
		if (empty($name) || empty($password)) {
			$error = array("status" => $this->_status[1], "msg" => '用户名密码不能为空');
			$this->response($error);
		}
		if ($this->Member->isExistUser($name)) {
			$error = array("status" => $this->_status[1], "msg" => '用户名已存在');
			$this->response($error);
		}
		if ($password != $repassword) {
			$error = array("status" => $this->_status[1], "msg" => '两次输入的密码不一致');
			$this->response($error);
		}
		$cname = $this->_request['cname'];
		if (empty($cname)) {
			$error = array("status" => $this->_status[1], "msg" => '公司名不能为空');
			$this->response($error);
		}
		$province = $this->_request['province'];
		$city = $this->_request['city'];
		$city = $city == '市' ? '' : $city;
		$area = $this->_request['area'];
		$area = $area == '县/区' ? '' : $area;
//		if (empty($province) || (empty($city) || $city == '市') || (empty($area) || $area == '县/区')) {
//			$error = array("status" => 206, "msg" => '请选择您所在的省市区!');
//			$this->response($error, 206);
//		}
		$lname = $this->_request['lname'];
		if (empty($lname)) {
			$error = array("status" => $this->_status[1], "msg" => '真实姓名不能为空');
			$this->response($error);
		}
		$tel = $this->_request['tel'];
		if (empty($tel)) {
			$error = array("status" => $this->_status[1], "msg" => '请填写11位手机号码');
			$this->response($error);
		}
		$uid = $this->Member->getAutoIncrementId(MODULE_NAME);
		$data = array();
		$data['uid'] = $uid;
		$data['name'] = $name;
		$data['password'] = md5($password);
		$data['company_name'] = $cname;
		if ($this->_request['phone']) {
			$data['company_phone'] = $this->_request['phone'];
		}
		$data['register_time'] = $_SERVER['REQUEST_TIME'];
		$data['linkman_name'] = $lname;
		$data['linkman_tel'] = $tel;
		$data['province'] = $province;
		$data['city'] = $city;
		$data['county'] = $area;
		$data['appellation'] = $this->_request['appellation'];
		//dump($data);exit;
		$result = $this->Member->register($data);
		if ($result) {
			$error = array("status" => $this->_status[2], "msg" => "注册成功", 'result' => $result);
			$this->response($error);
		} else {
			$error = array("status" => $this->_status[1], "msg" => "注册失败");
			$this->response($error);
		}
	}

	public function user_modify() {
		
	}

	/**
	 * 添加用户日志
	 */
	public function add_user_log() {
		
	}

	// 接收同步登陆 --客户端
	function synlogin($get, $post) {
		global $_G;

		if (!API_SYNLOGIN) {
			return API_RETURN_FORBIDDEN;
		}

		header('P3P: CP="CURa ADMa DEVa PSAo PSDo OUR BUS UNI PUR INT DEM STA PRE COM NAV OTC NOI DSP COR"');

		$cookietime = 31536000;
		$uid = intval($get['uid']);
		if (($member = getuserbyuid($uid, 1))) {
			dsetcookie('auth', authcode("$member[password]\t$member[uid]", 'ENCODE'), $cookietime);
		}
	}

	// 请求同步登陆 --服务端
	function onsynlogin() {
		$this->init_input();
		$uid = $this->input('uid');
		if ($this->app['synlogin']) {
			if ($this->user = $_ENV['user']->get_user_by_uid($uid)) {
				$synstr = '';
				foreach ($this->cache['apps'] as $appid => $app) {
					if ($app['synlogin']) {
						$synstr .= '<script type="text/javascript" src="' . $app['url'] . '/api/' . $app['apifilename'] . '?time=' . $this->time . '&code=' . urlencode($this->authcode('action=synlogin&username=' . $this->user['username'] . '&uid=' . $this->user['uid'] . '&password=' . $this->user['password'] . "&time=" . $this->time, 'ENCODE', $app['authkey'])) . '" reload="1"></script>';
						if (is_array($app['extra']['extraurl']))
							foreach ($app['extra']['extraurl'] as $extraurl) {
								$synstr .= '<script type="text/javascript" src="' . $extraurl . '/api/' . $app['apifilename'] . '?time=' . $this->time . '&code=' . urlencode($this->authcode('action=synlogin&username=' . $this->user['username'] . '&uid=' . $this->user['uid'] . '&password=' . $this->user['password'] . "&time=" . $this->time, 'ENCODE', $app['authkey'])) . '" reload="1"></script>';
							}
					}
				}
				return $synstr;
			}
		}
		return '';
	}

	function cevin_http_open($url, $conf = array()) {
		if (!function_exists('curl_init') or !is_array($conf))
			return FALSE;

		$post = '';
		$purl = parse_url($url);

		$arr = array(
			'post' => FALSE,
			'return' => TRUE,
			'cookie' => 'C:/cookie.txt',);
		$arr = array_merge($arr, $conf);
		$ch = curl_init();

		if ($purl['scheme'] == 'https') {
			curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 2);
			curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 1);
			curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
		}

		curl_setopt($ch, CURLOPT_URL, $url);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, $arr['return']);
		curl_setopt($ch, CURLOPT_COOKIEJAR, $arr['cookie']);
		curl_setopt($ch, CURLOPT_COOKIEFILE, $arr['cookie']);

		if ($arr['post'] != FALSE) {
			curl_setopt($ch, CURL_POST, TRUE);
			if (is_array($arr['post'])) {
				$post = http_build_query($arr['post']);
			} else {
				$post = $arr['post'];
			}
			curl_setopt($ch, CURLOPT_POSTFIELDS, $post);
		}

		$result = curl_exec($ch);
		curl_close($ch);

		return $result;
	}

}