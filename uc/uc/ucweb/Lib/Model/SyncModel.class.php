<?php

// 信息同步处理模型
class SyncModel extends MongoModel {

	// appid: 发起同步的应用ID ; uid: 会员ID; syncInfo:需要同步的数组信息
	// u[syncinfo]指需要同步的信息，若为空则说明此用户无信息需要同步
	// 若有数据，说明信息尚未同步完成。需要将修改信息追加进去。若有相同的key，则以追加的为准。
	public function syncToApps( $uid, $appid, $syncInfo ) {
		$Model = new MongoModel('AppUser');
		$u = $Model->where( array('uid'=>$uid) )->find();
		
		if( $u['syncinfo'] && strlen($u['syncinfo'])>6 ) {  //追加同步信息
			$u['syncinfo'] = json_encode(array_merge(json_decode($u['syncinfo'],true),$syncInfo));
		} else { //新同步操作
			foreach( $u as $k => $v ) {
				if( substr($k,0,3)=='app' ) {
					$ch_appid = substr($k,3,1);//当前遍历到的应用ID
					if( $appid == (int)$v && substr($k,-3)=='_id' ) { //发起应用无须同步
						$start_appid = $ch_appid;
					}
					if( substr($k,-5)=='_sync' && $ch_appid != $start_appid ) {
						$u[$k] = 1; //其他应用须同步信息
					}
				}
				//echo "key:",$k,"  -- value:",$v,"<br />";
			}
			$u['syncinfo'] = json_encode($syncInfo);
		}
		unset($u['_id']); //如果从库里取完整的数据集，得去掉 _id 才能成功更新。
		return $Model->where( array('uid'=>$uid) )->save($u);
	}

}




