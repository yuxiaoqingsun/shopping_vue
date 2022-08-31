// API接口统一管理
import requests from './request'
import mockRequests from './mockRequests'

// 三级联动接口,向外暴露一个函数，外部需要发送请求的组件调用函数
export const reqCategoryList = ()=>{
    // axios发请求返回Promise对象
    return requests({
        url:'product/getBaseCategoryList',
        method:'get'
    })
}

//首页轮播图
export const reqGetBannerList = ()=> mockRequests.get('/banner')

export const reqGetFloorContent  = () => mockRequests.get('/floor')

//参数params至少是一个空对象
export const reqGetSearchInfo = (params) => requests({url:'/list',method:'post',data:params})

export const reqGoodsInfo = (skuId)=>requests({url:`/item/${skuId}`,method:'get'});

export const reqAddOrUpdateShopCart = (skuId,skuNum)=>requests({url:`/cart/addToCart/${skuId}/${skuNum}`,method:"post"})

export const reqCartList = ()=>requests({url:'/cart/cartList ',method:'get'});

export const reqDeleteCartById = (skuId)=>requests({url:`/cart/deleteCart/${skuId}`,method:'delete'});

export const reqUpdateCheckedByid = (skuId,isChecked)=>requests({url:`/cart/checkCart/${skuId}/${isChecked}`,method:'get'});

export const reqGetCode = (phone)=>requests({url:`/user/passport/sendCode/${phone}`,method:'get'});

export const reqUserRegister = (data)=>requests({url:'/user/passport/register',data,method:'post'});

export const reqUserLogin = (data)=>requests({url:'/user/passport/login',data,method:'post'});

export const reqUserInfo = ()=>requests({url:'/user/passport/auth/getUserInfo',method:'get'});

export const reqLogout = ()=> requests({url:'/user/passport/logout',method:'get'});

export const reqAddressInfo = ()=>requests({url:'/user/userAddress/auth/findUserAddressList',method:'get'});

export const reqOrderInfo = ()=>requests({url:'/order/auth/trade',method:'get'});

export const reqSubmitOrder = (tradeNo,data)=>requests({url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,data,method:'post'});

export const reqPayInfo = (orderId)=>requests({url:`/payment/weixin/createNative/${orderId}`,method:'get'});

export  const reqPayStatus = (orderId)=>requests({url:`/payment/weixin/queryPayStatus/${orderId}`,method:'get'});

export const reqMyOrderList = (page,limit)=>requests({url:`/order/auth/${page}/${limit}`,method:'get'});
