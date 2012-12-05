<?php

/**
 * 获取图片资源地址
 * @param type $str 图片相对路径
 * @return string
 */
function show_file_path($str) {
	$str = trim($str);
	$domain = 'http://u.cc/';
	if ($_SERVER['HTTP_HOST']) {
		$domain = 'http://' . $_SERVER['HTTP_HOST'];
	}
	$uri = '';
	if ($str) {
		$uri = $domain . '/' . $str;
	}
	return $uri;
}

/**
 * 创建目录树
 * @param string $folder 目录
 * @param int $mode 创建模式
 * @return bool
 */
function makeDir($folder, $mode = 0777) {
	if (is_dir($folder) || @mkdir($folder, $mode))
		return true;
	if (!makeDir(dirname($folder), $mode))
		return false;
	return @mkdir($folder, $mode);
}

/**
 * 删除目录
 * @param type $folder
 * @return boolean
 */
function delDir($folder) {
	$folder = dirPath($folder);
	if (!is_dir($folder))
		return FALSE;
	$list = glob($folder . '*');
	foreach ((array) $list as $v) {
		is_dir($v) ? delDir($v) : @unlink($v);
	}
	return @rmdir($folder);
}

function dirPath($path) {
	$path = str_replace('\\', '/', $path);
	if (substr($path, -1) != '/')
		$path = $path . '/';
	return $path;
}

/**
 * 获取上传文件的路径
 * @return string
 */
function getFilePath() {
	$path = 'upload/' . date('Y') . '/' . date('md') . '/' . date('dH') . '/';
	return $path;
}

/**
 * 获取上传文件名
 * @return string
 */
function getFileName() {
	list($usec) = explode(' ', microtime());
	$usec = substr($usec, 2, 5);
	$file_name = md5(time()) . $usec;
	return $file_name;
}

/**
 * 文件上传
 * @return type
 */
function _upload() {
	//$allowExts = array('jpg', 'jpeg', 'zip', 'gif');
	$savePath = getFilePath();
	$savePathTmp = C('IMG_ROOT') . $savePath;
	//dump(makeDir($savePathTmp));exit;
	import("@.ORG.Net.UploadFile");
	$upload = new UploadFile();
	$upload->allowExts = $allowExts;
	$upload->savePath = str_replace('//', '/', $savePathTmp);
	$upload->saveRule = getFileName;
	if ($upload->upload()) {
		$info = $upload->getUploadFileInfo();
		return $info;
	}
}

// 检测资源是否可用
function checkResource($r, $mode = 'rb') {
	return fopen($r, $mode);
}

/*
 * 获取面包屑
 */

function getCrumbs() {
	$title[] = C('WEB_NAME') ? C('WEB_NAME') : '会员中心后台';
	$crumbs[] = "<a href=\"javascript:_M(0,\'/admin.php?m=Public&a=main\');\">首页</a>";
	$mid = intval($_GET['mid']);
	if ($mid) {
		// 获取全部菜单
		$list = readCache('Node');
		// 父级
		if ($list[$mid]['parent_id']) {
			$url = U($list[$list[$mid]['parent_id']]['name'] . '/index', array('mid' => $list[$mid]['parent_id']));
			$crumbs[] = "<a href=\"javascript:_M({$list[$list[$mid]['parent_id']]['id']},\'\');\">{$list[$list[$mid]['parent_id']]['title']}</a>";
			$title[] = $list[$list[$mid]['parent_id']]['title'];
		}
		// 当前
		if ($list[$mid]) {
			$url = U($list[$mid]['name'] . '/index', array('mid' => $mid));
			$crumbs[] = "<a href=\"javascript:_MP({$mid},\'{$url}\');\">{$list[$mid]['title']}</a>";
			$title[] = $list[$mid]['title'];
		}
	}
	$title = implode(' » ', $title);
	$crumbs = implode('&nbsp;»&nbsp;', $crumbs);
	$html = '<script type="text/javascript">';
	$html .= "parent.document.title = '{$title}';";
	$html .= "if(parent.$('#current_pos')){parent.$('#current_pos').html('$crumbs');}";
	if (!in_array(ACTION_NAME, array('add', 'edit', 'info', 'power'))) {
		$html .= "$(function(){closeBox();});";
	}
	$html .= "</script>";
	return $html;
}

/**
 * 读取缓存文件,不存在则生成
 * @param type $name
 * @return type
 */
function readCache($name) {
	$data = F($name);
	if (empty($data)) {
		$data = saveCache($name);
	}
	return $data;
}

/**
 * 缓存文件
 * @param type $name
 * @return boolean
 */
function saveCache($name) {
	if (empty($name))
		return false;
	$data = array();
	$model = D($name);
	if ($model) {
		$where = '';
		$field = '';
		$pkid = 'id';
		//$pkid = $model->getPk();
		if ($name == 'Node') {
			$field = 'id,name,title,status,is_menu,parent_id';
		}
		$list = $model->where($where)->field($field)->order('id')->select();
		foreach ($list as $val) {
			$data [$val[$pkid]] = $val;
		}
		F($name, $data);
	}
	return $data;
}

/**
 * 格式化时间戳
 * @param type $time
 * @param type $format
 * @return string
 */
function toDate($time, $format = 'Y-m-d H:i:s') {
	if (empty($time)) {
		return '';
	}
	$format = str_replace('#', ':', $format);
	return date($format, $time);
}

