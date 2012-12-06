<?php

/**
 * HelpRecycleBin (帮助信息回收站模块)
 *
 * @author		Cunzhang QQ:303918662 <http://www.balns.com>
 * @copyright	Copyright (c) 2012 Diexun(http://www.diexun.com)
 */
class HelpRecycleBinAction extends HelpAction {
	
	protected function _initialize() {
		parent::_initialize();
	}
	
	protected function _filter(&$map) {
		$map['status'] = 99;
		parent::_filter(&$map);
	}
	
	public function index() {
		if (!$this->mid) {
			$this->error('参数错误');
		}
		// 列表标题链接
		$listMenus = array(array('href' => U(MODULE_NAME . '/index', $this->param), 'title' => $this->menus[$this->mid]['title']));
		$this->assign('listMenus', $listMenus);
		
		$map = '';
		if (method_exists($this, '_filter')) {
			$this->_filter($map);
		}
		$field = '';
		$this->_list($this->model, $map, '_id', FALSE, $field);
		$this->display();
	}
}