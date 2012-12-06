<?php
class MemberModel extends CommonModel {
	protected $insertFields = array('uid','crm_staff','name','password','linkman_email','final_login_time','register_time',
									'company_name','company_phone','linkman_name','linkman_tel','linkman_position','qq',
									'province','city','county','address','postcode','product_type','notes','register_ip','appellation_id','is_personal');
	protected $updateFields = array('crm_staff','password','linkman_email','final_login_time','register_time',
									'company_name','company_phone','linkman_name','linkman_tel','linkman_position','qq',
									'province','city','county','address','postcode','product_type','notes','register_ip','appellation_id','is_personal');
    // 自动验证设置
//	protected $_validate	=	array(
//		array('name','/^[a-z]\w{3,}$/i','帐号格式错误'),
//		array('password','require','密码必须'),
//		array('repassword','require','确认密码必须'),
//		array('repassword','password','确认密码不一致',self::EXISTS_VALIDATE,'confirm'),
//		array('name','','帐号已经存在',self::EXISTS_VALIDATE,'unique',self::MODEL_INSERT),
//	);
    // 自动填充设置
    protected $_auto = array(
        array('register_time', 'time', self::MODEL_INSERT, 'function'),
    );

	/**
	 * 用户注册模型
	 * @param array $data 数据
	 * @return boolean
	 */
	public function register($data) {
		if (empty($data)) {
			return FALSE;
		}
		$result = $this->add($data);
		return $result;
	}

	/**
	 * 检测用户是否存在
	 * @param string $username 用户名
	 * @return boolean
	 */
	public function isExistUser($username) {
		$username = trim($username);
		if (empty($username)) {
			return FALSE;
		}
		$where['where'] = array('name'=>$username);
		$result = $this->find($where);
		if ($result) {
			return TRUE;
		}
		else {
			return FALSE;
		}
	}
}
?>