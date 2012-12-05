F.module("/static/image/ui/image_viewer/base.js",function(m,D){
	try{
		document.execCommand("BackgroundImageCache",false,true)
	}catch(A){}
	if(!window.BD){
		window.BD={}
	}
	BD.IMG=BD.IMG||{};

	function v(e){
		return e.replace(/(^[\s\t\xa0\u3000]+)|([\u3000\xa0\s\t]+$)/g,"")
	}
	BD.IMG.trim=v;
	BD.IMG.escapeXSS=function(e){
		return e.replace(/[<>]/g,function(E){
			return encodeURIComponent(E)
		}).replace(/"/g,"%22").replace(/'/g,"%27")
	};

	BD.IMG.escapeHTML=function(e){
		return e.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")
	};

	BD.IMG.getHashConf=function(){
		var G=v(location.href.split("#")[1]||"");
		G=(G?G.split("&"):[]);
		for(var E=0,e=G.length;E<e;E++){
			G[E]=BD.IMG.escapeHTML(BD.IMG.decodeURIComponent(G[E]))
		}
		return G
	};

	function n(E){
		if(E==null||typeof E!="object"){
			return E
		}
		var G=[];
		for(var e in E){
			G[G.length]=e+"="+E[e]
		}
		return G.join("&")
	}
	BD.IMG.json2Query=n;
	function o(I){
		if(I==null||typeof I!="string"){
			return I
		}
		var G={};

		var J=I.split("&");
		for(var E=0,e=J.length;E<e;E++){
			var H=J[E].split("=");
			G[H[0]]=H[1]
		}
		return G
	}
	BD.IMG.query2Json=o;
	var r=o(BD.IMG.escapeXSS(window.location.search.substring(1)));
	function q(e){
		return document.getElementById(e)
	}
	function p(I,J,E){
		var H=/[^\x00-\xff]/g;
		if(I.replace(H,"mm").length<=J){
			return I
		}
		var G,e;
		for(G=0,e=0;G<I.length,e<J;G++){
			e+=I.charAt(G).replace(H,"mm").length
		}
		if(e>J){
			G--
		}
		return I.substring(0,G)+E
	}
	BD.IMG.customSubStr=p;
	var c=(function(){
		var G=(navigator.userAgent.indexOf("MSIE")!=-1)&&!window.opera;
		if(/msie (\d+\.\d)/i.test(navigator.userAgent)){
			var J=document.documentMode||+RegExp["\x241"]
		}
		var H=(navigator.userAgent.indexOf("AppleWebKit/")>-1);
		var E=(typeof window.opera!=="undefined")?true:false;
		var e=(navigator.userAgent.indexOf("Gecko")>-1)&&(navigator.userAgent.indexOf("KHTML")==-1);
		var I=/msie (\d+\.\d+)/i.test(navigator.userAgent)?(document.documentMode||+RegExp["\x241"]):undefined;
		return{
			isIE:G,
			ie:J,
			ie:I,
			isWebKit:H,
			isOpera:E,
			isGecko:e
		}
	})();
	BD.IMG.Browser=c;
	if(!c.isIE){
		function C(E,e){
			E=E.replace(/^on/,"");
			this.addEventListener(E,e,false)
		}
		window.attachEvent=document.attachEvent=HTMLElement.prototype.attachEvent=C;
		function l(E,e){
			E=E.replace(/^on/,"");
			this.removeEventListener(E,e,false)
		}
		window.detachEvent=document.detachEvent=HTMLElement.prototype.detachEvent=l
	}
	function u(G,E){
		try{
			var I=document.styleSheets[0];
			if(I.addRule){
				I.addRule(G,E)
			}else{
				if(I.insertRule){
					I.insertRule(G+" { "+E+" }",I.cssRules.length)
				}
			}
		}catch(H){}
	}
	function B(){
		var e=0,M=0,J=0,G=0,E=0,N=0;
		var K=window,I=document,L=I.documentElement;
		e=L.clientWidth||I.body.clientWidth;
		M=K.innerHeight||L.clientHeight||I.body.clientHeight;
		G=I.body.scrollTop||L.scrollTop;
		J=I.body.scrollLeft||L.scrollLeft;
		E=Math.max(I.body.scrollWidth,L.scrollWidth||0);
		N=Math.max(I.body.scrollHeight,L.scrollHeight||0,M);
		return{
			w:e,
			h:M,
			sw:E,
			sh:N
		}
	}
	function z(){
		var E=0;
		var G=document,e=G.documentElement;
		E=e.clientWidth||G.body.clientWidth;
		return E
	}
	function s(){
		var E=0;
		if(BD.IMG.getCookie("fb")=="1"){
			E=120
		}
		var e=z()-E;
		if(e>=0&&e<580){
			return[3,3]
		}else{
			if(e>=580&&e<810){
				return[3,4]
			}else{
				if(e>=810&&e<1034){
					return[3,5]
				}else{
					if(e>=1034&&e<1286){
						return[3,6]
					}else{
						return[3,7]
					}
				}
			}
		}
	}
	BD.IMG.getMatrix=s;
	String.prototype.replaceS=function(){
		if(arguments.length==0){
			return this
		}
		for(var E=0,e=arguments.length,G=this;E<e;E++){
			G=G.replace(new RegExp("#\\{"+(E+1)+"\\}#","g"),arguments[E])
		}
		return G
	};

	if(window.HTMLElement&&!c.isIE){
		HTMLElement.prototype.__defineGetter__("children",function(){
			var G=[],e=0,H;
			for(var E=0;E<this.childNodes.length;E++){
				H=this.childNodes[E];
				if(H.nodeType==1){
					G[e++]=H;
					if(H.name){
						if(!G[H.name]){
							G[H.name]=[]
						}
						G[H.name][G[H.name].length]=H
					}
					if(H.id){
						G[H.id]=H
					}
				}
			}
			return G
		})
	}
	function b(e,H){
		if(!this.srcWidth||!this.srcHeight){
			return
		}
		if((this.srcWidth>e)||(this.srcHeight>H)){
			var E=e/this.srcWidth;
			var G=H/this.srcHeight;
			if(E<G){
				this.style.width=e+"px";
				this.style.height=this.srcHeight*E+"px";
				this.zoomRate=E
			}else{
				this.style.width=this.srcWidth*G+"px";
				this.style.height=H+"px";
				this.zoomRate=G
			}
		}else{
			this.zoomRate=1;
			this.style.width=this.srcWidth+"px";
			this.style.height=this.srcHeight+"px"
		}
	}
	function w(G,K,E){
		var H=E/G;
		var J=E/K;
		var e=K,I=G;
		if(H<J){
			I=E;
			e=K*H
		}else{
			I=G*J;
			e=E
		}
		return{
			width:I,
			height:e
		}
	}
	if(!c.isOpera){
		u("#imgList div img","display:none")
	}
	function f(E,e){
		e=e||100;
		E.style.display="inline";
		E.srcWidth=E.width;
		E.srcHeight=E.height;
		E.zoom=b;
		E.zoom(e,e)
	}
	BD.IMG.smallImgZoom=f;
	function x(e){
		e.style.display="inline";
		e.srcWidth=127;
		e.srcHeight=140;
		e.zoom=b;
		e.zoom(80,80);
		return;
		if(e.detailsrc){
			e.src=e.detailsrc;
			e.detailsrc=null
		}
	}
	BD.IMG.smallImgErr=x;
	BD.IMG.setCookie=function(e,E){
		document.cookie=e+"="+escape(E)+"; expires=Thu, 08 Jul 2038 10:05:14 GMT;"
	};

	BD.IMG.getCookie=function(E){
		var G="(?:;)?"+E+"=([^;]*);?";
		var e=new RegExp(G);
		if(e.test(document.cookie)){
			return BD.IMG.decodeURIComponent(RegExp["$1"])
		}else{
			return null
		}
	};

	BD.IMG.decodeURIComponent=function(G){
		try{
			return decodeURIComponent(G)
		}catch(E){
			return G
		}
	};

	BD.IMG.cloneObj=(function(e){
		return function(J){
			var G=J,H,E;
			if(!J||J instanceof Number||J instanceof String||J instanceof Boolean){
				return G
			}else{
				if(J instanceof Array){
					G=[];
					var I=0;
					for(H=0,E=J.length;H<E;H++){
						G[I++]=BD.IMG.cloneObj(J[H])
					}
				}else{
					if("object"==typeof J){
						if(e[Object.prototype.toString.call(J)]){
							return G
						}
						if(J.toString().indexOf("Element")!=-1&&J.nodeType==1){
							return{}
						}
						G={};

						for(H in J){
							if(J.hasOwnProperty&&J.hasOwnProperty(H)){
								G[H]=BD.IMG.cloneObj(J[H])
							}
						}
					}
				}
			}
			return G
		}
	})({
		"[object Function]":1,
		"[object RegExp]":1,
		"[object Date]":1,
		"[object Error]":1
	});
	function h(E,G,I,H){
		var J=190,e=130;
		if(E==0||G==0){
			E=G=J
		}
		if((G<I&&E<I)){
			I=Math.min(G,I);
			E=I*E/G
		}else{
			E=I*E/G
		}
		if(E>J*1.15){
			I=I*J*1.15/E;
			E=J*1.15
		}
		if(!H){
			E=Math.max(E,e);
			if(E>J){
				I=I*J/E;
				E=J
			}
		}
		return{
			width:parseInt(E),
			height:parseInt(I)
		}
	}
	function t(G,K,E){
		E=Math.min(Math.max(G,K),E);
		var H=E/G;
		var J=E/K;
		var e=K,I=G;
		if(H<J){
			I=E;
			e=K*H
		}else{
			I=G*J;
			e=E
		}
		return{
			width:I,
			height:e
		}
	}
	function k(E,I,e,H){
		var J=t(E,I,e);
		var K=J.width,G=J.height;
		if(H>0&&K<H){
			K=H;
			G=G*K/J.width
		}
		return{
			width:parseInt(K),
			height:parseInt(G)
		}
	}
	function g(){
		var E=document,e=E.compatMode=="BackCompat"?E.body:E.documentElement;
		return e.clientHeight
	}
	window.changeTitle=(function(){
		var e=window.document.title;
		return function(){
			window.document.title=e
		}
	})();
	var d=new Date();
	function y(){
		var E=BD.IMG.query2Json(BD.IMG.escapeXSS(window.location.search.substring(1)));
		var G=d.getTime();
		if(E.fmq==undefined||E.fmq==""){
			E.fmq=G+"_D"
		}else{
			if(E.fmq.indexOf("m")>-1&&E.fmq.indexOf("_m")==-1&&E.fmq.indexOf("_D")==-1){
				var e=E.fmq;
				E.fmq=G+"_"+e+"_D"
			}else{
				if(E.fmq.indexOf("_D")==-1){
					var e=E.fmq;
					E.fmq=e+"_D"
				}
			}
		}
		return E.fmq
	}
	function j(G,I){
		var H=new Date();
		var E=H.getTime();
		if(r.fmq==undefined){
			G.fmq.value=E+"_R"
		}else{
			if(r.fmq.indexOf("m")>-1&&r.fmq.indexOf("_m")==-1&&r.fmq.indexOf("_R")==-1){
				var e=r.fmq;
				G.fmq.value=E+"_"+e+"_R"
			}else{
				G.fmq.value=E+"_R"
			}
		}
		G.fm.value=(r.fr==undefined||r.fr=="")?"detail":r.fr;
		return true
	}
	BD.IMG.logTime=function(G,I,e){
		var H=BD.IMG.StatCof.host+"6.gif?for=detailtime&hostfr=imgstat",E;
		E=window[e]=new Image;
		E.onload=E.onerror=function(){
			E.onload=E.onerror=null;
			E=null;
			window[e]=null
		};

		E.src=H+"&type="+G+"&totaltime="+(e-I)+"&"+(new Date()*Math.random())
	};

	function a(G){
		var O={
			i_news:["word","http://news.baidu.com/ns?tn=news&cl=2&rn=20&ct=1&ie=utf-8",1],
			i_webpage:["wd","http://www.baidu.com/s?ie=utf-8",1],
			i_tieba:["kw","http://tieba.baidu.com/f?ie=utf-8",1],
			i_zhidao:["word","http://zhidao.baidu.com/q?ct=17&pn=0&tn=ikaslist&rn=10&lm=0&ie=utf-8",1],
			i_mp3:["key","http://music.baidu.com/search?fr=img&ie=utf-8",1],
			i_video:["word","http://video.baidu.com/v?ct=301989888&s=25&ie=utf-8",1],
			i_map:["wd","http://map.baidu.com/?newmap=1&ie=utf-8&s=s",2],
			i_baike:["word","http://baike.baidu.com/search/word?pic=1&sug=1&enc=utf8",1],
			i_wenku:["word","http://wenku.baidu.com/search?ie=utf-8",1]
		},E=G.name,L=O[E],K=document.getElementById("kw"),H=new RegExp("^\\s+|\\s+\x24"),N=K.value.replace(H,"");
		if(L){
			if(N.length>0){
				var I=L[0],e=L[1],J=L[2];
				e=M(e,I,N,J);
				G.href=e
			}else{
				G.href=G.href.match(new RegExp("^http://.+\\.baidu\\.com"))[0]
			}
		}
		function M(P,S,Q,U){
			function R(V){
				if(U==2){
					return encodeURIComponent(Q)
				}
				var X=[],aa="",W="",Z="",Y=0;
				for(i=0;i<V.length;i++){
					Z=V.charCodeAt(i).toString(16).toUpperCase();
					Y=parseInt(Z,16);
					if(Y>=12535&&Y<=12539){
						decCode=Y.toString(10);
						aa="&#"+decCode+";";
						W+=encodeURIComponent(aa)
					}else{
						aa=V.charAt(i);
						if(U>0){
							W+=encodeURIComponent(aa)
						}else{
							W+=aa
						}
					}
				}
				return W
			}
			var T=(P.indexOf("?")>0?"&":"?")+S+"=";
			if(U==2){
				T=encodeURIComponent(T)
			}
			Q=R(Q);
			return P+T+Q
		}
	}
	window.getW=z;
	window.getH=g;
	window.f_submit=j;
	window.query2Json=o;
	window.json2Query=n;
	window.fmqDetailValueSet=y;
	window.Browser=c;
	window.G=q;
	window.getBodySize=B;
	window.searchConf=r;
	window.addStyle=u;
	window.trim=v;
	window.zoom=b;
	window.zoomImg=w;
	window.setHeadUrl=a;
	window.getImgSize=h;
	return D
},[]);
F.module("/static/image/ui/head/head.js",function(b,a){
	var c=b("/static/image/ui/image_viewer/base.js");
	return a
},["/static/image/ui/image_viewer/base.js"]);
F.module("/static/image/ui/nav/subnav.js",function(c,b){
	var a=function(g,e){
		this.parentText=e;
		$items=T.dom.query("li > a",g);
		var f=0,d=$items.length;
		this.$items=$items;
		this.index=0;
		this.dict={};

		for(;f<d;f++){
			this.bind($items[f],f);
			this.dict[this.getText(f)]=f
		}
	};

	a.prototype={
		constructor:a,
		bind:function(f,d){
			var e=this;
			T.on(f,"click",function(g){
				T.event.preventDefault(g);
				e.click(g,d)
			})
		},
		click:function(f,d){
			this.toggle(d)
		},
		getIndexByName:function(d){
			return this.dict[d]||0
		},
		toggleByName:function(e){
			var d=this.getIndexByName(e);
			this.blur(this.index);
			this.focus(d);
			this.index=d
		},
		toggle:function(d){
			if(this.$items.length===0){
				return
			}
			if(this.index!=-1){
				this.blur(this.index)
			}
			this.index=d;
			this.focus(d)
		},
		focus:function(d){
			T.dom.addClass(this.$items[d],this.style.sub_on);
			T.lang.eventCenter.dispatchEvent("Nav.tagsChanged",{
				mainTag:this.parentText,
				subTag:this.getText(d)
			})
		},
		setUrlFrag:function(d){
			window.location.href="#"+encodeURIComponent(this.parentText)+"|"+encodeURIComponent(this.getText(d))
		},
		blur:function(d){
			T.dom.removeClass(this.$items[d],this.style.sub_on)
		},
		getText:function(d){
			return this.$items[d].innerHTML
		},
		style:{
			sub_on:"on"
		}
	};

	b=a;
	return b
},[]);
F.module("/static/image/ui/nav/widthfixer.js",function(b,d){
	var c=b("/static/common/lib/tangram/base/base.js");
	var e,h,f=960,i;
	function l(n){
		f=n.nav_width||f;
		e=n.$boxes;
		h=n.$items
	}
	function k(q){
		q=q||e;
		var p=0;
		for(var o=0,n=q.length;o<n;o++){
			p+=q[o].offsetWidth
		}
		return p
	}
	function a(q){
		q=q||h;
		var p=0;
		for(var o=0,n=q.length;o<n;o++){
			p+=m(q[o])
		}
		return p
	}
	function m(o){
		var n=parseInt(c.dom.getStyle(o,"padding-left"),10);
		var p=parseInt(c.dom.getStyle(o,"padding-right"),10);
		return n+p
	}
	function j(w,o,u){
		for(var s=0;s<h.length;s++){
			h[s].style.paddingLeft=w+"px";
			h[s].style.paddingRight=w+"px"
		}
		var p=(u-w*e.length*2);
		var r=p/2;
		var v=Math.ceil(r);
		var q=Math.floor(r);
		if(c.browser.ie>8){
			v=v+2
		}
		h[s-1].style.paddingLeft=(w+v)+"px";
		h[s-1].style.paddingRight=(w+q)+"px"
	}
	function g(n){
		var p=(f-(k()-a()));
		var q=p/e.length/2;
		var o=Math.floor(q);
		j(n||o,q,p)
	}
	d={
		init:l,
		getWidth:k,
		getPaddingWidth:a,
		setPaddings:g
	};

	return d
},["/static/common/lib/tangram/base/base.js"]);
F.module("/static/image/ui/nav/nav.js",function(f,c){
	var e=f("/static/common/lib/tangram/base/base.js");
	var b=f("/static/image/ui/nav/subnav.js");
	var d=f("/static/image/ui/nav/widthfixer.js");
	window.wf=d;
	window.T=e;
	var a={
		navid:"nav",
		query_main_item:"ul.main > li.item > a",
		query_sub:"> ul.sub",
		query_main_li:"> ul.main > li"
	};

	var g=function(){};

	g.prototype={
		constructor:g,
		init:function(m){
			m=m||{};

			e.extend(m,a);
			var h=e.g(m.navid);
			var p=e.dom.query(m.query_main_item,h);
			var n=e.dom.query(m.query_sub,h);
			this.$sub=n;
			this.$li=p;
			this.sub_nav=[];
			this.dict={};

			this.index=0;
			var k=0,j=p.length;
			for(;k<j;k++){
				this.bind(p[k],k);
				this.dict[this.getText(k)]=k;
				this.sub_nav.push(new b(n[k],this.getText(k)))
			}
			d.init({
				nav_width:960,
				$boxes:e.dom.query(m.query_main_li,h),
				$items:e.dom.query(m.query_main_li+" > a",h)
			});
			var o=e.g("btn-zhuanti");
			if(o){
				d.setPaddings()
			}
			h.style.visibility="visible"
		},
		bind:function(k,h){
			var j=this;
			e.on(k,"click",function(i){
				e.event.preventDefault(i);
				j.click(i,h)
			})
		},
		click:function(j,h){
			this.toggle(h)
		},
		getIndexByName:function(h){
			return this.dict[h]||0
		},
		toggleByName:function(h,j){
			j=j||"\u5168\u90e8";
			var i=this.getIndexByName(h);
			this.blur(this.index);
			e.lang.eventCenter.dispatchEvent("Nav.zhuantiClosed");
			this.focus(i);
			this.index=i;
			this.sub_nav[i].toggleByName(j)
		},
		toggle:function(h,i){
			i=i||0;
			this.blur(this.index);
			if(-1===h){
				return
			}
			e.lang.eventCenter.dispatchEvent("Nav.zhuantiClosed");
			this.focus(h);
			this.index=h;
			this.sub_nav[h].toggle(i)
		},
		focus:function(h){
			e.dom.addClass(this.$sub[h],this.style.sub_on);
			e.dom.addClass(this.$li[h],this.style.nav_on)
		},
		blur:function(h){
			e.dom.removeClass(this.$sub[this.index],this.style.sub_on);
			e.dom.removeClass(this.$li[this.index],this.style.nav_on)
		},
		getText:function(h){
			return this.$li[h].innerHTML
		},
		style:{
			sub_on:"on",
			nav_on:"curr"
		}
	};

	c=new g;
	return c
},["/static/common/lib/tangram/base/base.js","/static/image/ui/nav/subnav.js","/static/image/ui/nav/widthfixer.js"]);
F.module("/static/image/ui/rec_sites/rec_sites.js",function(c,e){
	var l=[{
		site_logo:"http://list.image.baidu.com/t/logo/tuijian/xiangce.png",
		site_name:"\u767e\u5ea6\u76f8\u518c",
		site_address:"xiangce.baidu.com",
		site_address_url:"http://xiangce.baidu.com",
		site_abs:"\u767e\u5ea6\u76f8\u518c\uff0c\u56fd\u5185\u6700\u5927\u7684\u514d\u8d39\u4e91\u76f8\u518c\uff0c\u652f\u6301\u539f\u56fe\u65e0\u635f\u4e0a\u4f20\u3002"
	},{
		site_logo:"http://list.image.baidu.com/t/logo/tuijian/diandian.jpg",
		site_name:"\u70b9\u70b9\u7f51",
		site_address:"www.diandian.com",
		site_address_url:"http://www.diandian.com",
		site_abs:"\u4e2d\u56fd\u6700\u5927\u7684\u8f7b\u535a\u5ba2\u5e73\u53f0\uff0c\u6bcf\u5929\u65e0\u6570\u7528\u6237\u5206\u4eab\u81ea\u5df1\u7684\u5174\u8da3\u548c\u751f\u6d3b\uff0c\u4ea7\u751f\u5927\u91cf\u4f18\u8d28\u7684\u56fe\u7247\u5185\u5bb9\u3002"
	},{
		site_logo:"http://list.image.baidu.com/t/logo/tuijian/mogujie.jpg",
		site_name:"\u8611\u83c7\u8857",
		site_address:"www.mogujie.com",
		site_address_url:"http://www.mogujie.com",
		site_abs:"\u6700\u5927\u7684\u5973\u6027\u8d2d\u7269\u793e\u533a\uff0c\u53d1\u73b0\u6f6e\u6d41\u7cbe\u54c1\u3001\u5206\u4eab\u7f51\u8d2d\u4e50\u8da3\u3002"
	},{
		site_logo:"http://list.image.baidu.com/t/logo/tuijian/topit.jpg",
		site_name:"TOPIT.ME",
		site_address:"www.topit.me",
		site_address_url:"http://www.topit.me",
		site_abs:"\u9ad8\u54c1\u8d28\u65f6\u5c1a\u3001\u827a\u672f\u3001\u6444\u5f71\u3001\u8bbe\u8ba1\u3001\u63d2\u753b\u7c7b\u7cbe\u7f8e\u56fe\u7247\u5206\u4eab\u793e\u533a\u3002"
	},{
		site_logo:"http://list.image.baidu.com/t/logo/tuijian/duitang.jpg",
		site_name:"\u5806\u7cd6\u7f51",
		site_address:"www.duitang.com",
		site_address_url:"http://www.duitang.com",
		site_abs:"\u5206\u4eab\u6536\u96c6\u751f\u6d3b\u4e2d\u7684\u7f8e\u597d\uff0c\u9047\u89c1\u4e16\u754c\u4e0a\u7684\u53e6\u5916\u4e00\u4e2a\u4f60\u3002"
	},{
		site_logo:"http://list.image.baidu.com/t/logo/tuijian/ailehuo.png",
		site_name:"\u7231\u4e50\u6d3b",
		site_address:"www.leho.com",
		site_address_url:"http://www.leho.com",
		site_abs:'\u54c1\u8d28\u751f\u6d3b\u6307\u5357,\u79c9\u627f"\u54c1\u5473\u751f\u6d3b,\u806a\u660e\u6d88\u8d39"\u7684\u7406\u5ff5,\u4e3a\u7528\u6237\u63d0\u4f9b\u9760\u8c31\u3001\u5b9e\u7528\u7684\u751f\u6d3b\u6d88\u8d39\u4fe1\u606f\u548c\u670d\u52a1\u3002'
	},{
		site_logo:"http://list.image.baidu.com/t/logo/tuijian/baidukongjian.png",
		site_name:"\u767e\u5ea6\u7a7a\u95f4",
		site_address:"http://hi.baidu.com",
		site_address_url:"http://hi.baidu.com/index",
		site_abs:"\u767e\u5ea6\u7a7a\u95f4\u662f\u62e5\u6709\u6d77\u91cf\u6444\u5f71\u3001\u65c5\u6e38\u3001\u7f8e\u98df\u7b49\u7cbe\u7f8e\u56fe\u7247\u7684\u5185\u5bb9\u793e\u533a\uff0c\u4e2a\u6027\u5316\u5c55\u73b0\u6bcf\u4e2a\u4eba\u7684\u7cbe\u5f69\u751f\u6d3b\uff01"
	},{
		site_logo:"http://list.image.baidu.com/t/logo/tuijian/baidutieba.png",
		site_name:"\u767e\u5ea6\u8d34\u5427",
		site_address:"http://tieba.baidu.com/",
		site_address_url:"http://tieba.baidu.com/tb/picture/index.html",
		site_abs:"\u4ee5\u5174\u8da3\u4e3b\u9898\u805a\u5408\u5fd7\u540c\u9053\u5408\u8005\u7684\u4e92\u52a8\u5e73\u53f0\uff0c\u6709\u56fe\u6709\u771f\u76f8\u3002"
	}];
	var a={
		"\u7f8e\u5973":[0,6],
		"\u670d\u9970\u642d\u914d":[2,4],
		"\u65c5\u6e38\u98ce\u666f":[1,3],
		"\u5bb6\u5c45\u88c5\u9970":[4,5],
		"\u6444\u5f71":[1,4],
		"\u7f8e\u98df":[6,5],
		"\u8da3\u5473\u641e\u7b11":[0,7],
		"\u521b\u610f\u8bbe\u8ba1":[0,1],
		"\u52a8\u6f2b\u6e38\u620f":[6,1]
	};

	var d=c("/static/common/lib/tangram/base/base.js"),g=c("/static/image/ui/statistic/statistic.js");
	var p=['<div class="rec_site_wrapper" data_sn="#{site_name}">','<a href="#{site_address_url}" class="rec_site_link clearfix" target="_blank">','<img class="rec_site_logo" src="#{site_logo}"/>','<div class="txt_wrapper">','<p class="rec_site_name">#{site_name}</p>','<p class="rec_site_address">#{site_address}</p>',"</div>","</a>",'<a href="#{site_address_url}" class="rec_site_abs_link clearfix" target="_blank">','<p class="rec_site_abs">',"#{site_abs}","</p>","</a>","</div>"].join("");
	var n='<div class="title clearfix"><b>\u63a8\u8350\u7f51\u7ad9</b><span></span></div>';
	var b=null;
	var j=0;
	function o(u){
		u=u||{};

		var x=u.right,s=u.left,v=u.top,q=u.width;
		b=d.dom.g("rec_sites_wrapper");
		q&&(b.style.width=q+"px");
		(typeof s!="number")&&x&&(b.style.right=x+"px");
		(typeof s=="number")&&(b.style.left=s+"px")&&(b.style.right="");
		v&&(b.style.top=v+"px")&&(j=v)
	}
	function m(t){
		var q=t.mainTag;
		k(q);
		var r=d.dom.query(".rec_site_wrapper",b);
		for(var u in r){
			var v=r[u];
			v.onclick=function(w){
				w=w||window.event;
				var s={
					sn:this.getAttribute("data_sn"),
					tag1:t.mainTag,
					tag2:t.subTag
				};

				d.lang.eventCenter.dispatchEvent("view.needStatic",{
					p:76,
					data:{
						e:null,
						args:s
					}
				})
			}
		}
	}
	function k(q){
		data=f(q);
		data.length>0?b.innerHTML=n+h(data):b.innerHTML="";
		d.lang.eventCenter.dispatchEvent("Ecom.relsites.reset",{
			tag:q,
			data:data.length
		})
	}
	function i(){
		return parseInt(d.dom.getStyle(b,"height"))
	}
	function f(q){
		site_nums=a[q];
		var u=[];
		for(var t in site_nums){
			var r=site_nums[t],s=l[r];
			if(!s.site_logo){
				s.site_logo="static/image/ui/rec_sites/img/mogujie.jpg"
			}
			u.push(s)
		}
		return u
	}
	function h(r){
		var s="";
		for(var q in r){
			s+=d.format(p,r[q])
		}
		return s
	}
	e={
		init:o,
		getHeight:i,
		resetSites:m
	};

	return e
},["/static/common/lib/tangram/base/base.js","/static/image/ui/statistic/statistic.js"]);
F.module("/static/image/ui/statistic/statistic.js",function(d,a){
	var c=d("/static/common/lib/tangram/base/base.js");
	var b=d("/static/image/ui/statistic/monitorrequest/monitorrequest.js");
	a=(function(){
		var m="http://imgstat.baidu.com/";
		var n="http://imgstat.baidu.com/7.gif";
		var g=100;
		var f=(new Date()).getTime();
		function l(){
			c.lang.eventCenter.addEventListener("view.needStatic",i);
			lastActiveTime=(new Date()).getTime()
		}
		function i(q){
			var s=q.p||50,r=q.data;
			j(r.e,s,r.args)
		}
		function h(r,p){
			var q=p;
			return{
				host:m+"7.gif",
				query:q,
				isAsyn:true
			}
		}
		function o(r,p){
			var q=p;
			return{
				host:m+"7.gif",
				query:q,
				isAsyn:false
			}
		}
		function e(r,p){
			var q=p;
			return{
				host:n,
				query:q,
				isAsyn:false
			}
		}
		var k={
			70:e,
			71:h,
			72:h,
			73:o,
			74:o,
			75:o,
			76:o,
			77:o,
			78:o
		};

		function j(q,u,w){
			if(q!=null){
				var v=q||window.event;
				var r=v.srcElement||v.target;
				while(r.parentNode!=document.body&&r.tagName.toLowerCase()!="a"){
					r=r.parentNode
				}
			}else{
				var r=document.body
			}
			if(typeof w=="undefined"){
				w={}
			}
			var z=k[u];
			if(typeof z!="undefined"){
				w.p=u;
				var A=z.apply(this,[r,w]);
				var y=A.host;
				var x=A.query;
				if(typeof x=="object"){
					for(var t in x){
						x[t]=encodeURIComponent(x[t])
					}
					x=c.url.jsonToQuery(x,function(B){
						return B
					})
				}
				var s=A.isAsyn;
				var p=b(y,x);
				if(s){
					v.returnValue=false;
					if(v.preventDefault){
						v.preventDefault()
					}
					setTimeout(function(){
						location.href=r.href
					},g)
				}
				return p
			}
		}
		l();
		return j
	})();
	return a
},["/static/common/lib/tangram/base/base.js","/static/image/ui/statistic/monitorrequest/monitorrequest.js"]);
F.module("/static/image/ui/statistic/monitorrequest/monitorrequest.js",function(c,a){
	var b=a=(function(){
		var d=(new Date).getTime();
		return function(f,h){
			var e=window["__log__"+(new Date()).getTime()]=document.createElement("img");
			var g="",i=(new Date).getTime();
			g="lsTime="+(i-d);
			d=i;
			e.src=f+"?"+h+"&"+g+"&"+new Date()*Math.random();
			return e.src
		}
	})();
	return a
},[]);
F.module("/static/image/ui/net/net.js",function(c,g){
	var f=c("/static/common/lib/tangram/base/base.js");
	var n="/i?tn=listjson&word=liulan&oe=utf-8",i=0,m=1,a=2,k=[],e=false;
	function p(){
		f.lang.eventCenter.addEventListener("Data.blockLoaded",h)
	}
	function l(s,r){
		var q=n;
		s.requestType=m;
		k.push({
			url:q,
			opts:s,
			callbacks:r
		});
		if(!e){
			e=true;
			d(q,s,function(t){
				var u=k.shift();
				f.lang.eventCenter.dispatchEvent("Data.blockLoaded",{
					block:u
				});
				b(r,t)
			})
		}
	}
	function h(){
		if(k.length==0){
			e=false;
			return false
		}else{
			var q=k[0];
			j(q)
		}
	}
	function j(t){
		var q=t.url,s=t.opts,r=t.callbacks;
		d(q,s,function(u){
			var v=k.shift();
			f.lang.eventCenter.dispatchEvent("Data.blockLoaded",{
				block:v
			});
			b(r,u)
		})
	}
	function o(s,r){
		var q=n;
		s.requestType=a;
		d(q,s,function(t){
			b(r,t)
		})
	}
	function b(r,s){
		if(r instanceof Function){
			r(s)
		}else{
			if(r instanceof Array){
				for(var q in r){
					callback=r[q];
					if(callback instanceof Function){
						callback(s)
					}
				}
			}
		}
	}
	function d(r,t,u){
		var q=r.indexOf("?")<0?"?":"&";
		for(var s in t){
			t[s]=encodeURIComponent(t[s])
		}
		r=r+q+f.url.jsonToQuery(t,function(x,w){
			return x
		});
		f.ajax.get(r+"&ie=utf8&"+(new Date().getTime()),function(w,v){
			if(typeof v=="string"){
				v=f.json.parse(v)
			}
			u(v)
		})
	}
	g={
		getImgsByTags:l,
		sendDownLoad:o,
		send:d,
		init:p
	};

	return g
},["/static/common/lib/tangram/base/base.js"]);
F.module("/static/image/ui/waterfall/database/database.js",function(e,t){
	var b=e("/static/common/lib/tangram/base/base.js");
	var o="pn";
	var m="data";
	var i={};

	function n(){
		i=i||{};

		i.imgList=i.imgList||[];
		i.tags=i.tags||{};

		i.startIndex=0;
		i.totalNum=0;
		b.lang.eventCenter.addEventListener("DataBase.tagsChanged",g)
	}
	function h(v){
		if(!j()){
			return i.imgList.splice(0,v)
		}else{
			if(s()){
				b.lang.eventCenter.dispatchEvent("DataBase.noMoreData",{
					tags:d()
				});
				return[]
			}
		}
	}
	function q(){
		return{
			word:encodeURIComponent(i.tags.mainTag+" "+i.tags.subTag),
			tag1:encodeURIComponent(i.tags.mainTag),
			tag2:encodeURIComponent(i.tags.subTag),
			ln:i.totalNum,
			rn:1,
			ct:"503316480"
		}
	}
	function j(){
		return i.imgList.length==0
	}
	function s(){
		return i.startIndex>=i.totalNum
	}
	function a(v){
		i.totalNum=v
	}
	function k(){
		return i.totalNum
	}
	function r(w){
		if(u({
			mainTag:w.tag1,
			subTag:w.tag2
		})){
			var v=w[m],y=w.totalNum;
			if(y>0){
				a(y)
			}else{
				b.lang.eventCenter.dispatchEvent("Data.noResult",{
					tags:d
				})
			}
			if(v.length<2){
				return
			}
			if(v instanceof Array){
				for(var x=0;x<(v.length-1);x++){
					var z=v[x];
					i.imgList.push(z)
				}
				c(v[v.length-2])
			}else{
				if(v instanceof Object){
					databse.imgList.push(v);
					c(v)
				}
			}
		}
	}
	function l(){
		return i.imgList.length
	}
	function p(v){
		if(!u(v)){
			var w=i.tags;
			i.tags=v;
			b.lang.eventCenter.dispatchEvent("DataBase.tagsChanged",{
				newTags:v,
				oldTags:w
			})
		}
	}
	function u(v){
		var w=i.tags;
		return !!w&&w.mainTag==v.mainTag&&w.subTag==v.subTag
	}
	function d(){
		return i.tags
	}
	function g(){
		i.imgList=[];
		i.startIndex=0;
		i.totalNum=0
	}
	function f(){
		return i.startIndex
	}
	function c(v){
		i.startIndex=v[o]+1
	}
	t={
		init:n,
		getData:h,
		addData:r,
		getDataLength:l,
		setTags:p,
		getCurTags:d,
		getStartIndex:f,
		isTagsSame:u,
		isAllDataLoaded:s,
		isEmpty:j,
		getTotalNum:k,
		info:q
	};

	return t
},["/static/common/lib/tangram/base/base.js"]);
F.module("/static/image/ui/waterfall/precache/precache.js",function(d,b){
	var c={
		firstLoadNum:30,
		preLoadBlockSize:60,
		minLeftInDataBase:20,
		displayBlockSize:20
	};

	function f(){
		return c.firstLoadNum
	}
	function e(){
		return c.preLoadBlockSize
	}
	function h(){
		return c.minLeftInDataBase
	}
	function g(){
		return c.displayBlockSize
	}
	function a(k,i,j){
		if(j>=i){
			return 0
		}
		if(k<g()){
			return 2
		}else{
			if(k<h()){
				return 1
			}else{
				return 0
			}
		}
	}
	b={
		getFirstLoadNum:f,
		getPreLoadBlockSize:e,
		getMinLeftInDataBase:h,
		getDisplayBlockSize:g,
		needCacheMore:a
	};

	return b
},[]);
F.module("/static/image/ui/waterfall/dataadapter/dataadapter.js",function(d,h){
	var g=d("/static/common/lib/tangram/base/base.js");
	var m=d("/static/image/ui/waterfall/database/database.js");
	var k=d("/static/image/ui/net/net.js");
	var e=d("/static/image/ui/waterfall/precache/precache.js");
	var i={};

	var j=-1;
	function l(){
		g.lang.eventCenter.addEventListener("DataBase.tagsChanged",b);
		g.lang.eventCenter.addEventListener("Nav.tagsChanged",m.setTags)
	}
	function b(o){
		var n=o.newTags;
		f(n,0,e.getFirstLoadNum(),function(p){
			g.lang.eventCenter.dispatchEvent("DataBase.reloadData",{
				tags:n,
				datas:p
			})
		})
	}
	function a(o,u){
		if(!o){
			o=m.getCurTags()
		}
		var p=m.isTagsSame(o);
		if(p){
			if(!m.isAllDataLoaded()){
				var n=m.getDataLength(),s=m.getStartIndex(),q=m.getTotalNum(),t=e.needCacheMore(n,q,s);
				if(t==2&&!c(o,s)){
					f(o,s,e.getPreLoadBlockSize(),u)
				}else{
					if(t==1&&!c(o,s)){
						setTimeout(function(){
							f(o,s,e.getPreLoadBlockSize(),u)
						},500)
					}
				}
			}
			var r=m.getData(e.getDisplayBlockSize());
			if(r&&r.length>0){
				u(r)
			}
		}else{
			m.setTags(o)
		}
	}
	function c(q,r){
		var o=j,n=i.mainTag,p=i.subTag;
		i.mainTag=q.mainTag;
		i.subTag=q.subTag;
		j=r;
		return n==q.mainTag&&p==q.subTag&&o==r
	}
	function f(n,q,p,r){
		var n=n;
		var o={
			tag1:n.mainTag,
			tag2:n.subTag,
			pn:q||0,
			rn:p||e.getPreLoadBlockSize()
		};

		g.lang.eventCenter.dispatchEvent("Net.dataLoaing",{
			tags:n
		});
		k.getImgsByTags(o,function(s){
			m.addData(s);
			r(m.getData(e.getDisplayBlockSize()));
			g.lang.eventCenter.dispatchEvent("Net.dataLoaded",{
				tags:n
			})
		})
	}
	h={
		init:l,
		getImgsData:a
	};

	return h
},["/static/common/lib/tangram/base/base.js","/static/image/ui/waterfall/database/database.js","/static/image/ui/net/net.js","/static/image/ui/waterfall/precache/precache.js"]);
F.module("/static/image/ui/waterfall/ccc/ccc.js",function(f,j){
	var h=f("/static/common/lib/tangram/base/base.js"),e=f("/static/image/ui/waterfall/dataadapter/dataadapter.js"),l=f("/static/image/ui/waterfall/database/database.js");
	var d=null;
	var g=400;
	var c=true;
	function k(o){
		d=o;
		h.on(window,"scroll",a);
		var n=h.lang.eventCenter;
		n.addEventListener("view.deadLine",function(p){
			e.getImgsData(null,function(q){
				d.addImgsByData(q)
			})
		});
		n.addEventListener("view.leaveTop",function(){
			d.showToTop()
		});
		n.addEventListener("view.backTop",function(){
			d.hideToTop()
		});
		n.addEventListener("Net.dataLoaing",function(){
			d.showLoading()
		});
		n.addEventListener("DataBase.noMoreData",function(){
			d.showNoMore()
		});
		n.addEventListener("DataBase.tagsChanged",function(){
			d.hideNoMore()
		});
		n.addEventListener("Net.dataLoaded",function(){
			d.hideLoading()
		});
		n.addEventListener("DataBase.reloadData",function(p){
			d.resetImgs(p.datas,p.tags)
		});
		n.addEventListener("DataBase.tagsChanged",function(p){
			d.resetDomList(p)
		});
		n.addEventListener("Nav.tagsChanged",b);
		n.addEventListener("Nav.zhuantiOpen",i);
		n.addEventListener("DataBase.tagsChanged",m);
		n.addEventListener("view.updated",function(){
			if(!d.nfirst){
				if(typeof PDC!="undefined"){
					PDC.page_ready()
				}
				d.nfirst=true
			}
		});
		window.ec=n
	}
	function m(p){
		var n=false;
		if(p.oldTags&&!!p.oldTags&&!!p.oldTags.subTag){
			n=true
		}
		var o={};

		if(n){
			o={
				tag1:p.oldTags.mainTag,
				tag2:p.oldTags.subTag
			}
		}else{
			o={
				tag1:p.newTags.mainTag,
				tag2:p.newTags.subTag
			}
		}
		h.lang.eventCenter.dispatchEvent("view.needStatic",{
			p:77,
			data:{
				e:null,
				args:o
			}
		})
	}
	function i(){
		c?h.dom.hide("waterfall"):null;
		c=false;
		h.lang.eventCenter.dispatchEvent("view.needStatic",{
			p:78,
			data:{
				e:null,
				args:{}
			}
		})
	}
	function b(){
		c?null:h.dom.show("waterfall");
		c=true
	}
	function a(r){
		if(!c){
			return
		}
		var p=h.page.getScrollTop(),o=h.page.getHeight(),n=h.page.getViewHeight(),q=o-n-p;
		if(q<=g){
			h.lang.eventCenter.dispatchEvent("view.deadLine",{
				b2b:q
			})
		}
		h.lang.eventCenter.dispatchEvent(p>100?"view.leaveTop":"view.backTop",{
			t2t:p
		})
	}
	j={
		init:k
	};

	return j
},["/static/common/lib/tangram/base/base.js","/static/image/ui/waterfall/dataadapter/dataadapter.js","/static/image/ui/waterfall/database/database.js"]);
F.module("/static/image/ui/waterfall/waterfall.js",function(b,d){
	var c=b("/static/common/lib/tangram/base/base.js");
	var h=b("/static/image/ui/waterfall/database/database.js");
	var g=b("/static/image/ui/net/net.js");
	var a=b("/static/image/ui/waterfall/dataadapter/dataadapter.js");
	var e=b("/static/image/ui/rec_sites/rec_sites.js");
	var i=b("/static/image/ui/personal/personal.js");
	var f=function(o,k,n,m,j){
		var l={
			marginRight:13,
			marginBottom:13,
			border:0,
			colWidth:230,
			rightTopRoom:0,
			leftTopRoom:0,
			isRecSites:true,
			noContentHtmlStr:"<div>\u6ca1\u6709\u7ed3\u679c</div>",
			imgDomStr:['<li class="imgobj_wrapper">','<a class="detail_link" href="i?tn=listdetail&ie=utf8&pn=#{pn}&start=#{start_index}&result=#{return_number}&#{ext_urlInfo}" target="_blank" class="imgobj">','<img src="#{thumbnail_url}" width="#{thumbnail_width}" height="#{thumbnail_height}" obj_url="#{obj_url}"/>',"</a>",'<div class="imgobj_info_container">','<div class="just_for_bg"></div>','<div class="padding_wrapper">','<a href="#{from_url}" class="abs" target="_blank">#{tags}</a>','<a href="#{from_url}" class="from_site" target="_blank">','<span class="site_name">#{site_name}</span>&#12288;<span class="site_url">#{site_url}</span>',"</a>","</div>","</div>","</li>"].join(""),
			autoSize:false,
			minColNum:4
		};

		this.conId=o;
		this.loadingId=k;
		this.toTopId=n;
		this.noMoreId=m;
		this.conHeight=0;
		this.conWidth=0;
		this.domList=[];
		this.colList=[];
		this.domTotal=0;
		this.minHeight=0;
		this.lastScrollPosition=0;
		this.colNum=0;
		this.options=c.extend(l,j)
	};

	f.prototype={
		init:function(){
			for(var j in this.options){
				if(this[j]!=this.options){
					this[j]=this.options[j]
				}
			}
			var k=c.page.getViewWidth();
			this.container=c.g(this.conId);
			this.loading=c.g(this.loadingId);
			this.toTop=c.g(this.toTopId);
			this.noMore=c.g(this.noMoreId);
			this.spanRuler=document.createElement("span");
			this.spanRuler.style.cssText="position:absolute;top:-10000px;left:-10000px;font-size:"+14+"px;";
			document.body.appendChild(this.spanRuler);
			if(this.autoSize){
				this.calColNum(k);
				c.lang.eventCenter.addEventListener("WaterFall.colNumChanged",function(n){
					resetConWidth();
					resetColList()
				})
			}else{
				this.colNum=this.minColNum;
				this.resetConWidth(this.conWidth)
			}
			this.resetColList();
			if(c.browser.ie<7){
				var m=c.dom.g("up_top_top_wrapper");
				var l=-(c.dom.g("waterfall_wrapper").getBoundingClientRect().top+c.page.getScrollTop()+50);
				if(m.style.setExpression){
					m.style.position="absolute";
					m.style.setExpression("top","eval((document.documentElement.scrollTop+document.documentElement.clientHeight) + "+l+') + "px"')
				}
			}
		},
		calColNum:function(l){
			var k=this.colWidth,n=this.marginRight,m=l+n,j=Math.floor(l/(k+n));
			j=Math.max(this.minColNum,j);
			if(this.colNum!=j){
				this.colNum=j;
				c.lang.eventCenter.dispatchEvent("WaterFall.colNumChanged",{
					colNum:j,
					colWidth:k,
					marginRight:n
				})
			}
			return this.colNum
		},
		resetConWidth:function(j){
			this.conWidth=j||(this.colNum*(this.colWidth+this.marginRight)-this.marginRight);
			this.container.style.width=this.conWidth+"px"
		},
		resetColList:function(){
			if(!this.colList||this.colList.length>0){
				this.colList=[]
			}
			var j=this.colNum,l=this.colList;
			for(var k=0;k<this.colNum;k++){
				l.push(0)
			}
			l[0]+=this.leftTopRoom;
			l[j-1]+=this.rightTopRoom
		},
		resetDomList:function(k){
			this.container.innerHTML="";
			this.domList=[];
			this.conHeight=0;
			this.container.style.height="0px";
			k=k||{};

			var j=k.mainTag;
			if(j&&(this.isRecSites)){
				e.resetSites(k);
				this.rightTopRoom=e.getHeight()
			}
			this.resetColList()
		},
		showNoResult:function(k){
			var m=(k&&k.str)||this.noContentHtmlStr,l=(k&&k.data)||{},j=c.format(m,l);
			this.container.innerHTML=j
		},
		str2dom:function(l){
			if(!l||l.replace(/\s*/,"")==""){
				return null
			}
			var k=document.createElement("div");
			k.innerHTML=l;
			var j=k.children;
			if(j.length>1){
				return j
			}else{
				if(j.length==1){
					return j[0]
				}else{
					return null
				}
			}
		},
		createImgDom:function(k){
			var n=k.str||this.imgDomStr,l=k.data||{};

			l.ext_favLogoDisplayClass=l.site_logo.length<2?" no-logo":"";
			l.ext_urlInfo=c.url.jsonToQuery(h.info(),function(p,o){
				return p
			});
			var j=c.format(n,l);
			j=j.replace(/src=\"\"/i,"");
			l.site_name.length<1?j=j.replace(/&#12288;/,""):null;
			var m=this.str2dom(j);
			return m
		},
		addImg:function(n){
			n.tags=this.processAbsToFixedWidth(n.tags,206,14);
			var m=this.createImgDom({
				data:n
			});
			var k=new i();
			k.insert(m,{
				fr:"list",
				url:n.image_url
			});
			m.data=n;
			this.domList.push(m);
			var o=this.getPosition(),j=this.calImageHeight(n),l=this.calImageWidth(n);
			m.style.cssText="left:"+o.left+"px;top:"+o.top+"px;width:"+l+"px;height:"+j+"px";
			this.addHoverHandler(m);
			this.addStatistic(m,n);
			this.container.appendChild(m);
			this.updatePosition(o.index,j)
		},
		processAbsToFixedWidth:function(j,l,m,k){
			this.spanRuler.style.fontSize=m+"px";
			this.spanRuler.innerHTML=j;
			if(this.spanRuler.offsetWidth<l){
				return j
			}
			var n="\u2026";
			if(k!=undefined){
				n=k
			}while(this.spanRuler.offsetWidth>l){
				j=j.substring(0,j.length-1);
				this.spanRuler.innerHTML=j+n
			}
			return j+n
		},
		addStatistic:function(n,o){
			var p=c.dom.query("a.detail_link",n)[0],j=c.dom.query("a.abs",n)[0],k=c.dom.query("a.from_site",n)[0],m=h.getCurTags(),l={
				id:o.id,
				sitename:o.site_name,
				siteurl:o.site_url,
				pn:o.pn,
				tag1:m.mainTag,
				tag2:m.subTag
			};

			c.on(p,"click",function(q){
				q=q||window.event;
				c.lang.eventCenter.dispatchEvent("view.needStatic",{
					p:73,
					data:{
						e:q,
						args:l
					}
				})
			});
			c.on(j,"click",function(q){
				q=q||window.event;
				c.lang.eventCenter.dispatchEvent("view.needStatic",{
					p:74,
					data:{
						e:q,
						args:l
					}
				})
			});
			c.on(k,"click",function(q){
				q=q||window.event;
				c.lang.eventCenter.dispatchEvent("view.needStatic",{
					p:75,
					data:{
						e:q,
						args:l
					}
				})
			})
		},
		addHoverHandler:function(j){
			var k=this;
			c.on(j,"mouseover",function(l){
				l=l||window.event;
				l=k._fixEvent(l);
				k._withinElement.call(j,l,function(m){
					c.dom.addClass(this,"hover");
					alert(hover);
					c.lang.eventCenter.dispatchEvent("view.flowObjMouseover",{
						el:j,
						data:j.data
					})
				})
			});
			c.on(j,"mouseout",function(l){
				l=l||window.event;
				l=k._fixEvent(l);
				k._withinElement.call(j,l,function(m){
					c.dom.removeClass(j,"hover");
					c.lang.eventCenter.dispatchEvent("view.flowObjMouseout",{
						el:j
					})
				})
			})
		},
		removeHoverHandler:function(j){},
		_fixEvent:function(k){
			var j=new c.event.EventArg(k);
			j.target=j.target||document;
			if(!j.relatedTarget&&j.fromElement){
				j.relatedTarget=j.fromElement===j.target?j.toElement:j.fromElement
			}
			return j
		},
		_withinElement:function(k,m){
			var j=k.relatedTarget;
			try{
				if(j&&j!==document&&!j.parentNode){
					return
				}while(j&&j!==this){
					j=j.parentNode
				}
				if(j!==this){
					m.call(this,k)
				}
			}catch(l){}
		},
		addImgsByData:function(j){
			for(var k in j){
				var l=j[k];
				this.addImg(l)
			}
			c.lang.eventCenter.dispatchEvent("view.updated")
		},
		resetImgs:function(j,k){
			this.resetColList();
			this.conHeight=0;
			this.resetDomList(k);
			if(j.length!=0){
				this.addImgsByData(j)
			}else{}
		},
		showNoMore:function(){
			this.noMore.style.display="block"
		},
		hideNoMore:function(){
			this.noMore.style.display="none"
		},
		updatePosition:function(m,k){
			var l=this.colList,j=l.length;
			if(j>m){
				l[m]+=(k+this.marginBottom)
			}
			this.conHeight=this.getMaxHeight();
			this.container.style.height=this.conHeight+"px"
		},
		calImageHeight:function(j){
			return j.thumbnail_height
		},
		calImageWidth:function(j){
			return j.thumbnail_width
		},
		getPosition:function(){
			var m=0,l=this.colList,k=l.length,j=l[0],p=this.colWidth,o=this.marginRight;
			for(var n=1;n<k;n++){
				if(l[n]<j){
					m=n;
					j=l[n]
				}
			}
			return{
				index:m,
				left:m*(p+o),
				top:j
			}
		},
		getMaxHeight:function(){
			var j=0,l=this.colList;
			for(var k in l){
				j=Math.max(l[k],j)
			}
			return j
		},
		showLoading:function(){
			this.loading.style.display="block"
		},
		hideLoading:function(){
			this.loading.style.display="none"
		},
		showToTop:function(){
			this.toTop.style.display="block"
		},
		hideToTop:function(){
			this.toTop.style.display="none"
		},
		reset:function(){
			this.conHeight=0;
			this.conWidth=0;
			this.domList=[];
			this.colList=[];
			this.domTotal=0;
			this.minHeight=0;
			this.lastScrollPosition=0;
			this.container.innerHTML=""
		}
	};

	d=f;
	return d
},["/static/common/lib/tangram/base/base.js","/static/image/ui/waterfall/database/database.js","/static/image/ui/net/net.js","/static/image/ui/waterfall/dataadapter/dataadapter.js","/static/image/ui/rec_sites/rec_sites.js","/static/image/ui/personal/personal.js"]);
F.module("/static/image/ui/personal/personal.js",function(a,d){
	var c=a("/static/common/lib/tangram/base/base.js");
	BD=window.BD||{};

	BD.IMG=BD.IMG||{};

	BD.IMG.ext;
	function i(){}
	var h='<a href="javascript:void(0);" title="\u70b9\u51fb\u4e0b\u8f7d\u8be5\u56fe\u7247" target="_blank" class="download_btn"></a>';
	var b="i?tn=download&word=download&ie=utf8";
	var g=function(k,l){
		var j=f(h,l);
		if(!!j){
			k.appendChild(j)
		}
		return j
	};

	var f=function(l,j){
		var k=c.string.format(l,j);
		return e(k)
	};

	var e=function(l){
		if(!l||l.replace(/\s*/,"")==""){
			return null
		}
		var k=document.createElement("div");
		k.innerHTML=l;
		var j=k.children;
		if(j.length>1){
			return j
		}else{
			if(j.length==1){
				return j[0]
			}else{
				return null
			}
		}
	};

	i.prototype={
		constructor:i,
		insert:function(j,m,n){
			var k=document.createElement("div");
			c.dom.addClass(k,"personal_container");
			var l=g(k,m);
			j.appendChild(k);
			this.parentCon=j;
			this.container=k;
			this.downloadCon=l;
			this.data=m;
			this.setDownLoadLink(m);
			this.addClickEvent();
			if(n){
				this.show()
			}
			return this
		},
		show:function(){
			this.container.style.display="block"
		},
		addClickEvent:function(){
			var j=this;
			this.downloadCon.onclick=function(){
				j.downloadImg();
				return false
			}
		},
		render:function(l,k){
			if(l){
				this.setDownLoadLink(l)
			}
			if(k){
				for(var j in k){
					if(!k.hasOwnProperty(j)){
						return
					}
					this.container.style[j]=k[j]
				}
			}
		},
		downloadImg:function(){
			window.open(this.downloadLink,"_self")
		},
		setDownLoadLink:function(j){
			c.object.extend(this.data,j);
			this.downloadLink=b+"&"+c.url.jsonToQuery(this.data)
		},
		rePut:function(n,k,j,p){
			n=Math.max(n,0);
			var o=false,q=0,m=0;
			if(j<=200||p<=200){
				o=true
			}
			if(o){
				q=n-25;
				m=k+10
			}else{
				q=n+10;
				m=k+20
			}
			this.render(null,{
				top:q+"px",
				right:m+"px"
			})
		}
	};

	d=i;
	return d
},["/static/common/lib/tangram/base/base.js"]);
F.module("/static/image/ui/zhuanti/zhuanti.js",function(d,f){
	var e=d("/static/common/lib/tangram/base/base.js");
	var a=d("/static/image/ui/nav/nav.js");
	var j=e.dom.g("btn-zhuanti");
	var c=e.dom.g("zhuanti-frame");
	var b="http://guangjie.hao123.com/iframe/image";
	function l(){
		h();
		e.lang.eventCenter.addEventListener("Nav.zhuantiClosed",k)
	}
	function i(m){
		e.event.preventDefault(m);
		g()
	}
	function h(){
		e.on(j,"click",i)
	}
	function g(){
		a.toggle(-1);
		c.src=b;
		e.lang.eventCenter.dispatchEvent("Nav.zhuantiOpen");
		c.style.display="block";
		e.dom.addClass(j,"curr")
	}
	function k(){
		c.src="about:blank";
		c.style.display="none";
		e.dom.removeClass(j,"curr")
	}
	f={
		init:l,
		open:g,
		close:k
	};

	return f
},["/static/common/lib/tangram/base/base.js","/static/image/ui/nav/nav.js"]);
F.module("/static/image/ui/navrouter/navrouter.js",function(b,e){
	var a=b("/static/image/ui/nav/nav.js");
	var f=b("/static/image/ui/zhuanti/zhuanti.js");
	function j(){
		T.lang.eventCenter.addEventListener("Nav.tagsChanged",h);
		T.lang.eventCenter.addEventListener("Nav.zhuantiOpen",d)
	}
	function c(){
		var m=i();
		var l=m[0];
		var k=m[1];
		if(f&&"zhuanti"===l){
			f.open();
			a.toggle(-1)
		}else{
			a.toggleByName(l,k);
			f&&f.close()
		}
	}
	function d(){
		g("zhuanti")
	}
	function h(k){
		g(k.mainTag,k.subTag)
	}
	function g(){
		var m=[];
		for(var n=0,k=arguments.length;n<k;n++){
			m.push(encodeURIComponent(arguments[n]))
		}
		location.hash=m.join("|")
	}
	function i(){
		var l=decodeURIComponent(location.hash.replace(/^#/,""));
		var k=l.split("|");
		return k
	}
	e={
		init:j,
		run:c
	};

	return e
},["/static/image/ui/nav/nav.js","/static/image/ui/zhuanti/zhuanti.js"]);
F.module("/static/image/ui/list/decorators/decorators.js",function(c,b){
	var a=c("/static/image/ui/list/decorators/halloween/halloween.js");
	var d=function(){
		a.trigger(function(){
			a.init();
			a.render()
		})
	};

	b={
		init:d
	};

	return b
},["/static/image/ui/list/decorators/halloween/halloween.js"]);
F.module("/static/image/ui/list/decorators/halloween/trigger.js",function(b,a){
	var c=function(){
		var d=T.dom.query("#nav > ul.main > li.item:first");
		if(d&&d[0]){
			return/\>\u4e07\u5723\u8282\</i.test(d[0].innerHTML)
		}
		return false
	};

	a=function(d){
		if(c()){
			d()
		}
	};

	return a
},[]);
F.module("/static/image/ui/list/decorators/halloween/halloween.js",function(g,i){
	var f=g("/static/image/ui/list/decorators/halloween/trigger.js");
	var a=g("/static/image/ui/nav/nav.js");
	var m,b,h;
	var k={
		title:'<div class="title clearfix"><b>\u4e07\u5723\u8282\u4ecb\u7ecd</b><span></span></div>',
		content:'<p class="halloween-info">\u4e07\u5723\u8282\uff08HALLOWEEN\uff09\u4e3a\u6bcf\u5e74\u768411\u67081\u65e5\uff0c\u6e90\u81ea\u53e4\u4ee3\u51ef\u5c14\u7279\u6c11\u65cf(Celtic)\u7684\u65b0\u5e74\u8282\u5e86\uff0c\u6b64\u65f6\u4e5f\u662f\u796d\u7940\u4ea1\u9b42\u7684\u65f6\u523b\uff0c\u5728\u907f\u514d\u6076\u7075\u5e72\u6270\u7684\u540c\u65f6\uff0c\u4e5f\u4ee5\u98df\u7269\u796d\u62dc\u7956\u7075\u53ca\u5584\u7075\u4ee5\u7948\u5e73\u5b89\u6e21\u8fc7\u4e25\u51ac\uff0c\u662f\u897f\u65b9\u4f20\u7edf\u8282\u65e5\u3002\u5f53\u665a\u5c0f\u5b69\u4f1a\u7a7f\u4e0a\u5316\u5986\u670d\uff0c\u6234\u4e0a\u9762\u5177\uff0c\u6328\u5bb6\u6328\u6237\u6536\u96c6\u7cd6\u679c\u2026<a href="http://baike.baidu.com/view/2532.htm" target="_blank">\u67e5\u770b\u66f4\u591a&gt;</a></p>',
		name:"\u4e07\u5723\u8282"
	};

	var l=function(){
		m=T.dom.query("#nav > ul.main > li.item:first")[0];
		b=T.g("nav");
		h=T.g("rec_sites_wrapper");
		T.lang.eventCenter.addEventListener("Ecom.relsites.reset",function(n){
			if(n.tag===k.name){
				c()
			}
		})
	};

	var e=function(){
		d();
		j()
	};

	var d=function(){
		var n=g("/static/image/ui/tip/tip.js");
		var o=new n({
			html:'<span class="hot"></span>'
		});
		o.init();
		o.appendTo(m)
	};

	var j=function(){
		var n=document.createElement("div");
		T.dom.insertAfter(n,b);
		n.onclick=function(){
			a.toggle(0)
		};

		n.className="halloween-banner"
	};

	var c=function(){
		h.innerHTML=k.title+k.content
	};

	i={
		init:l,
		render:e,
		trigger:f
	};

	return i
},["/static/image/ui/list/decorators/halloween/trigger.js","/static/image/ui/nav/nav.js","/static/image/ui/tip/tip.js"]);
F.module("/static/image/ui/tip/tip.js",function(d,a){
	var c=d("/static/common/lib/tangram/base/base.js");
	var e=document.createElement("div");
	var b=a=function(f){
		f=f||{};

		e.innerHTML=f.html;
		this.$element=null
	};

	c.extend(b.prototype,{
		init:function(){
			this.$element=this._getTplElement(e)[0]
		},
		_getTplElement:function(k){
			var h=k.childNodes;
			var g=[];
			for(var j=0,f=h.length;j<f;j++){
				g.push(h[j])
			}
			return g
		},
		appendTo:function(f,g){
			f.appendChild(this.$element);
			if(g){
				this.setOffset(g)
			}
		},
		setOffset:function(h){
			var f=h||{};

			var g=this.$element;
			if(typeof f.top==="number"){
				g.style.top=f.top+"px"
			}
			if(typeof f.left==="number"){
				g.style.left=f.left+"px"
			}
			if(typeof f.bottom==="number"){
				g.style.top=f.bottom+"px"
			}
			if(typeof f.right==="number"){
				g.style.left=f.right+"px"
			}
		},
		show:function(){
			c.dom.show(this.$element)
		},
		hide:function(){
			c.dom.hide(this.$element)
		}
	});
	return a
},["/static/common/lib/tangram/base/base.js"]);
F.module("/static/image/ui/shitu/shitu.js",function(b,a){
	(function(){
		var c;
		function d(){
			this.point=document.getElementById("point");
			this.content=document.getElementById("stsug");
			this.submitobj=document.getElementById("sbobj");
			this.form=document.getElementById("form1");
			this.form2=document.getElementById("form2");
			this.file=document.getElementById("stfile");
			this.url=document.getElementById("stuurl");
			this.entry=document.getElementById("sttb");
			this.close=document.getElementById("closest");
			this.tips=document.getElementById("stmore");
			this.hpobj=document.getElementById("hp");
			this.sthp=document.getElementById("sthelp");
			this.draghp=document.getElementById("dragtip");
			this.kw=document.getElementById("kw");
			this.dragts=document.getElementById("dragtg");
			this.clickurl="http://stu.baidu.com";
			this.onuploadtg=0;
			this.ftn=document.getElementById("stftn").value||"";
			this.isDisplay=0;
			this.isSubmit=0;
			this.isIe=/msie (\d+\.\d+)/i.test(navigator.userAgent)?(document.documentMode||+RegExp["\x241"]):undefined;
			this.isOpera=/opera(\/| )(\d+(\.\d+)?)(.+?(version\/(\d+(\.\d+)?)))?/i.test(navigator.userAgent)?+(RegExp["\x246"]||RegExp["\x242"]):undefined
		}
		d.prototype={
			init:function(){
				var g=this,f=g.addEvent,e=g.content;
				g.initdisplay();
				f(window,"load",function(h){
					g.initdisplay()
				});
				f(document,"click",function(h){
					g.hiddenContent(h,0);
					window.setTimeout(function(){
						if(!g.isDisplay&&!g.isSubmit){
							g.closest()
						}
					},10)
				});
				f(document,"mousemove",function(h){
					g.hiddenContent(h,1);
					window.setTimeout(function(){
						if(!g.isDisplay&&!g.isSubmit){
							g.closest()
						}
					},10)
				});
				f(g.entry,"click",function(h){
					g._imgReq(g.clickurl+"/5.gif?rk=1&ftn="+g.ftn+"&t="+(new Date()).getTime());
					g.isDisplay=1;
					g.displayst()
				});
				f(g.sthp,"mouseover",function(h){
					g.tips.style.display=""
				});
				f(g.sthp,"mouseout",function(h){
					c=setTimeout(function(){
						g.tips.style.display="none"
					},1000)
				});
				f(g.tips,"mouseover",function(h){
					h=window.event||h;
					if(g.fixedMouse(h,g.tips)){
						if(c){
							clearTimeout(c)
						}
					}
				});
				f(g.tips,"mouseout",function(h){
					h=window.event||h;
					if(g.fixedMouse(h,g.tips)){
						g.tips.style.display="none"
					}
				});
				f(g.file,"change",function(h){
					g.getValue()
				});
				f(g.submitobj,"click",function(i){
					var j=g.url.value,h=(j=="")||!g.checkImgType(j),i=window.event||i;
					if(h){
						alert("\u60a8\u7684\u6587\u4ef6\u683c\u5f0f\u4e0d\u6b63\u786e\u6216\u56fe\u7247\u7f51\u5740\u8fc7\u957f\u3002\u652f\u6301jpg\u3001gif\u3001png\u3001jpeg\u3001bmp\u683c\u5f0f\u56fe\u7247\u53ca250\u4e2a\u5b57\u7b26\u5185\u7684\u56fe\u7247\u7f51\u5740\u3002");
						if(document.all){
							i.returnValue=false
						}else{
							i.preventDefault()
						}
						this.form.reset()
					}else{
						g.point.style.display="block"
					}
				});
				f(g.close,"click",function(h){
					if(g.onuploadtg){
						g.isIe?window.document.execCommand("Stop"):window.stop()
					}
					g._imgReq(g.clickurl+"/5.gif?gb=1&ftn="+g.ftn+"&t="+(new Date()).getTime());
					g.form.reset();
					g.form2.reset();
					g.isSubmit=0;
					if(g.onuploadtg){
						g.draghp.style.display="none";
						g.point.style.display="none";
						g.onuploadtg=0;
						return
					}
					g.closest()
				});
				if(g.isOpera||!window.FileReader){
					return
				}
				f(document,"dragenter",function(h){
					if(g.sugTg!==1){
						return
					}
					g.point.style.display="none";
					g.displayst();
					g.draghp.style.display=""
				});
				f(document,"dragover",function(h){
					if(g.sugTg!==1){
						return
					}
					g.point.style.display="none";
					g.displayst();
					g.draghp.style.display=""
				});
				f(e,"dragenter",function(h){
					h.stopPropagation();
					h.preventDefault()
				});
				f(e,"dragover",function(h){
					h.stopPropagation();
					h.preventDefault()
				});
				f(e,"drop",function(j){
					j.stopPropagation();
					j.preventDefault();
					g.isSubmit=1;
					if(j.dataTransfer.files.length){
						try{
							g.handlerFiles(j.dataTransfer.files)
						}catch(m){
							return
						}
					}else{
						if(j.dataTransfer.types.indexOf&&-1!=j.dataTransfer.types.indexOf("text/html")||j.dataTransfer.types.contains&&-1!=j.dataTransfer.types.contains("text/html")){
							var l=document.createElement("div");
							l.innerHTML=j.dataTransfer.getData("text/html");
							var k=l.getElementsByTagName("img");
							if(k&&k[0]&&k[0].src){
								var h=document.createElement("input");
								h.name="drag";
								h.value="1";
								h.type="hidden";
								g.form.appendChild(h);
								if(0==k[0].src.indexOf("data:")){
									var i=k[0].alt||k[0].title||"";
									g.submitForm2(k[0].src,i,"image")
								}else{
									g.url.value=k[0].src;
									g.form.submit()
								}
							}else{
								return
							}
						}else{
							if(j.dataTransfer.types.indexOf&&-1!=j.dataTransfer.types.indexOf("text/uri-list")){
								g.url.value=j.dataTransfer.getData("text/uri-list");
								g.form.submit()
							}else{
								return
							}
						}
					}
					g.point.style.display="block"
				})
			},
			initdisplay:function(){
				var e=this;
				if(e.entry){
					e.entry.style.display=""
				}
				if(e.dragts){
					e.closedg()
				}
				if(e.form){
					e.form.reset()
				}
				if(e.point){
					e.point.style.display="none"
				}
				return
			},
			closedg:function(){
				var e=this;
				if(!e.isOpera&&window.FileReader){
					return
				}
				if(this.dragts){
					this.dragts.style.display="none"
				}
				return
			},
			hiddenContent:function(i,g){
				var i=window.event||i,h=i.srcElement||i.target,j,f=this;
				while(h&&h.tagName!="BODY"&&h.tagName!="HTML"&&h.getAttribute){
					j=h.getAttribute("id");
					if(j=="stcontent"){
						break
					}
					h=h.parentNode
				}
				if(j=="stcontent"){
					return
				}
				if(g==0){
					f.closest();
					return
				}else{
					f.draghp.style.display="none";
					return
				}
			},
			fixedMouse:function(j,i){
				var h,f=j.type.toLowerCase(),g=this;
				if(f=="mouseover"){
					h=j.relatedTarget||j.fromElement
				}else{
					if(f=="mouseout"){
						h=j.relatedTarget||j.toElement
					}else{
						return true
					}
				}
				return h&&h.prefix!="xul"&&!this.contains(i,h)&&h!==i
			},
			contains:function(e,f){
				return e.contains?e!=f&&e.contains(f):!!(e.compareDocumentPosition(f)&16)
			},
			addEvent:function(g,f,e){
				if(g.attachEvent){
					g["e"+f+e]=e;
					g[f+e]=function(h){
						g["e"+f+e](window.event||h)
					};

					g.attachEvent("on"+f,g[f+e])
				}else{
					g.addEventListener(f,e,false)
				}
			},
			removeEvent:function(g,f,e){
				if(g.detachEvent){
					g.detachEvent("on"+f,g[f+e]);
					g[f+e]=null
				}else{
					g.removeEventListener(f,e,false)
				}
			},
			closest:function(){
				this.content.style.display="none";
				if(this.hpobj){
					this.hpobj.style.display=""
				}
				this.sugTg=0;
				this.isDisplay=0
			},
			displayst:function(){
				this.point.style.display="none";
				this.content.style.display="";
				if(this.hpobj){
					this.hpobj.style.display="none"
				}
				this.sugTg=1;
				this.url.focus()
			},
			checkImgType:function(g){
				var f=new Array(".jpg",".gif",".jpeg",".png",".bmp");
				var k=f.length;
				var m=g.toLowerCase();
				m=m.replace(/(^\s*)/g,"");
				m=m.replace(/(\s*$)/g,"");
				var j=m.length;
				var e=m.substring(j-4,j);
				var l=m.substring(j-5,j);
				for(var h=0;h<k;h++){
					if((e==f[h])||(l==f[h])){
						return true
					}
				}
				return false
			},
			getValue:function(){
				var i=this.file,h=this.url,e=this.point,f=this.form2;
				e.style.display="none";
				var g=i.value;
				h.value=g;
				var j=(g!="")&&this.checkImgType(g);
				this.submitForm(j,f)
			},
			handlerFiles:function(i){
				var h=this;
				if(h.isOpera||!window.FileReader){
					return
				}
				var g=i[0],f=h.file,e=new FileReader();
				e.onload=(function(j){
					return function(l){
						var m=l.target.result,k=j.type;
						h.submitForm2(m,j.name,k)
					}
				})(g);
				e.readAsDataURL(g)
			},
			_imgReq:function(e){
				if(!e){
					return
				}
				var g="log__"+(new Date()).getTime(),f=window[g]=new Image();
				f.onload=f.onerror=function(){
					window[g]=null
				};

				f.src=e;
				f=null
			},
			submitForm:function(f,e){
				if(!f){
					alert("\u60a8\u7684\u6587\u4ef6\u683c\u5f0f\u4e0d\u6b63\u786e\u6216\u56fe\u7247\u7f51\u5740\u8fc7\u957f\u3002\u652f\u6301jpg\u3001gif\u3001png\u3001jpeg\u3001bmp\u683c\u5f0f\u56fe\u7247\u53ca250\u4e2a\u5b57\u7b26\u5185\u7684\u56fe\u7247\u7f51\u5740\u3002");
					this.point.style.display="none";
					this.draghp.style.display="none";
					e.reset();
					return false
				}else{
					this.entry.style.zIndex="2";
					this.point.style.display="block";
					this.onuploadtg=1;
					e.submit();
					return true
				}
			},
			submitForm2:function(h,g,i){
				var j=this,f,l=document.getElementById("filename"),e=i.indexOf("image")!=-1;
				var k=h.replace(/\+/g,"-");
				if(!document.getElementById("dragimage")){
					f=document.createElement("input");
					f.name="dragimage";
					f.id="dragimage";
					f.type="hidden";
					j.form2.appendChild(f)
				}else{
					f=document.getElementById("dragimage")
				}
				f.value=k;
				l.value=g||"";
				j.submitForm(e,j.form2)
			}
		};

		setTimeout(function(){
			var e=new d();
			e.init()
		},500)
	})();
	return a
},[]);