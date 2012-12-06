<?php
class Search{
	//public $h_hosts = '192.168.1.14'; //主服务器
    public $h_hosts = '192.168.2.201';   //搜索服务器
	public $h_ports = 9312;
	public $h_limits = 5000000;
	public $h_cl;
	public $h_opts = array(
			"before_match"          => "<i>",
			"after_match"           => "</i>",
			"chunk_separator"       => "..",
			"limit"                 => 10,
			"around"                => 3
	);
	public $s_index;	//索引文件
	public $s_keywords; //搜索的关键词
	public $s_pagesize = 5;
	public $s_page = 1;


	public function __construct() {
		import ('@.ORG.SphinxClient');
		$this->h_cl = new SphinxClient();
		$this->h_cl->SetServer($this->h_hosts, $this->h_ports);
		$this->setMatchMode('SPH_MATCH_ALL');
		$this->h_cl->SetArrayResult(true);
		$this->h_cl->SetRankingMode(SPH_RANK_PROXIMITY_BM25);
	}

	public function query($str,$index = '*') {
		$this->s_keywords = $str;
        //$this->h_cl->SetFilter('menu_id',array(19,22));
		$page = $this->s_page;
		$page = empty($page) ? 1 : intval($page);
		$pageSize = $this->s_pagesize;
		$pageStart = ($page-1) * $pageSize;
        /*
        $time_start = strtotime('2004-01-01');
        $time_end = strtotime(date('Y-m-d 23:59:59'));
        $this->setFilterRange('publish_time', $time_start, $time_end);
         */
		$this->h_limits = $pageStart + $pageSize; //尽可能减小允许搜索最大值(很棒的思路)
		$this->h_cl->SetLimits($pageStart, $pageSize, $this->h_limits);
		$this->setIndex($index);
		$res = $this->h_cl->Query($this->s_keywords, $this->s_index);
		//dump($this->h_cl); dump($res['matches']);exit;
		return $res;
	}

	public function getPicInfo($id,$field='') {
		$MODEL = M('SearchPicture');
		if( ! $field )
			$field = 'picture_id,small_picture_url,big_picture_url';
		$row = $MODEL->field($field)->find($id);
        //echo $MODEL->getLastSql()."<br/>";
		return $row;
	}

	public function getPicInfoByIds($ids=array(),$field='') {
		$MODEL = M('SearchPicture');
		if( ! $field )
			$field = 'id,picture_id,small_picture_url,big_picture_url';
		$row = $MODEL->where( 'id in('.implode(',',$ids).')' )->field($field)->order(array('publish_time'=>'desc','picture_id'=>'desc'))->select();
        //echo $MODEL->getLastSql()."<br/>";
		return $row;
	}

    public function setFilter( $attribute, $values, $exclude=false ){
        $this->h_cl->SetFilter($attribute,$values,$exclude);
    }

    public function setFilterRange($attribute, $min, $max, $exclude=false ){
        $this->h_cl->SetFilterRange($attribute, $min, $max, $exclude);
    }

	public function setPageSize($p) {
		$p = intval($p);
		$this->s_pagesize = $p;
	}

	public function setPage($p) {
		$p = empty($p) ? 1 : intval($p);
		$this->s_page = $p;
	}

	public function setIndex($index) {
		$this->s_index = empty($index) ? '*' : $index;
	}

	public function setSortMode($key = '', $val = '') {
		$key = empty($key) ? SPH_SORT_TIME_SEGMENTS : $key;
		$val = trim($val) ? trim($val) : 'publish_time';
		$this->h_cl->SetSortMode($key, $val);
	}

	public function setMatchMode($key = '') {
		$key = empty($key) ? SPH_MATCH_ALL : $key;
		$this->h_cl->SetMatchMode($key);
	}
}