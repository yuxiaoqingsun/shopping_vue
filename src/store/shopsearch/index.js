import {reqGetSearchInfo} from '@/api'

const state = {
    searchList : {}
}
const mutations = {
    GETSEARCHINFO(state,searchList){
        state.searchList = searchList
    }
}
const actions = {
    async getSearchInfo({commit}, params={}){
        let res = await reqGetSearchInfo(params)
        // console.log('----')
        if(res.code == 200){
            // console.log('getsearchlist')
            commit('GETSEARCHINFO',res.data)
        }
    }
}
//为了简化数据
const getters = {
    //state为当前仓库state
    goodsList : (state) => state.searchList.goodsList || [] ,
    trademarkList : (state) => state.searchList.trademarkList || [],
    attrsList : (state) => state.searchList.attrsList  || []

}

export default {
    namespaced:true,
    state,
    mutations,
    actions,
    getters
}