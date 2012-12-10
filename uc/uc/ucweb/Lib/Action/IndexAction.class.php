<?php
// 本类由系统自动生成，仅供测试用途
class IndexAction extends Action {
    public function index(){
        $this->show('<style type="text/css">*{ padding: 0; margin: 0; } div{ padding: 4px 48px;} body{ background: #fff; font-family: "微软雅黑"; color: #333;} h1{ font-size: 100px; font-weight: normal; margin-bottom: 12px; } p{ line-height: 1.8em; font-size: 36px }</style><div style="padding: 24px 48px;"> <h1>:)</h1><p>欢迎使用 <b>ThinkPHP</b>！</p></div><script type="text/javascript" src="http://tajs.qq.com/stats?sId=9347272" charset="UTF-8"></script>','utf-8');
    }

	public function addUser()
	{
		$d['username'] = 'user'. mt_rand(5,100);
		$d['password'] = md5('123456');
		$d['appid']	   = 1;
		$d['status']   = 2;
		$user = D("User");
		$user->createUser( $d );
		dump($user);
	}

	public function changePassword()
	{
		$data['password'] = md5('000000');
		$where['username']= 'user32';

		$user = D("User");
		$r = $user->ucChangePassword( $data, $where );
		dump($r);
	}

	//测试----同步登录。 如果是注册并登录的话就得加上:  reg/2 
	public function syncLogin() {
		$r['username'] = 'test991';
		$r['password'] = 'e10adc3949ba59abbe56e057f20f883e';

		//获取所有应用信息
		$app = D('App');
		$infos = $app->getAppInfos();
		$urls = array();
		foreach($infos as $k => $v ) {
			$s =  base64_encode(authcode( serialize($r), 'ENCODE', $v['appkey'] ));
			$urls[] = $v['rurl'].'/s/'.$s.'';
		}

		//并行 iframe调用同步登录
		$iframe_html = '';
		foreach($urls as $k=>$uri) {
			$iframe_html .= '<iframe src="'.$uri.'" style="display:none;" ></iframe>';
		}

		echo '下面输出并行iframe，调用应用同步登录接口，实现同步登录。<br /><br />';
		echo $iframe_html;
	}

}