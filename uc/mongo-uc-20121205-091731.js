
/** uc_access indexes **/
db.getCollection("uc_access").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** uc_app_info indexes **/
db.getCollection("uc_app_info").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** uc_app_user indexes **/
db.getCollection("uc_app_user").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** uc_base_info indexes **/
db.getCollection("uc_base_info").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** uc_base_info indexes **/
db.getCollection("uc_base_info").ensureIndex({
  "username": 1
},[
  
]);

/** uc_help_category indexes **/
db.getCollection("uc_help_category").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** uc_help_info indexes **/
db.getCollection("uc_help_info").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** uc_help_info indexes **/
db.getCollection("uc_help_info").ensureIndex({
  "id": NumberInt(1)
},{
  "unique": true
});

/** uc_help_info indexes **/
db.getCollection("uc_help_info").ensureIndex({
  "tid": NumberInt(1)
},[
  
]);

/** uc_help_info indexes **/
db.getCollection("uc_help_info").ensureIndex({
  "cid": NumberInt(1)
},[
  
]);

/** uc_help_info indexes **/
db.getCollection("uc_help_info").ensureIndex({
  "keywords": NumberInt(1)
},[
  
]);

/** uc_help_info indexes **/
db.getCollection("uc_help_info").ensureIndex({
  "keyword": NumberInt(1)
},[
  
]);

/** uc_help_info_comment indexes **/
db.getCollection("uc_help_info_comment").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** uc_help_info_comment indexes **/
db.getCollection("uc_help_info_comment").ensureIndex({
  "hid": NumberInt(1),
  "ishelp": NumberInt(1)
},[
  
]);

/** uc_help_related indexes **/
db.getCollection("uc_help_related").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** uc_help_type indexes **/
db.getCollection("uc_help_type").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** uc_help_type indexes **/
db.getCollection("uc_help_type").ensureIndex({
  "id": NumberInt(1)
},{
  "unique": true
});

/** uc_node indexes **/
db.getCollection("uc_node").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** uc_node indexes **/
db.getCollection("uc_node").ensureIndex({
  "id": NumberInt(1)
},{
  "unique": true
});

/** uc_role indexes **/
db.getCollection("uc_role").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** uc_role indexes **/
db.getCollection("uc_role").ensureIndex({
  "id": NumberInt(1)
},{
  "unique": true
});

/** uc_user indexes **/
db.getCollection("uc_user").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** uc_user indexes **/
db.getCollection("uc_user").ensureIndex({
  "id": NumberInt(1)
},{
  "unique": true
});

/** uc_user_authorized indexes **/
db.getCollection("uc_user_authorized").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** uc_user_login_log indexes **/
db.getCollection("uc_user_login_log").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** uc_user_login_log indexes **/
db.getCollection("uc_user_login_log").ensureIndex({
  "id": NumberInt(1)
},{
  "unique": true
});

/** uc_user_login_log indexes **/
db.getCollection("uc_user_login_log").ensureIndex({
  "uid": NumberInt(1),
  "login_time": NumberInt(1)
},[
  
]);

/** uc_user_operation_log indexes **/
db.getCollection("uc_user_operation_log").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** uc_user_operation_log indexes **/
db.getCollection("uc_user_operation_log").ensureIndex({
  "id": NumberInt(1)
},{
  "unique": true
});

/** uc_user_operation_log indexes **/
db.getCollection("uc_user_operation_log").ensureIndex({
  "uid": NumberInt(1),
  "optime": NumberInt(1)
},[
  
]);

/** system.indexes records **/
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "ns": "uc.uc_access",
  "name": "_id_"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "ns": "uc.uc_node",
  "name": "_id_"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "ns": "uc.uc_role",
  "name": "_id_"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "ns": "uc.uc_user",
  "name": "_id_"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "ns": "uc.uc_base_info",
  "name": "_id_"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "ns": "uc.uc_app_info",
  "name": "_id_"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "ns": "uc.uc_app_user",
  "name": "_id_"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "username": 1
  },
  "ns": "uc.uc_base_info",
  "name": "username_1"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "id": NumberInt(1)
  },
  "unique": true,
  "ns": "uc.uc_node",
  "name": "id",
  "dropDups": false,
  "background": false
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "ns": "uc.uc_user_login_log",
  "name": "_id_"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "ns": "uc.uc_user_operation_log",
  "name": "_id_"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "id": NumberInt(1)
  },
  "unique": true,
  "ns": "uc.uc_user_login_log",
  "name": "id",
  "dropDups": false,
  "background": false
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "id": NumberInt(1)
  },
  "unique": true,
  "ns": "uc.uc_user_operation_log",
  "name": "id",
  "dropDups": false,
  "background": false
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "id": NumberInt(1)
  },
  "unique": true,
  "ns": "uc.uc_user",
  "name": "id",
  "dropDups": false,
  "background": false
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "id": NumberInt(1)
  },
  "unique": true,
  "ns": "uc.uc_role",
  "name": "id",
  "dropDups": false,
  "background": false
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "ns": "uc.uc_help_info",
  "name": "_id_"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "ns": "uc.uc_help_type",
  "name": "_id_"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "id": NumberInt(1)
  },
  "unique": true,
  "ns": "uc.uc_help_info",
  "name": "id",
  "dropDups": false,
  "background": false
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "id": NumberInt(1)
  },
  "unique": true,
  "ns": "uc.uc_help_type",
  "name": "id",
  "dropDups": false,
  "background": false
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "ns": "uc.uc_help_category",
  "name": "_id_"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "tid": NumberInt(1)
  },
  "ns": "uc.uc_help_info",
  "name": "tid",
  "dropDups": false,
  "background": false
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "cid": NumberInt(1)
  },
  "ns": "uc.uc_help_info",
  "name": "cid",
  "dropDups": false,
  "background": false
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "keywords": NumberInt(1)
  },
  "ns": "uc.uc_help_info",
  "name": "kw",
  "dropDups": false,
  "background": false
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "ns": "uc.uc_help_related",
  "name": "_id_"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "ns": "uc.uc_help_info_comment",
  "name": "_id_"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "hid": NumberInt(1),
    "ishelp": NumberInt(1)
  },
  "ns": "uc.uc_help_info_comment",
  "name": "hi",
  "dropDups": false,
  "background": false
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "uid": NumberInt(1),
    "login_time": NumberInt(1)
  },
  "ns": "uc.uc_user_login_log",
  "name": "uid_ltime",
  "dropDups": false,
  "background": false
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "uid": NumberInt(1),
    "optime": NumberInt(1)
  },
  "ns": "uc.uc_user_operation_log",
  "name": "uid_optime",
  "dropDups": false,
  "background": false
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "keyword": NumberInt(1)
  },
  "ns": "uc.uc_help_info",
  "name": "keyword",
  "dropDups": false,
  "background": false
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "ns": "uc.uc_user_authorized",
  "name": "_id_"
});

/** uc_access records **/
db.getCollection("uc_access").insert({
  "_id": ObjectId("50bdcb7632f364680d000003"),
  "role_id": NumberInt(10),
  "node_id": NumberInt(1)
});
db.getCollection("uc_access").insert({
  "_id": ObjectId("50bdcb7632f364680d000004"),
  "role_id": NumberInt(10),
  "node_id": NumberInt(3)
});
db.getCollection("uc_access").insert({
  "_id": ObjectId("50bdcb7632f364680d000005"),
  "role_id": NumberInt(10),
  "node_id": NumberInt(4)
});
db.getCollection("uc_access").insert({
  "_id": ObjectId("50bdcb7632f364680d000006"),
  "role_id": NumberInt(10),
  "node_id": NumberInt(5)
});
db.getCollection("uc_access").insert({
  "_id": ObjectId("50bdcb7632f364680d000007"),
  "role_id": NumberInt(10),
  "node_id": NumberInt(6)
});
db.getCollection("uc_access").insert({
  "_id": ObjectId("50bdcb7632f364680d000008"),
  "role_id": NumberInt(10),
  "node_id": NumberInt(7)
});
db.getCollection("uc_access").insert({
  "_id": ObjectId("50bdcb7632f364680d000009"),
  "role_id": NumberInt(10),
  "node_id": NumberInt(17)
});
db.getCollection("uc_access").insert({
  "_id": ObjectId("50bdcb7632f364680d00000a"),
  "role_id": NumberInt(10),
  "node_id": NumberInt(2)
});
db.getCollection("uc_access").insert({
  "_id": ObjectId("50bdcb7632f364680d00000b"),
  "role_id": NumberInt(10),
  "node_id": NumberInt(10)
});
db.getCollection("uc_access").insert({
  "_id": ObjectId("50bdcb7632f364680d00000c"),
  "role_id": NumberInt(10),
  "node_id": NumberInt(8)
});
db.getCollection("uc_access").insert({
  "_id": ObjectId("50bdcb7632f364680d00000d"),
  "role_id": NumberInt(10),
  "node_id": NumberInt(13)
});
db.getCollection("uc_access").insert({
  "_id": ObjectId("50bdcb7632f364680d00000e"),
  "role_id": NumberInt(10),
  "node_id": NumberInt(9)
});
db.getCollection("uc_access").insert({
  "_id": ObjectId("50bdcb7632f364680d00000f"),
  "role_id": NumberInt(10),
  "node_id": NumberInt(30)
});
db.getCollection("uc_access").insert({
  "_id": ObjectId("50bdcb7632f364680d000010"),
  "role_id": NumberInt(10),
  "node_id": NumberInt(14)
});
db.getCollection("uc_access").insert({
  "_id": ObjectId("50bdcb7632f364680d000011"),
  "role_id": NumberInt(10),
  "node_id": NumberInt(18)
});
db.getCollection("uc_access").insert({
  "_id": ObjectId("50bdcb7632f364680d000012"),
  "role_id": NumberInt(10),
  "node_id": NumberInt(19)
});
db.getCollection("uc_access").insert({
  "_id": ObjectId("50bdcb7632f364680d000013"),
  "role_id": NumberInt(10),
  "node_id": NumberInt(22)
});
db.getCollection("uc_access").insert({
  "_id": ObjectId("50bdcb7632f364680d000014"),
  "role_id": NumberInt(10),
  "node_id": NumberInt(11)
});
db.getCollection("uc_access").insert({
  "_id": ObjectId("50bdcb7632f364680d000015"),
  "role_id": NumberInt(10),
  "node_id": NumberInt(23)
});
db.getCollection("uc_access").insert({
  "_id": ObjectId("50bdcb7632f364680d000016"),
  "role_id": NumberInt(10),
  "node_id": NumberInt(25)
});
db.getCollection("uc_access").insert({
  "_id": ObjectId("50bdcb7632f364680d000017"),
  "role_id": NumberInt(10),
  "node_id": NumberInt(24)
});

/** uc_app_info records **/
db.getCollection("uc_app_info").insert({
  "_id": ObjectId("50af43a3e408cd13e84e5a91"),
  "appcode": "sxxl",
  "appid": NumberInt(1),
  "appkey": "WWW_JKHL===-JJIALKHLA",
  "appname": "服装网",
  "id": NumberInt(1),
  "listener": "http:\/\/www.sxxl.d\/Test\/testListener",
  "rurl": "http:\/\/www.sxxl.com",
  "status": NumberInt(2)
});
db.getCollection("uc_app_info").insert({
  "_id": ObjectId("50af47ea32f3645c2a000049"),
  "appcode": "xiebao",
  "appid": NumberInt(2),
  "appkey": "sdu3m&^^3kk35456",
  "appname": "鞋包网",
  "id": NumberInt(4),
  "listener": "http:\/\/www.xiebaowang.com",
  "rurl": "http:\/\/www.xiebaowang.com",
  "status": NumberInt(2)
});

/** uc_app_user records **/
db.getCollection("uc_app_user").insert({
  "_id": ObjectId("50aaea99ac0c60240d000001"),
  "app1_id": 1,
  "app1_sync": 2,
  "app1_uid": 72385,
  "app2_id": 2,
  "app2_sync": NumberInt(1),
  "app2_uid": 7225,
  "app3_id": 3,
  "app3_sync": NumberInt(1),
  "app3_uid": 7255,
  "password": "333221",
  "uid": 2
});

/** uc_base_info records **/
db.getCollection("uc_base_info").insert({
  "_id": ObjectId("50bd96e432f3642c1b000000"),
  "username": "diexun_tech",
  "password": "e10adc3949ba59abbe56e057f20f883e",
  "appid": NumberInt(1),
  "status": NumberInt(2),
  "id": NumberInt(1),
  "uid": NumberInt(1)
});
db.getCollection("uc_base_info").insert({
  "_id": ObjectId("50bd96f032f364540a000004"),
  "username": "test01",
  "password": "e10adc3949ba59abbe56e057f20f883e",
  "appid": NumberInt(1),
  "status": NumberInt(2),
  "id": NumberInt(2),
  "uid": NumberInt(2)
});

/** uc_help_category records **/
db.getCollection("uc_help_category").insert({
  "_id": ObjectId("50b4383332f3648801000000"),
  "appid": [
    NumberInt(4)
  ],
  "id": NumberInt(2),
  "name": "密码&安全",
  "order_id": NumberInt(2),
  "parent_id": NumberInt(0),
  "status": NumberInt(2),
  "system_time": NumberInt(1354590746)
});
db.getCollection("uc_help_category").insert({
  "_id": ObjectId("50b4383c32f364bc1d000000"),
  "appid": [
    NumberInt(1)
  ],
  "id": NumberInt(3),
  "name": "我的蝶讯",
  "order_id": NumberInt(3),
  "parent_id": NumberInt(0),
  "status": NumberInt(2),
  "system_time": NumberInt(1354590749)
});
db.getCollection("uc_help_category").insert({
  "_id": ObjectId("50b4384732f364181e000000"),
  "appid": [
    NumberInt(1)
  ],
  "id": NumberInt(4),
  "name": "购买会员",
  "order_id": NumberInt(4),
  "parent_id": NumberInt(0),
  "status": NumberInt(2),
  "system_time": NumberInt(1354590751)
});
db.getCollection("uc_help_category").insert({
  "_id": ObjectId("50b4382532f364dc0b000002"),
  "appid": [
    NumberInt(1)
  ],
  "id": NumberInt(1),
  "name": "会员注册&登录",
  "order_id": NumberInt(1),
  "parent_id": NumberInt(0),
  "status": NumberInt(2),
  "system_time": NumberInt(1354590743)
});

/** uc_help_info records **/
db.getCollection("uc_help_info").insert({
  "_id": ObjectId("50b07daa32f3644811000003"),
  "_keywords": "怎样注册夺 注册 会员 蝶讯 服装网 会员注册&登录 我的蝶讯 内容相关 帐号相关",
  "appid": NumberInt(1),
  "cid": [
    NumberInt(1),
    NumberInt(3)
  ],
  "content": "夺<img src=\"\/images\/2012\/1124\/2416\/aaf14d6080bdf4d66e40b698a239313344979.gif\" alt=\"\" \/><br \/>",
  "id": NumberInt(2),
  "ispush": [
    NumberInt(2)
  ],
  "keywords": [
    "注册",
    "会员",
    "蝶讯"
  ],
  "order_id": NumberInt(0),
  "related": NumberInt(3),
  "release_time": NumberInt(1354093624),
  "status": NumberInt(2),
  "system_time": NumberInt(1354504164),
  "tid": [
    NumberInt(1),
    NumberInt(2)
  ],
  "title": "怎样注册",
  "type": NumberInt(1),
  "update_time": NumberInt(1354093624),
  "vedio_url": "http"
});
db.getCollection("uc_help_info").insert({
  "_id": ObjectId("50b5dc3732f3648801000005"),
  "_keywords": "新老网站栏目差异 网站栏目 差异 服装网 内容相关",
  "appid": NumberInt(1),
  "cid": null,
  "id": NumberInt(3),
  "ispush": null,
  "keywords": [
    "网站栏目",
    "差异"
  ],
  "order_id": NumberInt(0),
  "related": NumberInt(0),
  "release_time": NumberInt(1354095671),
  "status": NumberInt(2),
  "system_time": NumberInt(1354590693),
  "tid": [
    NumberInt(1)
  ],
  "title": "新老网站栏目差异",
  "type": NumberInt(2),
  "uri": "http:\/\/u.cc\/upload\/2012\/1128\/2817\/1d2af57e1899e14415f7438f9e8cd8a890149.swf",
  "vedio": "http:\/\/u.cc\/upload\/2012\/1128\/2817\/1d2af57e1899e14415f7438f9e8cd8a890149.swf"
});
db.getCollection("uc_help_info").insert({
  "_id": ObjectId("50b07d1732f3648411000000"),
  "_keywords": "蝶讯国际业务合作部在蝶讯网总部五楼正式揭牌成立\r\n2012年11月5日蝶讯D-Fashion高端趋势研发中心与蝶讯国际业务合作部在蝶讯网总部五楼正式揭牌成立蝶讯网西班牙合作机构vasilee-barcelona负责人JUAN和elisa参与了剪彩仪式\r\n蝶讯网总经理贺鑫和西班牙合作机构负责人JUAN揭牌仪式\r\n蝶讯高端趋势研发中心是国内首家也是目前唯一一家专注于高端趋势研发的机构他为蝶讯高端趋势产品提供了一个更好的研发平台通过与国际设计师的合作共同完成蝶讯高端设计资讯为国内高端服饰服装鞋包企业提供原创性的高端趋势服务和一对一的企划服务项目\r\n蝶讯高端趋势研发中心与国际业务合作部成立剪彩\r\n蝶讯国际业务合作部主要是为拓展蝶讯与国际各大时尚机构设计院校的合作业务而成立国际合作业务包括趋势发布会色彩趋势国际服饰设计高端人才交流以及国际设计机构联络等高端项目\r\n研发中心办公环境\r\n蝶讯趋势研发中心的成立为蝶讯网进一步开展国际交流加强国际资讯及人才的交流敞开了大门一流的办公环境宽松的创作氛围国际化的视野及人才\r\n交流项目将为蝶讯网引进一批顶级的趋势分析及引导类的国际人才蝶讯网将致力于打造一支世界一流的设计团队并通过蝶讯趋势研发中心为国内服饰服装\r\n鞋包企业提供高端趋势服务\r\n研发中心办公环境\r\n未来蝶讯网将联合国际合作机构和服装设计专业院校引进国外高端服饰服装鞋包设计人才前来蝶讯趋势研发中心工作和交流全力把蝶讯高端趋势服务做成国际领先国内一流紧贴国际时尚流行趋势完美契合国内市场需求的引导性产品\r\n蝶讯网总经理鞋包设计总监和服装设计总监在研发中心合影\r\n趋势服务重在引导重在国际化这次蝶讯高端趋势研发中心与蝶讯国际业务合作部的成立又一次的让蝶讯网走在了行业的最前端引领时尚产业互联全球贸易是蝶讯网的光荣使命蝶讯网正朝着这一使命大步迈进\r\n蝶讯网各部门主要负责人在研发中心合影\r\n让时尚触手可及是蝶讯网的企业愿景也是蝶讯网全体同仁的共同目标蝶讯高端趋势研发中心\r\n与蝶讯国际业务合作部的成立为国内服饰服装鞋包行业的同仁们提供了一个与国际时尚最前沿亲密接触的窗口便捷高效准确的高端趋势服务将为提\r\n高国内服饰服装鞋包行业的产品质量加大市场占有率提供有力的咨询保障和可靠的参考依据\r\n蝶讯高端趋势研发中心国际业务合作部坐落于深圳市文化创业园区的蝶讯网总部五楼深圳市福田区福强路4001号深圳市文化创意园二期A座508\r\n欲了解更多高端趋势资讯请登录高端趋势网\r\n 蝶讯 研发中心 国际 业务合作部 鞋包网 会员注册&登录 内容相关",
  "appid": NumberInt(4),
  "cid": [
    NumberInt(1)
  ],
  "content": "<p>\r\n\t2012年11月5日，蝶讯（D-Fashion）<a target=\"_blank\" href=\"http:\/\/epd.sxxl.com\/\">高端趋势<\/a>研发中心与蝶讯国际业务合作部在蝶讯网总部五楼正式揭牌成立，蝶讯网西班牙合作机构vasilee-barcelona负责人JUAN和elisa参与了剪彩仪式。\r\n<\/p>\r\n<p style=\"text-align:center;\">\r\n\t<img alt=\"蝶讯网总经理贺鑫和西班牙合作机构负责人JUAN揭牌仪式\" src=\"http:\/\/news.sxxl.com\/uploads\/2012\/1106\/20121106143644-5274.jpg\" border=\"0\" height=\"401\" width=\"600\" \/><br \/>\r\n蝶讯网总经理贺鑫和西班牙合作机构负责人JUAN揭牌仪式\r\n<\/p>\r\n<p>\r\n\t蝶讯高端趋势研发中心是国内首家也是目前唯一一家专注于高端趋势研发的机构，他为蝶讯高端趋势产品提供了一个更好的研发平台。通过与国际设计师的合作，共同完成蝶讯高端设计资讯，为国内高端服饰（服装、鞋包）企业提供原创性的高端趋势服务和一对一的企划服务项目。\r\n<\/p>\r\n<p style=\"text-align:center;\">\r\n\t<img alt=\"蝶讯高端趋势研发中心与国际业务合作部成立剪彩\" src=\"http:\/\/news.sxxl.com\/uploads\/2012\/1106\/20121106143812-9028.jpg\" border=\"0\" height=\"400\" width=\"600\" \/> \r\n<\/p>\r\n<p style=\"text-align:center;\">\r\n\t蝶讯高端趋势研发中心与国际业务合作部成立剪彩\r\n<\/p>\r\n<p>\r\n\t蝶讯国际业务合作部主要是为拓展蝶讯与国际各大时尚机构、设计院校的合作业务而成立。国际合作业务包括趋势发布会、色彩趋势、国际服饰设计高端人才交流以及国际设计机构联络等高端项目。\r\n<\/p>\r\n<p style=\"text-align:center;\">\r\n\t<img alt=\"研发中心办公环境\" src=\"http:\/\/news.sxxl.com\/uploads\/2012\/1107\/20121107095726-4803.jpg\" border=\"0\" height=\"400\" width=\"600\" \/> \r\n<\/p>\r\n<p style=\"text-align:center;\">\r\n\t研发中心办公环境\r\n<\/p>\r\n<p>\r\n\t蝶讯趋势研发中心的成立，为蝶讯网进一步开展国际交流，加强国际资讯及人才的交流敞开了大门。一流的办公环境、宽松的创作氛围、国际化的视野及人才\r\n交流项目，将为蝶讯网引进一批顶级的趋势分析及引导类的国际人才。蝶讯网将致力于打造一支世界一流的设计团队、并通过蝶讯趋势研发中心为国内服饰（服装、\r\n鞋包）企业提供高端趋势服务。\r\n<\/p>\r\n<p style=\"text-align:center;\">\r\n\t<img alt=\"研发中心办公环境\" src=\"http:\/\/news.sxxl.com\/uploads\/2012\/1107\/20121107095754-8344.jpg\" border=\"0\" height=\"400\" width=\"600\" \/> \r\n<\/p>\r\n<p style=\"text-align:center;\">\r\n\t研发中心办公环境\r\n<\/p>\r\n<p>\r\n\t未来蝶讯网将联合国际合作机构和服装设计专业院校，引进国外高端服饰（服装、鞋包）设计人才前来蝶讯趋势研发中心工作和交流。全力把蝶讯高端趋势服务做成国际领先、国内一流，紧贴国际时尚流行趋势、完美契合国内市场需求的引导性产品。\r\n<\/p>\r\n<p style=\"text-align:center;\">\r\n\t<img alt=\"蝶讯网总经理、鞋包设计总监和服装设计总监在研发中心合影\" src=\"http:\/\/news.sxxl.com\/uploads\/2012\/1106\/20121106143924-5372.jpg\" border=\"0\" height=\"358\" width=\"600\" \/> \r\n<\/p>\r\n<p style=\"text-align:center;\">\r\n\t蝶讯网总经理、<a target=\"_blank\" href=\"http:\/\/www.xiebaowang.com\">鞋包设计<\/a>总监和<a target=\"_blank\" href=\"http:\/\/www.sxxl.com\">服装设计<\/a>总监在研发中心合影　　\r\n<\/p>\r\n<p>\r\n\t趋势服务重在引导，重在国际化。这次蝶讯高端趋势研发中心与蝶讯国际业务合作部的成立，又一次的让蝶讯网走在了行业的最前端。“引领时尚产业、互联全球贸易！”是蝶讯网的光荣使命，蝶讯网正朝着这一使命大步迈进。\r\n<\/p>\r\n<p style=\"text-align:center;\">\r\n\t<img alt=\"蝶讯网各部门主要负责人在研发中心合影\" src=\"http:\/\/news.sxxl.com\/uploads\/2012\/1106\/20121106144032-7971.jpg\" border=\"0\" height=\"401\" width=\"600\" \/> \r\n<\/p>\r\n<p style=\"text-align:center;\">\r\n\t蝶讯网各部门主要负责人在研发中心合影\r\n<\/p>\r\n<p style=\"text-align:left;\">\r\n\t“让时尚触手可及”是蝶讯网的企业愿景，也是蝶讯网全体同仁的共同目标。蝶讯高端趋势研发中心\r\n与蝶讯国际业务合作部的成立，为国内服饰（服装、鞋包）行业的同仁们提供了一个与国际时尚最前沿亲密接触的窗口。便捷、高效、准确的高端趋势服务，将为提\r\n高国内服饰（服装、鞋包）行业的产品质量、加大市场占有率提供有力的咨询保障和可靠的参考依据。\r\n<\/p>\r\n<span style=\"color:#ff0000;\">蝶讯高端趋势研发中心（国际业务合作部）坐落于深圳市文化创业园区的蝶讯网总部五楼（深圳市福田区福强路4001号深圳市文化创意园二期A座508）<br \/>\r\n&nbsp;&nbsp;&nbsp;&nbsp; 欲了解更多高端趋势资讯请登录高端趋势网：<\/span><a target=\"_blank\" href=\"http:\/\/epd.sxxl.com\/\"><span style=\"color:#ff0000;\">http:\/\/epd.sxxl.com\/<\/span><\/a><span style=\"color:#ff0000;\"> <br \/>\r\n<\/span>",
  "id": NumberInt(1),
  "ispush": [
    NumberInt(2),
    NumberInt(3)
  ],
  "keywords": [
    "蝶讯",
    "研发中心",
    "国际",
    "业务合作部"
  ],
  "order_id": NumberInt(0),
  "related": NumberInt(0),
  "release_time": NumberInt(1354093101),
  "status": NumberInt(2),
  "system_time": NumberInt(1354590734),
  "tid": [
    NumberInt(1)
  ],
  "title": "蝶讯国际业务合作部在蝶讯网总部五楼正式揭牌成立",
  "type": NumberInt(1),
  "update_time": NumberInt(1354093101)
});

