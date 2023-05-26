## 动作
~~~
add_action("admin.index",function(){
    if(!is_admin_login()){
        return;
    }
    include __DIR__.'/action/goods.php';
});
add_action("admin.index.created",function(&$created){
    if(!is_admin_login()){
        return;
    }
    $created[] = 'get_mall_stat()';
}); 
~~~