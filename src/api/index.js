// 当前模块：api进行统一管理

import requests from './request'
import mockRequest from './mockAjax'
// import axios from 'axios'

// 三级联动接口
// api/product/getBaseCategoryList 

export const reqCategoryList= ()=> requests ({url:'/product/getBaseCategoryList',method:'get'})
export const reqGetBannerList = ()=> mockRequest.get('/banner')
export const reqGetFloorList = ()=> mockRequest.get('/floor')
// export const reqGetBannerListBack= function(){
//    return axios.get('/mock/banner')
// }

export const reqGetSearchInfo= (params)=> requests({url:'/list',method:'post',data:params})