/** uc_help_info_comment records **/
db.getCollection("uc_help_info_comment").insert({
  "_id": ObjectId("50b5de60e408cd0c745cb73d"),
  "id": NumberInt(1),
  "uid": NumberInt(1),
  "hid": NumberInt(1),
  "ishelp": NumberInt(2)
});
db.getCollection("uc_help_info_comment").insert({
  "_id": ObjectId("50b5de69e408cd0c745cb73e"),
  "id": NumberInt(1),
  "uid": NumberInt(2),
  "hid": NumberInt(1),
  "ishelp": NumberInt(2)
});
db.getCollection("uc_help_info_comment").insert({
  "_id": ObjectId("50b5de78e408cd0c745cb73f"),
  "id": NumberInt(1),
  "uid": NumberInt(3),
  "hid": NumberInt(1),
  "ishelp": NumberInt(1)
});

/** uc_help_related records **/
db.getCollection("uc_help_related").insert({
  "_id": ObjectId("50b5aba932f364b41f000003"),
  "name": "帮助中心",
  "order_id": NumberInt(1),
  "status": NumberInt(2),
  "id": NumberInt(1),
  "parent_id": NumberInt(0),
  "system_time": NumberInt(1354083241)
});
db.getCollection("uc_help_related").insert({
  "_id": ObjectId("50b5abb532f364dc0b000007"),
  "name": "常见问题",
  "order_id": NumberInt(1),
  "status": NumberInt(2),
  "id": NumberInt(2),
  "parent_id": NumberInt(1),
  "system_time": NumberInt(1354083253)
});
db.getCollection("uc_help_related").insert({
  "_id": ObjectId("50b5abd332f364640e000005"),
  "name": "帮助首页",
  "order_id": NumberInt(2),
  "status": NumberInt(2),
  "id": NumberInt(3),
  "parent_id": NumberInt(1),
  "system_time": NumberInt(1354083283)
});

/** uc_help_type records **/
db.getCollection("uc_help_type").insert({
  "_id": ObjectId("50b079d832f3642410000003"),
  "appid": [
    NumberInt(1)
  ],
  "id": NumberInt(1),
  "name": "内容相关",
  "order_id": NumberInt(1),
  "parent_id": NumberInt(0),
  "status": NumberInt(2),
  "system_time": NumberInt(1354590755)
});
db.getCollection("uc_help_type").insert({
  "_id": ObjectId("50b079de32f3640c0c000002"),
  "appid": [
    NumberInt(1)
  ],
  "id": NumberInt(2),
  "name": "帐号相关",
  "order_id": NumberInt(2),
  "parent_id": NumberInt(0),
  "status": NumberInt(2),
  "system_time": NumberInt(1354590756)
});
db.getCollection("uc_help_type").insert({
  "_id": ObjectId("50b435b432f3643013000000"),
  "appid": [
    NumberInt(1),
    NumberInt(4)
  ],
  "id": NumberInt(3),
  "name": "使用相关",
  "order_id": NumberInt(3),
  "parent_id": NumberInt(0),
  "status": NumberInt(2),
  "system_time": NumberInt(1354590760)
});
db.getCollection("uc_help_type").insert({
  "_id": ObjectId("50b435c432f364c81f000000"),
  "appid": [
    NumberInt(1),
    NumberInt(4)
  ],
  "id": NumberInt(5),
  "name": "其它方面",
  "order_id": NumberInt(5),
  "parent_id": NumberInt(0),
  "status": NumberInt(2),
  "system_time": NumberInt(1354590766)
});
db.getCollection("uc_help_type").insert({
  "_id": ObjectId("50b435bc32f364a81e000000"),
  "appid": [
    NumberInt(1),
    NumberInt(4)
  ],
  "id": NumberInt(4),
  "name": "业务相关",
  "order_id": NumberInt(4),
  "parent_id": NumberInt(0),
  "status": NumberInt(2),
  "system_time": NumberInt(1354590763)
});

/** uc_node records **/
db.getCollection("uc_node").insert({
  "_id": ObjectId("50a4b9a8e408cd0154c22df4"),
  "id": NumberInt(8),
  "is_menu": NumberInt(2),
  "level": NumberInt(0),
  "name": "Role",
  "order_id": NumberInt(3),
  "parent_id": NumberInt(2),
  "status": NumberInt(2),
  "title": "角色管理"
});
db.getCollection("uc_node").insert({
  "_id": ObjectId("50a4b9a8e408cd0154c22df5"),
  "id": NumberInt(9),
  "is_menu": NumberInt(2),
  "level": NumberInt(0),
  "name": "User",
  "order_id": NumberInt(4),
  "parent_id": NumberInt(2),
  "status": NumberInt(2),
  "title": "后台用户"
});
db.getCollection("uc_node").insert({
  "_id": ObjectId("50a4b9a8e408cd0154c22dfa"),
  "id": NumberInt(3),
  "is_menu": NumberInt(1),
  "level": NumberInt(0),
  "name": "read",
  "order_id": NumberInt(0),
  "parent_id": NumberInt(1),
  "status": NumberInt(2),
  "title": "查看"
});
db.getCollection("uc_node").insert({
  "_id": ObjectId("50a4b9a8e408cd0154c22dfb"),
  "id": NumberInt(4),
  "is_menu": NumberInt(1),
  "level": NumberInt(0),
  "name": "index",
  "order_id": NumberInt(0),
  "parent_id": NumberInt(1),
  "status": NumberInt(2),
  "title": "列表"
});
db.getCollection("uc_node").insert({
  "_id": ObjectId("50a4b9a8e408cd0154c22e01"),
  "id": NumberInt(5),
  "is_menu": NumberInt(1),
  "level": NumberInt(0),
  "name": "add",
  "order_id": NumberInt(0),
  "parent_id": NumberInt(1),
  "status": NumberInt(2),
  "title": "添加"
});
db.getCollection("uc_node").insert({
  "_id": ObjectId("50a4b9a8e408cd0154c22e02"),
  "id": NumberInt(6),
  "is_menu": NumberInt(1),
  "level": NumberInt(0),
  "name": "edit",
  "order_id": NumberInt(0),
  "parent_id": NumberInt(1),
  "status": NumberInt(2),
  "title": "编辑"
});
db.getCollection("uc_node").insert({
  "_id": ObjectId("50a4b9a8e408cd0154c22e03"),
  "id": NumberInt(7),
  "is_menu": NumberInt(1),
  "level": NumberInt(0),
  "name": "delete",
  "order_id": NumberInt(0),
  "parent_id": NumberInt(1),
  "status": NumberInt(2),
  "title": "删除"
});
db.getCollection("uc_node").insert({
  "_id": ObjectId("50ac4ff232f364d040000000"),
  "id": NumberInt(11),
  "is_menu": NumberInt(2),
  "name": "Operate",
  "order_id": NumberInt(3),
  "parent_id": NumberInt(0),
  "status": NumberInt(2),
  "title": "运营管理"
});
db.getCollection("uc_node").insert({
  "_id": ObjectId("50a4b9a9e408cd0154c22e71"),
  "id": NumberInt(10),
  "is_menu": NumberInt(2),
  "level": NumberInt(0),
  "name": "Node",
  "order_id": NumberInt(1),
  "parent_id": NumberInt(2),
  "status": NumberInt(2),
  "title": "节点管理"
});
db.getCollection("uc_node").insert({
  "_id": ObjectId("50a4b9a8e408cd0154c22dfc"),
  "id": NumberInt(2),
  "is_menu": NumberInt(2),
  "level": NumberInt(0),
  "name": "System",
  "order_id": NumberInt(2),
  "parent_id": NumberInt(0),
  "status": NumberInt(2),
  "title": "系统管理"
});
db.getCollection("uc_node").insert({
  "_id": ObjectId("50ac35f8e408cd13e84e5a8c"),
  "id": NumberInt(1),
  "is_menu": NumberInt(1),
  "level": NumberInt(0),
  "name": "Public",
  "order_id": NumberInt(1),
  "parent_id": NumberInt(0),
  "status": NumberInt(2),
  "title": "公共权限"
});
db.getCollection("uc_node").insert({
  "_id": ObjectId("50ac8a9b32f364ec13000002"),
  "name": "power",
  "title": "权限",
  "order_id": NumberInt(1),
  "status": NumberInt(2),
  "is_menu": NumberInt(1),
  "id": NumberInt(13),
  "parent_id": NumberInt(8)
});
db.getCollection("uc_node").insert({
  "_id": ObjectId("50adb28b32f364d02e000002"),
  "name": "resetPwd",
  "title": "重置密码",
  "order_id": NumberInt(1),
  "status": NumberInt(2),
  "is_menu": NumberInt(1),
  "id": NumberInt(14),
  "parent_id": NumberInt(9)
});
db.getCollection("uc_node").insert({
  "_id": ObjectId("50add2a932f364f042000024"),
  "name": "status",
  "title": "状态",
  "order_id": NumberInt(0),
  "status": NumberInt(2),
  "is_menu": NumberInt(1),
  "id": NumberInt(17),
  "parent_id": NumberInt(1)
});
db.getCollection("uc_node").insert({
  "_id": ObjectId("50aee0c332f364ac43000014"),
  "name": "loginLog",
  "title": "登陆日志",
  "order_id": NumberInt(2),
  "status": NumberInt(2),
  "is_menu": NumberInt(1),
  "id": NumberInt(18),
  "parent_id": NumberInt(9)
});
db.getCollection("uc_node").insert({
  "_id": ObjectId("50aee0d532f364b41900001a"),
  "id": NumberInt(19),
  "is_menu": NumberInt(1),
  "name": "operationLog",
  "order_id": NumberInt(3),
  "parent_id": NumberInt(9),
  "status": NumberInt(2),
  "title": "操作日志"
});
db.getCollection("uc_node").insert({
  "_id": ObjectId("50af1ea532f364d040000039"),
  "id": NumberInt(22),
  "is_menu": NumberInt(2),
  "name": "App",
  "order_id": NumberInt(5),
  "parent_id": NumberInt(2),
  "status": NumberInt(2),
  "title": "应用管理"
});
db.getCollection("uc_node").insert({
  "_id": ObjectId("50af4bb632f364404300002e"),
  "id": NumberInt(24),
  "is_menu": NumberInt(2),
  "name": "HelpType",
  "order_id": NumberInt(1),
  "parent_id": NumberInt(23),
  "status": NumberInt(2),
  "title": "帮助类别"
});
db.getCollection("uc_node").insert({
  "_id": ObjectId("50af4c6132f364b41900001b"),
  "id": NumberInt(25),
  "is_menu": NumberInt(2),
  "name": "Help",
  "order_id": NumberInt(0),
  "parent_id": NumberInt(23),
  "status": NumberInt(2),
  "title": "帮助信息"
});
db.getCollection("uc_node").insert({
  "_id": ObjectId("50af4b2b32f364e01800003e"),
  "id": NumberInt(23),
  "is_menu": NumberInt(2),
  "name": "HelpCenter",
  "order_id": NumberInt(4),
  "parent_id": NumberInt(0),
  "status": NumberInt(2),
  "title": "客服中心"
});
db.getCollection("uc_node").insert({
  "_id": ObjectId("50b0844b32f364e012000001"),
  "name": "Member",
  "title": "会员管理",
  "order_id": NumberInt(1),
  "status": NumberInt(2),
  "is_menu": NumberInt(2),
  "id": NumberInt(26),
  "parent_id": NumberInt(11)
});
db.getCollection("uc_node").insert({
  "_id": ObjectId("50b4364a32f364dc0b000000"),
  "name": "HelpCategory",
  "title": "帮助分类",
  "order_id": NumberInt(0),
  "status": NumberInt(2),
  "is_menu": NumberInt(2),
  "id": NumberInt(27),
  "parent_id": NumberInt(23)
});
db.getCollection("uc_node").insert({
  "_id": ObjectId("50b5ab3332f364dc18000002"),
  "id": NumberInt(29),
  "is_menu": NumberInt(2),
  "name": "HelpRelated",
  "order_id": NumberInt(3),
  "parent_id": NumberInt(23),
  "status": NumberInt(2),
  "title": "推送类型"
});
db.getCollection("uc_node").insert({
  "_id": ObjectId("50b489c932f364640e000002"),
  "id": NumberInt(28),
  "is_menu": NumberInt(2),
  "name": "HelpRecycleBin",
  "order_id": NumberInt(4),
  "parent_id": NumberInt(23),
  "status": NumberInt(2),
  "title": "回收站"
});
db.getCollection("uc_node").insert({
  "_id": ObjectId("50bdcb6b32f364ec0f000005"),
  "name": "pcPower",
  "title": "硬件授权",
  "order_id": NumberInt(0),
  "status": NumberInt(2),
  "is_menu": NumberInt(2),
  "id": NumberInt(30),
  "parent_id": NumberInt(9)
});

/** uc_role records **/
db.getCollection("uc_role").insert({
  "_id": ObjectId("50a4b9a9e408cd0154c22eab"),
  "id": NumberInt(1),
  "name": "超级管理员",
  "price": NumberInt(0),
  "status": NumberInt(2)
});
db.getCollection("uc_role").insert({
  "_id": ObjectId("50a4b9a9e408cd0154c22eac"),
  "id": NumberInt(10),
  "name": "运营管理员",
  "price": NumberInt(0),
  "status": NumberInt(2)
});

