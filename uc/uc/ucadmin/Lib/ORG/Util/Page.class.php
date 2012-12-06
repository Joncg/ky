<?php

// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK IT ]
// +----------------------------------------------------------------------
// | Copyright (c) 2009 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: liu21st <liu21st@gmail.com>
// +----------------------------------------------------------------------
// $Id$

class Page extends Think {

	// 起始行数
	public $firstRow;
	// 列表每页显示行数
	public $listRows;
	// 页数跳转时要带的参数
	public $parameter;
	// 分页总页面数
	protected $totalPages;
	// 总行数
	protected $totalRows;
	// 当前页数
	protected $nowPage;
	// 分页的栏的总页数
	protected $coolPages;
	// 分页栏每页显示的页数
	protected $rollPage;
	// 分页显示定制
	protected $config = array('header' => '条记录', 'prev' => '上一页', 'next' => '下一页', 'first' => 'First', 'last' => 'Last', 'theme' => ' %totalRow% %header% %nowPage%/%totalPage% 页 %upPage% %downPage% %first%  %prePage%  %linkPage%  %nextPage% %end%');

	/**
	  +----------------------------------------------------------
	 * 架构函数
	  +----------------------------------------------------------
	 * @access public
	  +----------------------------------------------------------
	 * @param array $totalRows  总的记录数
	 * @param array $listRows  每页显示记录数
	 * @param array $parameter  分页跳转的参数
	  +----------------------------------------------------------
	 */
	public function __construct($totalRows, $listRows, $parameter='') {
		$this->totalRows = intval($totalRows);
		$this->parameter = $parameter;
		$this->rollPage = intval(C('PAGE_ROLLPAGE'));
		$this->listRows = intval(!empty($listRows) ? $listRows : C('PAGE_LISTROWS'));
		$this->totalPages = ceil($this->totalRows / $this->listRows);	 //总页数

		$this->coolPages = ceil($this->totalPages / $this->rollPage);
		$this->nowPage = !empty($_GET[C('VAR_PAGE')]) ? $_GET[C('VAR_PAGE')] : 1;
		if (!empty($this->totalPages) && $this->nowPage > $this->totalPages) {
			$this->nowPage = $this->totalPages;
		}
		$this->firstRow = $this->listRows * ($this->nowPage - 1);
	}

	public function setConfig($name, $value) {
		if (isset($this->config[$name])) {
			$this->config[$name] = $value;
		}
	}

	/**
	  +----------------------------------------------------------
	 * 分页显示输出
	  +----------------------------------------------------------
	 * @access public
	  +----------------------------------------------------------
	 */
	public function show() {
		if (0 == $this->totalRows)
			return '';
		$p = C('VAR_PAGE');
		$nowCoolPage = ceil($this->nowPage / $this->rollPage);
		$url = $_SERVER['REQUEST_URI'] . (strpos($_SERVER['REQUEST_URI'], '?') ? '' : "?") . $this->parameter;
		$parse = parse_url($url);
		if (isset($parse['query'])) {
			parse_str($parse['query'], $params);
			unset($params[$p]);
			$url = $parse['path'] . '?' . http_build_query($params);
		}
		//上下翻页字符串
		$upRow = $this->nowPage - 1;
		$downRow = $this->nowPage + 1;
		if ($upRow > 0) {
			$upPage = "<a href='" . $url . "&" . $p . "=$upRow'>" . $this->config['prev'] . "</a>";
		} else {
			$upPage = "";
		}

		if ($downRow <= $this->totalPages) {
			$downPage = "<a href='" . $url . "&" . $p . "=$downRow'>" . $this->config['next'] . "</a>";
		} else {
			$downPage = "";
		}
		// << < > >>
		if ($nowCoolPage == 1) {
			$theFirst = "";
			$prePage = "";
		} else {
			$preRow = $this->nowPage - $this->rollPage;
			$prePage = "<a href='" . $url . "&" . $p . "=$preRow' >上" . $this->rollPage . "页</a>";
			$theFirst = "<a href='" . $url . "&" . $p . "=1' >" . $this->config['first'] . "</a>";
		}
		if ($nowCoolPage == $this->coolPages) {
			$nextPage = "";
			$theEnd = "";
		} else {
			$nextRow = $this->nowPage + $this->rollPage;
			$theEndRow = $this->totalPages;
			$nextPage = "<a href='" . $url . "&" . $p . "=$nextRow' >下" . $this->rollPage . "页</a>";
			$theEnd = "<a href='" . $url . "&" . $p . "=$theEndRow' >" . $this->config['last'] . "</a>";
		}
		// 1 2 3 4 5
		$linkPage = "";
		for ($i = 1; $i <= $this->rollPage; $i++) {
			$page = ($nowCoolPage - 1) * $this->rollPage + $i;
			if ($page != $this->nowPage) {
				if ($page <= $this->totalPages) {
					$linkPage .= "&nbsp;<a href='" . $url . "&" . $p . "=$page'>&nbsp;" . $page . "&nbsp;</a>";
				} else {
					break;
				}
			} else {
				if ($this->totalPages != 1) {
					$linkPage .= "&nbsp;<span class='current'>" . $page . "</span>";
				}
			}
		}
		$pageStr = str_replace(
				array('%header%', '%nowPage%', '%totalRow%', '%totalPage%', '%upPage%', '%downPage%', '%first%', '%prePage%', '%linkPage%', '%nextPage%', '%end%'), array($this->config['header'], $this->nowPage, $this->totalRows, $this->totalPages, $upPage, $downPage, $theFirst, $prePage, $linkPage, $nextPage, $theEnd), $this->config['theme']);
		return $pageStr;
	}

