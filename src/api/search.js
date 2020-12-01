import request from "@utils/request";

export const reqGetProduct = () => {
  return request({
    method: "POST",
    url: "/list",
    data: {},
  })
}