/**
 * 获取状态图标
 * @param type $status
 * @param type $imageShow
 * @return type
 */
function getStatus($status, $imageShow = true) {
	switch ($status) {
		case 1 :
			$showText = '<strong style="color:red;">禁用</strong>';
			$showImg = '<img src="' . APP_PATH . '/Public/Images/locked.gif" width="20" height="20" border="0" alt="禁用" title="禁用">';
			break;
		case 2 :
			$showText = '<strong style="color:green;">正常</strong>';
			$showImg = '<img src="' . APP_PATH . '/Public/Images/ok.gif" width="20" height="20" border="0" alt="正常" title="正常">';
			break;
		case 99 :
			$showText = '<strong>删除</strong>';
			$showImg = '<img src="' . APP_PATH . '/Public/Images/trash.png" width="20" height="20" border="0" alt="删除" title="删除">';
			break;
		case 3 :
		default :
			$showText = '<strong style="color:yellow;">待审</strong>';
			$showImg = '<img src="' . APP_PATH . '/Public/Images/prected.gif" width="20" height="20" border="0" alt="待审" title="待审">';
			break;
	}
	return ($imageShow === true) ? $showImg : $showText;
}

/**
 * 密码加密方式
 * @param string $password
 * @param string $type
 * @return type
 */
function pwdHash($password, $type = 'md5') {
	return hash($type, $password);
}

/**
 * 获取客户端浏览器类型
 * @param  string $glue 浏览器类型和版本号之间的连接符
 * @return string|array 传递连接符则连接浏览器类型和版本号返回字符串否则直接返回数组 false为未知浏览器类型
 */
function get_client_browser($glue = ',') {
	$browser = array();
	$agent = $_SERVER['HTTP_USER_AGENT']; //获取客户端信息

	/* 定义浏览器特性正则表达式 */
	$regex = array(
		'ie' => '/(MSIE) (\d+\.\d)/',
		'chrome' => '/(Chrome)\/(\d+\.\d+)/',
		'firefox' => '/(Firefox)\/(\d+\.\d+)/',
		'opera' => '/(Opera)\/(\d+\.\d+)/',
		'safari' => '/Version\/(\d+\.\d+\.\d) (Safari)/',
	);
	foreach ($regex as $type => $reg) {
		preg_match($reg, $agent, $data);
		if (!empty($data) && is_array($data)) {
			$browser = $type === 'safari' ? array($data[2], $data[1]) : array($data[1], $data[2]);
			break;
		}
	}
	return empty($browser) ? false : (is_null($glue) ? $browser : implode($glue, $browser));
}

/**
 * 获取客户端操作系统类型
 * @param type $AGENT
 * @return string
 */
function get_client_os($AGENT = '') {
	if (empty($AGENT)) {
		$AGENT = $_SERVER["HTTP_USER_AGENT"];
	}
	if (strpos($AGENT, "Windows NT 5.0"))
		$os = "Windows 2000";
	elseif (strpos($AGENT, "Windows NT 5.1"))
		$os = "Windows XP";
	elseif (strpos($AGENT, "Windows NT 5.2"))
		$os = "Windows 2003";
	elseif (strpos($AGENT, "Windows NT 6.0"))
		$os = "Windows Vista";
	elseif (strpos($AGENT, "Windows NT 6.1"))
		$os = "Windows 7";
	elseif (strpos($AGENT, "Windows NT 6.2"))
		$os = "Windows 8";
	elseif (strpos($AGENT, "Windows NT"))
		$os = "Windows NT";
	elseif (strpos($AGENT, "Windows CE"))
		$os = "Windows CE";
	elseif (strpos($AGENT, "ME"))
		$os = "Windows ME";
	elseif (strpos($AGENT, "Windows 9"))
		$os = "Windows 98";
	elseif (strpos($AGENT, "unix"))
		$os = "Unix";
	elseif (strpos($AGENT, "linux"))
		$os = "Linux";
	elseif (strpos($AGENT, "SunOS"))
		$os = "SunOS";
	elseif (strpos($AGENT, "OpenBSD"))
		$os = "OpenBSD";
	elseif (strpos($AGENT, "FreeBSD"))
		$os = "FreeBSD";
	elseif (strpos($AGENT, "AIX"))
		$os = "AIX";
	elseif (strpos($AGENT, "Mac"))
		$os = "Mac";
	else
		$os = "Other";
	return $os;
}

function IP($ip = '', $file = 'UTFWry.dat') {
	$_ip = array();
	if (isset($_ip [$ip])) {
		return $_ip [$ip];
	} else {
		import("ORG.Net.IpLocation");
		$iplocation = new IpLocation($file);
		$location = $iplocation->getlocation($ip);
		$_ip [$ip] = $location ['country'] . $location ['area'];
	}
	return $_ip [$ip];
}

function clear_point($jiugui) {
	return str_replace(
		array("~", "!", "@", "#", "$", "%", "^", "&", "*", ",", ".", "?", ";", ":", "'", '"', " [", "]", "{", "}", "！", " ￥", "……", "…", "、", "，", "。", "？", "；", "：", "‘", "“", "”", "’", " 【", "】", "～", "！", "＠", "＃", "＄", "％", "＾", "＆", "＊", "，", "．", " ＜", "＞", "；", "：", "＇", "＂", "［", "］", "｛", "｝", "／", "＼", "nbsp", "（", "）", "(", ")"), 
		array('', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''), 
		$jiugui
	);
}