	/**
	  +----------------------------------------------------------
	 * 分页显示输出(880条记录19/88页1上一页1617181920212223下一页88)
	  +----------------------------------------------------------
	 * @access public
	  +----------------------------------------------------------
	 */
	function showOne() {
        $this->config = array('header' => '条记录', 'prev' => '«上一页', 'next' => '下一页»', 'first' => 'First', 'last' => 'Last', 'theme' => ' %totalRow% %header% %nowPage%/%totalPage% 页 %upPage% %downPage% %first%  %prePage%  %linkPage%  %nextPage% %end%');
		if (0 == $this->totalRows)
			return '';
		$p = C('VAR_PAGE');
		$url = $_SERVER['REQUEST_URI'] . (strpos($_SERVER['REQUEST_URI'], '?') ? '' : "?");// . $this->parameter;
		$parse = parse_url($url);
		if (isset($parse['query'])) {
			parse_str($parse['query'], $params);
			unset($params[$p]);
			$url = $parse['path'] . '?' . http_build_query($params);
		}
		$front = 3;
		$after = 5;
		//第一页
		$firsePage = ($this->nowPage > $front + 1) ? '<a title="' . $this->config['first'] . '" class="Next_total" href="' . $url . '&' . $p . '=1">1</a>' : '';
		//最后一页
		$lastPage = ($this->totalPages - $this->nowPage >= $after) ? '<a title="' . $this->config['last'] . '" class="Next_total" href="' . $url . '&' . $p . '=' . $this->totalPages . '">' . $this->totalPages . '</a>' : '';
		//上一页
		$prePage = ($this->nowPage <= 1) ? '' : '<a title="' . $this->config['prev'] . '" class="Previous_total" href="' . $url . '&' . $p . '=' . ($this->nowPage - 1) . '">' . $this->config['prev'] . '</a>';
		//下一页
		$nextPage = ($this->nowPage >= $this->totalPages) ? '' : '<a title="' . $this->config['next'] . '" class="Next_total" href="' . $url . '&' . $p . '=' . ($this->nowPage + 1) . '">' . $this->config['next'] . '</a>';
		//输入页码
		$inputPage = ($this->totalPages > $after) ? '<b class="wait_click" style="display:none;">跳至</b><input type="text" class="wait_click Number_search" style="display:none;" id="topage" name="custompage" size="3" onkeydown="if(event.keyCode==13) {window.location=\'' . $url . '\'+\'&' . $p . '=\'+this.value; return false;}" />
												 <input type="button" value="确定" class="wait_click Go_search" style="display:none;" onclick="window.location=\'' . $url . '\'+\'&' . $p . '=\'+document.getElementById(\'topage\').value;" />
												' : '';

		$listNums = '';
		for ($i = ($this->nowPage - $front); $i < ($this->nowPage + $after); $i++) {
			if ($i < 1 || $i > $this->totalPages)
				continue;
			$listNums .= ($i == $this->nowPage) ? '<span class="currentTag">' . $i . '</span>' : '<a title="第' . $i . '页" href="' . $url . '&' . $p . '=' . $i . '" >' . $i . '</a>';
		}

		$pageHtml = '<p class="pages">';
		$pageHtml .= $firsePage . $prePage . $listNums . $nextPage .  $lastPage . $inputPage;
        $pageHtml .= ($this->totalPages > $after) ? '<a href="javascript:void(0);" onclick="javascript:$(this).hide();$(\'.wait_click\').show();" title="查看指定页面请单击">共' . $this->totalPages . '页/' . $this->totalRows . '条数据</a></p>' : '<a href="javascript:void(0);" title="">共' . $this->totalPages . '页/' . $this->totalRows . '条数据</a></p>';
		return $this->totalPages ? $pageHtml : '';
    }

