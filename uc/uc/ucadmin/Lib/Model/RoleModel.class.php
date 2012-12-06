<?php

/**
 * RoleModel (角色模型)
 *
 * @author		Cunzhang QQ:303918662 <http://www.balns.com>
 * @copyright	Copyright (c) 2012 Diexun(http://www.diexun.com)
 */
class RoleModel extends CommonModel {

	//自动验证
	protected $_validate = array(
		array("name", "require", "名字必须！"),
		array('name','','名字已经存在',self::EXISTS_VALIDATE,'unique',self::MODEL_INSERT),
	);
	//自动填充设置
	protected $_auto = array(
		array('id', 'getNextId', self::MODEL_BOTH, 'callback'),
		array('status', 'intval', self::MODEL_BOTH, 'function', 0),
	);

}
?>