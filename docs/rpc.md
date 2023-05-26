# rpc

如调用webtool

~~~
$url = get_config("RPC_WEBTOOL_URL").'/rpc/webtool/PrinterLianke';   
$client = rpc($url);  
$info = $client->get_info([
    'device_id'=>$input['key1'],
    'device_key'=>$input['key2'],
]); 
~~~

在 `RPC_WEBTOOL_URL` 项目下有`app\webtool\rpc\PrinterLianke`
当 `RPC_WEBTOOL_URL` 值不存在时，请复制 `app`下的`webtool`目录至发起调用的项目中，将自动不再发起`RPC`请求而改用本地调用，无需修改代码。

~~~
<?php 
/*
    授权许可说明请阅读LICENSE.md
    获取授权方式: yiiphp@foxmail.com 
*/ 
namespace app\webtool\rpc; 
use app\webtool\service\PrinterLianke as Service;
/**
* /rpc/webtool/PrinterLianke
* 具体查看API接口参数
* 
$url = 'http://tool/rpc/webtool/PrinterLianke';
$client = rpc_client($url); 
$info = $client->get_info([
    'device_id'=>'lc01cy08508343',
    'device_key'=>'P1vTZ4pLAxa7wBF8',
]);  

*/
class PrinterLianke extends Service{    
}
~~~

service 具体实现

~~~
<?php 
/*
    授权许可说明请阅读LICENSE.md
    获取授权方式: yiiphp@foxmail.com 
*/ 
namespace app\webtool\service; 
use app\webtool\classes\PrinterLianke as Printer;
 
class PrinterLianke{  
	protected $printer; 
	public    $device_id; 
	public    $device_key; 
	/**
	* 初始化
	* 具体查看API接口参数
	* @return object
	*/
	public function init($device_id,$device_key,$debug = false){
		$this->printer = new Printer($device_id,$device_key,$debug);
		$this->device_id = $device_id;
		$this->device_key = $device_key;
		return $this;
	}

	protected function _init($arr = []){
		if(!$this->device_id){
			$device_id = $arr['device_id'];
			$device_key = $arr['device_key'];
			$debug = $arr['debug'];
			if(!$device_id || !$device_key){
				throw new \Exception("请求异常", 403);				
			}
			$this->printer = new Printer($device_id,$device_key,$debug);
		}
	}

	/**
	* 获取端口信息-在线掉线
	*/
	public function get_info($opt = []){   
		$this->_init($opt); 
		return $this->printer->get_info();
	}

	/**
	* 获取端口下打印机列表
	*/
	public function get_printer_list($opt = []){ 
		$this->_init($opt);
		return $this->printer->get_printer_list();
	}

	/**
	* 获取某个打印机参数
	*/
	public function get_printer_par($opt = [],$printer_model){ 
		$this->_init($opt);
		return $this->printer->get_printer_par($printer_model);
	}

	/**
	* 提交打印任务
	*/
	public function add_job($opt = [],$printerModel, $file, $optional_array){ 
		$this->_init($opt);
		return $this->printer->add_job($printerModel, $file, $optional_array);
	}

	/**
	* 获取打印任务状态
	*/
	public function get_job($opt = [],$device_port,$task_id){ 
		$this->_init($opt);
		return $this->printer->get_job($device_port,$task_id);
	}

	/**
	* 取消打印任务
	*/
	public function cancel_job($opt = [],$device_port,$task_id){ 
		$this->_init($opt);
		return $this->printer->cancel_job($device_port,$task_id);
	}
}
~~~