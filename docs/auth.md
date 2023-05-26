
# 权限

在每个应用的`app.php`中添加
~~~
add_admin_access('设备.hardware',[ 
    '查看.view',  
    '编辑.edit',
    '管理.admin', 
    'url'=>'hardware' //可以有菜单，也可以没有菜单
],10);
~~~

## 判断
~~~
if(!admin_access('address.view')){
    throw new \Exception("权限不够", 403); 
}
~~~