var userAgent = navigator.userAgent.toLowerCase();
var charset = 'gbk';
jQuery.browser = {
	version: (userAgent.match( /.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/ ) || [0,'0'])[1],
	safari: /webkit/.test( userAgent ),
	opera: /opera/.test( userAgent ),
	msie: /msie/.test( userAgent ) && !/opera/.test( userAgent ),
	mozilla: /mozilla/.test( userAgent ) && !/(compatible|webkit)/.test( userAgent )
};

if(ISFRAME) {
	try {
		_attachEvent(document.documentElement, 'keydown', window.top.resetEscAndF5);
	} catch(e) {}
}

function confirmurl(url,message) {
	url = url;
	if(confirm(message)) redirect(url);
}

function redirect(url) {
	location.href = url;
}
//滚动条
$(function(){
	$(":text").addClass('input-text');
})

/**
 * 全选checkbox,注意：标识checkbox id固定为为check_box
 * @param string name 列表check名称,如 uid[]
 */
function selectall(name) {
	if ($("#check_box").attr("checked")==false) {
		$("input[name='"+name+"']").each(function() {
			this.checked=false;
		});
	} else {
		$("input[name='"+name+"']").each(function() {
			this.checked=true;
		});
	}
}
function openwinx(url,name,w,h) {
	if(!w) w=screen.width-4;
	if(!h) h=screen.height-95;
	url = url;
	window.open(url,name,"top=100,left=400,width=" + w + ",height=" + h + ",toolbar=no,menubar=no,scrollbars=yes,resizable=yes,location=no,status=no");
}

var Box = {
	'open':function(info) {
		info.id = info.id ? info.id : 'add';
		info.title = info.title ? info.title : '信息框';
		info.width = info.width ? info.width : '700';
		info.height = info.height ?  info.height : '400';
		info.lock = info.lock ? false : true;
		//_detachEvent(document.documentElement, 'keydown', window.top.resetEscAndF5);
		window.top.art.dialog(info,
			function(){
				parent.$('#picdiv').hide();
				var d = window.top.art.dialog({id:info.id}).data.iframe;
				var form = d.document.getElementById('dosubmit');
				form.click();
				return false;
			},
			function(){
				parent.$('#picdiv').hide();
				//window.top.art.dialog({id:info.id}).close();
			}
		);
	},
	'close':function(id) {
		parent.$('#picdiv').hide();
		window.top.art.dialog({id:id}).close();
	}
};

function closeBox() {
	parent.$('#picdiv').hide();
	var list;
	if (typeof window.top.art != 'undefined') {
		list = window.top.art.dialog.list;
		for (var i in list) {
			list[i].close();
		};
	}
	if (typeof art != 'undefined') {
		list = art.dialog.list;
		for (var i in list) {
			list[i].close();
		};
	}
}

function sbp(src) {
	parent.$('body').append('<div style="z-index:9000009;position:absolute;border:1px solid green;display:none;" id="picdiv"><img src="__PUBLIC__/Images/admin_img/spacer.gif" width="500px" /></div>');
	if (!src) return false;
	parent.$('#picdiv img').attr('src', src);
	parent.$('#picdiv').show().css('top', 10).css('left', 47);
	//$('#picdiv').click(function() {$('#picdiv').hide();});
}

/**
 * 检测内容列表页表单
 */
function checkListFrom(name,msg) {
	var actVal = $('#acttype').val();
	if (actVal == '') {
		window.top.art.dialog({
			content:'请选择操作类型',
			lock:true,
			width:'200',
			height:'50',
			time:2
		},function(){});
		return false;
	}
	if (!name) name='userid[]';
	if (!msg) msg='请选择你要操作的数据';
	var ids='';
	$("input[name='"+name+"']:checked").each(function(i, n){
		ids += ',' + $(n).val();
	});
	if(ids == '') {
		window.top.art.dialog({
			content:msg,
			lock:true,
			width:'200',
			height:'50',
			time:2
		},function(){});
		return false;
	}
	else {
		ids = ids ? '0'+ids : ids;
		if (actVal) {
			var action = myform.action;
			if (actVal == 'remove') {
				action = action.replace(/batch|status/g, 'delete');
				window.top.art.dialog({
					id:'confirm',
					title: '',
					content: '您确定要删除吗?'
				},function(){
					myform.action = action;
					myform.submit();
				},function() {
					this.close();
					return false;
				});
				return false;
				//if (!confirm('您确定要删除吗？')) return false;
			}
			else if (actVal == 'status_yes' || actVal == 'status_no' || actVal == 'status_remove') {
				action = action.replace(/batch|remove/g, 'status');
			}
			myform.action = action;
		}
		myform.submit();
	}
}

$(function(){
	$('#acttype').change(function() {
		var actVal = this.value;
		if (actVal == 'display_yes') {
			$('#display_time').show();
		} else {
			$('#display_time').hide();
		} 
        if (actVal == 'column_yes') {
			$('#columntype').show();
		}
		else {
			$('#columntype').hide();
		}
	})
})

function strlen_verify(obj, checklen, maxlen) {
	var v = obj.value, charlen = 0, maxlen = !maxlen ? 200 : maxlen, curlen = maxlen, len = strlen(v);
	for(var i = 0; i < v.length; i++) {
		if(v.charCodeAt(i) < 0 || v.charCodeAt(i) > 255) {
			curlen -= charset == 'utf-8' ? 2 : 1;
		}
	}
	if(curlen >= len) {
		$('#'+checklen).html(curlen - len);
	} else {
		obj.value = mb_cutstr(v, maxlen, true);
	}
}

function mb_cutstr(str, maxlen, dot) {
	var len = 0;
	var ret = '';
	var dot = !dot ? '...' : '';
	maxlen = maxlen - dot.length;
	for(var i = 0; i < str.length; i++) {
		len += str.charCodeAt(i) < 0 || str.charCodeAt(i) > 255 ? (charset == 'utf-8' ? 3 : 2) : 1;
		if(len > maxlen) {
			ret += dot;
			break;
		}
		ret += str.substr(i, 1);
	}
	return ret;
}

function strlen(str) {
	return ($.browser.msie && str.indexOf('\n') != -1) ? str.replace(/\r?\n/g, '_').length : str.length;
}

/**
 * 搜索下拉框内容
 */
//<option value='131072' >拉丁美洲</option>
//<option value='132864' >&nbsp;&nbsp;├- 墨西哥</option>
//<option value='131840' >&nbsp;&nbsp;├- 巴西</option>
//<option value='131844' >&nbsp;&nbsp;│ &nbsp;&nbsp;├- 圣保罗</option>

function searchValue(search, obj) {
	if (document.getElementById(obj)) {
		var bObj = document.getElementById(obj);
		for(i=0;i<bObj.length;i++){
			var txt = bObj.options[i].text;
	//		txt = txt.replace("&nbsp;/g","");
	//		txt = txt.replace("├/g","");
	//		txt = txt.replace("│/g","");
	//		txt = txt.replace("└/g","");
	//		txt = txt.replace("-/g","");
	//		txt = txt.replace(" /g","");
			//if (i > 4) return;
			if(txt.toLowerCase().indexOf(search.toLowerCase()) >= 0){
				bObj.value = bObj.options[i].value;return;
			}
			else {
				bObj.value = '';
			}
		}
	}
}