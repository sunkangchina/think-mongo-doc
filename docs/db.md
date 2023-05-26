# 数据库

[手册](https://www.kancloud.cn/manual/think-orm/content)
 

## 查寻
~~~
db_get(name,where,1); //取一条记录
db_get_one(name,where); //取一条记录
db_get(name,where); //取所有记录
~~~
其中`where`支持_id的值
或数组 ['name'=>'admin']
或 
~~~
function($db)use($id){
    $db = $db->where('_id',$id);
    return $db;
}
~~~

## 分页

~~~
db_pager(table_name,where)
~~~

## 写入

~~~
db_insert(table_name,data)
~~~

## 更新

~~~
db_update(table_name,data,where)
~~~

## 事务 
~~~
mongo_action(function(){

});
~~~

 
## where条件


~~~
'status[!]'=>['wait_pay','cancel'], not in
'status[!]'=>'wait_pay', 不等于
'pay_method[~]'=>'' //LIKE查寻
'pay_method'=>['weixin'] //IN查寻
'amount[>]'=>32.16 
'amount[>=]'=>32.16 
'amount[<]'=>32.16 
'amount[<=]'=>32.16 
'amount[<>]'=>[1,2] 在区间
'amount[><]'=>[1,2] 不在区间 
~~~ 


## GROUP HAVING 

由于think-orm没有对mongodb的group having做像mysql一样的支持。
无法通过`->group(...)`实现，本质是使用`aggregate`实现，为了方便使用，现已封装。

支持`db_pager` `db_get` 

1. `db_get`
~~~
$d['list'] = db_get("hardware",[
     "SUM(t)"=>'t',
     'min(t)'=>'t1',
],[ 
  'drive[!]'=>['gx'],
  'GROUP'=> [
    'tag',
    'drive', 
  ],
  'HAVING'=>[
      't[>]'=>0
  ],
  'ORDER'=>[
    't'=>'asc'
  ]
]);
~~~
2. `db_pager`
~~~
$d['list'] = db_pager("hardware",[
     "SUM(t)"=>'t',
     'min(t)'=>'t1',
],[ 
  'drive[!]'=>['gx'],
  'GROUP'=> [
    'tag',
    'drive', 
  ],
  'HAVING'=>[
      't[>]'=>0
  ],
  'ORDER'=>[
    't'=>'asc'
  ]
]);
~~~
除了`GROUP` `HAVING` `ORDER`其他参数对应`where` 

`GROUP`放在第一个


# 安装


## 安装 mongodb 扩展

http://pecl.php.net/package/mongodb

以php8.1为例
~~~
wget http://pecl.php.net/get/mongodb-1.15.3.tgz
tar xvf mongodb-1.15.3.tgz
cd mongodb-1.15.3
phpize && ./configure --with-php-config=/www/server/php/81/bin/php-config && make && make install
~~~

在`php.ini`最后加上
~~~
extension=mongodb.so
~~~


### 创建帐号
~~~
use admin
db.createUser({user:"root",pwd:"DoitT2023!ps",roles:[{role:"userAdminAnyDatabase",db:"admin"},{role:"clusterAdmin",db:"admin"},{role:"root",db:"admin"}]})
~~~


###  开启事务

1. 启动MongoDB实例并进入MongoDB shell
~~~
mongo -host=127.0.0.1 -port=10002
~~~
2. 在MongoDB shell中，切换到admin数据库
~~~
use admin
~~~
3. 启用事务
其中4.4是Mongo版本号
~~~
db.runCommand({ setFeatureCompatibilityVersion: "4.4" })
~~~
4. 配置副本集
在宝塔Mongo中配置文件配置
~~~ 
replication:
    replSetName: rs0  
~~~
5. 启动
~~~
rs.initiate()
~~~
6. 检测状态
~~~
rs.status()
~~~


如果使用分布式事务需要使用MongoDB的分片集群（Sharded Cluster）来实现