<?php
// 用户接口

class InterfaceAction extends Action {
	public $param = array();
	public $ret	  = array( 'status'=>1, 'desc'=>'参数不符合要求。', );
	public $appid = null;
	public $user  = null;

	//监听方法::还原指令，并转发请求的接口
    public function listener()
	{
//		$appcode = 'sxxl'; //默认为服装网
//		if( $_SERVER['HTTP_REFERER'] ) {
//			preg_match('/\/\/.*\.(.+)\..*?\//ism',$_SERVER['HTTP_REFERER'],$tmp );
//			if( $tmp[1] ) $appcode = $tmp[1];
//		}
		$appid = (int) $_REQUEST['appid'];
		$Model = new MongoModel('AppInfo');
		$app = $Model->where(array('appid'=>$appid))->find();
		$this->appid = $appid;

		$this->param = unserialize( authcode(urldecode($_POST['post']), 'DECODE', $app['appkey']));
		
		$h = fopen( 'r.txt', 'w');
		fwrite($h, serialize( $this->param ) );
		fclose($h);

		$method = $this->param['method'];
		$this->$method();
    }

	//修改密码
	public function changePassword()
	{
		if( isset($this->param['password']) && isset($this->param['username']) ) {
			$data['password'] = $this->param['password'];
			$where['username']= $this->param['username'];

			$user = D("User");
			$sync = D("Sync");
			// 获取用户基本信息
			$this->user = $user->getBaseInfo($where);

			if( $user->ucChangePassword( $data, $where ) ) { //修改密码操作--操作成功
				if( $sync->syncToApps( (int)$this->user['uid'], $this->appid, $data ) )
					$this->ret = array( 'status'=>2, 'desc'=>'密码修改成功', );
				else 
					$this->ret = array( 'status'=>3, 'desc'=>'密码修改成功,但应用同步标识修改失败', );
			} else {
				$this->ret = array( 'status'=>1, 'desc'=>'密码修改失败', );
			}
		}
		echo json_encode($this->ret);
	}

	public function test()
	{
		$s = D("Sync");
		$s->syncToApps( (int)2,2 );

		/*
		db.uc_app_user.update( {"uid":12}, {"uid":12, "app1_id":1, "app1_uid":72385, "app1_sync":2, "app2_id":2, "app2_uid":7225, "app2_sync":2, "app3_id":3, "app3_uid":7255, "app3_sync":2,"syncinfo":'' } );

		db.uc_app_user.insert( {"uid":6, "app1_id":1, "app1_uid":72385, "app1_sync":2, "app2_id":2, "app2_uid":7225, "app2_sync":2, "app3_id":3, "app3_uid":7255, "app3_sync":2 } );

		db.uc_app_user.find( {"uid":12} );

		*/
	}

	//同步用户信息
	public function updateUserInfo()
	{
		if( isset($this->param['username']) ) {
			$tradeParams = array( 'company'=>1, 'trade'=>1, 'scale'=>1 ,
								  'fund'=>1, 'state'=>1, 'province'=>1 ,
								  'city'=>1, 'area'=>1, 'address'=>1 ,
								  'postcode'=>1, 'tel'=>1, 'fax'=>1 , 
								  'intro'=>1, ); //商业信息数组
			$moreParams = array( 'truename'=>1, 'gender'=>1, 'birthday'=>1 ,
								 'mobile'=>1, 'postion'=>1, 'email'=>1 ,
								 'qq'=>1, 'msn'=>1, 'ismaster'=>1 ,
								 'note'=>1,  ); //联系人信息数组
			
			$where['username']= $this->param['username'];
			$user = D("User");
			$sync = D("Sync");
			// 获取用户基本信息
			$this->user = $user->getBaseInfo($where);
			// 查询条件::后续操作大都以uid为关联
			$select = array( 'uid'=> (int) $this->user['uid'] );

			// 剥离、分类--参数
			$syncInfo = array(); //需要同步的信息数组
			$moreInfo = $tradeInfo = array();
			$moreFlush = $tradeFlush = false; //是否真的需要更新
			foreach($this->param as $k => $v) {
				if( isset($tradeParams[$k]) ) {
					$tradeInfo[$k] = $v;
				} else if ( isset($moreParams[$k]) ) {
					$moreInfo[$k] = $v;
				}
			}

			// 匹配、识别--需要更新的数据 (商业信息与联系人信息)
			if( $tradeInfo ) {
				$ti = $user->getTradeInfo($select);
				foreach($tradeInfo as $k => $v) {
					if( $v != $ti[$k] ) {
						$ti[$k] = $v;
						$syncInfo[$k] = $v;
						$tradeFlush = true;
					}
				}
				if( isset($ti['_id']) ) unset($ti['_id']);
			}
			if( $moreInfo ) {
				$mi = $user->getMoreInfo($select);
				foreach($moreInfo as $k => $v) {
					if( $v != $mi[$k] ) {
						$mi[$k] = $v;
						$syncInfo[$k] = $v;
						$moreFlush = true;
					}
				}
				if( isset($mi['_id']) ) unset($mi['_id']);
			}

			// 更新需要更新的数据 (未来加上异常处理，日志记录。当前尚无)
			$tradeStatus = $moreStatus = false;
			if( $tradeFlush )
				$tradeStatus = $user->updateTradeInfo( $ti ,$select );
			if( $moreFlush )
				$moreStatus = $user->updateMoreInfo( $mi ,$select );

			// 更新用户“信息同步任务”
			if( $syncInfo )
				$syncStatus = $sync->syncToApps( (int)$this->user['uid'], $this->appid, $syncInfo );
			
			
		}
		echo json_encode($this->ret);
	}
}