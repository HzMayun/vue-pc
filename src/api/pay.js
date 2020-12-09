import request from "@utils/request";

//获取订单列表信息
export const reqGetOrder = () => {
  return request({
    method: "GET",
    url: "/order/auth/trade"
  })
}

/* export const reqSubmitPrder = (
  tradeNo, //订单编号(拼接在路径中)
  consignee,//收件人姓名
  consigneeTel,//收件人电话
  deliveryAddress, //地址
  paymentWay, //支付方式 (ONLINE代表在线)
  orderComment, //订单备注
  orderDetailList,//存储多个商品对象的数组
) => {
  return request({
    method: "POST",
    url: "/order/auth/submitOrder",
    params: {
      tradeNo //params参数，会拼接在路径中
    },
    data: {
      // body参数
      consignee,//收件人姓名
      consigneeTel,//收件人电话
      deliveryAddress, //地址
      paymentWay, //支付方式 (ONLINE代表在线)
      orderComment, //订单备注
      orderDetailList,//存储多个商品对象的数组
    }
  })
} */
