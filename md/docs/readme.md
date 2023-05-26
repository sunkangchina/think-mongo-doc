# 依赖

### 软件环境

- ngnix
- mongodb >= 4.4
- redis 
- php = 8.1 

### php扩展 

- mongodb >= 1.13.0
- mbstring
- redis
- json
- iconv
- gd
- fileinfo
- curl


# NG重写
~~~
if (!-f $request_filename) {
    rewrite  ^(.*)$  /index.php?s=/$1  last;
}
~~~ 

# 常用操作

## 记录日志

~~~
insert_trace($arr = [
    'nid'=>'',
    'msg'=>'',
    'data'=>'',
],$type = 'order')
~~~

## 获取操作记录 
~~~
get_trace($type='order',$where = [])
~~~ 


# 多站点管理

向 site_menu 表写入
~~~ 
  "title": "商城",
  "url": "http://b2cv4.qihetaiji.com" 
~~~