/** uc_user records **/
db.getCollection("uc_user").insert({
  "_id": ObjectId("50a4b9a9e408cd0154c22f4f"),
  "id": NumberInt(136),
  "account": "testhzw",
  "password": "e10adc3949ba59abbe56e057f20f883e",
  "real_name": "未知数",
  "last_login_time": NumberInt(1347335197),
  "last_login_ip": "192.168.2.89",
  "login_count": null,
  "status": NumberInt(2)
});
db.getCollection("uc_user").insert({
  "_id": ObjectId("50a4b9a9e408cd0154c22f50"),
  "id": NumberInt(46),
  "account": "liaoshy",
  "password": "e10adc3949ba59abbe56e057f20f883e",
  "real_name": "廖水燕",
  "last_login_time": NumberInt(1349573171),
  "last_login_ip": "192.168.4.86",
  "login_count": NumberInt(15),
  "status": NumberInt(2)
});
db.getCollection("uc_user").insert({
  "_id": ObjectId("50a4b9a9e408cd0154c22f51"),
  "id": NumberInt(47),
  "account": "fengrt",
  "password": "e10adc3949ba59abbe56e057f20f883e",
  "real_name": "冯润添",
  "last_login_time": NumberInt(1352516614),
  "last_login_ip": "192.168.4.166",
  "login_count": NumberInt(52),
  "status": NumberInt(2)
});
db.getCollection("uc_user").insert({
  "_id": ObjectId("50a4b9a9e408cd0154c22f52"),
  "id": NumberInt(135),
  "account": "chenhm",
  "password": "e10adc3949ba59abbe56e057f20f883e",
  "real_name": "陈惠敏",
  "last_login_time": NumberInt(1338283647),
  "last_login_ip": "127.0.0.1",
  "login_count": null,
  "status": NumberInt(2)
});
db.getCollection("uc_user").insert({
  "_id": ObjectId("50a4b9a9e408cd0154c22f53"),
  "id": NumberInt(49),
  "account": "leibao",
  "password": "e10adc3949ba59abbe56e057f20f883e",
  "real_name": "雷宝",
  "last_login_time": NumberInt(1324607245),
  "last_login_ip": "192.168.2.72",
  "login_count": NumberInt(21),
  "status": NumberInt(2)
});
db.getCollection("uc_user").insert({
  "_id": ObjectId("50a4b9a9e408cd0154c22f54"),
  "id": NumberInt(53),
  "account": "wangdan",
  "password": "e10adc3949ba59abbe56e057f20f883e",
  "real_name": "王丹",
  "last_login_time": NumberInt(1351229069),
  "last_login_ip": "192.168.4.64",
  "login_count": NumberInt(23),
  "status": NumberInt(2)
});
db.getCollection("uc_user").insert({
  "_id": ObjectId("50a4b9a9e408cd0154c22f55"),
  "id": NumberInt(54),
  "account": "libing",
  "password": "e10adc3949ba59abbe56e057f20f883e",
  "real_name": "李冰",
  "last_login_time": NumberInt(0),
  "last_login_ip": null,
  "login_count": NumberInt(0),
  "status": NumberInt(2)
});
db.getCollection("uc_user").insert({
  "_id": ObjectId("50a4b9a9e408cd0154c22f56"),
  "id": NumberInt(56),
  "account": "dongxun",
  "password": "e10adc3949ba59abbe56e057f20f883e",
  "real_name": "董薰",
  "last_login_time": NumberInt(1329287820),
  "last_login_ip": "192.168.4.116",
  "login_count": NumberInt(6),
  "status": NumberInt(2)
});
db.getCollection("uc_user").insert({
  "_id": ObjectId("50a4b9a9e408cd0154c22f57"),
  "id": NumberInt(57),
  "account": "wenlong",
  "password": "e10adc3949ba59abbe56e057f20f883e",
  "real_name": "文龙",
  "last_login_time": NumberInt(0),
  "last_login_ip": null,
  "login_count": NumberInt(0),
  "status": NumberInt(2)
});
db.getCollection("uc_user").insert({
  "_id": ObjectId("50a4b9a9e408cd0154c22f58"),
  "id": NumberInt(58),
  "account": "liuyanling",
  "password": "e10adc3949ba59abbe56e057f20f883e",
  "real_name": "刘艳玲",
  "last_login_time": NumberInt(1348810865),
  "last_login_ip": "192.168.4.179",
  "login_count": NumberInt(55),
  "status": NumberInt(2)
});
db.getCollection("uc_user").insert({
  "_id": ObjectId("50a4b9a9e408cd0154c22f59"),
  "id": NumberInt(60),
  "account": "huangxm",
  "password": "e10adc3949ba59abbe56e057f20f883e",
  "real_name": "黄详明",
  "last_login_time": NumberInt(1323912486),
  "last_login_ip": "192.168.5.66",
  "login_count": NumberInt(4),
  "status": NumberInt(2)
});
db.getCollection("uc_user").insert({
  "_id": ObjectId("50a4b9a9e408cd0154c22f5a"),
  "id": NumberInt(62),
  "account": "zhuangdd",
  "password": "e10adc3949ba59abbe56e057f20f883e",
  "real_name": "庄丹丹",
  "last_login_time": NumberInt(1337330036),
  "last_login_ip": "192.168.4.177",
  "login_count": NumberInt(2),
  "status": NumberInt(2)
});
db.getCollection("uc_user").insert({
  "_id": ObjectId("50a4b9a9e408cd0154c22f5b"),
  "id": NumberInt(66),
  "account": "tianxq",
  "password": "e10adc3949ba59abbe56e057f20f883e",
  "real_name": "田雪琴",
  "last_login_time": NumberInt(1348740348),
  "last_login_ip": "192.168.4.34",
  "login_count": NumberInt(83),
  "status": NumberInt(2)
});
db.getCollection("uc_user").insert({
  "_id": ObjectId("50a4b9a9e408cd0154c22f5c"),
  "id": NumberInt(67),
  "account": "yancx",
  "password": "e10adc3949ba59abbe56e057f20f883e",
  "real_name": "严长秀",
  "last_login_time": NumberInt(1351213850),
  "last_login_ip": "192.168.4.192",
  "login_count": NumberInt(132),
  "status": NumberInt(2)
});
db.getCollection("uc_user").insert({
  "_id": ObjectId("50a4b9a9e408cd0154c22f5d"),
  "id": NumberInt(68),
  "account": "mali",
  "password": "e10adc3949ba59abbe56e057f20f883e",
  "real_name": "马莉",
  "last_login_time": NumberInt(1330687063),
  "last_login_ip": "192.168.4.114",
  "login_count": NumberInt(35),
  "status": NumberInt(2)
});
db.getCollection("uc_user").insert({
  "_id": ObjectId("50a4b9a9e408cd0154c22f5e"),
  "id": NumberInt(69),
  "account": "zhouml",
  "password": "e10adc3949ba59abbe56e057f20f883e",
  "real_name": "周美玲",
  "last_login_time": NumberInt(1330517391),
  "last_login_ip": "192.168.4.104",
  "login_count": NumberInt(37),
  "status": NumberInt(2)
});
db.getCollection("uc_user").insert({
  "_id": ObjectId("50a4b9a9e408cd0154c22f5f"),
  "id": NumberInt(70),
  "account": "xieling",
  "password": "e10adc3949ba59abbe56e057f20f883e",
  "real_name": "谢玲",
  "last_login_time": NumberInt(1330678284),
  "last_login_ip": "192.168.4.112",
  "login_count": NumberInt(39),
  "status": NumberInt(2)
});
db.getCollection("uc_user").insert({
  "_id": ObjectId("50a4b9a9e408cd0154c22f60"),
  "id": NumberInt(71),
  "account": "huangmq",
  "password": "723d505516e0c197e42a6be3c0af910e",
  "real_name": "黄美清",
  "last_login_time": NumberInt(1351067906),
  "last_login_ip": "192.168.4.191",
  "login_count": NumberInt(38),
  "status": NumberInt(2)
});
db.getCollection("uc_user").insert({
  "_id": ObjectId("50a4b9a9e408cd0154c22f61"),
  "id": NumberInt(72),
  "account": "huangxl",
  "password": "e10adc3949ba59abbe56e057f20f883e",
  "real_name": "黄笑玲",
  "last_login_time": NumberInt(1350025481),
  "last_login_ip": "192.168.4.168",
  "login_count": NumberInt(41),
  "status": NumberInt(2)
});
db.getCollection("uc_user").insert({
  "_id": ObjectId("50a4b9a9e408cd0154c22f62"),
  "id": NumberInt(73),
  "account": "liuwj",
  "password": "e10adc3949ba59abbe56e057f20f883e",
  "real_name": "刘文娟",
  "last_login_time": NumberInt(1330682562),
  "last_login_ip": "183.62.223.81",
  "login_count": NumberInt(57),
  "status": NumberInt(2)
});
db.getCollection("uc_user").insert({
  "_id": ObjectId("50a4b9a9e408cd0154c22f63"),
  "id": NumberInt(74),
  "account": "wanglr",
  "password": "e10adc3949ba59abbe56e057f20f883e",
  "real_name": "王利容",
  "last_login_time": NumberInt(1337578941),
  "last_login_ip": "192.168.4.83",
  "login_count": NumberInt(26),
  "status": NumberInt(2)
});
db.getCollection("uc_user").insert({
  "_id": ObjectId("50a4b9a9e408cd0154c22f64"),
  "id": NumberInt(75),
  "account": "chenxf",
  "password": "e10adc3949ba59abbe56e057f20f883e",
  "real_name": "陈新凡",
  "last_login_time": NumberInt(1337319728),
  "last_login_ip": "192.168.4.93",
  "login_count": NumberInt(52),
  "status": NumberInt(2)
});
db.getCollection("uc_user").insert({
  "_id": ObjectId("50a4b9a9e408cd0154c22f65"),
  "id": NumberInt(76),
  "account": "liudl",
  "password": "e10adc3949ba59abbe56e057f20f883e",
  "real_name": "刘冬丽",
  "last_login_time": NumberInt(1330502512),
  "last_login_ip": "192.168.4.230",
  "login_count": NumberInt(27),
  "status": NumberInt(2)
});
db.getCollection("uc_user").insert({
  "_id": ObjectId("50a4b9a9e408cd0154c22f66"),
  "id": NumberInt(77),
  "account": "liuyan",
  "password": "e10adc3949ba59abbe56e057f20f883e",
  "real_name": "刘艳",
  "last_login_time": NumberInt(1337330066),
  "last_login_ip": "192.168.4.92",
  "login_count": NumberInt(25),
  "status": NumberInt(2)
});
db.getCollection("uc_user").insert({
  "_id": ObjectId("50a4b9a9e408cd0154c22f67"),
  "id": NumberInt(78),
  "account": "liaocf",
  "password": "e10adc3949ba59abbe56e057f20f883e",
  "real_name": "廖翠芳",
  "last_login_time": NumberInt(1330598412),
  "last_login_ip": "192.168.4.177",
  "login_count": NumberInt(11),
  "status": NumberInt(2)
});
db.getCollection("uc_user").insert({
  "_id": ObjectId("50a4b9a9e408cd0154c22f68"),
  "id": NumberInt(138),
  "account": "jiangcong",
  "password": "e10adc3949ba59abbe56e057f20f883e",
  "real_name": "蒋聪",
  "last_login_time": NumberInt(1352859783),
  "last_login_ip": "192.168.2.87",
  "login_count": null,
  "status": NumberInt(2)
});
db.getCollection("uc_user").insert({
  "_id": ObjectId("50a4b9a9e408cd0154c22f69"),
  "id": NumberInt(80),
  "account": "lixt",
  "password": "e10adc3949ba59abbe56e057f20f883e",
  "real_name": "黎秀婷",
  "last_login_time": NumberInt(1330591158),
  "last_login_ip": "192.168.4.186",
  "login_count": NumberInt(53),
  "status": NumberInt(2)
});
db.getCollection("uc_user").insert({
  "_id": ObjectId("50a4b9a9e408cd0154c22f6a"),
  "id": NumberInt(81),
  "account": "xuzy",
  "password": "e10adc3949ba59abbe56e057f20f883e",
  "real_name": "徐智勇",
  "last_login_time": NumberInt(1337737945),
  "last_login_ip": "192.168.4.39",
  "login_count": NumberInt(54),
  "status": NumberInt(2)
});
db.getCollection("uc_user").insert({
  "_id": ObjectId("50a4b9a9e408cd0154c22f6b"),
  "id": NumberInt(82),
  "account": "tangdm",
  "password": "e10adc3949ba59abbe56e057f20f883e",
  "real_name": "汤德谋",
  "last_login_time": NumberInt(1337744832),
  "last_login_ip": "192.168.4.77",
  "login_count": NumberInt(8),
  "status": NumberInt(2)
});
db.getCollection("uc_user").insert({
  "_id": ObjectId("50a4b9a9e408cd0154c22f6c"),
  "id": NumberInt(139),
  "account": "wangfang01",
  "password": "15a2e497b42d723e331e2ab2628ccf6e",
  "real_name": "123456",
  "last_login_time": NumberInt(1348629009),
  "last_login_ip": "192.168.4.235",
  "login_count": null,
  "status": NumberInt(2)
});
db.getCollection("uc_user").insert({
  "_id": ObjectId("50a4b9a9e408cd0154c22f6d"),
  "id": NumberInt(84),
  "account": "minna",
  "password": "e10adc3949ba59abbe56e057f20f883e",
  "real_name": "闵娜",
  "last_login_time": NumberInt(1337753383),
  "last_login_ip": "192.168.4.80",
  "login_count": NumberInt(43),
  "status": NumberInt(2)
});
db.getCollection("uc_user").insert({
  "_id": ObjectId("50a4b9a9e408cd0154c22f6e"),
  "id": NumberInt(140),
  "account": "niejihua",
  "password": "e10adc3949ba59abbe56e057f20f883e",
  "real_name": "123456",
  "last_login_time": NumberInt(1351214472),
  "last_login_ip": "192.168.4.12",
  "login_count": null,
  "status": NumberInt(2)
});
db.getCollection("uc_user").insert({
  "_id": ObjectId("50a4b9a9e408cd0154c22f78"),
  "account": "liuting",
  "id": NumberInt(142),
  "last_login_ip": "192.168.4.126",
  "last_login_time": null,
  "login_count": null,
  "password": "e10adc3949ba59abbe56e057f20f883e",
  "real_name": "刘婷",
  "role_id": NumberInt(10),
  "status": NumberInt(2)
});
db.getCollection("uc_user").insert({
  "_id": ObjectId("50a4b9a9e408cd0154c22f6f"),
  "id": NumberInt(86),
  "account": "zhanglei",
  "password": "e10adc3949ba59abbe56e057f20f883e",
  "real_name": "张蕾",
  "last_login_time": NumberInt(1330671889),
  "last_login_ip": "192.168.4.72",
  "login_count": NumberInt(60),
  "status": NumberInt(2)
});
db.getCollection("uc_user").insert({
  "_id": ObjectId("50a4b9a9e408cd0154c22f71"),
  "id": NumberInt(88),
  "account": "zengys",
  "password": "e10adc3949ba59abbe56e057f20f883e",
  "real_name": "曾伊莎",
  "last_login_time": NumberInt(1351155230),
  "last_login_ip": "192.168.4.125",
  "login_count": NumberInt(53),
  "status": NumberInt(2)
});
db.getCollection("uc_user").insert({
  "_id": ObjectId("50a4b9a9e408cd0154c22f72"),
  "id": NumberInt(89),
  "account": "luohui",
  "password": "e10adc3949ba59abbe56e057f20f883e",
  "real_name": "罗慧",
  "last_login_time": NumberInt(1337761876),
  "last_login_ip": "192.168.4.62",
  "login_count": NumberInt(48),
  "status": NumberInt(2)
});
db.getCollection("uc_user").insert({
  "_id": ObjectId("50a4b9a9e408cd0154c22f73"),
  "id": NumberInt(90),
  "account": "zhangys",
  "password": "e10adc3949ba59abbe56e057f20f883e",
  "real_name": "张永生",
  "last_login_time": NumberInt(1337755154),
  "last_login_ip": "192.168.4.60",
  "login_count": NumberInt(38),
  "status": NumberInt(2)
});
db.getCollection("uc_user").insert({
  "_id": ObjectId("50a4b9a9e408cd0154c22f74"),
  "id": NumberInt(91),
  "account": "caoll",
  "password": "e10adc3949ba59abbe56e057f20f883e",
  "real_name": "曹磊磊",
  "last_login_time": NumberInt(1337311815),
  "last_login_ip": "192.168.4.180",
  "login_count": NumberInt(18),
  "status": NumberInt(2)
});
db.getCollection("uc_user").insert({
  "_id": ObjectId("50a4b9a9e408cd0154c22f75"),
  "id": NumberInt(92),
  "account": "jiangpy",
  "password": "e10adc3949ba59abbe56e057f20f883e",
  "real_name": "蒋萍艳",
  "last_login_time": NumberInt(1347584901),
  "last_login_ip": "192.168.4.163",
  "login_count": NumberInt(59),
  "status": NumberInt(2)
});
db.getCollection("uc_user").insert({
  "_id": ObjectId("50a4b9a9e408cd0154c22f76"),
  "id": NumberInt(93),
  "account": "fanjuan",
  "password": "e10adc3949ba59abbe56e057f20f883e",
  "real_name": "范娟",
  "last_login_time": NumberInt(1347506225),
  "last_login_ip": "192.168.4.182",
  "login_count": NumberInt(50),
  "status": NumberInt(2)
});
db.getCollection("uc_user").insert({
  "_id": ObjectId("50a4b9a9e408cd0154c22f77"),
  "id": NumberInt(94),
  "account": "zouhong",
  "password": "e10adc3949ba59abbe56e057f20f883e",
  "real_name": "邹红",
  "last_login_time": NumberInt(1330602312),
  "last_login_ip": "192.168.4.90",
  "login_count": NumberInt(17),
  "status": NumberInt(2)
});
db.getCollection("uc_user").insert({
  "_id": ObjectId("50a4b9a9e408cd0154c22f79"),
  "id": NumberInt(96),
  "account": "test1",
  "password": "e10adc3949ba59abbe56e057f20f883e",
  "real_name": "并发测试1",
  "last_login_time": NumberInt(1329812516),
  "last_login_ip": "192.168.2.20",
  "login_count": NumberInt(381),
  "status": NumberInt(2)
});
db.getCollection("uc_user").insert({
  "_id": ObjectId("50a4b9a9e408cd0154c22f7a"),
  "id": NumberInt(97),
  "account": "test2",
  "password": "e10adc3949ba59abbe56e057f20f883e",
  "real_name": "并发测试2",
  "last_login_time": NumberInt(1329812516),
  "last_login_ip": "192.168.2.20",
  "login_count": NumberInt(193),
  "status": NumberInt(2)
});
db.getCollection("uc_user").insert({
  "_id": ObjectId("50a4b9a9e408cd0154c22f7b"),
  "id": NumberInt(98),
  "account": "test3",
  "password": "e10adc3949ba59abbe56e057f20f883e",
  "real_name": "并发测试3",
  "last_login_time": NumberInt(1329812159),
  "last_login_ip": "192.168.2.20",
  "login_count": NumberInt(178),
  "status": NumberInt(2)
});
db.getCollection("uc_user").insert({
  "_id": ObjectId("50a4b9a9e408cd0154c22f7c"),
  "id": NumberInt(99),
  "account": "test4",
  "password": "e10adc3949ba59abbe56e057f20f883e",
  "real_name": "并发测试4",
  "last_login_time": NumberInt(1329812516),
  "last_login_ip": "192.168.2.20",
  "login_count": NumberInt(148),
  "status": NumberInt(2)
});
db.getCollection("uc_user").insert({
  "_id": ObjectId("50a4b9a9e408cd0154c22f7d"),
  "id": NumberInt(100),
  "account": "test5",
  "password": "e10adc3949ba59abbe56e057f20f883e",
  "real_name": "并发测试5",
  "last_login_time": NumberInt(1329812396),
  "last_login_ip": "192.168.2.20",
  "login_count": NumberInt(144),
  "status": NumberInt(2)
});
db.getCollection("uc_user").insert({
  "_id": ObjectId("50a4b9a9e408cd0154c22f7e"),
  "id": NumberInt(101),
  "account": "test6",
  "password": "e10adc3949ba59abbe56e057f20f883e",
  "real_name": "并发测试6",
  "last_login_time": NumberInt(1329812270),
  "last_login_ip": "192.168.2.20",
  "login_count": NumberInt(125),
  "status": NumberInt(2)
});
db.getCollection("uc_user").insert({
  "_id": ObjectId("50a4b9a9e408cd0154c22f7f"),
  "id": NumberInt(102),
  "account": "test7",
  "password": "e10adc3949ba59abbe56e057f20f883e",
  "real_name": "并发测试7",
  "last_login_time": NumberInt(1329812270),
  "last_login_ip": "192.168.2.20",
  "login_count": NumberInt(125),
  "status": NumberInt(2)
});
db.getCollection("uc_user").insert({
  "_id": ObjectId("50a4b9a9e408cd0154c22f80"),
  "id": NumberInt(103),
  "account": "test8",
  "password": "e10adc3949ba59abbe56e057f20f883e",
  "real_name": "并发测试8",
  "last_login_time": NumberInt(1329812516),
  "last_login_ip": "192.168.2.20",
  "login_count": NumberInt(124),
  "status": NumberInt(2)
});
db.getCollection("uc_user").insert({
  "_id": ObjectId("50a4b9a9e408cd0154c22f81"),
  "id": NumberInt(104),
  "account": "test9",
  "password": "e10adc3949ba59abbe56e057f20f883e",
  "real_name": "并发测试9",
  "last_login_time": NumberInt(1329812516),
  "last_login_ip": "192.168.2.20",
  "login_count": NumberInt(123),
  "status": NumberInt(2)
});
db.getCollection("uc_user").insert({
  "_id": ObjectId("50a4b9a9e408cd0154c22f82"),
  "id": NumberInt(105),
  "account": "test10",
  "password": "e10adc3949ba59abbe56e057f20f883e",
  "real_name": "并发测试10",
  "last_login_time": NumberInt(1329812022),
  "last_login_ip": "192.168.2.20",
  "login_count": NumberInt(118),
  "status": NumberInt(2)
});
db.getCollection("uc_user").insert({
  "_id": ObjectId("50a4b9a9e408cd0154c22f83"),
  "id": NumberInt(108),
  "account": "test11",
  "password": "e10adc3949ba59abbe56e057f20f883e",
  "real_name": "并发测试11",
  "last_login_time": NumberInt(1329812361),
  "last_login_ip": "192.168.2.20",
  "login_count": NumberInt(38),
  "status": NumberInt(2)
});
db.getCollection("uc_user").insert({
  "_id": ObjectId("50a4b9a9e408cd0154c22f84"),
  "id": NumberInt(109),
  "account": "test12",
  "password": "e10adc3949ba59abbe56e057f20f883e",
  "real_name": "并发测试12",
  "last_login_time": NumberInt(1329812202),
  "last_login_ip": "192.168.2.20",
  "login_count": NumberInt(29),
  "status": NumberInt(2)
});
db.getCollection("uc_user").insert({
  "_id": ObjectId("50a4b9a9e408cd0154c22f85"),
  "id": NumberInt(110),
  "account": "test13",
  "password": "e10adc3949ba59abbe56e057f20f883e",
  "real_name": "并发测试13",
  "last_login_time": NumberInt(1329812364),
  "last_login_ip": "192.168.2.20",
  "login_count": NumberInt(32),
  "status": NumberInt(2)
});
db.getCollection("uc_user").insert({
  "_id": ObjectId("50a4b9a9e408cd0154c22f86"),
  "id": NumberInt(111),
  "account": "test14",
  "password": "e10adc3949ba59abbe56e057f20f883e",
  "real_name": "并发测试14",
  "last_login_time": NumberInt(1329812125),
  "last_login_ip": "192.168.2.20",
  "login_count": NumberInt(27),
  "status": NumberInt(2)
});
db.getCollection("uc_user").insert({
  "_id": ObjectId("50a4b9a9e408cd0154c22f87"),
  "id": NumberInt(112),
  "account": "test15",
  "password": "e10adc3949ba59abbe56e057f20f883e",
  "real_name": "并发测试15",
  "last_login_time": NumberInt(1329812125),
  "last_login_ip": "192.168.2.20",
  "login_count": NumberInt(29),
  "status": NumberInt(2)
});
db.getCollection("uc_user").insert({
  "_id": ObjectId("50a4b9a9e408cd0154c22f88"),
  "id": NumberInt(113),
  "account": "test16",
  "password": "e10adc3949ba59abbe56e057f20f883e",
  "real_name": "并发测试16",
  "last_login_time": NumberInt(1329812202),
  "last_login_ip": "192.168.2.20",
  "login_count": NumberInt(26),
  "status": NumberInt(2)
});
db.getCollection("uc_user").insert({
  "_id": ObjectId("50a4b9a9e408cd0154c22f89"),
  "id": NumberInt(114),
  "account": "test17",
  "password": "e10adc3949ba59abbe56e057f20f883e",
  "real_name": "并发测试17",
  "last_login_time": NumberInt(1329812466),
  "last_login_ip": "192.168.2.20",
  "login_count": NumberInt(24),
  "status": NumberInt(2)
});
db.getCollection("uc_user").insert({
  "_id": ObjectId("50a4b9a9e408cd0154c22f8a"),
  "id": NumberInt(115),
  "account": "test18",
  "password": "e10adc3949ba59abbe56e057f20f883e",
  "real_name": "并发测试18",
  "last_login_time": NumberInt(1329812202),
  "last_login_ip": "192.168.2.20",
  "login_count": NumberInt(18),
  "status": NumberInt(2)
});
db.getCollection("uc_user").insert({
  "_id": ObjectId("50a4b9a9e408cd0154c22f8b"),
  "id": NumberInt(116),
  "account": "test19",
  "password": "e10adc3949ba59abbe56e057f20f883e",
  "real_name": "并发测试19",
  "last_login_time": NumberInt(1329812361),
  "last_login_ip": "192.168.2.20",
  "login_count": NumberInt(18),
  "status": NumberInt(2)
});
db.getCollection("uc_user").insert({
  "_id": ObjectId("50a4b9a9e408cd0154c22f8d"),
  "id": NumberInt(119),
  "account": "xiaoting",
  "password": "e10adc3949ba59abbe56e057f20f883e",
  "real_name": "肖婷",
  "last_login_time": NumberInt(1329623666),
  "last_login_ip": "192.168.4.121",
  "login_count": NumberInt(2),
  "status": NumberInt(2)
});
db.getCollection("uc_user").insert({
  "_id": ObjectId("50a4b9a9e408cd0154c22f8e"),
  "id": NumberInt(120),
  "account": "guohongping",
  "password": "e10adc3949ba59abbe56e057f20f883e",
  "real_name": "郭红屏",
  "last_login_time": NumberInt(1337583951),
  "last_login_ip": "192.168.4.73",
  "login_count": NumberInt(4),
  "status": NumberInt(2)
});
db.getCollection("uc_user").insert({
  "_id": ObjectId("50a4b9a9e408cd0154c22f8f"),
  "id": NumberInt(123),
  "account": "huangzw",
  "password": "e10adc3949ba59abbe56e057f20f883e",
  "real_name": "黄正武",
  "last_login_time": NumberInt(1352281280),
  "last_login_ip": "127.0.0.1",
  "login_count": null,
  "status": NumberInt(2)
});
db.getCollection("uc_user").insert({
  "_id": ObjectId("50a4b9a9e408cd0154c22f90"),
  "id": NumberInt(124),
  "account": "test20120515",
  "password": "e10adc3949ba59abbe56e057f20f883e",
  "real_name": "测试0515",
  "last_login_time": NumberInt(0),
  "last_login_ip": "",
  "login_count": null,
  "status": NumberInt(2)
});
db.getCollection("uc_user").insert({
  "_id": ObjectId("50a4b9a9e408cd0154c22f91"),
  "id": NumberInt(125),
  "account": "hedan",
  "password": "e10adc3949ba59abbe56e057f20f883e",
  "real_name": "贺丹",
  "last_login_time": NumberInt(1351325482),
  "last_login_ip": "192.168.4.194",
  "login_count": null,
  "status": NumberInt(2)
});
db.getCollection("uc_user").insert({
  "_id": ObjectId("50a4b9a9e408cd0154c22f92"),
  "id": NumberInt(127),
  "account": "liuzhf",
  "password": "e10adc3949ba59abbe56e057f20f883e",
  "real_name": "刘枝发",
  "last_login_time": NumberInt(1345083595),
  "last_login_ip": "192.168.8.98",
  "login_count": null,
  "status": NumberInt(2)
});
db.getCollection("uc_user").insert({
  "_id": ObjectId("50a4b9a9e408cd0154c22f93"),
  "id": NumberInt(128),
  "account": "yeqing",
  "password": "e10adc3949ba59abbe56e057f20f883e",
  "real_name": "叶青",
  "last_login_time": NumberInt(0),
  "last_login_ip": "",
  "login_count": null,
  "status": NumberInt(2)
});
db.getCollection("uc_user").insert({
  "_id": ObjectId("50a4b9a9e408cd0154c22f94"),
  "id": NumberInt(129),
  "account": "huandan",
  "password": "e10adc3949ba59abbe56e057f20f883e",
  "real_name": "黄丹",
  "last_login_time": NumberInt(1337321208),
  "last_login_ip": "192.168.4.125",
  "login_count": null,
  "status": NumberInt(2)
});
db.getCollection("uc_user").insert({
  "_id": ObjectId("50a4b9a9e408cd0154c22f95"),
  "id": NumberInt(130),
  "account": "xuyang",
  "password": "e10adc3949ba59abbe56e057f20f883e",
  "real_name": "徐杨",
  "last_login_time": NumberInt(0),
  "last_login_ip": "",
  "login_count": null,
  "status": NumberInt(2)
});
db.getCollection("uc_user").insert({
  "_id": ObjectId("50a4b9a9e408cd0154c22f96"),
  "id": NumberInt(131),
  "account": "huangxj",
  "password": "e10adc3949ba59abbe56e057f20f883e",
  "real_name": "黄先觉",
  "last_login_time": NumberInt(0),
  "last_login_ip": "",
  "login_count": null,
  "status": NumberInt(2)
});
db.getCollection("uc_user").insert({
  "_id": ObjectId("50a4b9a9e408cd0154c22f97"),
  "id": NumberInt(132),
  "account": "wangsy",
  "password": "e10adc3949ba59abbe56e057f20f883e",
  "real_name": "王思莹",
  "last_login_time": NumberInt(0),
  "last_login_ip": "",
  "login_count": null,
  "status": NumberInt(2)
});
db.getCollection("uc_user").insert({
  "_id": ObjectId("50a4b9a9e408cd0154c22f98"),
  "id": NumberInt(133),
  "account": "linjd",
  "password": "e10adc3949ba59abbe56e057f20f883e",
  "real_name": "林丹锦",
  "last_login_time": NumberInt(0),
  "last_login_ip": "",
  "login_count": null,
  "status": NumberInt(2)
});
db.getCollection("uc_user").insert({
  "_id": ObjectId("50a4b9a9e408cd0154c22f99"),
  "id": NumberInt(134),
  "account": "linjl",
  "password": "e10adc3949ba59abbe56e057f20f883e",
  "real_name": "林金兰",
  "last_login_time": NumberInt(0),
  "last_login_ip": "",
  "login_count": null,
  "status": NumberInt(2)
});
db.getCollection("uc_user").insert({
  "_id": ObjectId("50a4b9a9e408cd0154c22f4b"),
  "account": "xiewj",
  "id": NumberInt(22),
  "last_login_ip": "127.0.0.1",
  "last_login_time": NumberInt(1352775983),
  "login_count": NumberInt(250),
  "password": "e10adc3949ba59abbe56e057f20f883e",
  "real_name": "谢伟军",
  "role_id": NumberInt(10),
  "status": NumberInt(2)
});
db.getCollection("uc_user").insert({
  "_id": ObjectId("50a4b9a9e408cd0154c22f4c"),
  "account": "weizp",
  "id": NumberInt(38),
  "last_login_ip": "192.168.2.65",
  "last_login_time": NumberInt(1324603090),
  "login_count": NumberInt(91),
  "password": "a265d271e4973f2d280ee04073b1953b",
  "real_name": "魏展平",
  "role_id": NumberInt(10),
  "status": NumberInt(2)
});
db.getCollection("uc_user").insert({
  "_id": ObjectId("50a4b9a9e408cd0154c22f4d"),
  "account": "yuanxy",
  "id": NumberInt(41),
  "last_login_ip": "192.168.2.82",
  "last_login_time": NumberInt(1319697064),
  "login_count": NumberInt(5),
  "password": "e10adc3949ba59abbe56e057f20f883e",
  "real_name": "袁相宜",
  "role_id": NumberInt(1),
  "status": NumberInt(2)
});
db.getCollection("uc_user").insert({
  "_id": ObjectId("50a4b9a9e408cd0154c22f4e"),
  "account": "nawentao",
  "id": NumberInt(42),
  "last_login_ip": "192.168.2.21",
  "last_login_time": NumberInt(1352856690),
  "login_count": NumberInt(215),
  "password": "e10adc3949ba59abbe56e057f20f883e",
  "real_name": "那文涛",
  "role_id": NumberInt(10),
  "status": NumberInt(2)
});
db.getCollection("uc_user").insert({
  "_id": ObjectId("50a4b9a9e408cd0154c22f70"),
  "account": "test",
  "id": NumberInt(141),
  "last_login_ip": "127.0.0.1",
  "last_login_time": NumberInt(1348812677),
  "login_count": null,
  "password": "e10adc3949ba59abbe56e057f20f883e",
  "real_name": "测试",
  "role_id": NumberInt(1),
  "status": NumberInt(2)
});
db.getCollection("uc_user").insert({
  "_id": ObjectId("50ad7e6432f364b42a000009"),
  "account": "admin1",
  "dosubmit": "提交",
  "id": NumberInt(143),
  "last_login_ip": "127.0.0.1",
  "last_login_time": NumberInt(1354615920),
  "login_count": NumberInt(348),
  "password": "e10adc3949ba59abbe56e057f20f883e",
  "real_name": "测试1",
  "role_id": NumberInt(10),
  "status": NumberInt(2)
});
db.getCollection("uc_user").insert({
  "_id": ObjectId("50bdc7a732f364d010000005"),
  "account": "admin",
  "id": NumberInt(144),
  "last_login_ip": "127.0.0.1",
  "last_login_time": NumberInt(1354669110),
  "login_count": NumberInt(3),
  "password": "e10adc3949ba59abbe56e057f20f883e",
  "real_name": "超级管理员",
  "role_id": NumberInt(1),
  "status": NumberInt(2)
});

