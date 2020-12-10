import request from "@utils/request";

//获取订单列表信息
export const reqGetOrder = () => {
  return request({
    method: "GET",
    url: "/order/auth/trade",
  });
}
//提交订单
export const reqSubmitOrder = ({
  tradeNo, //订单编号(拼接在路径中)
  consignee,//收件人姓名
  consigneeTel,//收件人电话
  deliveryAddress, //地址
  paymentWay, //支付方式 (ONLINE代表在线)
  orderComment, //订单备注
  orderDetailList,//存储多个商品对象的数组
}) => {
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
}
//支付界面
export const reqGetPay = (orderId) => {
  return request({
    method: "GET",
    url: `/payment/weixin/createNative/${orderId}`,
  });
}
//查看订单信息
export const reqPayment = (orderId) => {
  return request({
    method: "GET",
    url: `/payment/weixin/queryPayStatus/${orderId}`,
  });
}
//获取我的订单列表
export const reqMyOrder = ({ page, limit }) => {
  return request({
    method: "GET",
    url: `/order/auth/${page}/${limit}`,
  });
}
