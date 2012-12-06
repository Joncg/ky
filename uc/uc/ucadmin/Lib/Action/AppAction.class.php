<?php

/**
 * App (应用管理模块)
 *
 * @author		Cunzhang QQ:303918662 <http://www.balns.com>
 * @copyright	Copyright (c) 2012 Diexun(http://www.diexun.com)
 */
class AppAction extends CommonAction {

	protected function _initialize() {
		parent::_initialize();
		$this->model = D('AppInfo');
	}

	protected function _filter(&$map) {
		$keyword = isset($_GET['keyword']) ? trim($_GET['keyword']) : '';
		if ($keyword) {
			$map['appcode|appname'] = array('like', $keyword);
		}
	}

	// 列表
	public function index() {
		if (!$this->mid) {
			$this->error('参数错误');
		}
		// 列表标题链接
		$listMenus = array(array('href' => U(MODULE_NAME . '/index', $this->param), 'title' => $this->menus[$this->mid]['title']));
		$this->assign('listMenus', $listMenus);

		$action_link = array();
		// 添加节点链接
		$ads = array('name' => '添加应用', 'url' => U(MODULE_NAME . "/add", $this->param));
		$action_link[] = array('text' => $ads['name'], 'href' => "javascript:Box.open({'id':'add','title':'$ads[name]','iframe': '$ads[url]','width':'650','height':'300'});");
		$this->assign('action_link', $action_link);

		$map = '';
		if (method_exists($this, '_filter')) {
			$this->_filter($map);
		}
		$field = 'id,appid,appcode,appname,appkey,rurl,listener,status';
		$this->_list($this->model, $map, 'id', TRUE, $field);
		$this->display();
	}
}
?>