/** uc_user_authorized records **/
db.getCollection("uc_user_authorized").insert({
  "_id": ObjectId("50bdc46f32f364540a000006"),
  "id": NumberInt(1),
  "uid": NumberInt(1),
  "computer_name": "undefined",
  "cpu_id": "undefined",
  "mac_id": "undefined",
  "storage_id": "undefined",
  "add_time": NumberInt(1354613871),
  "status": NumberInt(2)
});
db.getCollection("uc_user_authorized").insert({
  "_id": ObjectId("50bdc47932f364481b000001"),
  "id": NumberInt(2),
  "uid": NumberInt(1),
  "computer_name": "undefined",
  "cpu_id": "undefined",
  "mac_id": "undefined",
  "storage_id": "undefined",
  "add_time": NumberInt(1354613881),
  "status": NumberInt(2)
});
db.getCollection("uc_user_authorized").insert({
  "_id": ObjectId("50bdcad632f3641809000001"),
  "uid": NumberInt(144),
  "computer_name": "undefined",
  "cpu_id": "undefined",
  "mac_id": "undefined",
  "storage_id": "undefined",
  "add_time": NumberInt(1354615510),
  "id": NumberInt(3),
  "status": NumberInt(2)
});
db.getCollection("uc_user_authorized").insert({
  "_id": ObjectId("50bdcc6332f3645018000003"),
  "uid": NumberInt(143),
  "computer_name": "undefined",
  "cpu_id": "undefined",
  "mac_id": "undefined",
  "storage_id": "undefined",
  "add_time": NumberInt(1354615907),
  "id": NumberInt(4),
  "status": NumberInt(2)
});

/** uc_user_login_log records **/
db.getCollection("uc_user_login_log").insert({
  "_id": ObjectId("50aedc1d32f364282a000036"),
  "id": NumberInt(1),
  "uid": NumberInt(143),
  "login_ip": "127.0.0.1",
  "login_time": NumberInt(1353636893),
  "browser": "Firefox,16.0",
  "system": "Windows 8"
});
db.getCollection("uc_user_login_log").insert({
  "_id": ObjectId("50aedf7532f364d040000037"),
  "id": NumberInt(2),
  "uid": NumberInt(1),
  "login_ip": "127.0.0.1",
  "login_time": NumberInt(1353637749),
  "browser": "Chrome,22.0",
  "system": "Windows 8"
});
db.getCollection("uc_user_login_log").insert({
  "_id": ObjectId("50aedf8032f364282a000037"),
  "id": NumberInt(3),
  "uid": NumberInt(143),
  "login_ip": "127.0.0.1",
  "login_time": NumberInt(1353637760),
  "browser": "Chrome,22.0",
  "system": "Windows 8"
});
db.getCollection("uc_user_login_log").insert({
  "_id": ObjectId("50aedfb932f364601500003a"),
  "id": NumberInt(4),
  "uid": NumberInt(1),
  "login_ip": "127.0.0.1",
  "login_time": NumberInt(1353637817),
  "browser": "MSIE,10.0",
  "system": "Windows 8"
});
db.getCollection("uc_user_login_log").insert({
  "_id": ObjectId("50aedfc332f3642406000029"),
  "id": NumberInt(5),
  "uid": NumberInt(143),
  "login_ip": "127.0.0.1",
  "login_time": NumberInt(1353637827),
  "browser": "MSIE,10.0",
  "system": "Windows 8"
});
db.getCollection("uc_user_login_log").insert({
  "_id": ObjectId("50aee08732f3642018000019"),
  "id": NumberInt(6),
  "uid": NumberInt(1),
  "login_ip": "127.0.0.1",
  "login_time": NumberInt(1353638023),
  "browser": "Chrome,22.0",
  "system": "Windows 8"
});
db.getCollection("uc_user_login_log").insert({
  "_id": ObjectId("50aee36732f364fc0b00002a"),
  "id": NumberInt(7),
  "uid": NumberInt(143),
  "login_ip": "127.0.0.1",
  "login_time": NumberInt(1353638759),
  "browser": "Firefox,16.0",
  "system": "Windows 8"
});
db.getCollection("uc_user_login_log").insert({
  "_id": ObjectId("50af4b16ac0c60680b000000"),
  "id": NumberInt(8),
  "uid": NumberInt(1),
  "login_ip": "192.168.2.93",
  "login_time": NumberInt(1353665302),
  "browser": "Chrome,20.0",
  "system": "Windows XP"
});
db.getCollection("uc_user_login_log").insert({
  "_id": ObjectId("50af4c0832f364782100001e"),
  "id": NumberInt(9),
  "uid": NumberInt(1),
  "login_ip": "127.0.0.1",
  "login_time": NumberInt(1353665544),
  "browser": "Chrome,22.0",
  "system": "Windows 8"
});
db.getCollection("uc_user_login_log").insert({
  "_id": ObjectId("50b0565832f364b007000000"),
  "id": NumberInt(10),
  "uid": NumberInt(1),
  "login_ip": "127.0.0.1",
  "login_time": NumberInt(1353733720),
  "browser": "Firefox,16.0",
  "system": "Windows 8"
});
db.getCollection("uc_user_login_log").insert({
  "_id": ObjectId("50b09bda32f3647813000004"),
  "id": NumberInt(11),
  "uid": NumberInt(143),
  "login_ip": "127.0.0.1",
  "login_time": NumberInt(1353751514),
  "browser": "Firefox,16.0",
  "system": "Windows 8"
});
db.getCollection("uc_user_login_log").insert({
  "_id": ObjectId("50b09be632f3640c0c000005"),
  "id": NumberInt(12),
  "uid": NumberInt(1),
  "login_ip": "127.0.0.1",
  "login_time": NumberInt(1353751526),
  "browser": "Firefox,16.0",
  "system": "Windows 8"
});
db.getCollection("uc_user_login_log").insert({
  "_id": ObjectId("50b09c3e32f364b007000004"),
  "id": NumberInt(13),
  "uid": NumberInt(1),
  "login_ip": "127.0.0.1",
  "login_time": NumberInt(1353751614),
  "browser": "Firefox,16.0",
  "system": "Windows 8"
});
db.getCollection("uc_user_login_log").insert({
  "_id": ObjectId("50b09c7532f3645412000000"),
  "id": NumberInt(14),
  "uid": NumberInt(143),
  "login_ip": "127.0.0.1",
  "login_time": NumberInt(1353751669),
  "browser": "Firefox,16.0",
  "system": "Windows 8"
});
db.getCollection("uc_user_login_log").insert({
  "_id": ObjectId("50b09c7f32f3649811000000"),
  "id": NumberInt(15),
  "uid": NumberInt(143),
  "login_ip": "127.0.0.1",
  "login_time": NumberInt(1353751679),
  "browser": "Firefox,16.0",
  "system": "Windows 8"
});
db.getCollection("uc_user_login_log").insert({
  "_id": ObjectId("50b09d6432f364ac10000002"),
  "id": NumberInt(16),
  "uid": NumberInt(1),
  "login_ip": "127.0.0.1",
  "login_time": NumberInt(1353751908),
  "browser": "Firefox,16.0",
  "system": "Windows 8"
});
db.getCollection("uc_user_login_log").insert({
  "_id": ObjectId("50b2c2ec32f364c815000000"),
  "id": NumberInt(17),
  "uid": NumberInt(1),
  "login_ip": "127.0.0.1",
  "login_time": NumberInt(1353892588),
  "browser": "Firefox,16.0",
  "system": "Windows 8"
});
db.getCollection("uc_user_login_log").insert({
  "_id": ObjectId("50b70d69ac0c602410000001"),
  "id": NumberInt(18),
  "uid": NumberInt(1),
  "login_ip": "192.168.2.93",
  "login_time": NumberInt(1354173801),
  "browser": "Chrome,20.0",
  "system": "Windows XP"
});
db.getCollection("uc_user_login_log").insert({
  "_id": ObjectId("50b8259a32f3642810000000"),
  "id": NumberInt(19),
  "uid": NumberInt(1),
  "login_ip": "127.0.0.1",
  "login_time": NumberInt(1354245530),
  "browser": "Firefox,16.0",
  "system": "Windows 8"
});
db.getCollection("uc_user_login_log").insert({
  "_id": ObjectId("50bbfbe232f364d010000000"),
  "id": NumberInt(20),
  "uid": NumberInt(1),
  "login_ip": "127.0.0.1",
  "login_time": NumberInt(1354496994),
  "browser": "Firefox,16.0",
  "system": "Windows 8"
});
db.getCollection("uc_user_login_log").insert({
  "_id": ObjectId("50bdbd2132f3646009000002"),
  "id": NumberInt(21),
  "uid": NumberInt(1),
  "login_ip": "127.0.0.1",
  "login_time": NumberInt(1354612001),
  "browser": "MSIE,7.0",
  "system": "Windows 8"
});
db.getCollection("uc_user_login_log").insert({
  "_id": ObjectId("50bdc4b532f3648812000002"),
  "id": NumberInt(22),
  "uid": NumberInt(1),
  "login_ip": "127.0.0.1",
  "login_time": NumberInt(1354613941),
  "browser": "Firefox,16.0",
  "system": "Windows 8"
});
db.getCollection("uc_user_login_log").insert({
  "_id": ObjectId("50bdc7ca32f3646009000005"),
  "id": NumberInt(23),
  "uid": NumberInt(144),
  "login_ip": "127.0.0.1",
  "login_time": NumberInt(1354614730),
  "browser": "Firefox,16.0",
  "system": "Windows 8"
});
db.getCollection("uc_user_login_log").insert({
  "_id": ObjectId("50bdcae532f364ec0f000004"),
  "id": NumberInt(24),
  "uid": NumberInt(144),
  "login_ip": "127.0.0.1",
  "login_time": NumberInt(1354615525),
  "browser": "Firefox,16.0",
  "system": "Windows 8"
});
db.getCollection("uc_user_login_log").insert({
  "_id": ObjectId("50bdcb1f32f364f80d000006"),
  "id": NumberInt(25),
  "uid": NumberInt(143),
  "login_ip": "127.0.0.1",
  "login_time": NumberInt(1354615583),
  "browser": "Chrome,22.0",
  "system": "Windows 8"
});
db.getCollection("uc_user_login_log").insert({
  "_id": ObjectId("50bdcc7032f3642c1b000003"),
  "id": NumberInt(26),
  "uid": NumberInt(143),
  "login_ip": "127.0.0.1",
  "login_time": NumberInt(1354615920),
  "browser": "Chrome,22.0",
  "system": "Windows 8"
});
db.getCollection("uc_user_login_log").insert({
  "_id": ObjectId("50be9c3632f3645018000004"),
  "id": NumberInt(27),
  "uid": NumberInt(144),
  "login_ip": "127.0.0.1",
  "login_time": NumberInt(1354669110),
  "browser": "MSIE,10.0",
  "system": "Windows 8"
});

