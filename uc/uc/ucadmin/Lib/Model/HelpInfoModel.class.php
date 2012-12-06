<?php

/**
 * HelpInfoModel (帮助信息模型)
 *
 * @author		Cunzhang QQ:303918662 <http://www.balns.com>
 * @copyright	Copyright (c) 2012 Diexun(http://www.diexun.com)
 */
class HelpInfoModel extends CommonModel {

	//自动验证
	protected $_validate = array(
		array("type", "require", "信息类型必须！"),
		array("appid", "require", "应用必须！"),
		array("title", "require", "标题必须！"),
		array('title','','已发布过相同标题的数据',self::EXISTS_VALIDATE,'unique',self::MODEL_BOTH),
	);
	//自动填充设置
	protected $_auto = array(
		array('id', 'getNextId', self::MODEL_BOTH, 'callback'),
		array('cid', 'formatIntval', self::MODEL_BOTH, 'callback'),
		array('tid', 'formatIntval', self::MODEL_BOTH, 'callback'),
		array('ispush', 'formatIntval', self::MODEL_BOTH, 'callback'),
		array('system_time', 'formatDate', self::MODEL_BOTH, 'callback', 0),
		array('type', 'intval', self::MODEL_BOTH, 'function', 0),
		array('appid', 'intval', self::MODEL_BOTH, 'function', 0),
		array('related', 'intval', self::MODEL_BOTH, 'function', 0),
		array('order_id', 'intval', self::MODEL_BOTH, 'function', 0),
		array('status', 'intval', self::MODEL_BOTH, 'function', 0),
	);
}
?>