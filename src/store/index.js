import Vue from "vue";
import Vuex from 'vuex'
import shophome from './shophome'
import shopsearch from './shopsearch'
import detail from './detail'
import shopcart from './shopcart'
import user from './shopuser'
import trade from './trade'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        shophome,
        shopsearch,
        detail,
        shopcart,
        user,
        trade,
        
    }
})