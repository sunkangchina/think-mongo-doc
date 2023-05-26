(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{287:function(a,t,e){"use strict";e.r(t);var s=e(14),r=Object(s.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"数据库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据库"}},[a._v("#")]),a._v(" 数据库")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://www.kancloud.cn/manual/think-orm/content",target:"_blank",rel:"noopener noreferrer"}},[a._v("手册"),t("OutboundLink")],1)]),a._v(" "),t("h2",{attrs:{id:"查寻"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查寻"}},[a._v("#")]),a._v(" 查寻")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("db_get(name,where,1); //取一条记录\ndb_get_one(name,where); //取一条记录\ndb_get(name,where); //取所有记录\n")])])]),t("p",[a._v("其中"),t("code",[a._v("where")]),a._v("支持_id的值\n或数组 ['name'=>'admin']\n或")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("function($db)use($id){\n    $db = $db->where('_id',$id);\n    return $db;\n}\n")])])]),t("h2",{attrs:{id:"分页"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分页"}},[a._v("#")]),a._v(" 分页")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("db_pager(table_name,where)\n")])])]),t("h2",{attrs:{id:"写入"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#写入"}},[a._v("#")]),a._v(" 写入")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("db_insert(table_name,data)\n")])])]),t("h2",{attrs:{id:"更新"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更新"}},[a._v("#")]),a._v(" 更新")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("db_update(table_name,data,where)\n")])])]),t("h2",{attrs:{id:"事务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#事务"}},[a._v("#")]),a._v(" 事务")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("mongo_action(function(){\n\n});\n")])])]),t("h2",{attrs:{id:"where条件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#where条件"}},[a._v("#")]),a._v(" where条件")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("'status[!]'=>['wait_pay','cancel'], not in\n'status[!]'=>'wait_pay', 不等于\n'pay_method[~]'=>'' //LIKE查寻\n'pay_method'=>['weixin'] //IN查寻\n'amount[>]'=>32.16 \n'amount[>=]'=>32.16 \n'amount[<]'=>32.16 \n'amount[<=]'=>32.16 \n'amount[<>]'=>[1,2] 在区间\n'amount[><]'=>[1,2] 不在区间 \n")])])]),t("h2",{attrs:{id:"group-having"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#group-having"}},[a._v("#")]),a._v(" GROUP HAVING")]),a._v(" "),t("p",[a._v("由于think-orm没有对mongodb的group having做像mysql一样的支持。\n无法通过"),t("code",[a._v("->group(...)")]),a._v("实现，本质是使用"),t("code",[a._v("aggregate")]),a._v("实现，为了方便使用，现已封装。")]),a._v(" "),t("p",[a._v("支持"),t("code",[a._v("db_pager")]),a._v(" "),t("code",[a._v("db_get")])]),a._v(" "),t("ol",[t("li",[t("code",[a._v("db_get")])])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$d['list'] = db_get(\"hardware\",[\n     \"SUM(t)\"=>'t',\n     'min(t)'=>'t1',\n],[ \n  'drive[!]'=>['gx'],\n  'GROUP'=> [\n    'tag',\n    'drive', \n  ],\n  'HAVING'=>[\n      't[>]'=>0\n  ],\n  'ORDER'=>[\n    't'=>'asc'\n  ]\n]);\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[t("code",[a._v("db_pager")])])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$d['list'] = db_pager(\"hardware\",[\n     \"SUM(t)\"=>'t',\n     'min(t)'=>'t1',\n],[ \n  'drive[!]'=>['gx'],\n  'GROUP'=> [\n    'tag',\n    'drive', \n  ],\n  'HAVING'=>[\n      't[>]'=>0\n  ],\n  'ORDER'=>[\n    't'=>'asc'\n  ]\n]);\n")])])]),t("p",[a._v("除了"),t("code",[a._v("GROUP")]),a._v(" "),t("code",[a._v("HAVING")]),a._v(" "),t("code",[a._v("ORDER")]),a._v("其他参数对应"),t("code",[a._v("where")])]),a._v(" "),t("p",[t("code",[a._v("GROUP")]),a._v("放在第一个")]),a._v(" "),t("h1",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[a._v("#")]),a._v(" 安装")]),a._v(" "),t("h2",{attrs:{id:"安装-mongodb-扩展"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-mongodb-扩展"}},[a._v("#")]),a._v(" 安装 mongodb 扩展")]),a._v(" "),t("p",[a._v("http://pecl.php.net/package/mongodb")]),a._v(" "),t("p",[a._v("以php8.1为例")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("wget http://pecl.php.net/get/mongodb-1.15.3.tgz\ntar xvf mongodb-1.15.3.tgz\ncd mongodb-1.15.3\nphpize && ./configure --with-php-config=/www/server/php/81/bin/php-config && make && make install\n")])])]),t("p",[a._v("在"),t("code",[a._v("php.ini")]),a._v("最后加上")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("extension=mongodb.so\n")])])]),t("h3",{attrs:{id:"创建帐号"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建帐号"}},[a._v("#")]),a._v(" 创建帐号")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('use admin\ndb.createUser({user:"root",pwd:"DoitT2023!ps",roles:[{role:"userAdminAnyDatabase",db:"admin"},{role:"clusterAdmin",db:"admin"},{role:"root",db:"admin"}]})\n')])])]),t("h3",{attrs:{id:"开启事务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开启事务"}},[a._v("#")]),a._v(" 开启事务")]),a._v(" "),t("ol",[t("li",[a._v("启动MongoDB实例并进入MongoDB shell")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("mongo -host=127.0.0.1 -port=10002\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[a._v("在MongoDB shell中，切换到admin数据库")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("use admin\n")])])]),t("ol",{attrs:{start:"3"}},[t("li",[a._v("启用事务\n其中4.4是Mongo版本号")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('db.runCommand({ setFeatureCompatibilityVersion: "4.4" })\n')])])]),t("ol",{attrs:{start:"4"}},[t("li",[a._v("配置副本集\n在宝塔Mongo中配置文件配置")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("replication:\n    replSetName: rs0  \n")])])]),t("ol",{attrs:{start:"5"}},[t("li",[a._v("启动")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("rs.initiate()\n")])])]),t("ol",{attrs:{start:"6"}},[t("li",[a._v("检测状态")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("rs.status()\n")])])]),t("p",[a._v("如果使用分布式事务需要使用MongoDB的分片集群（Sharded Cluster）来实现")])])}),[],!1,null,null,null);t.default=r.exports}}]);