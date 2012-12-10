<?php

/**
 * BaseInfo (会员基本信息模型)
 */
class BaseInfoModel extends CommonModel {

	// 自动验证
	public $_validate = array(
		array('username', '/^[a-z]\w{3,}$/i', '用户名格式错误'),
		array('password', 'require', '密码必须'),
		array('repassword', 'require', '确认密码必须'),
		array('repassword', 'password', '确认密码不一致', self::EXISTS_VALIDATE, 'confirm'),
		array('username', '', '帐号已经存在', self::EXISTS_VALIDATE, 'unique', self::MODEL_INSERT),
	);
	// 自动填充或格式化数据
	public $_auto = array(
		array('id', 'getNextId', self::MODEL_BOTH, 'callback'),
		array('uid', 'getNextUid', self::MODEL_INSERT, 'callback'),
		array('status', 'intval', self::MODEL_BOTH, 'function'),
		array('appid', 'intval', self::MODEL_BOTH, 'function'),
		array('password', 'pwdHash', self::MODEL_BOTH, 'callback'),
	);

	/**
	 * 获取并格式化自增ID
	 * @param type $id
	 * @return type
	 */
	public function getNextUid($id, $field = 'uid') {
		$id = intval($id);
		if (!$id) {
			$id = intval($this->getMongoNextId($field));
		}
		return $id;
	}

	protected function pwdHash() {
		if (isset($_POST['password'])) {
			return pwdHash($_POST['password']);
		} else {
			return false;
		}
	}

    /**
     * 获取区域列表
     */
    public function getAreaList(){
        $model = new MongoModel('Area');
        return $model->select();
    }

    /**
     * 
     */

}
?>