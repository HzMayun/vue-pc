import request from "@utils/request";

export const reqGetDetail = (data) => {
  return request({
    method: "GET",
    url: "/item/:id",
    data,
  })
}
