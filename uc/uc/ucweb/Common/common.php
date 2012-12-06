<?php


// 用户中心接口
// $method 指明需要调用方法， $data 执行方法所需要的参数
function senderAppInterface($app,$data) {
	$return = array('status'=>9999,'desc'=>'接口返回空值');
	$uri = $app['listener'];
	//$data['method'] = $method;
	
	foreach($data as $k => $v) {
		if(is_string($v)) {
			$data[$k] = $v = trim($v);
		}
		if($v !== null && $v === '') {
			$return['desc'] = '参数'.$k.'为空，请检查入参。';
			return $return;
		}
	}
	//操作失败返回false
	$ret = runCurlRequestData($uri, $data, $app['appkey'] );
	
	if( isset($ret['status']) && $ret['status']==2 )
		return true;
	 else 
		return false;
}

// 运行Curl请求
function runCurlRequestData($url, $data, $key ) {
	$data['time'] = time() + 300;
	$post['post'] = urlencode(authcode(serialize($data), "ENCODE",$key ));
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, $url);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	
	curl_setopt($ch, CURLOPT_POST, 1);
	curl_setopt($ch, CURLOPT_POSTFIELDS, $post);
	$r = curl_exec($ch);
	curl_close($ch);
	return json_decode($r, true);
}


/**
 * 字符串加密
 * @param   $string     需加密的字符
 * @param   $operation  加密或解密
 * @param   $key        网站加密key，防止破解
 * @return  string
 */
function authcode($string, $operation = 'DECODE', $key = '', $expiry = 0) {
	$ckey_length = 4;
	$key = md5($key ? $key : '^D@i#e$X%u^n$');
	$keya = md5(substr($key, 0, 16));
	$keyb = md5(substr($key, 16, 16));
	$keyc = $ckey_length ? ($operation == 'DECODE' ? substr($string, 0, $ckey_length) : substr(md5(microtime()), -$ckey_length)) : '';

	$cryptkey = $keya . md5($keya . $keyc);
	$key_length = strlen($cryptkey);

	$string = $operation == 'DECODE' ? base64_decode(substr($string, $ckey_length)) : sprintf('%010d', $expiry ? $expiry + time() : 0) . substr(md5($string . $keyb), 0, 16) . $string;
	$string_length = strlen($string);

	$result = '';
	$box = range(0, 255);

	$rndkey = array();
	for ($i = 0; $i <= 255; $i++) {
		$rndkey[$i] = ord($cryptkey[$i % $key_length]);
	}

	for ($j = $i = 0; $i < 256; $i++) {
		$j = ($j + $box[$i] + $rndkey[$i]) % 256;
		$tmp = $box[$i];
		$box[$i] = $box[$j];
		$box[$j] = $tmp;
	}

	for ($a = $j = $i = 0; $i < $string_length; $i++) {
		$a = ($a + 1) % 256;
		$j = ($j + $box[$a]) % 256;
		$tmp = $box[$a];
		$box[$a] = $box[$j];
		$box[$j] = $tmp;
		$result .= chr(ord($string[$i]) ^ ($box[($box[$a] + $box[$j]) % 256]));
	}

	if ($operation == 'DECODE') {
		if ((substr($result, 0, 10) == 0 || substr($result, 0, 10) - time() > 0) && substr($result, 10, 16) == substr(md5(substr($result, 26) . $keyb), 0, 16)) {
			return substr($result, 26);
		} else {
			return '';
		}
	} else {
		return $keyc . str_replace('=', '', base64_encode($result));
	}
}

//返回当前Unix时钟，微秒级数值
function microtime_float()
{
    list($usec, $sec) = explode(' ', microtime());
    return ((float)$usec + (float)$sec);
}