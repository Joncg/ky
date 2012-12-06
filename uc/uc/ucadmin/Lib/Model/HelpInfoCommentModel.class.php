<?php

/**
 * HelpInfoCommentModel (帮助信息评论模型)
 *
 * @author		Cunzhang QQ:303918662 <http://www.balns.com>
 * @copyright	Copyright (c) 2012 Diexun(http://www.diexun.com)
 */
class HelpInfoCommentModel extends CommonModel {

	//自动验证
	protected $_validate = array();
	//自动填充设置
	protected $_auto = array(
		array('id', 'getNextId', self::MODEL_BOTH, 'callback'),
		array('uid', 'intval', self::MODEL_BOTH, 'function', 0),
		array('hid', 'intval', self::MODEL_BOTH, 'function', 0),
		array('ishelp', 'intval', self::MODEL_BOTH, 'function', 0),
		array('system_time', 'formatDate', self::MODEL_BOTH, 'callback', 0),
	);
}
?>