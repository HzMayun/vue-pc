import request from "@utils/request";

/* 
    获取首页三级list
*/
export const reqGetBaseCategoryList=()=>{
    return request({
        method:"GET",
        url:"/product/getBaseCategoryList",
    })
}