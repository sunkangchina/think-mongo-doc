# 配置

## 向后台配置添加信息
~~~
add_action('admin.config.config_key',function(&$config_key){
    $config_key[] = 'mall_search_key';
});


add_action('admin.config.tab',function(){
    if(is_admin()){ 
        echo '<li><a href="#tabs-city" name="get_city" >配送区域</a></li>'; 
    }
});
add_action('admin.config.body',function(&$vue){
    if(is_admin()){ 
        include __DIR__.'/tab/wuliu.php';    
        include __DIR__.'/tab/city.php';   //<div id="tabs-city" >    
    }    
}); 
~~~
