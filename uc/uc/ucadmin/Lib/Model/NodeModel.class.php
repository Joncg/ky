<?php
/**
 * NodeModel (节点模型)
 *
 * @author		Cunzhang QQ:303918662 <http://www.balns.com>
 * @copyright	Copyright (c) 2012 Diexun(http://www.diexun.com)
 */
class NodeModel extends CommonModel {

	//自动验证
	protected $_validate = array(
		array("name", "require", "节点名必须！"),
		array('title', 'require', "显示名必须！"),
		array('name', 'checkName', '节点已经存在', 0, 'callback'),
	);
	//自动填充设置
	protected $_auto = array(
		array('id', 'getNextId', self::MODEL_BOTH, 'callback'),
		array('status', 'intval', self::MODEL_BOTH, 'function', 0),
		array('parent_id', 'intval', self::MODEL_BOTH, 'function', 0),
		array('order_id', 'intval', self::MODEL_BOTH, 'function', 0),
		array('is_menu', 'intval', self::MODEL_BOTH, 'function', 0),
	);

}
?>