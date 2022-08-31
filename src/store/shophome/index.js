import {reqCategoryList, reqGetBannerList, reqGetFloorContent} from "@/api"
const state = {
    //默认初始值根据服务器返回内容来定
    categoryList:[],
    bannerList:[],
    floorContent: [],
}
const mutations = {
    GETCATEGORYLIST(state, categoryList){
        state.categoryList = categoryList.slice(0,15)
    },
    GETBANNERLIST(state,bannerList){
        state.bannerList = bannerList
    },
    GETFLOORCONTENT(state, floorContent){
        state.floorContent = floorContent
    }
}
const actions = {
    // 通过API里面的接口函数调用，向服务器发送请求
    // async await拿到Promise返回成功的结果
    async categoryList({commit}){
        let res = await reqCategoryList()
        // console.log(res)
        if(res.code == 200){
            commit("GETCATEGORYLIST", res.data)
        }
    },
    async getBannerList({commit}){
        let res = await reqGetBannerList()
        // console.log(res)
        if(res.code == 200){
            commit("GETBANNERLIST", res.data)
        }
    },
    async getFloorContent({commit}){
        let res = await reqGetFloorContent()
        // console.log(res)
        if(res.code == 200){
            commit('GETFLOORCONTENT', res.data)
        }
    }
}
const getters = {}

export default {
    namespaced:true,
    state,
    mutations,
    actions,
    getters
}