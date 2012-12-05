<?php

return array(
	// 上传图片的根目录
	'IMG_ROOT'=> str_replace('//', '/', $_SERVER['DOCUMENT_ROOT']),
	
	'URL_MODEL' => 0, // URL模式
	
	// 开启MongoDB连接
	'DB_TYPE' => 'mongo',
	'DB_HOST' => '192.168.2.201',
	'DB_NAME' => 'uc',
	'DB_USER' => '',
	'DB_PWD' => '',
	'DB_PORT' => '27017',
	'DB_PREFIX' => 'uc_',
	'VAR_FILTERS' => '', // 配置过滤函数 如:stripslashes,strip_tags
	
	'VAR_PAGE' => 'p', //翻页标识

	'TAGLIB_BEGIN' => '{{',
	'TAGLIB_END' => '}}',
	'TMPL_L_DELIM' => '{{',
	'TMPL_R_DELIM' => '}}',

	'SESSION_AUTO_START' => true, //是否开户SESSION
	
	// 成功与失败信息模板
	'TMPL_ACTION_ERROR' => APP_PATH.'/Tpl/Public/success.html',
	'TMPL_ACTION_SUCCESS' =>  APP_PATH.'/Tpl/Public/success.html',

	'USER_AUTH_ON' => true,
	'USER_AUTH_TYPE' => 2, // 默认认证类型 1 登录认证 2 实时认证
	'USER_AUTH_KEY' => 'authId', // 用户认证SESSION标记
	'ADMIN_AUTH_KEY' => 'administrator',
	'USER_AUTH_MODEL' => 'User', // 默认验证数据表模型
	'AUTH_PWD_ENCODER' => 'md5', // 用户认证密码加密方式
	'USER_AUTH_GATEWAY' => 'Public/login', // 默认认证网关
	'NOT_AUTH_MODULE' => 'Index', // 默认无需认证模块
	'REQUIRE_AUTH_MODULE' => '', // 默认需要认证模块
	'NOT_AUTH_ACTION' => '', // 默认无需认证操作
	'REQUIRE_AUTH_ACTION' => '', // 默认需要认证操作
	'GUEST_AUTH_ON' => false, // 是否开启游客授权访问
	'GUEST_AUTH_ID' => 0, // 游客的用户ID
	'RBAC_ROLE_TABLE' => 'role',
	'RBAC_USER_TABLE' => 'user',
	'RBAC_ACCESS_TABLE' => 'access',
	'RBAC_NODE_TABLE' => 'node',
	
	'SHOW_RUN_TIME' => false, // 运行时间显示
	'SHOW_PAGE_TRACE' => true, // 显示调试信息
	
	'WEB_NAME' => '会员中心后台',
);