<?php

/**
 * UserLoginLogModel (用户登陆日志模型)
 *
 * @author		Cunzhang QQ:303918662 <http://www.balns.com>
 * @copyright	Copyright (c) 2012 Diexun(http://www.diexun.com)
 */
class UserLoginLogModel extends CommonModel {

	public $_validate = array();
	public $_auto = array(
		array('id', 'getNextId', self::MODEL_BOTH, 'callback'),
		array('uid', 'intval', self::MODEL_BOTH, 'function'),
		array('login_time', 'time', self::MODEL_BOTH, 'function'),
		array('browser', 'get_client_browser', self::MODEL_BOTH, 'function'),
		array('system', 'get_client_os', self::MODEL_BOTH, 'function'),
	);
}
?>