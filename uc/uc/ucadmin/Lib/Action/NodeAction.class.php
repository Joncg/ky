<?php

/**
 * Node (后台节点模块)
 *
 * @author		Cunzhang QQ:303918662 <http://www.balns.com>
 * @copyright	Copyright (c) 2012 Diexun(http://www.diexun.com)
 */
class NodeAction extends CommonAction {

	protected function _initialize() {
		parent::_initialize();
		$this->model = D('Node');
	}

	protected function _filter(&$map) {
		$parent_id = intval($_GET['parent_id']);
		if (empty($_POST['search']) && !isset($map['parent_id'])) {
			$map['parent_id'] = 0;
		}
		if ($parent_id != '') {
			$map['parent_id'] = $parent_id;
		}
		$title = isset($_GET['title']) ? $_GET['title'] : '';
		if ($title) {
			$map['title'] = array('like', $title);
		}
	}

	// 添加前回调函数
	protected function _add_before() {
		$this->assign('parent_id', intval($_GET['parent_id']));
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
		$ads = array('name' => '添加节点', 'url' => U(MODULE_NAME . "/add", $this->param));
		$action_link[] = array('text' => $ads['name'], 'href' => "javascript:Box.open({'id':'add','title':'$ads[name]','iframe': '$ads[url]','width':'450','height':'200'});");

		// 返回上一级链接
		$pid = intval($_GET['parent_id']);
		if (!empty($pid)) {
			$parent_id = $this->menus[$pid]['parent_id'];
			$action_link[] = array('text' => '返回上级', 'href' => U(MODULE_NAME . '/index', array('parent_id' => $parent_id, 'mid' => $this->mid)));
		}
		$this->assign('action_link', $action_link);

		$map = '';
		if (method_exists($this, '_filter')) {
			$this->_filter($map);
		}
		$field = 'id,name,title,order_id,status,is_menu';
		$this->_list($this->model, $map, 'order_id', true, $field);
		$this->display();
	}
}
?>