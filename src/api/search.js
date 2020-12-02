import request from "@utils/request";

export const reqGetProduct = (data) => {
  return request({
    method: "POST",
    url: "/list",
    data,
  })
}