	/**
	  +----------------------------------------------------------
	 * 分页显示输出(上一页1 2 3 4下一页)
	  +----------------------------------------------------------
	 * @access public
	  +----------------------------------------------------------
	 */
	function showTwo() {
		if (0 == $this->totalRows)
			return '';
		$p = C('VAR_PAGE');
		$url = $_SERVER['REQUEST_URI'] . (strpos($_SERVER['REQUEST_URI'], '?') ? '' : "?") . $this->parameter;
		$parse = parse_url($url);
		if (isset($parse['query'])) {
			parse_str($parse['query'], $params);
			unset($params[$p]);
			$url = $parse['path'] . '?' . http_build_query($params);
		}
		$front = 3;
		$after = 5;
		//上一页
		$prePage = ($this->nowPage <= 1) ? '' : '<a title="' . $this->config['prev'] . '" class="Previous_total" href="' . $url . '&' . $p . '=' . ($this->nowPage - 1) . '">' . $this->config['prev'] . '</a>';
		//下一页
		$nextPage = ($this->nowPage >= $this->totalPages) ? '' : '<a title="' . $this->config['next'] . '" class="Next_total" href="' . $url . '&' . $p . '=' . ($this->nowPage + 1) . '">' . $this->config['next'] . '</a>';

		$listNums = '';
		for ($i = ($this->nowPage - $front); $i < ($this->nowPage + $after); $i++) {
			if ($i < 1 || $i > $this->totalPages)
				continue;
			$listNums .= ($i == $this->nowPage) ? '<a href="javascript:void(0);" class="currentTag">' . $i . '</a>' : '<a title="第' . $i . '页" href="' . $url . '&' . $p . '=' . $i . '" >' . $i . '</a>';
		}

		$pageHtml = '';
		$pageHtml .= '<p class="pages">';
		$pageHtml .= $prePage . $listNums . $nextPage . '</p>';
		return $this->totalPages ? $pageHtml : '';
	}

	/**
	  +----------------------------------------------------------
	 * 分页显示输出(880条记录19/88页1上一页1617181920212223下一页88)
	  +----------------------------------------------------------
	 * @access public
	  +----------------------------------------------------------
	 */
	function showThree() {
		if (0 == $this->totalRows)
			return '';
		$p = C('VAR_PAGE');
		$url = $_SERVER['REQUEST_URI'] . (strpos($_SERVER['REQUEST_URI'], '?') ? '' : "?") . $this->parameter;
		$parse = parse_url($url);
		if (isset($parse['query'])) {
			parse_str($parse['query'], $params);
			unset($params[$p]);
			$url = $parse['path'] . '?' . http_build_query($params);
		}
		$front = 2;
		$after = 3;
		//第一页
		$firsePage = ($this->nowPage > $front + 1) ? '<a title="' . $this->config['first'] . '" class="Next_total" href="' . $url . '&' . $p . '=1">1</a>' : '';
		//最后一页
		$lastPage = ($this->totalPages - $this->nowPage >= $after) ? '<a title="' . $this->config['last'] . '" class="Next_total" href="' . $url . '&' . $p . '=' . $this->totalPages . '">' . $this->totalPages . '</a>' : '';
		//上一页
		$prePage = ($this->nowPage <= 1) ? '' : '<a title="' . $this->config['prev'] . '" class="Previous_total" href="' . $url . '&' . $p . '=' . ($this->nowPage - 1) . '">' . $this->config['prev'] . '</a>';
		//下一页
		$nextPage = ($this->nowPage >= $this->totalPages) ? '' : '<a title="' . $this->config['next'] . '" class="Next_total" href="' . $url . '&' . $p . '=' . ($this->nowPage + 1) . '">' . $this->config['next'] . '</a>';
		//输入页码
		$inputPage = ($this->totalPages > 10) ? '<input type="text" class="Number_search" id="topage" name="custompage" size="3" onkeydown="if(event.keyCode==13) {window.location=\'' . $url . '\'+\'&' . $p . '=\'+this.value; return false;}" />
												 <input type="button" value="确定" class="Go_search" onclick="window.location=\'' . $url . '\'+\'&' . $p . '=\'+document.getElementById(\'topage\').value;" />
												' : '';

		$listNums = '';
		for ($i = ($this->nowPage - $front); $i < ($this->nowPage + $after); $i++) {
			if ($i < 1 || $i > $this->totalPages)
				continue;
			$listNums .= ($i == $this->nowPage) ? '<span class="currentTag">' . $i . '</span>' : '<a title="第' . $i . '页" href="' . $url . '&' . $p . '=' . $i . '" >' . $i . '</a>';
		}

		$pageHtml = '';
		$pageHtml .= '<p class="pages">' . '<span class="Total_number">共' . $this->totalRows ."条/".$this->totalPages. '页</span>';
		$pageHtml .= $firsePage . $prePage . $listNums . $nextPage . $inputPage . '</p>';
		return $this->totalPages ? $pageHtml : '';
    }

