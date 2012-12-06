<?php
/**
 * Index (后台首页)
 *
 * @author		Cunzhang QQ:303918662 <http://www.balns.com>
 * @copyright	Copyright (c) 2012 Diexun(http://www.diexun.com)
 */
class IndexAction extends CommonAction {

	protected function _initialize() {
		parent::_initialize();
		R('Public/checkUser');
		C('SHOW_RUN_TIME', false); // 运行时间显示
		C('SHOW_PAGE_TRACE', false); // 调试信息
		//$this->assign('APP_PATH', APP_PATH);
	}
	// 框架首页
	public function index() {
		//读取数据库模块列表生成菜单项
		$node = D("Node");
		$where['status'] = 2;
		$where['is_menu'] = 2;
		$list = $node->where($where)->field('id,name,title,parent_id')->order('order_id asc')->select();
		// 验证类型
		if (C('USER_AUTH_TYPE') == 2) {
			import('@.ORG.Util.RBAC');
			$user_key = $_SESSION[C('USER_AUTH_KEY')];
			$accessList = RBAC::getAccessList($user_key);
		} else {
			$accessList = $_SESSION['_ACCESS_LIST'];
		}
		//dump($accessList);exit;
		$menu = array();
		foreach ($list as $key => $val) {
			if ($val['parent_id'] == 0) {
				$menu[$key] = $val;
				foreach ($list as $k => $v) {
					if ($val['id'] == $v['parent_id']) {
						if (isset($accessList[strtoupper($v['name'])]) || $_SESSION[C('ADMIN_AUTH_KEY')]) {
							//设置模块访问权限
							$menu[$key]['child'][] = $v;
						}
					}
				}
			}
		}
		$this->assign('menu', $menu);
		$this->assign('loginUser', $_SESSION['loginUser']);
		$this->assign('loginUserName', $_SESSION['loginUserName']);
		$this->display();
	}

	// 清除并重新生成缓存
	public function cache() {
		delDir(RUNTIME_PATH);
		foreach($this->cache_model as $r){			
			saveCache($r);
		}
		$forward = $_GET['forward'] ? $_GET['forward'] : U('Index/main');
		$this->assign ( 'jumpUrl', $forward );
		$this->success('更新缓存成功!');
	}
	
}
?>