# 支付

order_num 订单号

transaction_id 支付流水号

## 成功后

~~~
do_action("payment.success",$order_num);
do_action("payment.success.weixin",$order_num);
~~~
## 退款成功后
~~~
do_action("payment.refund.success",$pay_refund);
~~~

其中`$pay_refund`值
~~~
$pay_refund = get_where("payment_base_refund",['_id'=>$pay_refund_id],1);
$pay_refund['pay_base_id']   = $pay_base_id;
$pay_refund['order_num']  = $order_num;
$pay_refund['refund_amount'] = $refund_amount;
~~~ 