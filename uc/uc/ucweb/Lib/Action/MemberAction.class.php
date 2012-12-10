<?php

/**
 * 有关会员的相关操作如登录，注册等
 */
class MemberAction extends Action {

    protected $base_info_model; //会员--基本信息表模型
    protected $more_info_model; //会员--联系人信息扩展表模型
    protected $trade_info_model; //会员--商业信息扩展

    protected function _initialize() {
        parent::_initialize();
        $this->base_info_model = D('baseInfo');
        $this->more_info_model = D('moreInfo');
        $this->trade_info_model = D('tradeInfo');
    }

    /**
     * 登录
     */
    public function login() {
        if ($_POST) {
            if (empty($_POST['username'])) {
                $this->error('用户名有误!');
            } elseif (empty($_POST['password'])) {
                $this->error('对不起,密码不能为空!');
            }

            $member_info = $this->base_info_model->getMemberInfo(array('username' => trim($_POST['username'])));
            if (empty($member_info)) {
                $this->error('账号不存在或密码错误!');
            } else {
                if ($member_info['password'] != pwdHash($_POST['password'])) {
                    $this->error('账号不存在或密码错误!');
                }

                //硬件信息
                $computer_name = $_POST['pc_name'] != 'undefined' ? $_POST['pc_name'] : 'undefined';
                Cookie::set('computer_name', $computer_name);
                $cpu_id = $_POST['cpu_info'] != 'undefined' ? $_POST['cpu_info'] : 'undefined';
                Cookie::set('cpu_id', $cpu_id);
                $mac_id = $_POST['net_info'] != 'undefined' ? $_POST['net_info'] : 'undefined';
                Cookie::set('mac_id', $mac_id);
                $storage_id = $_POST['hd_info'] != 'undefined' ? $_POST['hd_info'] : 'undefined';
                Cookie::set('storage_id', $storage_id);

                Cookie::set(C('USER_AUTH_KEY'), $member_info['id']);
                Cookie::set('login_member', $member_info['name']);
                Cookie::set('login_member_name', $member_info['linkman_name']);
                Cookie::set('last_login_time', date('Y-m-d H:i:s', $member_info['final_login_time']));
                Cookie::set('login_count', $member_info['login_count']);
                $info = $this->model->relation(true)->find($member_info['id']);

                //保存登录信息
                $time = time();
                $data = array();
                $data['id'] = $member_info['id'];
                $data['final_login_time'] = $time;
                $data['login_count'] = array('exp', 'login_count+1');
                $this->model->save($data);
                $this->saveLoginLog($member_info['id'], $_POST['username']);
                $this->redirect($_POST['fromUrl'] ? $_POST['fromUrl'] : '/Index/index');
            }
        }

        $this->display();
    }

    /**
     * 注册
     */
    public function register() {
        if ($_POST) {
            //验证提交数据的合法性
            if (!$this->base_info_model->create() && !$this->more_info_model->create() && !$this->trade_info_model->create()) {
                $this->error("注册失败!");
            } else {
                $data = array();
                //会员基本信息
                $data['id'] = $base_info_id = (int) $this->base_info_model->getNextId();
                $data['uid'] = $base_info_uid = (int) $this->base_info_model->getNextUid();
                $data['username'] = trim($_POST['password']);
                $data['password'] = (int) $_POST['password'];
                $data['appid'] = 0; //0指新注册的用户，否则指具体的应用ID
                $data['status'] = 2; //2为正常，1暂停使用，99逻辑删除
                if ($this->base_info_model->add($data) !== false) {//会员基本信息保存成功
                    //会员联系人信息扩展
                    $data = array();
                    $data['id'] = $more_info_id = (int) $this->more_info_model->getNextId();
                    $data['uid'] = $base_info_uid;
                    $data['truename'] = trim($_POST['truename']);
                    $data['gender'] = (int) $_POST['gender'];
                    $data['mobile'] = (int) $_POST['mobile'];
                    $data['ismaster'] = 2; //如果是主联系人则设为2，否则1
                    if ($this->more_info_model->add($data) !== false) {//会员扩展信息保存成功
                        //会员商业信息扩展
                        $data = array();
                        $data['id'] = (int) $this->trade_info_model->getNextId();
                        $data['uid'] = $base_info_uid;
                        $data['company'] = trim($_POST['company']);
                        $data['province'] = (int) $_POST['province'];
                        $data['city'] = (int) $_POST['city'];
                        $data['area'] = (int) $_POST['area'];
                        $data['trade'] = (int) $_POST['trade']; //主营业务
                        $data['tel'] = trim($_POST['tel']);
                        if ($this->trade_info_model->add($data) !== false) {//会员商业信息扩展保存成功
                            $this->error("注册成功!");
                        } else {
                            //商业信息添加失败则删除对应的基本信息和扩展信息
                            $this->base_info_model->where(array('id' => $base_info_id))->delete();
                            $this->base_info_model->where(array('id' => $more_info_id))->delete();
                            $this->error("注册失败!");
                        }
                    } else {
                        //扩展信息加失败则删除对应的基本信息
                        $this->base_info_model->where(array('id' => $base_info_id))->delete();
                        $this->error("注册失败!");
                    }
                } else {
                    $this->error("注册失败!");
                }
            }
        }

        //检测是否已经登录,则跳转到登录后的相应页面
        $is_login = false;
        if ($is_login) {
            //跳转
        }

        $data = array();
        //获取区域数据列表
        $data['area_list'] = $this->base_info_model->getAreaList();
        $this->assign($data);
        $this->display();
    }

}

