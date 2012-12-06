<?php
/**
 * Common (基础Action)
 *
 * @author		Cunzhang QQ:303918662 <http://www.balns.com>
 * @copyright	Copyright (c) 2012 Diexun(http://www.diexun.com)
 */
class CommonAction extends Action {
	protected $param,$cache_model,$menus,$admins,$roles,$apps,$help_types,$help_categorys,$help_relateds;
	protected function _initialize() {
		// 输出项目路径
		$this->assign('APP_PATH', APP_PATH);
		//检测是否登录
		R('Public/checkUser');

		// 需要缓存的模型数据
		// 后台用户,节点(菜单),角色,帮助分类,应用
		$this->cache_model = array('User','Node','Role','HelpType','HelpCotegroy','AppInfo','HelpRelated');

		// 调出菜单缓存
		$this->menus = readCache('Node');

		// 用户权限检查
		import('@.ORG.Util.Cookie');
		if (C('USER_AUTH_ON') && !in_array(MODULE_NAME, explode(',', C('NOT_AUTH_MODULE')))) {
			import('@.ORG.Util.RBAC');
			if (!RBAC::AccessDecision()) {
				//检查认证识别号
				if (!$_SESSION[C('USER_AUTH_KEY')]) {
					//跳转到认证网关
					redirect(U(C('USER_AUTH_GATEWAY')));
				}
				// 没有权限 抛出错误
				if (C('RBAC_ERROR_PAGE')) {
					// 定义权限错误页面
					redirect(U(C('RBAC_ERROR_PAGE')));
				} else {
					if (C('GUEST_AUTH_ON')) {
						$this->assign('jumpUrl', U(C('USER_AUTH_GATEWAY')));
					}
					// 提示错误信息
					$this->error(L('_VALID_ACCESS_'));
				}
			}
		}
		if ($_GET) {
			foreach ($_GET as $key => $val) {
				$this->assign($key, $val);
			}
		}
		$this->assign('module_name', MODULE_NAME);
		$this->assign('action_name', ACTION_NAME);
		// 设置菜单ID,此值为必须
		$this->mid = intval($_REQUEST['mid']);
		unset($_POST['dosubmit']);
		// 公用参数
		$this->param = array('mid' => $this->mid);
		$pid = intval($_GET['parent_id']);
		if ($pid) {
			$this->param['parent_id'] = $pid;
		}
		$this->assign('param', $this->param);
	}

	/**
	 * 添加操作日志
	 * @param type $data
	 */
	protected function addOperationLog($opinfo = array()) {
		if (is_array($opinfo) && !empty($opinfo)) {
			$opinfo = json_encode($opinfo);
		}
		$module = D('UserOperationLog');
		$data = array(
			'id' => $module->getNextId(), // 自增ID
			'uid' => $_SESSION[C('USER_AUTH_KEY')], // 用户ID
			'optime' => time(), // 操作时间
			'module' => MODULE_NAME, // 操作模块
			'action' => ACTION_NAME, // 操作方法
			'opinfo' => $opinfo, // 操作信息,如ID信息等
		);
		$module->create($data);
		$module->add();
	}

	public function index() {
		//列表过滤器，生成查询Map对象
		$map = '';
		if (method_exists($this, '_filter')) {
			$this->_filter($map);
		}
		$name = $this->getActionName();
		$model = D($name);
		if (!empty($model)) {
			$this->_list($model, $map);
		}
		$this->display();
		return;
	}

	/**
	 * 公用列表函数
	 * @param object $model 数据模型
	 * @param array $map 查询条件
	 * @param string $sortBy 排序字段
	 * @param bool $asc 排序方式 TRUE:正序,FALSE:倒许
	 * @param string $field 要获取的字段,默认为空取全部
	 * @return type
	 */
	protected function _list($model, $map, $sortBy = '', $asc = false, $field = '') {
		//排序字段 默认为主键名
		if (isset($_REQUEST ['_order'])) {
			$order = $_REQUEST ['_order'];
		} else {
			$order = !empty($sortBy) ? $sortBy : $model->getPk();
		}
		//排序方式默认按照倒序排列
		//接受 sost参数 0 表示倒序 非0都 表示正序
		if (isset($_REQUEST ['_sort'])) {
			$sort = $_REQUEST ['_sort'] ? 'asc' : 'desc';
		} else {
			$sort = $asc ? 1 : -1;
		}
		//取得满足条件的记录数
		$count = $model->where($map)->count();
		//echo $model->getLastSql();
		if ($count > 0) {
			import("@.ORG.Util.Page");
			//创建分页对象
			if (!empty($_REQUEST ['listRows'])) {
				$listRows = $_REQUEST ['listRows'];
			} else {
				$listRows = 10;
			}
			$p = new Page($count, $listRows);
			//分页查询数据
			$voList = $model->field($field)->where($map)->order(array($order=>$sort))->limit($p->firstRow . ',' . $p->listRows)->select();
			//echo $model->getlastsql();
			// 格式化列表数据
			$voList = $this->_list_format($voList);
			//分页跳转的时候保证查询条件
			foreach ($map as $key => $val) {
				if (!is_array($val)) {
					$p->parameter .= "&$key=" . urlencode($val) . "&";
				}
			}
			//dump($voList);
			//分页显示
			$page = $p->showFour();
			//模板赋值显示
			$this->assign('list', $voList);
			$this->assign("page", $page);
		}
		Cookie::set('_currentUrl_', __SELF__);
		return;
	}
	
	// 格式化列表数据
	protected function _list_format($list) {
		return $list;
	}

	// 提交数据前的格式化数据回调函数
	protected function _format_before() {}

