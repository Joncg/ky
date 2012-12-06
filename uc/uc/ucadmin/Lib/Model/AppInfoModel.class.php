<?php

/**
 * AppInfoModel (应用管理模型)
 *
 * @author		Cunzhang QQ:303918662 <http://www.balns.com>
 * @copyright	Copyright (c) 2012 Diexun(http://www.diexun.com)
 */
class AppInfoModel extends CommonModel {

	//自动验证
	protected $_validate = array(
		array("appid", "require", "应用ID必须！"),
		array("appcode", "require", "应用代码必须！"),
		array("appname", "require", "应用名称必须！"),
		array("appkey", "require", "应用密钥必须！"),
		array("rurl", "require", "登录跳转页必须！"),
		array("listener", "require", "守护进程必须！"),
		array('appid', 'checkAppid', '应用ID已存在', 0, 'callback'),
		array('appcode','','应用代码已存在',self::EXISTS_VALIDATE,'unique',self::MODEL_BOTH),
	);
	//自动填充设置
	protected $_auto = array(
		array('id', 'getNextId', self::MODEL_BOTH, 'callback'),
		array('appid', 'intval', self::MODEL_BOTH, 'function', 0),
		array('status', 'intval', self::MODEL_BOTH, 'function', 0),
	);

	/**
	 * 检测是否有重复
	 * @return boolean
	 */
	public function checkAppid() {
		$appid = intval($_POST['appid']);
		$map['appid'] = $appid;
		$id = intval($_POST['id']);
		if ($id) {
			$map['id'] = array('ne', $id);
		}
		$result = $this->where($map)->field('appid')->find();
		if ($result) {
			return false;
		} else {
			return true;
		}
	}
}
?>