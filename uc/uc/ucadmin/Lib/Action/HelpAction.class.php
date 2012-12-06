<?php

/**
 * Help (帮助信息模块)
 *
 * @author		Cunzhang QQ:303918662 <http://www.balns.com>
 * @copyright	Copyright (c) 2012 Diexun(http://www.diexun.com)
 */
class HelpAction extends CommonAction {

	protected function _initialize() {
		parent::_initialize();
		$this->model = D('HelpInfo');
		// 调出应用缓存
		$this->apps = readCache('AppInfo');
		$this->assign('apps', $this->apps);
		// 调出帮助分类缓存
		$this->help_types = readCache('HelpType');
		$this->assign('help_types', $this->help_types);
		// 调出帮助分类缓存
		$this->help_categorys = readCache('HelpCategory');
		$this->assign('help_categorys', $this->help_categorys);
		// 调出推送分类缓存
		$this->getRelated();
	}
	
	// 获取推送分类
	protected function getRelated() {
		// 调出帮助分类缓存
		$this->help_relateds = readCache('HelpRelated');
		$relateds = array();
		if ($this->help_relateds) {
			foreach ($this->help_relateds as $key => $val) {
				if ($val['parent_id'] == 1) {
					$relateds[$key] = $val;
				}
			}
		}
		$this->assign('help_relateds', $relateds);
	}