	// 添加
	public function add() {
		if ($_POST) {
			unset($_POST['dosubmit']);
			// 提交数据前的格式化数据回调函数
			$this->_format_before();
			$_POST['id'] = intval($_POST['id']);
			if (!$this->model->create()) {
				$this->error($this->model->getError());
			} else {
				$info = $this->model->create();
				// 写入数据
				$id = $this->model->add();
				if ($id) {
					// 添加操作日志
					$this->addOperationLog($info);
					// 重新生成缓存
					if (in_array(MODULE_NAME, $this->cache_model)) saveCache(MODULE_NAME);
					// 添加后的回调函数
					$this->_add_after($id);
					// 成功提示
					$this->assign('waitSecond', 0);
					$this->assign('jumpUrl', 'javascript:self.parent.main.location.reload()');
					$this->success('用户添加成功！');
				} else {
					// 错误提示
					$this->error('用户添加失败！'.$this->model->getError());
				}
			}
		} else {
			// 添加前的回调函数
			$this->_add_before();
			//输出模板
			$this->display('info');
		}
	}
	// 添加前的回调函数
	protected function _add_before() {}
	// 添加后的回调函数
	protected function _add_after($id) {}

	// 修改
	public function edit() {
		if ($_POST['id']) {
			unset($_POST['dosubmit']);
			// 提交数据前的格式化数据回调函数
			$this->_format_before();
			$_POST['id'] = intval($_POST['id']);
			$id = $_POST['id'];
			if (!$this->model->create()) {
				$this->error($this->model->getError());
			} else {
				//$info = $this->model->create();
				// 更新数据
				$condition = array('id'=>$id);
				$result = $this->model->where($condition)->save();
				if (false !== $result) {
					// 添加操作日志
					//$this->addOperationLog($info);
					// 重新生成缓存
					if (in_array(MODULE_NAME, $this->cache_model)) saveCache(MODULE_NAME);
					// 修改后的回调函数
					$this->_edit_after($id);
					// 成功提示
					$this->assign('waitSecond', 0);
					$this->assign('jumpUrl', 'javascript:self.parent.main.closeBox();');
					$this->success('编辑成功!');
				} else {
					// 错误提示
					$this->error('编辑失败!'.$this->model->getError());
				}
			}
		} else {
			$id = intval($_REQUEST['id']);
			if (!$id) {
				$this->error('非法操作!');
			}
			$condition = array('id'=>$id);
			$info = $this->model->where($condition)->find();
			$this->assign('info', $info);
			// 修改前的回调函数
			$this->_edit_before($id, $info);
			$this->display('info');
		}
	}
	// 修改前的回调函数
	protected function _edit_before($id, $info = array()) {}
	// 修改后的回调函数
	protected function _edit_after($id) {}

	// 批量操作
	public function batch() {
		$actType = trim($_REQUEST['acttype']);
		if ($actType == 'remove') {
			R(MODULE_NAME . '/delete', $_REQUEST); // $this->delete();
		} else {
			R(MODULE_NAME . '/status', $_REQUEST); // $this->status();
		}
	}

	/**
	 * 设置状态
	 */
	public function status() {
		$actType = trim($_REQUEST['acttype']);
		$id = intval($_REQUEST['id']);
		$ids = $_REQUEST['ids'];
		if (empty($ids)) {
			$ids = explode(',', $id);
		}
		else if (is_string($ids)) {
			$ids = explode(',', $ids);
		}
		// 设置类型
		if ($actType == 'status_yes') {
			$status = 2; // 正常
		}
		else if ($actType == 'status_no') {
			$status = 1; // 禁用
		}
		else if ($actType == 'status_remove') {
			$status = 99; // 禁用
		}
		if (is_array($ids) && !empty($ids)) {
			foreach ($ids as $id) {
				$id = intval($id);
				if ($id) {
					$condition = array('id' => $id);
					$result = $this->model->where($condition)->setField('status', $status);
					if (!$result) {
						break;
					}
				}
			}
			if ($result !== false) {
				// 添加操作日志
				$info = array('status'=>$status,'ids'=>$ids);
				$this->addOperationLog($info);
				// 重新生成缓存
				if (in_array(MODULE_NAME, $this->cache_model)) saveCache(MODULE_NAME);
				$this->success('操作成功!');
			}
			else {
				$this->error('操作失败!'.$this->model->getError());
			}
		}
		else {
			$this->error('非法操作!');
		}
	}

	// 删除操作
	public function delete() {
		$id = intval($_REQUEST['id']);
		$ids = $_REQUEST['ids'];
		if (empty($ids)) {
			$ids = explode(',', $id);
		}
		else if (is_string($ids)) {
			$ids = explode(',', $ids);
		}
		if (is_array($ids) && !empty($ids)) {
			foreach ($ids as $id) {
				$id = intval($id);
				if ($id) {
					// 删除前的回调函数
					$this->_delete_check($id);
					$condition = array('id' => $id);
					$result = $this->model->where($condition)->delete();
					if (!$result) {
						break;
					}
				}
			}
			if ($result !== false) {
				// 添加操作日志
				$this->addOperationLog($ids);
				// 删除后的回调函数
				$this->_delete_after($ids);
				// 重新生成缓存
				if (in_array(MODULE_NAME, $this->cache_model)) saveCache(MODULE_NAME);
				$this->success('删除成功!');
			}
			else {
				$this->error('删除失败!'.$this->model->getError());
			}
		}
		else {
			$this->error('非法操作!');
		}
	}
	// 删除前的回调函数
	protected function _delete_check($id) {}
	// 删除后的回调函数
	protected function _delete_after($ids) {}

}
?>