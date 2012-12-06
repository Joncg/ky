<?php
return array(
	'DEBUG_MODE' => true,
	'URL_MODEL' => 2,//启用REWRITE模式
	//'APP_DOMAIN_DEPLOY'     => true,
	'URL_HTML_SUFFIX'=>'.html',
	'URL_ROUTER_ON' => true,

	//MongoDB配置
	'DB_TYPE' => 'mongo',
	'DB_HOST' => '192.168.2.205',
	'DB_NAME' => 'uc',
	'DB_USER' => '',
	'DB_PWD' => '',
	'DB_PORT' => '27017',
	'DB_PREFIX' => 'uc_',
	'VAR_FILTERS' => 'stripslashes,strip_tags',

);
?>