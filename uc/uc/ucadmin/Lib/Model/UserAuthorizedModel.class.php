<?php

/**
 * UserAuthorizedModel (用户硬件授权模型)
 *
 * @author		Cunzhang QQ:303918662 <http://www.balns.com>
 * @copyright	Copyright (c) 2012 Diexun(http://www.diexun.com)
 */
class UserAuthorizedModel extends CommonModel {

	public $_validate = array();
	public $_auto = array(
		array('id', 'getNextId', self::MODEL_BOTH, 'callback'),
		array('uid', 'intval', self::MODEL_BOTH, 'function'),
		array('add_time', 'time', self::MODEL_BOTH, 'function'),
	);
}
?>