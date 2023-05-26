# 添加命令行
~~~
add_action("console",function(&$console){
    if(!is_cli()){return;}
    // php think z:mall.close_order 
    $console['z:mall.close_order'] = "app\mall\command\CloseOrder";
});  
~~~