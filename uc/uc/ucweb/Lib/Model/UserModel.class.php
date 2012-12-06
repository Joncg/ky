<?php

// 前台用户模型
class UserModel extends MongoModel {
	//Protected $_idType = self::TYPE_INT;
    //protected $_autoInc =  true;
	//Protected $pk = 'uid';

	//写入马甲
	public function createUser( $u ) {
		$Model = new MongoModel('BaseInfo');
		return $Model->add($u);
	}

	//修改密码
	public function ucChangePassword( $data, $where ) {
		$Model = new MongoModel('BaseInfo');
		return $Model->where($where)->save($data);
	}

	//获取用户基本信息
	public function getBaseInfo($where) {
		$Model = new MongoModel('BaseInfo');
		return $Model->where($where)->find();
	}

	//获取联系人信息 :: 可能有多个联系人，注意::或许得取多份进行匹配(当前暂取一份)
	public function getMoreInfo($where) {
		$Model = new MongoModel('MoreInfo');
		return $Model->where($where)->find();
	}

	//获取用户商业信息
	public function getTradeInfo($where) {
		$Model = new MongoModel('TradeInfo');
		return $Model->where($where)->find();
	}

	//修改联系人信息 :: 如果是多条信息时，条件得多一个 truename值作为条件。否则将会出问题****
	public function updateMoreInfo( $data, $where ) {
		$Model = new MongoModel('MoreInfo');
		return $Model->where($where)->save($data);
	}

	//修改用户商业信息
	public function updateTradeInfo( $data, $where ) {
		$Model = new MongoModel('TradeInfo');
		return $Model->where($where)->save($data);
	}

}




