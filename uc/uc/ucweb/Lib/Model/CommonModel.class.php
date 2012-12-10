<?php
/**
 * CommonModel (基础模型)
 *
 * @author		Cunzhang QQ:303918662 <http://www.balns.com>
 * @copyright	Copyright (c) 2012 Diexun(http://www.diexun.com)
 */
class CommonModel extends MongoModel {

	//自动填充设置
	protected $_auto = array(
		array('id', 'getNextId', 1, 'callback'),
	);

	/**
	 * 获取并格式化自增ID
	 * @param type $id
	 * @return type
	 */
	public function getNextId($id, $field = 'id') {
		$id = intval($id);
		if (!$id) {
			$id = intval($this->getMongoNextId($field));
		}
		return $id;
	}
	
	/**
	 * 格式化成整形
	 * @param type $ids
	 * @return type
	 */
	public function formatIntval($ids) {
		if ($ids && is_array($ids)) {
			foreach ($ids as $key => $val) {
				$ids[$key] = intval($val);
			}
		}
		else if ($ids) {
			$ids = intval($ids);
		}
		return $ids;
	}

	/**
	 * 把日期格式转换成时间戳
	 * 
	 * @param type $date
	 * @return type
	 */
	public function formatDate($date) {
		$time = time();
		if ($date) {
			$time = intval(strtotime($date));
		}
		return $time;
	}
	
	/**
	 * 检测是否有重复
	 * @return boolean
	 */
	public function checkName() {
		$parent_id = intval($_POST['parent_id']);
		$id = intval($_POST['id']);
		$map['name'] = $_POST['name'];
		$map['parent_id'] = isset($parent_id) ? $parent_id : 0;
		if (!empty($_POST['id'])) {
			$map['id'] = array('ne', $id);
		}
		$result = $this->where($map)->field('id')->find();
		if ($result) {
			return false;
		} else {
			return true;
		}
	}

	/**
	 * 获取自增长ID (未使用此方法,备用) By 张成国 2012/11/24
	 * @param type $namespace
	 * @param array $option
	 * @return int
	 */
	function getAutoIncrementId($namespace, array $option = array()) {
		$option += array(
			'init' => 1,
			'step' => 1,
		);
		$this->db->switchCollection('_ids');
		$query = array('_id' => $namespace);
		$update = array('$inc' => array('id' => $option['step']));
		$command = array(
			'findAndModify' => '_ids',
			'query' => $query,
			'update' => $update,
			'new' => true
		);
		$seq = $this->db->command($command);
		if (isset($seq['value']['id'])) {
			return $seq['value']['id'];
		}
		$this->db->insert(array(
			'_id' => $namespace,
			'id' => $option['init'],
		));
		return $option['init'];
	}

}

?>