	protected function _filter(&$map) {
		// 状态
		$status = isset($_GET['status']) ? intval($_GET['status']) : '';
		if ($status) {
			$map['status'] = $status;
		}
		// 应用
		$appid = isset($_GET['appid']) ? intval($_GET['appid']) : '';
		if ($appid) {
			$map['appid'] = $appid;
		}
		// 分类
		$cid = isset($_GET['cid']) ? intval($_GET['cid']) : '';
		if ($cid) {
			$map['cid'] = $cid;
		}
		// 类别
		$tid = isset($_GET['tid']) ? intval($_GET['tid']) : '';
		if ($tid) {
			$map['tid'] = $tid;
		}
		// 关键字
		$keyword = isset($_GET['keyword']) ? trim($_GET['keyword']) : '';
		if ($keyword) {
			$map['title|keywords'] = array('like', $keyword);
//			$map['keyword'] = array('all', explode(' ', $keyword));
//			$map['keywords'] = array('all', explode(' ', $keyword));
		}
		// 默认不显示状态为删除的数据
		if (empty($map['status'])) {
			$map['status'] = array('lt', 99);
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

		// 添加节点链接
		$action_link = array();
		$ads = array('name' => '发布新帮助', 'url' => U(MODULE_NAME . "/add", $this->param));
//		$action_link[] = array('text' => $ads['name'], 'href' => "javascript:Box.open({'id':'add','title':'$ads[name]','iframe': '$ads[url]','width':'650','height':'300'});");
		$action_link[] = array('text' => $ads['name'], 'href' => "{$ads['url']}");
		$this->assign('action_link', $action_link);

		$map = '';
		if (method_exists($this, '_filter')) {
			$this->_filter($map);
		}
		$field = '';
		$this->_list($this->model, $map, 'id', FALSE, $field);
		$this->display();
	}
	// 列表数据格式化回调函数
	protected function _list_format($list) {
		if ($list) {
			$HelpComment = D('HelpInfoComment');
			foreach ($list as $key => $val) {
				// 信息类型
				if ($val['type']) {
					if ($val['type'] == 1) {
						$list[$key]['type'] = '<img src="' . APP_PATH . '/Public/Images/icon/m_8.png" width="16" height="16" border="0" title="图文帮助" alt="图文帮助">';
					}
					else {
						$list[$key]['type'] = '<img src="' . APP_PATH . '/Public/Images/icon/vedio.gif" width="20" height="20" border="0" title="视频帮助" alt="视频帮助">';
					}
				}
				// 分类
				if ($val['cid']) {
					$tmp = '';
					foreach ($val['cid'] as $v) {
						$tmp[] = $this->help_categorys[$v]['name'];
					}
					$list[$key]['cid'] = implode(',', $tmp);
				}
				else {
					$list[$key]['cid'] = '-';
				}
				// 类型
				if ($val['tid']) {
					$tmp = '';
					foreach ($val['tid'] as $v) {
						$tmp[] = $this->help_types[$v]['name'];
					}
					$list[$key]['tid'] = implode(',', $tmp);
				}
				else {
					$list[$key]['tid'] = '-';
				}
				// 有用与无用信息统计
				$condition = array('hid'=>$val['id']);
				$condition['ishelp'] = 2;
				$help_yes = $HelpComment->where($condition)->count();
				unset($condition['ishelp']);
				$condition['ishelp'] = 1;
				$help_no = $HelpComment->where($condition)->count();
				$list[$key]['useful'] = $help_yes . '/' . $help_no;
			}
		}
		return $list;
	}

	// 添加之前的回调函数
	protected function _add_before() {
		// 列表标题链接
		$listMenus = array(array('href' => U(MODULE_NAME . '/index', $this->param), 'title' => $this->menus[$this->mid]['title']));
		$this->assign('listMenus', $listMenus);
		// 返回按钮
		$action_link = array();
		$action_link[] = array('text' => '返回列表', 'href' => 'javascript:history.back(-1);');
		$this->assign('action_link', $action_link);
		// 初始化信息
		$info = array();
		$info['release_time'] = date('Y-m-d H:i:s', time());
		if (empty($info['related'])) {
			$info['related'] = 0;
		}
		if (empty($info['order_id'])) {
			$info['order_id'] = 0;
		}
		$this->assign('info', $info);
	}
	// 添加之后的回调函数
	protected function _add_after($id) {
		$this->assign('jumpUrl', U('Help/index', $this->param));
		$this->success('信息添加成功！');
		exit;
	}
	
	// 修改之前的回调函数
	protected function _edit_before($id, $info) {
		// 列表标题链接
		$listMenus = array(array('href' => U(MODULE_NAME . '/index', $this->param), 'title' => $this->menus[$this->mid]['title']));
		$this->assign('listMenus', $listMenus);
		// 返回按钮
		$action_link = array();
		$action_link[] = array('text' => '返回列表', 'href' => 'javascript:history.back(-1);');
		$this->assign('action_link', $action_link);
		// 初始化信息
		$info['release_time'] = date('Y-m-d H:i:s', $info['release_time']);
		if ($info['keywords']) {
			$info['keywords'] = implode(' ', $info['keywords']);
		}
		if (empty($info['related'])) {
			$info['related'] = 0;
		}
		if (empty($info['order_id'])) {
			$info['order_id'] = 0;
		}
		$this->assign('info', $info);
	}
	// 修改之后的回调函数
	protected function _edit_after($id) {
		$this->assign('jumpUrl', U('Help/index', $this->param));
		$this->success('信息修改成功！');
		exit;
	}

	// 数据提交前格式化
	protected function _format_before() {
		// 格式化关键词
		if ($_POST['keywords']) {
			$_POST['keywords'] = explode(' ', $_POST['keywords']);
			// 排除空项
			if ($_POST['keywords']) {
				foreach ($_POST['keywords'] as $key => $val) {
					if (empty($val)) {
						unset($_POST['keywords'][$key]);
					}
				}
			}
		}
		$this->getKeyword();
		// 处理视频地址,如果填写了视频地址则不上传
		if ($_POST['vedio'] || $_POST['uri']) {
			$uri = $_POST['uri'];
			if ($uri) {
				if (!checkResource($uri)) {
					$this->error('对不起,视频地址有误!');
				}
				$_POST['vedio'] = $uri;
			}
			else {
				$file = _upload();
				if ($file) {
					$_POST['vedio'] = $file[0]['file_path'];
					if ($_POST['vedio']) {
						$_POST['vedio'] = show_file_path($_POST['vedio']);
					}
				}
			}
			if (!$_POST['vedio']) {
				$this->error('对不起,视频地址有误!');
			}
		}
	}

	// 获取关键词
	protected function getKeyword() {
		// 搜索相关处理-关键词提取
		$_keyword = $_POST['title'];
		$content = isset($_POST['content']) ? strip_tags(trim($_POST['content'])) : '';
		if ($content) {
			$_keyword = $_keyword . ' ' . preg_replace('/\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|$!:,.;]*[A-Z0-9+&@#\/%=~_|$]/i', '', $content);
		}
		$_keyword = clear_point($_keyword);
		// 过滤空格 制表符 换行符
		$_keyword = str_replace(array("	"," ","　","\n\r"), array('','','',''), $_keyword);
//		if ($_keyword) {
//			import('@.ORG.PhpAnalysis');
//			//初始化类
//			PhpAnalysis::$loadInit = false;
//			$pa = new PhpAnalysis('utf-8', 'utf-8', false);
//			//载入词典
//			$pa->LoadDict();
//			//执行分词
//			$pa->SetSource($_keyword);
//			$pa->differMax = true;
//			$pa->unitWord = true;
//			$pa->StartAnalysis(true);
//			$_keyword = $pa->GetFinallyResult(' ', false);
//		}
		if ($_POST['keywords']) {
			$_keyword .= ($_keyword?' ':'').implode(' ', $_POST['keywords']);
		}
		if ($_POST['appid']) {
			$_keyword .= ($_keyword?' ':'').$this->apps[intval($_POST['appid'])]['appname'];
		}
		if ($_POST['cid']) {
			foreach ($_POST['cid'] as $key => $val) {
				$_keyword .= ' ' . $this->help_categorys[intval($val)]['name'];
			}
		}
		if ($_POST['tid']) {
			foreach ($_POST['tid'] as $key => $val) {
				$_keyword .= ' ' . $this->help_types[intval($val)]['name'];
			}
		}
		$_POST['_keywords'] = $_keyword;
	}

}

?>