<?php
/**
 * HelpTypeModel (帮助类型模型)
 *
 * @author		Cunzhang QQ:303918662 <http://www.balns.com>
 * @copyright	Copyright (c) 2012 Diexun(http://www.diexun.com)
 */
class HelpTypeModel extends CommonModel {

	//自动验证
	protected $_validate = array(
		array("name", "require", "分类名必须！"),
		array('name', 'checkName', '分类名已经存在', 0, 'callback'),
	);
	//自动填充设置
	protected $_auto = array(
		array('id', 'getNextId', self::MODEL_BOTH, 'callback'),
		array('parent_id', 'intval', self::MODEL_BOTH, 'function', 0),
		array('appid', 'formatIntval', self::MODEL_BOTH, 'callback'),
		array('system_time', 'formatDate', self::MODEL_BOTH, 'callback', 0),
		array('order_id', 'intval', self::MODEL_BOTH, 'function', 0),
		array('status', 'intval', self::MODEL_BOTH, 'function', 0),
	);

}
?>