    function showFour(){
		if (0 == $this->totalRows)
			return '';
		$p = C('VAR_PAGE');
		$url = $_SERVER['REQUEST_URI'] . (strpos($_SERVER['REQUEST_URI'], '?') ? '' : "?");// . $this->parameter;
		$parse = parse_url($url);
		if (isset($parse['query'])) {
			parse_str($parse['query'], $params);
			unset($params[$p]);
			$url = $parse['path'] . '?' . http_build_query($params);
		}
		//上一页
		$prePage = ($this->nowPage <= 1) ? '' : '&nbsp;<a title="' . $this->config['prev'] . '" class="prev_botton" href="' . $url . '&' . $p . '=' . ($this->nowPage - 1) . '">' . $this->config['prev'] . '</a>';
		//下一页
		$nextPage = ($this->nowPage >= $this->totalPages) ? '' : '&nbsp;<a title="' . $this->config['next'] . '" class="next_botton" href="' . $url . '&' . $p . '=' . ($this->nowPage + 1) . '">' . $this->config['next'] . '</a>';

		$pageHtml = '';
		$pageHtml .= '<a>共' . $this->totalRows ."条</a> <a>" . $this->nowPage . '/' . $this->totalPages. '页</a>' . $prePage  . $nextPage;
		return $this->totalPages ? $pageHtml : '';
    }
    

	/**
	  +----------------------------------------------------------
	 * 分页显示输出(880条记录19/88页1上一页1617181920212223下一页88)
	  +----------------------------------------------------------
	 * @access public
	  +----------------------------------------------------------
	 */
	function showUpDown() {
        $this->config = array('header' => '条记录', 'prev' => '«上一页', 'next' => '下一页»', 'first' => 'First', 'last' => 'Last', 'theme' => ' %totalRow% %header% %nowPage%/%totalPage% 页 %upPage% %downPage% %first%  %prePage%  %linkPage%  %nextPage% %end%');
		if (0 == $this->totalRows)
			return '';
		$p = C('VAR_PAGE');
		$url = $_SERVER['REQUEST_URI'] . (strpos($_SERVER['REQUEST_URI'], '?') ? '' : "?");// . $this->parameter;
		$parse = parse_url($url);
		if (isset($parse['query'])) {
			parse_str($parse['query'], $params);
			unset($params[$p]);
			$url = $parse['path'] . '?' . http_build_query($params);
		}
		$front = 3;
		$after = 5;
		//上一页
		$prePage = ($this->nowPage <= 1) ? '<span style="color:#999" title="' . $this->config['prev'] . '" class="Previous_total">' . $this->config['prev'] . '</span>' : '<a title="' . $this->config['prev'] . '" class="Previous_total" href="' . $url . '&' . $p . '=' . ($this->nowPage - 1) . '">' . $this->config['prev'] . '</a>';
		//下一页
		$nextPage = ($this->nowPage >= $this->totalPages) ? '<span style="color:#999" title="' . $this->config['next'] . '" class="Next_total">' . $this->config['next'] . '</span>' : '<a title="' . $this->config['next'] . '" class="Next_total" href="' . $url . '&' . $p . '=' . ($this->nowPage + 1) . '">' . $this->config['next'] . '</a>';
		
		$listNums = '';
		for ($i = ($this->nowPage - $front); $i < ($this->nowPage + $after); $i++) {
			if ($i < 1 || $i > $this->totalPages)
				continue;
			$listNums .= ($i == $this->nowPage) ? '<span class="currentTag">' . $i . '</span>' : '<a title="第' . $i . '页" href="' . $url . '&' . $p . '=' . $i . '" >' . $i . '</a>';
		}

		$pageHtml = '<p class="pages">';
		$pageHtml .=   $prePage .  $nextPage   ;
		return $this->totalPages ? $pageHtml : '';
    }

}
?>