<?php

/**
 * UserModel (后台用户模型)
 *
 * @author		Cunzhang QQ:303918662 <http://www.balns.com>
 * @copyright	Copyright (c) 2012 Diexun(http://www.diexun.com)
 */
class UserModel extends CommonModel {

	// 自动验证
	public $_validate = array(
		array('account', '/^[a-z]\w{3,}$/i', '帐号格式错误'),
		array('password', 'require', '密码必须'),
		array('real_name', 'require', '昵称必须'),
		array('role_id', 'require', '用户角色必须'),
		array('repassword', 'require', '确认密码必须'),
		array('repassword', 'password', '确认密码不一致', self::EXISTS_VALIDATE, 'confirm'),
		array('account', '', '帐号已经存在', self::EXISTS_VALIDATE, 'unique', self::MODEL_INSERT),
	);
	// 自动填充或格式化数据
	public $_auto = array(
		array('id', 'getNextId', self::MODEL_BOTH, 'callback'),
		array('role_id', 'intval', self::MODEL_BOTH, 'function'),
		array('status', 'intval', self::MODEL_BOTH, 'function'),
//		array('login_count', 'intval', self::MODEL_INSERT, 'function'),
//		array('last_login_time', 'intval', self::MODEL_INSERT, 'function'),
		array('password', 'pwdHash', self::MODEL_INSERT, 'callback'),
	);

	protected function pwdHash() {
		if (isset($_POST['password'])) {
			return pwdHash($_POST['password']);
		} else {
			return false;
		}
	}

}
?>