/** uc_user_operation_log records **/
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50aeea0f32f3642c28000013"),
  "id": NumberInt(1),
  "uid": NumberInt(143),
  "optime": NumberInt(1353640463),
  "module": "Node",
  "action": "delete",
  "opinfo": "[\"21\"]"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50aeec1d32f364ec13000013"),
  "id": NumberInt(2),
  "uid": NumberInt(143),
  "optime": NumberInt(1353640989),
  "module": "Node",
  "action": "add",
  "opinfo": "50aeec1d32f364ec13000012"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50aeec7e32f364d830000013"),
  "id": NumberInt(3),
  "uid": NumberInt(143),
  "optime": NumberInt(1353641086),
  "module": "Node",
  "action": "delete",
  "opinfo": "[\"21\",\"22\"]"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50aeecd132f3642018000029"),
  "id": NumberInt(4),
  "uid": NumberInt(143),
  "optime": NumberInt(1353641169),
  "module": "Node",
  "action": "delete",
  "opinfo": "[\"21\"]"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50aeee0232f364ac43000017"),
  "id": NumberInt(5),
  "uid": NumberInt(143),
  "optime": NumberInt(1353641474),
  "module": "Node",
  "action": "add",
  "opinfo": "{\"name\":\"23242\",\"title\":\"\测\试\",\"order_id\":2,\"status\":2,\"is_menu\":2,\"id\":21,\"parent_id\":15}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50aeef7232f364404300001a"),
  "id": NumberInt(6),
  "uid": NumberInt(143),
  "optime": NumberInt(1353641842),
  "module": "Node",
  "action": "edit",
  "opinfo": "{\"name\":\"1\",\"title\":\"\试\试\",\"order_id\":1,\"status\":2,\"is_menu\":2,\"id\":20,\"parent_id\":15}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50aef06b32f3642c28000014"),
  "id": NumberInt(7),
  "uid": NumberInt(1),
  "optime": NumberInt(1353642091),
  "module": "Role",
  "action": "power",
  "opinfo": "{\"role_id\":10,\"power\":[\"1\",\"3\",\"4\",\"5\",\"6\",\"7\",\"17\",\"2\",\"10\",\"8\",\"13\",\"9\",\"18\",\"19\",\"11\",\"15\",\"16\"]}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50aef07732f3645c2a000020"),
  "id": NumberInt(8),
  "uid": NumberInt(143),
  "optime": NumberInt(1353642103),
  "module": "Role",
  "action": "power",
  "opinfo": "{\"role_id\":10,\"power\":[\"1\",\"3\",\"4\",\"5\",\"6\",\"7\",\"17\",\"2\",\"10\",\"8\",\"13\",\"9\",\"14\",\"18\",\"19\",\"11\",\"15\",\"16\"]}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50aef0c832f364d830000014"),
  "id": NumberInt(9),
  "uid": NumberInt(143),
  "optime": NumberInt(1353642184),
  "module": "Role",
  "action": "edit",
  "opinfo": "{\"name\":\"\管\理\员\",\"status\":2,\"id\":10}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50aef16e32f364782100001c"),
  "id": NumberInt(10),
  "uid": NumberInt(143),
  "optime": NumberInt(1353642350),
  "module": "User",
  "action": "resetPwd",
  "opinfo": "{\"id\":143,\"password\":\"123456\"}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50aef18232f364d02e00002c"),
  "id": NumberInt(11),
  "uid": NumberInt(143),
  "optime": NumberInt(1353642370),
  "module": "User",
  "action": "resetPwd",
  "opinfo": "{\"uid\":1,\"password\":\"123456\"}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50aef19932f364d040000038"),
  "id": NumberInt(12),
  "uid": NumberInt(143),
  "optime": NumberInt(1353642393),
  "module": "User",
  "action": "edit",
  "opinfo": "{\"account\":\"admin1\",\"real_name\":\"\测\试1\",\"role_id\":10,\"status\":2,\"id\":143}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50aef3cb32f364fc0b00003b"),
  "id": NumberInt(13),
  "uid": NumberInt(1),
  "optime": NumberInt(1353642955),
  "module": "Node",
  "action": "edit",
  "opinfo": "{\"name\":\"operationLog\",\"title\":\"\操\作\日\志\",\"order_id\":3,\"status\":2,\"is_menu\":1,\"id\":19,\"parent_id\":9}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50aef3df32f364404300001b"),
  "id": NumberInt(14),
  "uid": NumberInt(1),
  "optime": NumberInt(1353642975),
  "module": "Role",
  "action": "power",
  "opinfo": "{\"role_id\":10,\"power\":[\"1\",\"3\",\"4\",\"5\",\"6\",\"7\",\"17\",\"2\",\"10\",\"8\",\"13\",\"9\",\"14\",\"18\",\"19\",\"11\",\"15\",\"16\"]}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50af1ea532f364d04000003a"),
  "id": NumberInt(15),
  "uid": NumberInt(143),
  "optime": NumberInt(1353653925),
  "module": "Node",
  "action": "add",
  "opinfo": "{\"name\":\"App\",\"title\":\"\应\用\管\理\",\"order_id\":0,\"status\":2,\"is_menu\":2,\"id\":22,\"parent_id\":11}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50af1ed632f3645c2a000033"),
  "id": NumberInt(16),
  "uid": NumberInt(1),
  "optime": NumberInt(1353653974),
  "module": "Role",
  "action": "power",
  "opinfo": "{\"role_id\":10,\"power\":[\"1\",\"3\",\"4\",\"5\",\"6\",\"7\",\"17\",\"2\",\"10\",\"8\",\"13\",\"9\",\"14\",\"18\",\"19\",\"11\",\"22\",\"15\",\"16\"]}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50af1ee232f364282a000038"),
  "id": NumberInt(17),
  "uid": NumberInt(1),
  "optime": NumberInt(1353653986),
  "module": "Node",
  "action": "delete",
  "opinfo": "[\"16\",\"20\",\"21\"]"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50af1ee932f3645c2a000047"),
  "id": NumberInt(18),
  "uid": NumberInt(1),
  "optime": NumberInt(1353653993),
  "module": "Node",
  "action": "delete",
  "opinfo": "[\"15\"]"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50af2bad32f364d02e00002e"),
  "id": NumberInt(19),
  "uid": NumberInt(143),
  "optime": NumberInt(1353657261),
  "module": "Node",
  "action": "add",
  "opinfo": "{\"name\":\"1111\",\"title\":\"1\",\"order_id\":1,\"status\":2,\"is_menu\":2,\"id\":23,\"parent_id\":11}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50af2bb132f3645c2a000048"),
  "id": NumberInt(20),
  "uid": NumberInt(143),
  "optime": NumberInt(1353657265),
  "module": "Node",
  "action": "delete",
  "opinfo": "[\"23\"]"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50af2bb932f364ac43000019"),
  "id": NumberInt(21),
  "uid": NumberInt(143),
  "optime": NumberInt(1353657273),
  "module": "Node",
  "action": "add",
  "opinfo": "{\"name\":\"1\",\"title\":\"1\",\"order_id\":1,\"status\":2,\"is_menu\":2,\"id\":23,\"parent_id\":0}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50af2bc932f364b42a00002a"),
  "id": NumberInt(22),
  "uid": NumberInt(143),
  "optime": NumberInt(1353657289),
  "module": "Node",
  "action": "delete",
  "opinfo": "[\"23\"]"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50af2bf832f3642c28000026"),
  "id": NumberInt(23),
  "uid": NumberInt(143),
  "optime": NumberInt(1353657336),
  "module": "Node",
  "action": "edit",
  "opinfo": "{\"name\":\"Operate\",\"title\":\"\运\营\管\理\",\"order_id\":3,\"status\":2,\"is_menu\":2,\"id\":11,\"parent_id\":0}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50af37f832f364fc0b00003c"),
  "id": NumberInt(24),
  "uid": NumberInt(1),
  "optime": NumberInt(1353660408),
  "module": "Role",
  "action": "power",
  "opinfo": "{\"role_id\":10,\"power\":[\"1\",\"3\",\"4\",\"5\",\"6\",\"7\",\"17\",\"2\",\"10\",\"8\",\"13\",\"9\",\"14\",\"18\",\"19\",\"11\",\"22\"]}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50af380032f3642c28000027"),
  "id": NumberInt(25),
  "uid": NumberInt(1),
  "optime": NumberInt(1353660416),
  "module": "Role",
  "action": "power",
  "opinfo": "{\"role_id\":10,\"power\":[\"1\",\"3\",\"4\",\"5\",\"6\",\"7\",\"17\",\"2\",\"10\",\"8\",\"13\",\"9\",\"14\",\"18\",\"19\",\"11\",\"22\"]}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50af469f32f364e01800003d"),
  "id": NumberInt(26),
  "uid": NumberInt(143),
  "optime": NumberInt(1353664159),
  "module": "App",
  "action": "edit",
  "opinfo": "{\"appid\":1,\"appcode\":\"sxxl\",\"appname\":\"\服\装\网\",\"appkey\":\"WWW_JKHL===-JJIALKHLA\",\"rurl\":\"http:\\\/\\\/www.sxxl.d\\\/Test\\\/test\",\"listener\":\"http:\\\/\\\/www.sxxl.d\\\/Test\\\/testListener\",\"status\":2,\"id\":1}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50af47ea32f3645c2a00004a"),
  "id": NumberInt(27),
  "uid": NumberInt(143),
  "optime": NumberInt(1353664490),
  "module": "App",
  "action": "add",
  "opinfo": "{\"appid\":2,\"appcode\":\"xiebao\",\"appname\":\"\鞋\包\网\",\"appkey\":\"sdu3m&^^3kk35456\",\"rurl\":\"http:\\\/\\\/www.baidu.com\",\"listener\":\"http:\\\/\\\/www.baidu.com\",\"status\":2,\"id\":4}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50af486132f3645c2a00004b"),
  "id": NumberInt(28),
  "uid": NumberInt(143),
  "optime": NumberInt(1353664609),
  "module": "App",
  "action": "edit",
  "opinfo": "{\"appid\":1,\"appcode\":\"sxxl\",\"appname\":\"\服\装\网\",\"appkey\":\"WWW_JKHL===-JJIALKHLA\",\"rurl\":\"http:\\\/\\\/www.sxxl.d\\\/Test\\\/test\",\"listener\":\"http:\\\/\\\/www.sxxl.d\\\/Test\\\/testListener\",\"status\":2,\"id\":1}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50af488632f364240600002a"),
  "id": NumberInt(29),
  "uid": NumberInt(143),
  "optime": NumberInt(1353664646),
  "module": "App",
  "action": "edit",
  "opinfo": "{\"appid\":1,\"appcode\":\"sxxl\",\"appname\":\"\服\装\网\",\"appkey\":\"WWW_JKHL===-JJIALKHLA\",\"rurl\":\"http:\\\/\\\/www.sxxl.d\\\/Test\\\/test\",\"listener\":\"http:\\\/\\\/www.sxxl.d\\\/Test\\\/testListener\",\"status\":2,\"id\":1}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50af493232f364d04000003b"),
  "id": NumberInt(30),
  "uid": NumberInt(143),
  "optime": NumberInt(1353664818),
  "module": "App",
  "action": "delete",
  "opinfo": "[\"3\"]"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50af49bc32f364f042000026"),
  "id": NumberInt(31),
  "uid": NumberInt(143),
  "optime": NumberInt(1353664956),
  "module": "App",
  "action": "delete",
  "opinfo": "[\"2\"]"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50af4a1132f364201800002a"),
  "id": NumberInt(32),
  "uid": NumberInt(143),
  "optime": NumberInt(1353665041),
  "module": "App",
  "action": "edit",
  "opinfo": "{\"appid\":1,\"appcode\":\"sxxl\",\"appname\":\"\服\装\网\",\"appkey\":\"WWW_JKHL===-JJIALKHLA\",\"rurl\":\"http:\\\/\\\/www.sxxl.com\",\"listener\":\"http:\\\/\\\/www.sxxl.com\",\"status\":2,\"id\":1}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50af4a2232f364782100001d"),
  "id": NumberInt(33),
  "uid": NumberInt(143),
  "optime": NumberInt(1353665058),
  "module": "App",
  "action": "edit",
  "opinfo": "{\"appid\":2,\"appcode\":\"xiebao\",\"appname\":\"\鞋\包\网\",\"appkey\":\"sdu3m&^^3kk35456\",\"rurl\":\"http:\\\/\\\/www.xiebaowang.com\",\"listener\":\"http:\\\/\\\/www.xiebaowang.com\",\"status\":2,\"id\":4}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50af4b2b32f364e01800003f"),
  "id": NumberInt(34),
  "uid": NumberInt(143),
  "optime": NumberInt(1353665323),
  "module": "Node",
  "action": "add",
  "opinfo": "{\"name\":\"Help\",\"title\":\"\帮\助\中\心\",\"order_id\":4,\"status\":2,\"is_menu\":2,\"id\":23,\"parent_id\":0}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50af4bb632f364404300002f"),
  "id": NumberInt(35),
  "uid": NumberInt(143),
  "optime": NumberInt(1353665462),
  "module": "Node",
  "action": "add",
  "opinfo": "{\"name\":\"HelpMenu\",\"title\":\"\帮\助\分\类\",\"order_id\":1,\"status\":2,\"is_menu\":2,\"id\":24,\"parent_id\":23}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50af4c2432f364601500003b"),
  "id": NumberInt(36),
  "uid": NumberInt(1),
  "optime": NumberInt(1353665572),
  "module": "User",
  "action": "edit",
  "opinfo": "{\"account\":\"admin1\",\"real_name\":\"\测\试1\",\"role_id\":1,\"status\":2,\"id\":143}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50af4c2a32f364240600002b"),
  "id": NumberInt(37),
  "uid": NumberInt(1),
  "optime": NumberInt(1353665578),
  "module": "User",
  "action": "edit",
  "opinfo": "{\"account\":\"admin1\",\"real_name\":\"\测\试1\",\"role_id\":10,\"status\":2,\"id\":143}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50af4c2f32f364782100001f"),
  "id": NumberInt(38),
  "uid": NumberInt(1),
  "optime": NumberInt(1353665583),
  "module": "Role",
  "action": "power",
  "opinfo": "{\"role_id\":10,\"power\":[\"1\",\"3\",\"4\",\"5\",\"6\",\"7\",\"17\",\"2\",\"22\",\"10\",\"8\",\"13\",\"9\",\"14\",\"18\",\"19\",\"11\",\"23\",\"24\"]}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50af4c6132f364b41900001c"),
  "id": NumberInt(39),
  "uid": NumberInt(143),
  "optime": NumberInt(1353665633),
  "module": "Node",
  "action": "add",
  "opinfo": "{\"name\":\"Help\",\"title\":\"\帮\助\信\息\管\理\",\"order_id\":2,\"status\":2,\"is_menu\":2,\"id\":25,\"parent_id\":23}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b01dfc32f364fc0b00004e"),
  "id": NumberInt(48),
  "uid": NumberInt(143),
  "optime": NumberInt(1353719292),
  "module": "App",
  "action": "delete",
  "opinfo": "[\"5\"]"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50af4c7132f3645c2a00004c"),
  "id": NumberInt(40),
  "uid": NumberInt(143),
  "optime": NumberInt(1353665649),
  "module": "Node",
  "action": "edit",
  "opinfo": "{\"name\":\"App\",\"title\":\"\应\用\管\理\",\"order_id\":5,\"status\":2,\"is_menu\":2,\"id\":22,\"parent_id\":2}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50af4c7f32f364f02b00002f"),
  "id": NumberInt(41),
  "uid": NumberInt(1),
  "optime": NumberInt(1353665663),
  "module": "Role",
  "action": "power",
  "opinfo": "{\"role_id\":10,\"power\":[\"1\",\"3\",\"4\",\"5\",\"6\",\"7\",\"17\",\"2\",\"10\",\"8\",\"13\",\"9\",\"14\",\"18\",\"19\",\"22\",\"11\",\"23\",\"24\",\"25\"]}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50af4c9d32f364b42a00002b"),
  "id": NumberInt(42),
  "uid": NumberInt(143),
  "optime": NumberInt(1353665693),
  "module": "Node",
  "action": "edit",
  "opinfo": "{\"name\":\"Help\",\"title\":\"\信\息\管\理\",\"order_id\":2,\"status\":2,\"is_menu\":2,\"id\":25,\"parent_id\":23}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50af510432f3642c2800003a"),
  "id": NumberInt(43),
  "uid": NumberInt(143),
  "optime": NumberInt(1353666820),
  "module": "HelpMenu",
  "action": "add",
  "opinfo": "{\"name\":\"1111\",\"order_id\":1,\"status\":2,\"id\":1,\"parent_id\":0}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50af512e32f364d830000015"),
  "id": NumberInt(44),
  "uid": NumberInt(143),
  "optime": NumberInt(1353666862),
  "module": "HelpMenu",
  "action": "edit",
  "opinfo": "{\"name\":\"2342424\",\"order_id\":1,\"status\":2,\"id\":1,\"parent_id\":0}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b01d4732f3645c2a00004d"),
  "id": NumberInt(45),
  "uid": NumberInt(143),
  "optime": NumberInt(1353719111),
  "module": "Node",
  "action": "edit",
  "opinfo": "{\"name\":\"HelpCenter\",\"title\":\"\帮\助\中\心\",\"order_id\":4,\"status\":2,\"is_menu\":2,\"id\":23,\"parent_id\":0}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b01dcc32f3642c2800003b"),
  "id": NumberInt(46),
  "uid": NumberInt(143),
  "optime": NumberInt(1353719244),
  "module": "App",
  "action": "edit",
  "opinfo": "{\"appid\":1,\"appcode\":\"sxxl\",\"appname\":\"\服\装\网\",\"appkey\":\"WWW_JKHL===-JJIALKHLA\",\"rurl\":\"http:\\\/\\\/www.sxxl.com\",\"listener\":\"http:\\\/\\\/www.sxxl.com\",\"status\":2,\"id\":1}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b01df632f364d830000017"),
  "id": NumberInt(47),
  "uid": NumberInt(143),
  "optime": NumberInt(1353719286),
  "module": "App",
  "action": "add",
  "opinfo": "{\"appid\":1,\"appcode\":\"1111\",\"appname\":\"111\",\"appkey\":\"11111\",\"rurl\":\"http:\\\/\\\/www.baidu.com\",\"listener\":\"http:\\\/\\\/www.baidu.com\",\"status\":2,\"id\":5}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b0257b32f364e018000040"),
  "id": NumberInt(49),
  "uid": NumberInt(143),
  "optime": NumberInt(1353721211),
  "module": "App",
  "action": "edit",
  "opinfo": "{\"appid\":1,\"appcode\":\"sxxl\",\"appname\":\"\服\装\网\",\"appkey\":\"WWW_JKHL===-JJIALKHLA\",\"rurl\":\"http:\\\/\\\/www.sxxl.com\",\"listener\":\"http:\\\/\\\/www.sxxl.com\",\"status\":2,\"id\":1}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b025a632f3644043000031"),
  "id": NumberInt(50),
  "uid": NumberInt(143),
  "optime": NumberInt(1353721254),
  "module": "App",
  "action": "add",
  "opinfo": "{\"appid\":1,\"appcode\":\"1\",\"appname\":\"1\",\"appkey\":\"1\",\"rurl\":\"http:\\\/\\\/www.baidu.com\",\"listener\":\"http:\\\/\\\/www.baidu.com\",\"status\":2,\"id\":5}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b025ab32f364ac4300001a"),
  "id": NumberInt(51),
  "uid": NumberInt(143),
  "optime": NumberInt(1353721259),
  "module": "App",
  "action": "delete",
  "opinfo": "[\"5\"]"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b025e532f364240600002c"),
  "id": NumberInt(52),
  "uid": NumberInt(143),
  "optime": NumberInt(1353721317),
  "module": "App",
  "action": "edit",
  "opinfo": "{\"appid\":1,\"appcode\":\"sxxl\",\"appname\":\"\服\装\网\",\"appkey\":\"WWW_JKHL===-JJIALKHLA\",\"rurl\":\"http:\\\/\\\/www.sxxl.com\",\"listener\":\"http:\\\/\\\/www.sxxl.com\",\"status\":2,\"id\":1}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b025ed32f364ec13000014"),
  "id": NumberInt(53),
  "uid": NumberInt(143),
  "optime": NumberInt(1353721325),
  "module": "App",
  "action": "edit",
  "opinfo": "{\"appid\":2,\"appcode\":\"xiebao\",\"appname\":\"\鞋\包\网\",\"appkey\":\"sdu3m&^^3kk35456\",\"rurl\":\"http:\\\/\\\/www.xiebaowang.com\",\"listener\":\"http:\\\/\\\/www.xiebaowang.com\",\"status\":2,\"id\":4}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b0742032f364e012000000"),
  "id": NumberInt(54),
  "uid": NumberInt(1),
  "optime": NumberInt(1353741344),
  "module": "HelpMenu",
  "action": "edit",
  "opinfo": "{\"name\":\"\帮\助\分\类1\",\"order_id\":1,\"status\":2,\"id\":1,\"parent_id\":0}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b0744232f3642410000000"),
  "id": NumberInt(55),
  "uid": NumberInt(1),
  "optime": NumberInt(1353741378),
  "module": "HelpMenu",
  "action": "edit",
  "opinfo": "{\"name\":\"\分\类1\",\"order_id\":1,\"status\":2,\"id\":1,\"parent_id\":0}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b075b032f3642410000002"),
  "id": NumberInt(56),
  "uid": NumberInt(1),
  "optime": NumberInt(1353741744),
  "module": "Help",
  "action": "add",
  "opinfo": "{\"title\":\"\测\试\信\息\",\"mid\":1,\"intro\":\"\这\里\是\简\介\",\"keywords\":\"\关\键\词\",\"release_time\":1353741487,\"status\":2,\"content\":\"\顶\替\厅\棋<br \\\/>\",\"id\":1}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b0762432f3640c0c000001"),
  "id": NumberInt(57),
  "uid": NumberInt(1),
  "optime": NumberInt(1353741860),
  "module": "Help",
  "action": "add",
  "opinfo": "{\"title\":\"\测\试\信\息1\",\"mid\":1,\"intro\":\"\这\里\是\简\介\",\"keywords\":\"\关\键\词\",\"release_time\":1353741487,\"status\":2,\"content\":\"\顶\替\厅\棋<br \\\/>\",\"id\":2}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b0765332f3647013000001"),
  "id": NumberInt(58),
  "uid": NumberInt(1),
  "optime": NumberInt(1353741907),
  "module": "Help",
  "action": "add",
  "opinfo": "{\"title\":\"\测\试\信\息2\",\"mid\":1,\"intro\":\"\这\里\是\简\介\",\"keywords\":\"\关\键\词\",\"release_time\":1353741900,\"status\":2,\"content\":\"\这\是\内\容!<br \\\/>\",\"id\":3}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b076b232f3644811000001"),
  "id": NumberInt(59),
  "uid": NumberInt(1),
  "optime": NumberInt(1353742002),
  "module": "Help",
  "action": "add",
  "opinfo": "{\"title\":\"\测\试\信\息3\",\"mid\":1,\"intro\":\"\这\是\简\介\",\"keywords\":\"\关\键\词\",\"release_time\":1353741995,\"status\":2,\"content\":\"\这\是\内\容!<br \\\/>\",\"id\":4}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b0784f32f364b00e000000"),
  "id": NumberInt(60),
  "uid": NumberInt(1),
  "optime": NumberInt(1353742415),
  "module": "Node",
  "action": "edit",
  "opinfo": "{\"name\":\"HelpType\",\"title\":\"\帮\助\分\类\",\"order_id\":1,\"status\":2,\"is_menu\":2,\"id\":24,\"parent_id\":23}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b079d832f3642410000004"),
  "id": NumberInt(61),
  "uid": NumberInt(1),
  "optime": NumberInt(1353742808),
  "module": "HelpType",
  "action": "add",
  "opinfo": "{\"name\":\"\分\类1\",\"order_id\":1,\"status\":2,\"id\":1,\"parent_id\":0}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b079de32f3640c0c000003"),
  "id": NumberInt(62),
  "uid": NumberInt(1),
  "optime": NumberInt(1353742814),
  "module": "HelpType",
  "action": "add",
  "opinfo": "{\"name\":\"\分\类2\",\"order_id\":2,\"status\":2,\"id\":2,\"parent_id\":0}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b07a8232f364ac10000001"),
  "id": NumberInt(63),
  "uid": NumberInt(1),
  "optime": NumberInt(1353742978),
  "module": "Help",
  "action": "add",
  "opinfo": "{\"title\":\"\测\试\信\息4\",\"tid\":\"1\",\"intro\":\"\简\介\",\"keywords\":\"\关\键\词\",\"release_time\":1353742973,\"status\":2,\"content\":\"\内\容!<br \\\/>\",\"id\":5,\"mid\":25}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b07aa232f364fc10000001"),
  "id": NumberInt(64),
  "uid": NumberInt(1),
  "optime": NumberInt(1353743010),
  "module": "Help",
  "action": "add",
  "opinfo": "{\"title\":\"\测\试\信\息5\",\"tid\":\"1\",\"intro\":\"\简\介\",\"keywords\":\"\关\键\词\",\"release_time\":1353742973,\"status\":2,\"content\":\"\内\容!<br \\\/>\",\"id\":6,\"mid\":25}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b07af232f3642c12000001"),
  "id": NumberInt(65),
  "uid": NumberInt(1),
  "optime": NumberInt(1353743090),
  "module": "Help",
  "action": "add",
  "opinfo": "{\"title\":\"\测\试\信\息6\",\"tid\":\"1\",\"intro\":\"\简\介\",\"keywords\":\"\关\键\词\",\"release_time\":1353742973,\"status\":2,\"content\":\"\内\容!<br \\\/>\",\"id\":7,\"mid\":25}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b07b4432f3647813000001"),
  "id": NumberInt(66),
  "uid": NumberInt(1),
  "optime": NumberInt(1353743172),
  "module": "Help",
  "action": "add",
  "opinfo": "{\"title\":\"\测\试\信\息7\",\"tid\":\"2\",\"intro\":\"\简\介\",\"keywords\":\"\关\键\词\",\"release_time\":1353743168,\"status\":2,\"content\":\"\内\容.<br \\\/>\",\"id\":8,\"mid\":25}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b07c3f32f3647813000002"),
  "id": NumberInt(67),
  "uid": NumberInt(1),
  "optime": NumberInt(1353743423),
  "module": "Help",
  "action": "delete",
  "opinfo": "[\"8\"]"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b07c4c32f364b00e000001"),
  "id": NumberInt(68),
  "uid": NumberInt(1),
  "optime": NumberInt(1353743436),
  "module": "Help",
  "action": "edit",
  "opinfo": "{\"title\":\"\测\试\信\息3\",\"tid\":\"1\",\"intro\":\"\这\是\简\介\",\"keywords\":\"\关\键\词\",\"release_time\":0,\"status\":2,\"content\":\"\这\是\内\容!<br \\\/>\",\"id\":4,\"mid\":25}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b07c6232f364d012000000"),
  "id": NumberInt(69),
  "uid": NumberInt(1),
  "optime": NumberInt(1353743458),
  "module": "Help",
  "action": "edit",
  "opinfo": "{\"title\":\"\测\试\信\息2\",\"tid\":\"2\",\"intro\":\"\这\里\是\简\介\",\"keywords\":\"\关\键\词\",\"release_time\":0,\"status\":2,\"content\":\"\这\是\内\容!<br \\\/>\",\"id\":3,\"mid\":25}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b07c6c32f364d412000000"),
  "id": NumberInt(70),
  "uid": NumberInt(1),
  "optime": NumberInt(1353743468),
  "module": "Help",
  "action": "edit",
  "opinfo": "{\"title\":\"\测\试\信\息1\",\"tid\":\"2\",\"intro\":\"\这\里\是\简\介\",\"keywords\":\"\关\键\词\",\"release_time\":0,\"status\":1,\"content\":\"\顶\替\厅\棋<br \\\/>\",\"id\":2,\"mid\":25}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b07c7132f3642c12000002"),
  "id": NumberInt(71),
  "uid": NumberInt(1),
  "optime": NumberInt(1353743473),
  "module": "Help",
  "action": "edit",
  "opinfo": "{\"title\":\"\测\试\信\息\",\"tid\":\"2\",\"intro\":\"\这\里\是\简\介\",\"keywords\":\"\关\键\词\",\"release_time\":0,\"status\":2,\"content\":\"\顶\替\厅\棋<br \\\/>\",\"id\":1,\"mid\":25}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b07cca32f3644811000002"),
  "id": NumberInt(72),
  "uid": NumberInt(1),
  "optime": NumberInt(1353743562),
  "module": "Help",
  "action": "delete",
  "opinfo": "[\"7\",\"6\",\"5\",\"4\",\"3\",\"2\",\"1\"]"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b07cde32f364b007000002"),
  "id": NumberInt(73),
  "uid": NumberInt(1),
  "optime": NumberInt(1353743582),
  "module": "Help",
  "action": "add",
  "opinfo": "{\"title\":\"\测\试\信\息1\",\"tid\":\"1\",\"intro\":\"\简\介\",\"keywords\":\"\关\键\词\",\"release_time\":1353743576,\"status\":2,\"content\":\"\内\容!<br \\\/>\",\"id\":1,\"mid\":null}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b07d0332f364a810000000"),
  "id": NumberInt(74),
  "uid": NumberInt(1),
  "optime": NumberInt(1353743619),
  "module": "Help",
  "action": "delete",
  "opinfo": "[\"1\"]"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b07d1732f3648411000001"),
  "id": NumberInt(75),
  "uid": NumberInt(1),
  "optime": NumberInt(1353743639),
  "module": "Help",
  "action": "add",
  "opinfo": "{\"title\":\"\测\试\信\息\",\"tid\":1,\"intro\":\"f sdf \",\"keywords\":\"\关\键\词\",\"release_time\":1353743635,\"status\":2,\"content\":\"sdfssdfas<br \\\/>\",\"id\":1}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b07daa32f3644811000004"),
  "id": NumberInt(76),
  "uid": NumberInt(1),
  "optime": NumberInt(1353743786),
  "module": "Help",
  "action": "add",
  "opinfo": "{\"title\":\"\帮\助\",\"tid\":1,\"intro\":\"\简\介\",\"keywords\":\"111\",\"release_time\":1353743782,\"status\":2,\"content\":\"\夺<br \\\/>\",\"id\":2}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b07de032f3640c0c000004"),
  "id": NumberInt(77),
  "uid": NumberInt(1),
  "optime": NumberInt(1353743840),
  "module": "Help",
  "action": "edit",
  "opinfo": "{\"title\":\"\帮\助\",\"tid\":1,\"intro\":\"\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\",\"keywords\":\"111\",\"release_time\":0,\"status\":2,\"content\":\"\夺<br \\\/>\",\"id\":2}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b07f7c32f364d412000001"),
  "id": NumberInt(78),
  "uid": NumberInt(1),
  "optime": NumberInt(1353744252),
  "module": "Help",
  "action": "edit",
  "opinfo": "{\"title\":\"\帮\助\",\"tid\":1,\"intro\":\"\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\",\"keywords\":\"111\",\"release_time\":1353744250,\"status\":2,\"content\":\"\夺<img src=\\\"\\\/images\\\/2012\\\/1124\\\/2416\\\/aaf14d6080bdf4d66e40b698a239313344979.gif\\\" alt=\\\"\\\" \\\/><br \\\/>\",\"id\":2}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b0809232f3642410000005"),
  "id": NumberInt(79),
  "uid": NumberInt(1),
  "optime": NumberInt(1353744530),
  "module": "Help",
  "action": "edit",
  "opinfo": "{\"title\":\"\帮\助\",\"tid\":1,\"intro\":\"\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\",\"keywords\":\"111\",\"release_time\":1351757050,\"status\":2,\"content\":\"\夺<img src=\\\"\\\/images\\\/2012\\\/1124\\\/2416\\\/aaf14d6080bdf4d66e40b698a239313344979.gif\\\" alt=\\\"\\\" \\\/><br \\\/>\",\"id\":2}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b080a232f364b007000003"),
  "id": NumberInt(80),
  "uid": NumberInt(1),
  "optime": NumberInt(1353744546),
  "module": "Help",
  "action": "edit",
  "opinfo": "{\"title\":\"\测\试\信\息\",\"tid\":1,\"intro\":\"f sdf \",\"keywords\":\"\关\键\词\",\"release_time\":1354262035,\"status\":2,\"content\":\"sdfssdfas<br \\\/>\",\"id\":1}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b080f932f3647813000003"),
  "id": NumberInt(81),
  "uid": NumberInt(1),
  "optime": NumberInt(1353744633),
  "module": "Help",
  "action": "edit",
  "opinfo": "{\"title\":\"\帮\助111\",\"tid\":1,\"intro\":\"\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\",\"keywords\":\"111\",\"release_time\":1351757050,\"status\":2,\"content\":\"\夺<img src=\\\"\\\/images\\\/2012\\\/1124\\\/2416\\\/aaf14d6080bdf4d66e40b698a239313344979.gif\\\" alt=\\\"\\\" \\\/><br \\\/>\",\"id\":2}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b0814e32f3648411000002"),
  "id": NumberInt(82),
  "uid": NumberInt(1),
  "optime": NumberInt(1353744718),
  "module": "Help",
  "action": "edit",
  "opinfo": "{\"title\":\"\测\试\信\息\",\"tid\":1,\"intro\":\"f sdf \",\"keywords\":\"\关\键\词\",\"release_time\":1354262035,\"status\":2,\"content\":\"<p>\\r\\n\\tsdfssdfas\\r\\n<\\\/p>\\r\\n<p>\\r\\n\\t<img src=\\\"\\\/images\\\/2012\\\/1124\\\/2416\\\/80f7bbe757c2197a577d027b3c9a39b568480.jpg\\\" alt=\\\"\\\" \\\/>\\r\\n<\\\/p>\",\"id\":1}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b0844b32f364e012000002"),
  "id": NumberInt(83),
  "uid": NumberInt(1),
  "optime": NumberInt(1353745483),
  "module": "Node",
  "action": "add",
  "opinfo": "{\"name\":\"Member\",\"title\":\"\会\员\管\理\",\"order_id\":1,\"status\":2,\"is_menu\":2,\"id\":26,\"parent_id\":11}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b099f732f364b00e000002"),
  "id": NumberInt(84),
  "uid": NumberInt(1),
  "optime": NumberInt(1353751031),
  "module": "App",
  "action": "edit",
  "opinfo": "{\"appid\":1,\"appcode\":\"sxxl\",\"appname\":\"\服\装\网\",\"appkey\":\"WWW_JKHL===-JJIALKHLA\",\"rurl\":\"http:\\\/\\\/www.sxxl.com\",\"listener\":\"http:\\\/\\\/www.sxxl.com\",\"status\":2,\"id\":1}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b432a832f3649c06000000"),
  "id": NumberInt(85),
  "uid": NumberInt(1),
  "optime": NumberInt(1353986728),
  "module": "Node",
  "action": "edit",
  "opinfo": "{\"name\":\"HelpCenter\",\"title\":\"\客\服\中\心\",\"order_id\":4,\"status\":2,\"is_menu\":2,\"id\":23,\"parent_id\":0}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b432da32f364500e000000"),
  "id": NumberInt(86),
  "uid": NumberInt(1),
  "optime": NumberInt(1353986778),
  "module": "Node",
  "action": "edit",
  "opinfo": "{\"name\":\"Help\",\"title\":\"\帮\助\信\息\管\理\",\"order_id\":2,\"status\":2,\"is_menu\":2,\"id\":25,\"parent_id\":23}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b432ea32f3646c1d000000"),
  "id": NumberInt(87),
  "uid": NumberInt(1),
  "optime": NumberInt(1353986794),
  "module": "Node",
  "action": "edit",
  "opinfo": "{\"name\":\"Help\",\"title\":\"\帮\助\信\息\",\"order_id\":2,\"status\":2,\"is_menu\":2,\"id\":25,\"parent_id\":23}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b435a532f364640e000000"),
  "id": NumberInt(88),
  "uid": NumberInt(1),
  "optime": NumberInt(1353987493),
  "module": "HelpType",
  "action": "edit",
  "opinfo": "{\"name\":\"\内\容\相\关\",\"order_id\":1,\"status\":2,\"id\":1,\"parent_id\":0}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b435ab32f3643c15000000"),
  "id": NumberInt(89),
  "uid": NumberInt(1),
  "optime": NumberInt(1353987499),
  "module": "HelpType",
  "action": "edit",
  "opinfo": "{\"name\":\"\帐\号\相\关\",\"order_id\":2,\"status\":2,\"id\":2,\"parent_id\":0}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b435b432f3643013000001"),
  "id": NumberInt(90),
  "uid": NumberInt(1),
  "optime": NumberInt(1353987508),
  "module": "HelpType",
  "action": "add",
  "opinfo": "{\"name\":\"\使\用\相\关\",\"order_id\":3,\"status\":2,\"id\":3,\"parent_id\":0}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b435bc32f364a81e000001"),
  "id": NumberInt(91),
  "uid": NumberInt(1),
  "optime": NumberInt(1353987516),
  "module": "HelpType",
  "action": "add",
  "opinfo": "{\"name\":\"\业\务\相\关\",\"order_id\":4,\"status\":2,\"id\":4,\"parent_id\":0}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b435c432f364c81f000001"),
  "id": NumberInt(92),
  "uid": NumberInt(1),
  "optime": NumberInt(1353987524),
  "module": "HelpType",
  "action": "add",
  "opinfo": "{\"name\":\"\其\它\方\面\",\"order_id\":5,\"status\":2,\"id\":5,\"parent_id\":0}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b4360032f364d80c000000"),
  "id": NumberInt(93),
  "uid": NumberInt(1),
  "optime": NumberInt(1353987584),
  "module": "Node",
  "action": "edit",
  "opinfo": "{\"name\":\"HelpType\",\"title\":\"\帮\助\类\别\",\"order_id\":1,\"status\":2,\"is_menu\":2,\"id\":24,\"parent_id\":23}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b4364a32f364dc0b000001"),
  "id": NumberInt(94),
  "uid": NumberInt(1),
  "optime": NumberInt(1353987658),
  "module": "Node",
  "action": "add",
  "opinfo": "{\"name\":\"HelpCategory\",\"title\":\"\帮\助\分\类\",\"order_id\":0,\"status\":2,\"is_menu\":2,\"id\":27,\"parent_id\":23}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b436dc32f364b41f000001"),
  "id": NumberInt(95),
  "uid": NumberInt(1),
  "optime": NumberInt(1353987804),
  "module": "HelpType",
  "action": "add",
  "opinfo": "{\"name\":\"111\",\"order_id\":1,\"status\":2,\"id\":6,\"parent_id\":1}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b436e432f3649402000000"),
  "id": NumberInt(96),
  "uid": NumberInt(1),
  "optime": NumberInt(1353987812),
  "module": "HelpType",
  "action": "delete",
  "opinfo": "[\"6\"]"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b4382532f364dc0b000003"),
  "id": NumberInt(97),
  "uid": NumberInt(1),
  "optime": NumberInt(1353988133),
  "module": "HelpCategory",
  "action": "add",
  "opinfo": "{\"name\":\"\会\员\注\册&\登\录\",\"order_id\":1,\"status\":2,\"id\":1,\"parent_id\":0}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b4383332f3648801000001"),
  "id": NumberInt(98),
  "uid": NumberInt(1),
  "optime": NumberInt(1353988147),
  "module": "HelpCategory",
  "action": "add",
  "opinfo": "{\"name\":\"\密\码&\安\全\",\"order_id\":2,\"status\":2,\"id\":2,\"parent_id\":0}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b4383c32f364bc1d000001"),
  "id": NumberInt(99),
  "uid": NumberInt(1),
  "optime": NumberInt(1353988156),
  "module": "HelpCategory",
  "action": "add",
  "opinfo": "{\"name\":\"\我\的\蝶\讯\",\"order_id\":3,\"status\":2,\"id\":3,\"parent_id\":0}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b4384732f364181e000001"),
  "id": NumberInt(100),
  "uid": NumberInt(1),
  "optime": NumberInt(1353988167),
  "module": "HelpCategory",
  "action": "add",
  "opinfo": "{\"name\":\"\购\买\会\员\",\"order_id\":4,\"status\":2,\"id\":4,\"parent_id\":0}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b43f9f32f3646c1d000001"),
  "id": NumberInt(101),
  "uid": NumberInt(1),
  "optime": NumberInt(1353990047),
  "module": "HelpCategory",
  "action": "edit",
  "opinfo": "{\"name\":\"\会\员\注\册&\登\录\",\"order_id\":1,\"status\":2,\"id\":1,\"parent_id\":0}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b443f932f3648801000002"),
  "id": NumberInt(102),
  "uid": NumberInt(1),
  "optime": NumberInt(1353991161),
  "module": "Help",
  "action": "edit",
  "opinfo": "{\"title\":\"\帮\助111\",\"cid\":[\"1\",\"2\"],\"tid\":1,\"intro\":\"\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\",\"keywords\":\"111\",\"release_time\":1351757050,\"status\":2,\"content\":\"\夺<img src=\\\"\\\/images\\\/2012\\\/1124\\\/2416\\\/aaf14d6080bdf4d66e40b698a239313344979.gif\\\" alt=\\\"\\\" \\\/><br \\\/>\",\"id\":2}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b4451332f364dc18000000"),
  "id": NumberInt(103),
  "uid": NumberInt(1),
  "optime": NumberInt(1353991443),
  "module": "Help",
  "action": "edit",
  "opinfo": "{\"title\":\"\帮\助111\",\"cid\":[1,2],\"tid\":[1,2],\"intro\":\"\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\",\"keywords\":\"111\",\"release_time\":1351757050,\"status\":2,\"content\":\"\夺<img src=\\\"\\\/images\\\/2012\\\/1124\\\/2416\\\/aaf14d6080bdf4d66e40b698a239313344979.gif\\\" alt=\\\"\\\" \\\/><br \\\/>\",\"id\":2}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b445cd32f364d402000000"),
  "id": NumberInt(104),
  "uid": NumberInt(1),
  "optime": NumberInt(1353991629),
  "module": "Help",
  "action": "edit",
  "opinfo": "{\"title\":\"\帮\助111\",\"cid\":[1,2,4],\"tid\":[1,2,5],\"intro\":\"\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\",\"keywords\":\"111\",\"release_time\":1351757050,\"status\":2,\"content\":\"\夺<img src=\\\"\\\/images\\\/2012\\\/1124\\\/2416\\\/aaf14d6080bdf4d66e40b698a239313344979.gif\\\" alt=\\\"\\\" \\\/><br \\\/>\",\"id\":2}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b44aa032f364d80c000001"),
  "id": NumberInt(105),
  "uid": NumberInt(1),
  "optime": NumberInt(1353992864),
  "module": "Help",
  "action": "edit",
  "opinfo": "{\"type\":1,\"title\":\"\帮\助111\",\"cid\":[1,2,4],\"tid\":[1,2,5],\"intro\":\"\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\",\"keywords\":\"111\",\"release_time\":1351757050,\"status\":2,\"content\":\"\夺<img src=\\\"\\\/images\\\/2012\\\/1124\\\/2416\\\/aaf14d6080bdf4d66e40b698a239313344979.gif\\\" alt=\\\"\\\" \\\/><br \\\/>\",\"id\":2,\"appid\":0}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b44abb32f364dc0b000004"),
  "id": NumberInt(106),
  "uid": NumberInt(1),
  "optime": NumberInt(1353992891),
  "module": "Help",
  "action": "edit",
  "opinfo": "{\"type\":1,\"title\":\"\帮\助111\",\"cid\":[1,2,4],\"tid\":[1,2,5],\"intro\":\"\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\",\"keywords\":\"111\",\"release_time\":1351757050,\"status\":2,\"content\":\"\夺<img src=\\\"\\\/images\\\/2012\\\/1124\\\/2416\\\/aaf14d6080bdf4d66e40b698a239313344979.gif\\\" alt=\\\"\\\" \\\/><br \\\/>\",\"id\":2,\"appid\":0}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b44ae432f3648801000003"),
  "id": NumberInt(107),
  "uid": NumberInt(1),
  "optime": NumberInt(1353992932),
  "module": "Help",
  "action": "edit",
  "opinfo": "{\"type\":1,\"title\":\"\帮\助111\",\"cid\":[1,2,4],\"tid\":[1,2,5],\"intro\":\"\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\",\"keywords\":\"111\",\"release_time\":1351757050,\"status\":2,\"content\":\"\夺<img src=\\\"\\\/images\\\/2012\\\/1124\\\/2416\\\/aaf14d6080bdf4d66e40b698a239313344979.gif\\\" alt=\\\"\\\" \\\/><br \\\/>\",\"id\":2,\"appid\":0}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b44b1032f364bc1d000002"),
  "id": NumberInt(108),
  "uid": NumberInt(1),
  "optime": NumberInt(1353992976),
  "module": "Help",
  "action": "edit",
  "opinfo": "{\"type\":1,\"title\":\"\帮\助111\",\"cid\":[1,2,4],\"tid\":[1,2,5],\"intro\":\"\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\",\"keywords\":\"111\",\"release_time\":1351757050,\"status\":2,\"content\":\"\夺<img src=\\\"\\\/images\\\/2012\\\/1124\\\/2416\\\/aaf14d6080bdf4d66e40b698a239313344979.gif\\\" alt=\\\"\\\" \\\/><br \\\/>\",\"id\":2,\"appid\":0}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b44b4032f364c81f000002"),
  "id": NumberInt(109),
  "uid": NumberInt(1),
  "optime": NumberInt(1353993024),
  "module": "Help",
  "action": "edit",
  "opinfo": "{\"type\":1,\"title\":\"\帮\助111\",\"appid\":1,\"cid\":[1,2,4],\"tid\":[1,2,5],\"intro\":\"\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\",\"keywords\":\"111\",\"release_time\":1351757050,\"status\":2,\"content\":\"\夺<img src=\\\"\\\/images\\\/2012\\\/1124\\\/2416\\\/aaf14d6080bdf4d66e40b698a239313344979.gif\\\" alt=\\\"\\\" \\\/><br \\\/>\",\"id\":2}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b44b9132f364b41f000002"),
  "id": NumberInt(110),
  "uid": NumberInt(1),
  "optime": NumberInt(1353993105),
  "module": "Help",
  "action": "edit",
  "opinfo": "{\"type\":1,\"title\":\"\帮\助111\",\"appid\":1,\"tid\":[1,2,5],\"intro\":\"\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\",\"keywords\":\"111\",\"release_time\":1351757050,\"status\":2,\"content\":\"\夺<img src=\\\"\\\/images\\\/2012\\\/1124\\\/2416\\\/aaf14d6080bdf4d66e40b698a239313344979.gif\\\" alt=\\\"\\\" \\\/><br \\\/>\",\"id\":2,\"cid\":null}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b44b9f32f364dc0b000005"),
  "id": NumberInt(111),
  "uid": NumberInt(1),
  "optime": NumberInt(1353993119),
  "module": "Help",
  "action": "edit",
  "opinfo": "{\"type\":1,\"title\":\"\帮\助111\",\"appid\":1,\"cid\":[1],\"tid\":[1,2,5],\"intro\":\"\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\",\"keywords\":\"111\",\"release_time\":1351757050,\"status\":2,\"content\":\"\夺<img src=\\\"\\\/images\\\/2012\\\/1124\\\/2416\\\/aaf14d6080bdf4d66e40b698a239313344979.gif\\\" alt=\\\"\\\" \\\/><br \\\/>\",\"id\":2}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b4563f32f364a81e000002"),
  "id": NumberInt(112),
  "uid": NumberInt(1),
  "optime": NumberInt(1353995839),
  "module": "Help",
  "action": "edit",
  "opinfo": "{\"type\":1,\"title\":\"\帮\助111\",\"appid\":1,\"cid\":[1],\"tid\":[1,2,5],\"intro\":\"\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\",\"keywords\":\"111\",\"release_time\":1351757050,\"status\":2,\"content\":\"\夺<img src=\\\"\\\/images\\\/2012\\\/1124\\\/2416\\\/aaf14d6080bdf4d66e40b698a239313344979.gif\\\" alt=\\\"\\\" \\\/><br \\\/>\",\"id\":2,\"update_time\":1353995839}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b458dc32f364c41c000000"),
  "id": NumberInt(113),
  "uid": NumberInt(1),
  "optime": NumberInt(1353996508),
  "module": "Help",
  "action": "edit",
  "opinfo": "{\"type\":1,\"title\":\"\帮\助111\",\"appid\":1,\"tid\":[1,2,5],\"intro\":\"\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\",\"keywords\":\"111\",\"release_time\":1351757050,\"status\":2,\"content\":\"\夺<img src=\\\"\\\/images\\\/2012\\\/1124\\\/2416\\\/aaf14d6080bdf4d66e40b698a239313344979.gif\\\" alt=\\\"\\\" \\\/><br \\\/>\",\"id\":2,\"cid\":null,\"update_time\":1353996508}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b458e632f364d402000001"),
  "id": NumberInt(114),
  "uid": NumberInt(1),
  "optime": NumberInt(1353996518),
  "module": "Help",
  "action": "edit",
  "opinfo": "{\"type\":1,\"title\":\"\帮\助111\",\"appid\":1,\"tid\":[1,2,5],\"intro\":\"\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\",\"keywords\":\"111\",\"release_time\":1351757050,\"status\":2,\"content\":\"\夺<img src=\\\"\\\/images\\\/2012\\\/1124\\\/2416\\\/aaf14d6080bdf4d66e40b698a239313344979.gif\\\" alt=\\\"\\\" \\\/><br \\\/>\",\"id\":2,\"cid\":null,\"update_time\":1353996518}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b45aea32f364d80c000002"),
  "id": NumberInt(115),
  "uid": NumberInt(1),
  "optime": NumberInt(1353997034),
  "module": "Help",
  "action": "edit",
  "opinfo": "{\"type\":1,\"title\":\"xcvszfd\",\"appid\":1,\"cid\":[2],\"tid\":[1,2,5],\"intro\":\"\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\",\"keywords\":\"111\",\"release_time\":1351757050,\"status\":2,\"content\":\"\夺<img src=\\\"\\\/images\\\/2012\\\/1124\\\/2416\\\/aaf14d6080bdf4d66e40b698a239313344979.gif\\\" alt=\\\"\\\" \\\/><br \\\/>\",\"id\":2,\"update_time\":1353997034}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b460db32f364c81f000003"),
  "id": NumberInt(116),
  "uid": NumberInt(1),
  "optime": NumberInt(1353998555),
  "module": "Help",
  "action": "edit",
  "opinfo": "{\"type\":1,\"title\":\"\怎\样\注\册\",\"appid\":1,\"cid\":[2],\"tid\":[1,2,5],\"intro\":\"\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\",\"keywords\":[\"\注\册\",\"\会\员\"],\"release_time\":1351757050,\"status\":2,\"content\":\"\夺<img src=\\\"\\\/images\\\/2012\\\/1124\\\/2416\\\/aaf14d6080bdf4d66e40b698a239313344979.gif\\\" alt=\\\"\\\" \\\/><br \\\/>\",\"id\":2,\"update_time\":1353998555}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b461b932f364dc0b000006"),
  "id": NumberInt(117),
  "uid": NumberInt(1),
  "optime": NumberInt(1353998777),
  "module": "Help",
  "action": "edit",
  "opinfo": "{\"type\":1,\"title\":\"\怎\样\注\册\",\"appid\":1,\"cid\":[2],\"tid\":[1,2,5],\"intro\":\"\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\简\介\",\"keywords\":{\"0\":\"\注\册\",\"2\":\"\会\员\"},\"release_time\":1351757050,\"status\":2,\"content\":\"\夺<img src=\\\"\\\/images\\\/2012\\\/1124\\\/2416\\\/aaf14d6080bdf4d66e40b698a239313344979.gif\\\" alt=\\\"\\\" \\\/><br \\\/>\",\"id\":2,\"update_time\":1353998777}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b47c6b32f364640e000001"),
  "id": NumberInt(118),
  "uid": NumberInt(1),
  "optime": NumberInt(1354005611),
  "module": "Help",
  "action": "edit",
  "opinfo": "{\"type\":1,\"title\":\"\怎\样\注\册\",\"appid\":1,\"cid\":[2],\"tid\":[1,2,5],\"keywords\":[\"\注\册\",\"\会\员\"],\"related\":0,\"order_id\":0,\"vedio_url\":\"\",\"status\":2,\"content\":\"\夺<img src=\\\"\\\/images\\\/2012\\\/1124\\\/2416\\\/aaf14d6080bdf4d66e40b698a239313344979.gif\\\" alt=\\\"\\\" \\\/><br \\\/>\",\"id\":2,\"release_time\":1354005611,\"update_time\":1354005611}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b47cec32f3645404000000"),
  "id": NumberInt(119),
  "uid": NumberInt(1),
  "optime": NumberInt(1354005740),
  "module": "Help",
  "action": "edit",
  "opinfo": "{\"type\":1,\"title\":\"\怎\样\注\册\",\"appid\":1,\"cid\":[2],\"tid\":[1,2,5],\"keywords\":[\"\注\册\",\"\会\员\"],\"related\":0,\"order_id\":0,\"vedio_url\":\"\",\"status\":2,\"content\":\"\夺<img src=\\\"\\\/images\\\/2012\\\/1124\\\/2416\\\/aaf14d6080bdf4d66e40b698a239313344979.gif\\\" alt=\\\"\\\" \\\/><br \\\/>\",\"id\":2,\"release_time\":1354005740,\"update_time\":1354005740}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b47cf732f364d80c000003"),
  "id": NumberInt(120),
  "uid": NumberInt(1),
  "optime": NumberInt(1354005751),
  "module": "Help",
  "action": "edit",
  "opinfo": "{\"type\":1,\"title\":\"\怎\样\注\册\",\"appid\":1,\"cid\":[2],\"tid\":[1,2,5],\"keywords\":[\"\注\册\",\"\会\员\"],\"related\":0,\"order_id\":0,\"vedio_url\":\"\",\"status\":2,\"content\":\"\夺<img src=\\\"\\\/images\\\/2012\\\/1124\\\/2416\\\/aaf14d6080bdf4d66e40b698a239313344979.gif\\\" alt=\\\"\\\" \\\/><br \\\/>\",\"id\":2,\"release_time\":1354005751,\"update_time\":1354005751}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b47d2b32f3649c06000001"),
  "id": NumberInt(121),
  "uid": NumberInt(1),
  "optime": NumberInt(1354005803),
  "module": "Help",
  "action": "edit",
  "opinfo": "{\"type\":1,\"title\":\"\怎\样\注\册\",\"appid\":1,\"cid\":[2],\"tid\":[1,2,5],\"keywords\":[\"\注\册\",\"\会\员\"],\"related\":0,\"order_id\":0,\"vedio_url\":\"\",\"status\":2,\"content\":\"\夺<img src=\\\"\\\/images\\\/2012\\\/1124\\\/2416\\\/aaf14d6080bdf4d66e40b698a239313344979.gif\\\" alt=\\\"\\\" \\\/><br \\\/>\",\"id\":2,\"release_time\":1354005803,\"update_time\":1354005803}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b47d8232f3649c06000002"),
  "id": NumberInt(122),
  "uid": NumberInt(1),
  "optime": NumberInt(1354005890),
  "module": "Help",
  "action": "edit",
  "opinfo": "{\"type\":2,\"title\":\"\怎\样\注\册\",\"appid\":1,\"cid\":[2],\"tid\":[1,2,5],\"keywords\":[\"\注\册\",\"\会\员\"],\"related\":0,\"order_id\":0,\"vedio_url\":\"\",\"status\":2,\"content\":\"\夺<img src=\\\"\\\/images\\\/2012\\\/1124\\\/2416\\\/aaf14d6080bdf4d66e40b698a239313344979.gif\\\" alt=\\\"\\\" \\\/><br \\\/>\",\"id\":2,\"release_time\":1354005890,\"update_time\":1354005890}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b47d9832f364bc1d000003"),
  "id": NumberInt(123),
  "uid": NumberInt(1),
  "optime": NumberInt(1354005912),
  "module": "Help",
  "action": "edit",
  "opinfo": "{\"type\":2,\"title\":\"\怎\样\注\册\",\"appid\":1,\"cid\":[2],\"tid\":[1,2,5],\"keywords\":[\"\注\册\",\"\会\员\"],\"related\":0,\"order_id\":0,\"vedio_url\":\"\",\"status\":2,\"content\":\"\夺<img src=\\\"\\\/images\\\/2012\\\/1124\\\/2416\\\/aaf14d6080bdf4d66e40b698a239313344979.gif\\\" alt=\\\"\\\" \\\/><br \\\/>\",\"id\":2,\"release_time\":1354005912,\"update_time\":1354005912}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b489c932f364640e000003"),
  "id": NumberInt(130),
  "uid": NumberInt(1),
  "optime": NumberInt(1354009033),
  "module": "Node",
  "action": "add",
  "opinfo": "{\"name\":\"RecycleBin\",\"title\":\"\回\收\站\",\"order_id\":3,\"status\":2,\"is_menu\":2,\"id\":28,\"parent_id\":23}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b47f5d32f364d80c000004"),
  "id": NumberInt(124),
  "uid": NumberInt(1),
  "optime": NumberInt(1354006365),
  "module": "Help",
  "action": "edit",
  "opinfo": "{\"type\":1,\"title\":\"\怎\样\注\册\",\"appid\":1,\"cid\":[2],\"tid\":[1,2,5],\"keywords\":[\"\注\册\",\"\会\员\"],\"related\":0,\"order_id\":0,\"vedio_url\":\"\",\"status\":2,\"content\":\"\夺<img src=\\\"\\\/images\\\/2012\\\/1124\\\/2416\\\/aaf14d6080bdf4d66e40b698a239313344979.gif\\\" alt=\\\"\\\" \\\/><br \\\/>\",\"id\":2,\"release_time\":1354006365,\"update_time\":1354006365}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b482c232f3643c15000001"),
  "id": NumberInt(125),
  "uid": NumberInt(1),
  "optime": NumberInt(1354007234),
  "module": "Help",
  "action": "edit",
  "opinfo": "{\"type\":2,\"title\":\"\怎\样\注\册\",\"appid\":1,\"tid\":[1,2,5],\"keywords\":[\"\注\册\",\"\会\员\"],\"order_id\":0,\"vedio_url\":\"\",\"status\":2,\"id\":2,\"cid\":null,\"release_time\":1354007234,\"update_time\":1354007234,\"related\":0}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b482f132f364dc18000001"),
  "id": NumberInt(126),
  "uid": NumberInt(1),
  "optime": NumberInt(1354007281),
  "module": "Help",
  "action": "edit",
  "opinfo": "{\"type\":1,\"title\":\"\怎\样\注\册\",\"appid\":1,\"cid\":[1],\"tid\":[1,2,5],\"keywords\":[\"\注\册\",\"\会\员\"],\"related\":0,\"order_id\":0,\"vedio_url\":\"http\",\"status\":2,\"content\":\"\夺<img src=\\\"\\\/images\\\/2012\\\/1124\\\/2416\\\/aaf14d6080bdf4d66e40b698a239313344979.gif\\\" alt=\\\"\\\" \\\/><br \\\/>\",\"id\":2,\"release_time\":1354007281,\"update_time\":1354007281}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b4836f32f364c41c000001"),
  "id": NumberInt(127),
  "uid": NumberInt(1),
  "optime": NumberInt(1354007407),
  "module": "Help",
  "action": "edit",
  "opinfo": "{\"type\":1,\"title\":\"\怎\样\注\册\",\"appid\":1,\"cid\":[1],\"tid\":[1,2,5],\"keywords\":[\"\注\册\",\"\会\员\",\"\蝶\讯\"],\"related\":0,\"order_id\":0,\"status\":2,\"content\":\"\夺<img src=\\\"\\\/images\\\/2012\\\/1124\\\/2416\\\/aaf14d6080bdf4d66e40b698a239313344979.gif\\\" alt=\\\"\\\" \\\/><br \\\/>\",\"id\":2,\"release_time\":1354007407,\"update_time\":1354007407}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b4846132f3645013000000"),
  "id": NumberInt(128),
  "uid": NumberInt(1),
  "optime": NumberInt(1354007649),
  "module": "Help",
  "action": "edit",
  "opinfo": "{\"type\":1,\"title\":\"\怎\样\注\册\",\"appid\":1,\"cid\":[1],\"tid\":[1,2,5],\"ispush\":[\"2\"],\"keywords\":[\"\注\册\",\"\会\员\",\"\蝶\讯\"],\"related\":0,\"order_id\":0,\"status\":2,\"content\":\"\夺<img src=\\\"\\\/images\\\/2012\\\/1124\\\/2416\\\/aaf14d6080bdf4d66e40b698a239313344979.gif\\\" alt=\\\"\\\" \\\/><br \\\/>\",\"id\":2,\"release_time\":1354007649,\"update_time\":1354007649}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b484d232f3649402000001"),
  "id": NumberInt(129),
  "uid": NumberInt(1),
  "optime": NumberInt(1354007762),
  "module": "Help",
  "action": "edit",
  "opinfo": "{\"type\":1,\"title\":\"\测\试\信\息\",\"appid\":2,\"cid\":[2],\"tid\":[2],\"ispush\":[\"3\"],\"keywords\":[\"\测\试\"],\"related\":0,\"order_id\":0,\"status\":2,\"content\":\"<p>\\r\\n\\tsdfssdfas\\r\\n<\\\/p>\\r\\n<p>\\r\\n\\t<img src=\\\"\\\/images\\\/2012\\\/1124\\\/2416\\\/80f7bbe757c2197a577d027b3c9a39b568480.jpg\\\" alt=\\\"\\\" \\\/> \\r\\n<\\\/p>\",\"id\":1,\"release_time\":1354007762,\"update_time\":1354007762}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b4a54732f3643013000002"),
  "id": NumberInt(131),
  "uid": NumberInt(1),
  "optime": NumberInt(1354016071),
  "module": "Help",
  "action": "edit",
  "opinfo": "{\"type\":1,\"appid\":1,\"title\":\"\怎\样\注\册\",\"cid\":[1],\"tid\":[1,2],\"ispush\":[\"2\"],\"keywords\":[\"\注\册\",\"\会\员\",\"\蝶\讯\"],\"related\":0,\"order_id\":0,\"status\":2,\"content\":\"\夺<img src=\\\"\\\/images\\\/2012\\\/1124\\\/2416\\\/aaf14d6080bdf4d66e40b698a239313344979.gif\\\" alt=\\\"\\\" \\\/><br \\\/>\",\"id\":2,\"release_time\":1354016071,\"update_time\":1354016071}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b4a7f832f3649c06000003"),
  "id": NumberInt(132),
  "uid": NumberInt(1),
  "optime": NumberInt(1354016760),
  "module": "Help",
  "action": "edit",
  "opinfo": "{\"type\":1,\"appid\":1,\"title\":\"\怎\样\注\册\",\"cid\":[1,3],\"tid\":[1,2],\"ispush\":[\"2\"],\"keywords\":[\"\注\册\",\"\会\员\",\"\蝶\讯\"],\"related\":0,\"order_id\":0,\"status\":2,\"content\":\"\夺<img src=\\\"\\\/images\\\/2012\\\/1124\\\/2416\\\/aaf14d6080bdf4d66e40b698a239313344979.gif\\\" alt=\\\"\\\" \\\/><br \\\/>\",\"id\":2,\"release_time\":1354016760,\"update_time\":1354016760}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b5a3c732f3643c15000002"),
  "id": NumberInt(133),
  "uid": NumberInt(1),
  "optime": NumberInt(1354081223),
  "module": "HelpCategory",
  "action": "edit",
  "opinfo": "{\"name\":\"\会\员\注\册&\登\录\",\"appid\":[\"1\"],\"order_id\":1,\"status\":2,\"id\":1,\"parent_id\":0}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b5a49932f3643013000003"),
  "id": NumberInt(134),
  "uid": NumberInt(1),
  "optime": NumberInt(1354081433),
  "module": "HelpCategory",
  "action": "edit",
  "opinfo": "{\"name\":\"\密\码&\安\全\",\"appid\":[2],\"order_id\":2,\"status\":2,\"id\":2,\"parent_id\":0,\"system_time\":1354081433}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b5a4a032f364bc1d000004"),
  "id": NumberInt(135),
  "uid": NumberInt(1),
  "optime": NumberInt(1354081440),
  "module": "HelpCategory",
  "action": "edit",
  "opinfo": "{\"name\":\"\密\码&\安\全\",\"appid\":[2],\"order_id\":2,\"status\":2,\"id\":2,\"parent_id\":0,\"system_time\":1354081440}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b5a4a432f3645404000001"),
  "id": NumberInt(136),
  "uid": NumberInt(1),
  "optime": NumberInt(1354081444),
  "module": "HelpCategory",
  "action": "edit",
  "opinfo": "{\"name\":\"\我\的\蝶\讯\",\"appid\":[1],\"order_id\":3,\"status\":2,\"id\":3,\"parent_id\":0,\"system_time\":1354081444}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b5a4a732f364c41c000002"),
  "id": NumberInt(137),
  "uid": NumberInt(1),
  "optime": NumberInt(1354081447),
  "module": "HelpCategory",
  "action": "edit",
  "opinfo": "{\"name\":\"\会\员\注\册&\登\录\",\"appid\":[1],\"order_id\":1,\"status\":2,\"id\":1,\"parent_id\":0,\"system_time\":1354081447}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b5a4af32f364d402000002"),
  "id": NumberInt(138),
  "uid": NumberInt(1),
  "optime": NumberInt(1354081455),
  "module": "HelpCategory",
  "action": "edit",
  "opinfo": "{\"name\":\"\购\买\会\员\",\"appid\":[1,2],\"order_id\":4,\"status\":2,\"id\":4,\"parent_id\":0,\"system_time\":1354081455}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b5a4b432f3649c06000004"),
  "id": NumberInt(139),
  "uid": NumberInt(1),
  "optime": NumberInt(1354081460),
  "module": "HelpCategory",
  "action": "edit",
  "opinfo": "{\"name\":\"\购\买\会\员\",\"appid\":[1],\"order_id\":4,\"status\":2,\"id\":4,\"parent_id\":0,\"system_time\":1354081460}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b5a4ba32f364640e000004"),
  "id": NumberInt(140),
  "uid": NumberInt(1),
  "optime": NumberInt(1354081466),
  "module": "HelpCategory",
  "action": "edit",
  "opinfo": "{\"name\":\"\会\员\注\册&\登\录\",\"appid\":[1,2],\"order_id\":1,\"status\":2,\"id\":1,\"parent_id\":0,\"system_time\":1354081466}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b5a59a32f364c41c000003"),
  "id": NumberInt(141),
  "uid": NumberInt(1),
  "optime": NumberInt(1354081690),
  "module": "HelpType",
  "action": "edit",
  "opinfo": "{\"name\":\"\内\容\相\关\",\"appid\":[1],\"order_id\":1,\"status\":2,\"id\":1,\"parent_id\":0,\"system_time\":1354081690}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b5ab3332f364dc18000003"),
  "id": NumberInt(142),
  "uid": NumberInt(1),
  "optime": NumberInt(1354083123),
  "module": "Node",
  "action": "add",
  "opinfo": "{\"name\":\"HelpRelated\",\"title\":\"\帮\助\推\送\类\型\",\"order_id\":3,\"status\":2,\"is_menu\":2,\"id\":29,\"parent_id\":23}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b5ab3732f364bc1d000005"),
  "id": NumberInt(143),
  "uid": NumberInt(1),
  "optime": NumberInt(1354083127),
  "module": "Node",
  "action": "edit",
  "opinfo": "{\"name\":\"RecycleBin\",\"title\":\"\回\收\站\",\"order_id\":4,\"status\":2,\"is_menu\":2,\"id\":28,\"parent_id\":23}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b5ab4232f3645404000002"),
  "id": NumberInt(144),
  "uid": NumberInt(1),
  "optime": NumberInt(1354083138),
  "module": "Node",
  "action": "edit",
  "opinfo": "{\"name\":\"Help\",\"title\":\"\帮\助\信\息\",\"order_id\":0,\"status\":2,\"is_menu\":2,\"id\":25,\"parent_id\":23}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b5ab5932f364dc18000004"),
  "id": NumberInt(145),
  "uid": NumberInt(1),
  "optime": NumberInt(1354083161),
  "module": "Node",
  "action": "edit",
  "opinfo": "{\"name\":\"HelpRelated\",\"title\":\"\推\送\类\型\",\"order_id\":3,\"status\":2,\"is_menu\":2,\"id\":29,\"parent_id\":23}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b5aba932f364b41f000004"),
  "id": NumberInt(146),
  "uid": NumberInt(1),
  "optime": NumberInt(1354083241),
  "module": "HelpRelated",
  "action": "add",
  "opinfo": "{\"name\":\"\帮\助\中\心\",\"order_id\":1,\"status\":2,\"id\":1,\"parent_id\":0,\"system_time\":1354083241}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b5abb532f364dc0b000008"),
  "id": NumberInt(147),
  "uid": NumberInt(1),
  "optime": NumberInt(1354083253),
  "module": "HelpRelated",
  "action": "add",
  "opinfo": "{\"name\":\"\常\见\问\题\",\"order_id\":1,\"status\":2,\"id\":2,\"parent_id\":1,\"system_time\":1354083253}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b5abd332f364640e000006"),
  "id": NumberInt(148),
  "uid": NumberInt(1),
  "optime": NumberInt(1354083283),
  "module": "HelpRelated",
  "action": "add",
  "opinfo": "{\"name\":\"\帮\助\首\页\",\"order_id\":2,\"status\":2,\"id\":3,\"parent_id\":1,\"system_time\":1354083283}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b5ae9d32f3645404000003"),
  "id": NumberInt(149),
  "uid": NumberInt(1),
  "optime": NumberInt(1354083997),
  "module": "Help",
  "action": "edit",
  "opinfo": "{\"type\":1,\"appid\":1,\"title\":\"\怎\样\注\册\",\"cid\":[1,3],\"tid\":[1,2],\"ispush\":[\"2\"],\"keywords\":[\"Array\"],\"related\":0,\"order_id\":0,\"status\":2,\"content\":\"\夺<img src=\\\"\\\/images\\\/2012\\\/1124\\\/2416\\\/aaf14d6080bdf4d66e40b698a239313344979.gif\\\" alt=\\\"\\\" \\\/><br \\\/>\",\"id\":2,\"release_time\":1354083997,\"update_time\":1354083997}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b5af8a32f3648801000004"),
  "id": NumberInt(150),
  "uid": NumberInt(1),
  "optime": NumberInt(1354084234),
  "module": "HelpType",
  "action": "edit",
  "opinfo": "{\"name\":\"\帐\号\相\关\",\"appid\":[1,2],\"order_id\":2,\"status\":2,\"id\":2,\"parent_id\":0,\"system_time\":1354084234}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b5af9032f364a81e000003"),
  "id": NumberInt(151),
  "uid": NumberInt(1),
  "optime": NumberInt(1354084240),
  "module": "HelpType",
  "action": "edit",
  "opinfo": "{\"name\":\"\使\用\相\关\",\"appid\":[1,2],\"order_id\":3,\"status\":2,\"id\":3,\"parent_id\":0,\"system_time\":1354084240}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b5af9432f364181e000002"),
  "id": NumberInt(152),
  "uid": NumberInt(1),
  "optime": NumberInt(1354084244),
  "module": "HelpType",
  "action": "edit",
  "opinfo": "{\"name\":\"\业\务\相\关\",\"appid\":[1],\"order_id\":4,\"status\":2,\"id\":4,\"parent_id\":0,\"system_time\":1354084244}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b5af9632f364500e000001"),
  "id": NumberInt(153),
  "uid": NumberInt(1),
  "optime": NumberInt(1354084246),
  "module": "HelpType",
  "action": "edit",
  "opinfo": "{\"name\":\"\其\它\方\面\",\"order_id\":5,\"status\":2,\"id\":5,\"parent_id\":0,\"appid\":null,\"system_time\":1354084246}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b5c40532f3643c15000004"),
  "id": NumberInt(154),
  "uid": NumberInt(1),
  "optime": NumberInt(1354089477),
  "module": "Role",
  "action": "add",
  "opinfo": "{\"name\":\"1111\",\"status\":2,\"id\":11}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b5c40a32f364d402000003"),
  "id": NumberInt(155),
  "uid": NumberInt(1),
  "optime": NumberInt(1354089482),
  "module": "Role",
  "action": "delete",
  "opinfo": "[\"11\"]"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b5d1cb32f3646c1d000002"),
  "id": NumberInt(156),
  "uid": NumberInt(1),
  "optime": NumberInt(1354093003),
  "module": "Help",
  "action": "edit",
  "opinfo": "{\"type\":1,\"appid\":1,\"title\":\"\怎\样\注\册\",\"cid\":[1,3],\"tid\":[1,2],\"ispush\":[\"1\",\"2\",\"3\",\"4\",\"5\"],\"keywords\":[\"\注\册\",\"\会\员\",\"\蝶\讯\"],\"related\":0,\"order_id\":0,\"status\":2,\"content\":\"\夺<img src=\\\"\\\/images\\\/2012\\\/1124\\\/2416\\\/aaf14d6080bdf4d66e40b698a239313344979.gif\\\" alt=\\\"\\\" \\\/><br \\\/>\",\"id\":2,\"release_time\":1354093003,\"update_time\":1354093003}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b5d1dd32f364b41f000005"),
  "id": NumberInt(157),
  "uid": NumberInt(1),
  "optime": NumberInt(1354093021),
  "module": "Help",
  "action": "edit",
  "opinfo": "{\"type\":1,\"appid\":1,\"title\":\"\怎\样\注\册\",\"cid\":[1,3],\"tid\":[1,2],\"ispush\":[\"1\",\"2\",\"3\",\"4\",\"5\"],\"keywords\":[\"\注\册\",\"\会\员\",\"\蝶\讯\"],\"related\":0,\"order_id\":0,\"status\":2,\"content\":\"\夺<img src=\\\"\\\/images\\\/2012\\\/1124\\\/2416\\\/aaf14d6080bdf4d66e40b698a239313344979.gif\\\" alt=\\\"\\\" \\\/><br \\\/>\",\"id\":2,\"release_time\":1354093021,\"update_time\":1354093021}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b5d1fd32f3649c06000005"),
  "id": NumberInt(158),
  "uid": NumberInt(1),
  "optime": NumberInt(1354093053),
  "module": "Help",
  "action": "edit",
  "opinfo": "{\"type\":1,\"appid\":2,\"title\":\"\测\试\信\息\",\"cid\":[2],\"tid\":[2],\"keywords\":[\"\测\试\",\"\空\格\"],\"related\":0,\"order_id\":0,\"status\":2,\"content\":\"<p>\\r\\n\\tsdfssdfas\\r\\n<\\\/p>\\r\\n<p>\\r\\n\\t<img src=\\\"\\\/images\\\/2012\\\/1124\\\/2416\\\/80f7bbe757c2197a577d027b3c9a39b568480.jpg\\\" alt=\\\"\\\" \\\/> \\r\\n<\\\/p>\",\"id\":1,\"release_time\":1354093053,\"update_time\":1354093053}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b5d21032f364dc18000005"),
  "id": NumberInt(159),
  "uid": NumberInt(1),
  "optime": NumberInt(1354093072),
  "module": "Help",
  "action": "edit",
  "opinfo": "{\"type\":1,\"appid\":1,\"title\":\"\怎\样\注\册\",\"cid\":[1,3],\"tid\":[1,2],\"ispush\":[\"1\",\"2\",\"3\",\"4\",\"5\"],\"keywords\":[\"\注\册\",\"\会\员\",\"\蝶\讯\",\"1\"],\"related\":0,\"order_id\":0,\"status\":2,\"content\":\"\夺<img src=\\\"\\\/images\\\/2012\\\/1124\\\/2416\\\/aaf14d6080bdf4d66e40b698a239313344979.gif\\\" alt=\\\"\\\" \\\/><br \\\/>\",\"id\":2,\"release_time\":1354093072,\"update_time\":1354093072}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b5d22d32f3645404000004"),
  "id": NumberInt(160),
  "uid": NumberInt(1),
  "optime": NumberInt(1354093101),
  "module": "Help",
  "action": "edit",
  "opinfo": "{\"type\":1,\"appid\":2,\"title\":\"\测\试\信\息\",\"cid\":[2],\"tid\":[2],\"ispush\":[\"1\"],\"keywords\":[\"\测\试\",\"\空\格\"],\"related\":0,\"order_id\":0,\"status\":2,\"content\":\"<p>\\r\\n\\tsdfssdfas\\r\\n<\\\/p>\\r\\n<p>\\r\\n\\t<img src=\\\"\\\/images\\\/2012\\\/1124\\\/2416\\\/80f7bbe757c2197a577d027b3c9a39b568480.jpg\\\" alt=\\\"\\\" \\\/> \\r\\n<\\\/p>\",\"id\":1,\"release_time\":1354093101,\"update_time\":1354093101}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b5d23c32f364d80c000005"),
  "id": NumberInt(161),
  "uid": NumberInt(1),
  "optime": NumberInt(1354093116),
  "module": "Help",
  "action": "edit",
  "opinfo": "{\"type\":1,\"appid\":1,\"title\":\"\怎\样\注\册\",\"cid\":[1,3],\"tid\":[1,2],\"ispush\":[\"1\",\"2\",\"3\",\"4\",\"5\"],\"keywords\":[\"\注\册\",\"\会\员\",\"\蝶\讯\"],\"related\":0,\"order_id\":0,\"status\":2,\"content\":\"\夺<img src=\\\"\\\/images\\\/2012\\\/1124\\\/2416\\\/aaf14d6080bdf4d66e40b698a239313344979.gif\\\" alt=\\\"\\\" \\\/><br \\\/>\",\"id\":2,\"release_time\":1354093116,\"update_time\":1354093116}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b5d2a432f364c41c000004"),
  "id": NumberInt(162),
  "uid": NumberInt(1),
  "optime": NumberInt(1354093220),
  "module": "Help",
  "action": "edit",
  "opinfo": "{\"type\":1,\"appid\":1,\"title\":\"\怎\样\注\册\",\"cid\":[1,3],\"tid\":[1,2],\"ispush\":[\"1\"],\"keywords\":[\"\注\册\",\"\会\员\",\"\蝶\讯\"],\"related\":0,\"order_id\":0,\"status\":2,\"content\":\"\夺<img src=\\\"\\\/images\\\/2012\\\/1124\\\/2416\\\/aaf14d6080bdf4d66e40b698a239313344979.gif\\\" alt=\\\"\\\" \\\/><br \\\/>\",\"id\":2,\"release_time\":1354093220,\"update_time\":1354093220}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b5d43932f364d402000004"),
  "id": NumberInt(163),
  "uid": NumberInt(1),
  "optime": NumberInt(1354093624),
  "module": "Help",
  "action": "edit",
  "opinfo": "{\"type\":1,\"appid\":1,\"title\":\"\怎\样\注\册\",\"cid\":[1,3],\"tid\":[1,2],\"ispush\":[\"2\"],\"keywords\":[\"\注\册\",\"\会\员\",\"\蝶\讯\"],\"related\":0,\"order_id\":0,\"status\":2,\"content\":\"\夺<img src=\\\"\\\/images\\\/2012\\\/1124\\\/2416\\\/aaf14d6080bdf4d66e40b698a239313344979.gif\\\" alt=\\\"\\\" \\\/><br \\\/>\",\"id\":2,\"release_time\":1354093624,\"update_time\":1354093624}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b5dc3732f3648801000006"),
  "id": NumberInt(164),
  "uid": NumberInt(1),
  "optime": NumberInt(1354095671),
  "module": "Help",
  "action": "add",
  "opinfo": "{\"type\":2,\"appid\":1,\"title\":\"\新\老\网\站\栏\目\差\异\",\"tid\":[1],\"keywords\":[\"\网\站\栏\目\",\"\差\异\"],\"order_id\":0,\"uri\":\"\",\"status\":2,\"id\":3,\"vedio\":\"http:\\\/\\\/u.cc\\\/upload\\\/2012\\\/1128\\\/2817\\\/1d2af57e1899e14415f7438f9e8cd8a890149.swf\",\"cid\":null,\"release_time\":1354095671,\"related\":0}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b5ded732f364dc18000006"),
  "id": NumberInt(165),
  "uid": NumberInt(1),
  "optime": NumberInt(1354096343),
  "module": "Help",
  "action": "edit",
  "opinfo": "{\"type\":2,\"appid\":1,\"title\":\"\新\老\网\站\栏\目\差\异\",\"tid\":[1],\"keywords\":[\"\网\站\栏\目\",\"\差\异\"],\"order_id\":0,\"uri\":\"http:\\\/\\\/u.cc\\\/upload\\\/2012\\\/1128\\\/2817\\\/1d2af57e1899e14415f7438f9e8cd8a890149.swf\",\"status\":2,\"id\":3,\"vedio\":\"http:\\\/\\\/u.cc\\\/upload\\\/2012\\\/1128\\\/2817\\\/1d2af57e1899e14415f7438f9e8cd8a890149.swf\",\"cid\":null,\"system_time\":1354096342,\"related\":0}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b5df0b32f364c81f000004"),
  "id": NumberInt(166),
  "uid": NumberInt(1),
  "optime": NumberInt(1354096395),
  "module": "Help",
  "action": "edit",
  "opinfo": "{\"type\":1,\"appid\":1,\"title\":\"\怎\样\注\册\",\"cid\":[1,3],\"tid\":[1,2],\"ispush\":[\"2\"],\"keywords\":[\"\注\册\",\"\会\员\",\"\蝶\讯\"],\"related\":0,\"order_id\":0,\"status\":2,\"content\":\"\夺<img src=\\\"\\\/images\\\/2012\\\/1124\\\/2416\\\/aaf14d6080bdf4d66e40b698a239313344979.gif\\\" alt=\\\"\\\" \\\/><br \\\/>\",\"id\":2,\"system_time\":1354096395}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b5df0f32f364500e000002"),
  "id": NumberInt(167),
  "uid": NumberInt(1),
  "optime": NumberInt(1354096399),
  "module": "Help",
  "action": "edit",
  "opinfo": "{\"type\":1,\"appid\":2,\"title\":\"\测\试\信\息\",\"cid\":[2],\"tid\":[2],\"keywords\":[\"\测\试\",\"\空\格\"],\"related\":0,\"order_id\":0,\"status\":2,\"content\":\"<p>\\r\\n\\tsdfssdfas\\r\\n<\\\/p>\\r\\n<p>\\r\\n\\t<img src=\\\"\\\/images\\\/2012\\\/1124\\\/2416\\\/80f7bbe757c2197a577d027b3c9a39b568480.jpg\\\" alt=\\\"\\\" \\\/> \\r\\n<\\\/p>\",\"id\":1,\"system_time\":1354096399}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b5df6832f364dc18000007"),
  "id": NumberInt(168),
  "uid": NumberInt(1),
  "optime": NumberInt(1354096488),
  "module": "Help",
  "action": "edit",
  "opinfo": "{\"type\":2,\"appid\":1,\"title\":\"\新\老\网\站\栏\目\差\异\",\"tid\":[1],\"keywords\":[\"\网\站\栏\目\",\"\差\异\"],\"order_id\":0,\"uri\":\"http:\\\/\\\/u.cc\\\/upload\\\/2012\\\/1128\\\/2817\\\/1d2af57e1899e14415f7438f9e8cd8a890149.swf\",\"status\":1,\"id\":3,\"cid\":null,\"system_time\":1354096488,\"related\":0}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b5df7032f364181e000003"),
  "id": NumberInt(169),
  "uid": NumberInt(1),
  "optime": NumberInt(1354096496),
  "module": "Help",
  "action": "edit",
  "opinfo": "{\"type\":2,\"appid\":1,\"title\":\"\新\老\网\站\栏\目\差\异\",\"tid\":[1],\"keywords\":[\"\网\站\栏\目\",\"\差\异\"],\"order_id\":0,\"uri\":\"http:\\\/\\\/u.cc\\\/upload\\\/2012\\\/1128\\\/2817\\\/1d2af57e1899e14415f7438f9e8cd8a890149.swf\",\"status\":2,\"id\":3,\"cid\":null,\"system_time\":1354096496,\"related\":0}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b5e4a132f364dc0b000009"),
  "id": NumberInt(170),
  "uid": NumberInt(1),
  "optime": NumberInt(1354097825),
  "module": "Help",
  "action": "edit",
  "opinfo": "{\"type\":1,\"appid\":2,\"title\":\"\测\试\信\息\",\"cid\":[2],\"tid\":[2],\"ispush\":[\"2\",\"3\"],\"keywords\":[\"\测\试\",\"\空\格\"],\"related\":0,\"order_id\":0,\"status\":2,\"content\":\"<p>\\r\\n\\tsdfssdfas\\r\\n<\\\/p>\\r\\n<p>\\r\\n\\t<img src=\\\"\\\/images\\\/2012\\\/1124\\\/2416\\\/80f7bbe757c2197a577d027b3c9a39b568480.jpg\\\" alt=\\\"\\\" \\\/> \\r\\n<\\\/p>\",\"id\":1,\"system_time\":1354097825}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b5e54632f364b41f000006"),
  "id": NumberInt(171),
  "uid": NumberInt(1),
  "optime": NumberInt(1354097990),
  "module": "Help",
  "action": "edit",
  "opinfo": "{\"type\":1,\"appid\":2,\"title\":\"\测\试\信\息\",\"cid\":[2],\"tid\":[2],\"ispush\":[2,3],\"keywords\":[\"\测\试\",\"\空\格\"],\"related\":0,\"order_id\":0,\"status\":2,\"content\":\"<p>\\r\\n\\tsdfssdfas\\r\\n<\\\/p>\\r\\n<p>\\r\\n\\t<img src=\\\"\\\/images\\\/2012\\\/1124\\\/2416\\\/80f7bbe757c2197a577d027b3c9a39b568480.jpg\\\" alt=\\\"\\\" \\\/> \\r\\n<\\\/p>\",\"id\":1,\"system_time\":1354097990}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b6ca2432f364bc1d000006"),
  "id": NumberInt(172),
  "uid": NumberInt(1),
  "optime": NumberInt(1354156580),
  "module": "Help",
  "action": "status",
  "opinfo": "[\"3\",\"2\",\"1\"]"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b6cabc32f3643013000004"),
  "id": NumberInt(173),
  "uid": NumberInt(1),
  "optime": NumberInt(1354156732),
  "module": "Help",
  "action": "status",
  "opinfo": "{\"status\":1,\"ids\":[\"3\",\"2\",\"1\"]}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b6ce9832f364a81e000004"),
  "id": NumberInt(174),
  "uid": NumberInt(1),
  "optime": NumberInt(1354157720),
  "module": "Help",
  "action": "status",
  "opinfo": "{\"status\":2,\"ids\":[\"3\",\"2\",\"1\"]}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b6d11332f364b41f000007"),
  "id": NumberInt(175),
  "uid": NumberInt(1),
  "optime": NumberInt(1354158355),
  "module": "Help",
  "action": "status",
  "opinfo": "{\"status\":99,\"ids\":[\"1\"]}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b6d1bd32f364b41f000008"),
  "id": NumberInt(176),
  "uid": NumberInt(1),
  "optime": NumberInt(1354158525),
  "module": "HelpRecycleBin",
  "action": "status",
  "opinfo": "{\"status\":1,\"ids\":[\"1\"]}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b6d1c332f364dc18000008"),
  "id": NumberInt(177),
  "uid": NumberInt(1),
  "optime": NumberInt(1354158531),
  "module": "Help",
  "action": "status",
  "opinfo": "{\"status\":99,\"ids\":[\"1\"]}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b6d53232f3643c15000005"),
  "id": NumberInt(178),
  "uid": NumberInt(1),
  "optime": NumberInt(1354159410),
  "module": "HelpRecycleBin",
  "action": "status",
  "opinfo": "{\"status\":2,\"ids\":[\"1\"]}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b6d53a32f3643013000005"),
  "id": NumberInt(179),
  "uid": NumberInt(1),
  "optime": NumberInt(1354159418),
  "module": "Help",
  "action": "status",
  "opinfo": "{\"status\":99,\"ids\":[\"2\"]}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": NumberInt(2),
  "id": NumberInt(180),
  "uid": NumberInt(1),
  "optime": NumberInt(1354160268),
  "module": "Help",
  "action": "add",
  "opinfo": "{\"type\":2,\"appid\":1,\"title\":\"1111\",\"tid\":[1],\"ispush\":[2,3],\"keywords\":[\"111\"],\"order_id\":0,\"uri\":\"http:\\\/\\\/www.sxxl.com\\\/Public\\\/Images\\\/buy-help.swf\",\"status\":2,\"id\":4,\"cid\":null,\"system_time\":1354160268,\"related\":0}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b70c9732f3643c15000006"),
  "id": NumberInt(181),
  "uid": NumberInt(1),
  "optime": NumberInt(1354173591),
  "module": "Help",
  "action": "status",
  "opinfo": "{\"status\":1,\"ids\":[\"1\"]}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b70caa32f364bc1d000007"),
  "id": NumberInt(182),
  "uid": NumberInt(1),
  "optime": NumberInt(1354173610),
  "module": "Help",
  "action": "status",
  "opinfo": "{\"status\":2,\"ids\":[\"1\"]}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b70d7fac0c60ac11000000"),
  "id": NumberInt(183),
  "uid": NumberInt(1),
  "optime": NumberInt(1354173823),
  "module": "Role",
  "action": "edit",
  "opinfo": "{\"name\":\"\运\营\管\理\员\",\"status\":2,\"id\":10}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b70efdac0c602c0a000001"),
  "id": NumberInt(184),
  "uid": NumberInt(1),
  "optime": NumberInt(1354174205),
  "module": "App",
  "action": "edit",
  "opinfo": "{\"appid\":1,\"appcode\":\"sxxl\",\"appname\":\"\服\装\网\",\"appkey\":\"WWW_JKHL===-JJIALKHLA\",\"rurl\":\"http:\\\/\\\/www.sxxl.com\",\"listener\":\"http:\\\/\\\/www.sxxl.d\\\/Test\\\/testListener\",\"status\":2,\"id\":1}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b72c3932f364bc1d000008"),
  "id": NumberInt(185),
  "uid": NumberInt(1),
  "optime": NumberInt(1354181689),
  "module": "HelpRecycleBin",
  "action": "status",
  "opinfo": "{\"status\":2,\"ids\":[\"2\"]}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b72eb432f364d402000005"),
  "id": NumberInt(186),
  "uid": NumberInt(1),
  "optime": NumberInt(1354182324),
  "module": "Help",
  "action": "status",
  "opinfo": "{\"status\":99,\"ids\":[\"4\"]}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b72ebd32f3648801000007"),
  "id": NumberInt(187),
  "uid": NumberInt(1),
  "optime": NumberInt(1354182333),
  "module": "HelpRecycleBin",
  "action": "status",
  "opinfo": "{\"status\":2,\"ids\":[\"4\"]}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b72ecf32f364c81f000005"),
  "id": NumberInt(188),
  "uid": NumberInt(1),
  "optime": NumberInt(1354182351),
  "module": "Help",
  "action": "status",
  "opinfo": "{\"status\":99,\"ids\":[\"1\"]}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b72fbc32f364a81e000005"),
  "id": NumberInt(189),
  "uid": NumberInt(1),
  "optime": NumberInt(1354182588),
  "module": "HelpRecycleBin",
  "action": "status",
  "opinfo": "{\"status\":2,\"ids\":[\"1\"]}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50b82a6032f3641810000000"),
  "id": NumberInt(190),
  "uid": NumberInt(1),
  "optime": NumberInt(1354246752),
  "module": "Help",
  "action": "status",
  "opinfo": "{\"status\":99,\"ids\":[\"2\"]}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50bc17cb32f364481b000000"),
  "id": NumberInt(191),
  "uid": NumberInt(1),
  "optime": NumberInt(1354504139),
  "module": "HelpRecycleBin",
  "action": "status",
  "opinfo": "{\"status\":2,\"ids\":[\"2\"]}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50bc254032f364f80d000000"),
  "id": NumberInt(192),
  "uid": NumberInt(1),
  "optime": NumberInt(1354507584),
  "module": "Help",
  "action": "status",
  "opinfo": "{\"status\":1,\"ids\":[\"3\"]}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50bc254532f3642c06000000"),
  "id": NumberInt(193),
  "uid": NumberInt(1),
  "optime": NumberInt(1354507589),
  "module": "Help",
  "action": "status",
  "opinfo": "{\"status\":99,\"ids\":[\"3\"]}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50bc2c7e32f3646818000000"),
  "id": NumberInt(194),
  "uid": NumberInt(1),
  "optime": NumberInt(1354509438),
  "module": "HelpRecycleBin",
  "action": "status",
  "opinfo": "{\"status\":2,\"ids\":[\"3\"]}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50bd56ea32f364d010000001"),
  "id": NumberInt(195),
  "uid": NumberInt(1),
  "optime": NumberInt(1354585834),
  "module": "Help",
  "action": "status",
  "opinfo": "{\"status\":99,\"ids\":[\"4\"]}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50bd570b32f364a407000000"),
  "id": NumberInt(196),
  "uid": NumberInt(1),
  "optime": NumberInt(1354585867),
  "module": "HelpRecycleBin",
  "action": "delete",
  "opinfo": "[\"4\"]"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50bd65d632f364ec0f000001"),
  "id": NumberInt(197),
  "uid": NumberInt(1),
  "optime": NumberInt(1354589654),
  "module": "Member",
  "action": "add",
  "opinfo": "{\"username\":\"diexun_tech\",\"password\":\"e10adc3949ba59abbe56e057f20f883e\",\"appid\":1,\"status\":2,\"id\":0,\"uid\":1}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50bd662432f364680d000001"),
  "id": NumberInt(198),
  "uid": NumberInt(1),
  "optime": NumberInt(1354589732),
  "module": "Member",
  "action": "add",
  "opinfo": "{\"username\":\"diexun_tech1\",\"password\":\"e10adc3949ba59abbe56e057f20f883e\",\"appid\":1,\"status\":2,\"id\":1}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50bd66a432f364540a000001"),
  "id": NumberInt(199),
  "uid": NumberInt(1),
  "optime": NumberInt(1354589860),
  "module": "Member",
  "action": "add",
  "opinfo": "{\"username\":\"diexun_tech11\",\"password\":\"96e79218965eb72c92a549dd5a330112\",\"appid\":1,\"status\":2,\"id\":2,\"uid\":13}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50bd66d432f3644400000000"),
  "id": NumberInt(200),
  "uid": NumberInt(1),
  "optime": NumberInt(1354589908),
  "module": "Member",
  "action": "delete",
  "opinfo": "[\"0\"]"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50bd66db32f364740a000000"),
  "id": NumberInt(201),
  "uid": NumberInt(1),
  "optime": NumberInt(1354589915),
  "module": "Member",
  "action": "delete",
  "opinfo": "[\"1\"]"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50bd66e932f364f80d000001"),
  "id": NumberInt(202),
  "uid": NumberInt(1),
  "optime": NumberInt(1354589929),
  "module": "Member",
  "action": "status",
  "opinfo": "{\"status\":1,\"ids\":[\"2\"]}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50bd66ee32f3642c06000001"),
  "id": NumberInt(203),
  "uid": NumberInt(1),
  "optime": NumberInt(1354589934),
  "module": "Member",
  "action": "status",
  "opinfo": "{\"status\":2,\"ids\":[\"2\"]}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50bd670a32f3645018000000"),
  "id": NumberInt(204),
  "uid": NumberInt(1),
  "optime": NumberInt(1354589962),
  "module": "Member",
  "action": "status",
  "opinfo": "{\"status\":2,\"ids\":[\"0\"]}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50bd671032f3646818000001"),
  "id": NumberInt(205),
  "uid": NumberInt(1),
  "optime": NumberInt(1354589968),
  "module": "Member",
  "action": "status",
  "opinfo": "{\"status\":2,\"ids\":[\"2\"]}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50bd677e32f3648812000000"),
  "id": NumberInt(206),
  "uid": NumberInt(1),
  "optime": NumberInt(1354590078),
  "module": "Member",
  "action": "resetPwd",
  "opinfo": "{\"uid\":2,\"password\":\"123456\"}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50bd6cd532f364cc17000000"),
  "id": NumberInt(207),
  "uid": NumberInt(1),
  "optime": NumberInt(1354591445),
  "module": "Member",
  "action": "status",
  "opinfo": "{\"status\":2,\"ids\":[\"0\"]}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50bd6cd932f364540a000002"),
  "id": NumberInt(208),
  "uid": NumberInt(1),
  "optime": NumberInt(1354591449),
  "module": "Member",
  "action": "status",
  "opinfo": "{\"status\":1,\"ids\":[\"0\"]}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50bd6ce532f3646818000002"),
  "id": NumberInt(209),
  "uid": NumberInt(1),
  "optime": NumberInt(1354591461),
  "module": "Member",
  "action": "delete",
  "opinfo": "[\"0\"]"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50bd6cef32f3648812000001"),
  "id": NumberInt(210),
  "uid": NumberInt(1),
  "optime": NumberInt(1354591471),
  "module": "Member",
  "action": "delete",
  "opinfo": "[\"\",\"\"]"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50bd6d1732f364d010000003"),
  "id": NumberInt(211),
  "uid": NumberInt(1),
  "optime": NumberInt(1354591511),
  "module": "Member",
  "action": "add",
  "opinfo": "{\"username\":\"test01\",\"password\":\"e10adc3949ba59abbe56e057f20f883e\",\"appid\":1,\"status\":2,\"id\":3,\"uid\":14}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50bd709532f364f80d000002"),
  "id": NumberInt(212),
  "uid": NumberInt(1),
  "optime": NumberInt(1354592405),
  "module": "Member",
  "action": "delete",
  "opinfo": "[\"1\",\"1\"]"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50bd70a732f364a407000001"),
  "id": NumberInt(213),
  "uid": NumberInt(1),
  "optime": NumberInt(1354592423),
  "module": "Member",
  "action": "edit",
  "opinfo": false
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50bd802b32f364cc17000001"),
  "id": NumberInt(214),
  "uid": NumberInt(1),
  "optime": NumberInt(1354596395),
  "module": "Member",
  "action": "status",
  "opinfo": "{\"status\":1,\"ids\":[\"\",\"3\",\"2\",\"\",\"\",\"\",\"\"]}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50bd803132f364540a000003"),
  "id": NumberInt(215),
  "uid": NumberInt(1),
  "optime": NumberInt(1354596401),
  "module": "Member",
  "action": "status",
  "opinfo": "{\"status\":2,\"ids\":[\"\",\"3\",\"2\",\"\",\"\",\"\",\"\"]}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50bd96c832f3646009000001"),
  "id": NumberInt(216),
  "uid": NumberInt(1),
  "optime": NumberInt(1354602184),
  "module": "Member",
  "action": "add",
  "opinfo": "{\"username\":\"test02\",\"password\":\"e10adc3949ba59abbe56e057f20f883e\",\"appid\":1,\"status\":2,\"id\":4,\"uid\":17}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50bd96e432f3642c1b000001"),
  "id": NumberInt(217),
  "uid": NumberInt(1),
  "optime": NumberInt(1354602212),
  "module": "Member",
  "action": "add",
  "opinfo": "{\"username\":\"diexun_tech\",\"password\":\"e10adc3949ba59abbe56e057f20f883e\",\"appid\":1,\"status\":2,\"id\":1,\"uid\":1}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50bd96f032f364540a000005"),
  "id": NumberInt(218),
  "uid": NumberInt(1),
  "optime": NumberInt(1354602224),
  "module": "Member",
  "action": "add",
  "opinfo": "{\"username\":\"test01\",\"password\":\"e10adc3949ba59abbe56e057f20f883e\",\"appid\":1,\"status\":2,\"id\":2,\"uid\":2}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50bdc66f32f3648411000001"),
  "id": NumberInt(219),
  "uid": NumberInt(1),
  "optime": NumberInt(1354614383),
  "module": "User",
  "action": "status",
  "opinfo": "{\"status\":null,\"ids\":[\"2\"]}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50bdc68b32f3646009000004"),
  "id": NumberInt(220),
  "uid": NumberInt(1),
  "optime": NumberInt(1354614411),
  "module": "User",
  "action": "status",
  "opinfo": "{\"status\":1,\"ids\":[\"2\"]}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50bdc73532f364740a000001"),
  "id": NumberInt(221),
  "uid": NumberInt(1),
  "optime": NumberInt(1354614581),
  "module": "User",
  "action": "pcPower",
  "opinfo": "{\"status\":1,\"ids\":[\"2\"]}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50bdc73832f364f80d000004"),
  "id": NumberInt(222),
  "uid": NumberInt(1),
  "optime": NumberInt(1354614584),
  "module": "User",
  "action": "pcPower",
  "opinfo": "{\"status\":2,\"ids\":[\"2\"]}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50bdc74132f3642c06000002"),
  "id": NumberInt(223),
  "uid": NumberInt(1),
  "optime": NumberInt(1354614593),
  "module": "User",
  "action": "pcPower",
  "opinfo": "{\"status\":1,\"ids\":[\"2\"]}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50bdc74332f364cc17000003"),
  "id": NumberInt(224),
  "uid": NumberInt(1),
  "optime": NumberInt(1354614595),
  "module": "User",
  "action": "pcPower",
  "opinfo": "{\"status\":2,\"ids\":[\"2\"]}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50bdc75932f364ec0f000002"),
  "id": NumberInt(225),
  "uid": NumberInt(1),
  "optime": NumberInt(1354614617),
  "module": "User",
  "action": "pcPower",
  "opinfo": "{\"status\":1,\"ids\":[\"1\"]}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50bdc75b32f3645018000001"),
  "id": NumberInt(226),
  "uid": NumberInt(1),
  "optime": NumberInt(1354614619),
  "module": "User",
  "action": "pcPower",
  "opinfo": "{\"status\":2,\"ids\":[\"1\"]}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50bdc76432f3648411000002"),
  "id": NumberInt(227),
  "uid": NumberInt(1),
  "optime": NumberInt(1354614628),
  "module": "User",
  "action": "delete",
  "opinfo": "[\"1\"]"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50bdc7a732f364d010000006"),
  "id": NumberInt(228),
  "uid": NumberInt(1),
  "optime": NumberInt(1354614695),
  "module": "User",
  "action": "add",
  "opinfo": "{\"account\":\"admin\",\"password\":\"e10adc3949ba59abbe56e057f20f883e\",\"real_name\":\"\超\级\管\理\员\",\"role_id\":1,\"status\":2,\"id\":144}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50bdc7de32f364a407000002"),
  "id": NumberInt(229),
  "uid": NumberInt(144),
  "optime": NumberInt(1354614750),
  "module": "User",
  "action": "pcPower",
  "opinfo": "{\"status\":1,\"ids\":[\"3\"]}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50bdc7e232f364ec0f000003"),
  "id": NumberInt(230),
  "uid": NumberInt(144),
  "optime": NumberInt(1354614754),
  "module": "User",
  "action": "pcPower",
  "opinfo": "{\"status\":2,\"ids\":[\"3\"]}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50bdc9a032f364f80d000005"),
  "id": NumberInt(231),
  "uid": NumberInt(144),
  "optime": NumberInt(1354615200),
  "module": "UserAuthorized",
  "action": "status",
  "opinfo": "{\"status\":1,\"ids\":[\"3\"]}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50bdc9a232f3642c06000003"),
  "id": NumberInt(232),
  "uid": NumberInt(144),
  "optime": NumberInt(1354615202),
  "module": "UserAuthorized",
  "action": "status",
  "opinfo": "{\"status\":2,\"ids\":[\"3\"]}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50bdcab732f364d410000000"),
  "id": NumberInt(233),
  "uid": NumberInt(144),
  "optime": NumberInt(1354615479),
  "module": "User",
  "action": "pcPower",
  "opinfo": "[\"3\"]"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50bdcb1832f364740a000002"),
  "id": NumberInt(234),
  "uid": NumberInt(144),
  "optime": NumberInt(1354615576),
  "module": "User",
  "action": "pcPower",
  "opinfo": "{\"status\":2,\"ids\":[\"4\"]}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50bdcb6b32f364ec0f000006"),
  "id": NumberInt(235),
  "uid": NumberInt(144),
  "optime": NumberInt(1354615659),
  "module": "Node",
  "action": "add",
  "opinfo": "{\"name\":\"pcPower\",\"title\":\"\硬\件\授\权\",\"order_id\":0,\"status\":2,\"is_menu\":2,\"id\":30,\"parent_id\":9}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50bdcb7632f364680d000002"),
  "id": NumberInt(236),
  "uid": NumberInt(144),
  "optime": NumberInt(1354615670),
  "module": "Role",
  "action": "power",
  "opinfo": "{\"role_id\":10,\"power\":[\"1\",\"3\",\"4\",\"5\",\"6\",\"7\",\"17\",\"2\",\"10\",\"8\",\"13\",\"9\",\"30\",\"14\",\"18\",\"19\",\"22\",\"11\",\"23\",\"25\",\"24\"]}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50bdcc1f32f3645018000002"),
  "id": NumberInt(237),
  "uid": NumberInt(143),
  "optime": NumberInt(1354615839),
  "module": "User",
  "action": "pcPower",
  "opinfo": "[\"4\"]"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50bdcc6c32f364d410000001"),
  "id": NumberInt(238),
  "uid": NumberInt(144),
  "optime": NumberInt(1354615916),
  "module": "User",
  "action": "pcPower",
  "opinfo": "{\"status\":2,\"ids\":[\"4\"]}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50be9c4b32f364d010000007"),
  "id": NumberInt(239),
  "uid": NumberInt(144),
  "optime": NumberInt(1354669131),
  "module": "User",
  "action": "pcPower",
  "opinfo": "{\"status\":1,\"ids\":[\"4\"]}"
});
db.getCollection("uc_user_operation_log").insert({
  "_id": ObjectId("50be9c4d32f3641809000002"),
  "id": NumberInt(240),
  "uid": NumberInt(144),
  "optime": NumberInt(1354669133),
  "module": "User",
  "action": "pcPower",
  "opinfo": "{\"status\":2,\"ids\":[\"4\"]}"
});
