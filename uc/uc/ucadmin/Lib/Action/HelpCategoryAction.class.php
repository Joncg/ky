<?php

/**
 * HelpCategory (帮助分类模块)
 *
 * @author		Cunzhang QQ:303918662 <http://www.balns.com>
 * @copyright	Copyright (c) 2012 Diexun(http://www.diexun.com)
 */
class HelpCategoryAction extends CommonAction {

	protected function _initialize() {
		parent::_initialize();
		$this->model = D('HelpCategory');
		// 调出应用缓存
		$this->apps = readCache('AppInfo');
		$this->assign('apps', $this->apps);
	}

	protected function _filter(&$map) {
		$parent_id = intval($_GET['parent_id']);
		if (empty($_POST['search']) && !isset($map['parent_id'])) {
			$map['parent_id'] = 0;
		}
		if ($parent_id != '') {
			$map['parent_id'] = $parent_id;
		}
		$name = isset($_GET['name']) ? $_GET['name'] : '';
		if ($name) {
			$map['name'] = array('like', $name);
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
		$ads = array('name' => '添加', 'url' => U(MODULE_NAME . "/add", $this->param));
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
		$field = '';
		$this->_list($this->model, $map, 'order_id', true, $field);
		$this->display();
	}	
	// 列表数据格式化回调函数
	protected function _list_format($list) {
		if ($list) {
			foreach ($list as $key => $val) {
				// 类型
				if ($val['appid']) {
					$tmp = '';
					foreach ($val['appid'] as $v) {
						$tmp[] = $this->apps[$v]['appname'];
					}
					$list[$key]['appid'] = implode(',', $tmp);
				}
				else {
					$list[$key]['appid'] = '-';
				}
				// 文章数量统计
				$M = D('HelpInfo');
				$condition = array('cid'=>$val['id']);
				$list[$key]['help_count'] = $M->where($condition)->count();
			}
		}
		return $list;
	}
	
	// 添加前回调函数
	protected function _add_before() {
		$this->assign('parent_id', intval($_GET['parent_id']));
	}
}
?>