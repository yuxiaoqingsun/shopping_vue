import VueRouter from "vue-router";
import routes from './routes'
import store from "@/store";
/* import ShopHome from '@/pages/ShopHome'
import ShopSearch from '@/pages/ShopSearch'
import ShopLogin from '@/pages/ShopLogin'
import ShopRegister from '@/pages/ShopRegister' */

/* 路由懒加载(按需加载)
    将路由对应的组件打包成一个个的js代码块
    只有在这个路由被访问时，才加载对应组件
*/
/* const ShopHome = () => import('@/pages/ShopHome')
const ShopSearch = () => import('@/pages/ShopSearch')
const ShopLogin = () => import('@/pages/ShopLogin')
const ShopRegister = () => import('@/pages/ShopRegister') */

let originPush = VueRouter.prototype.push
VueRouter.prototype.push = function (location,
    resolve = function () { console.log('yes') },
    reject = function () { console.log('false') }) {
    originPush.call(this, location, resolve, reject)
    // this.originPush(location, resolve, reject)--在window身上
}
let originReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function (location,
    resolve = function () { console.log('yes') },
    reject = function () { console.log('false') }) {
    originReplace.call(this, location, resolve, reject)
}

let router =  new VueRouter({
    routes,
    scrollBehavior(to, from, savedPosition) {
        //返回的这个y=0，代表的滚动条在最上方
        return { y: 0 };
    },
})

router.beforeEach(async (to, from, next) => {
    //to:获取到要跳转到的路由信息
    //from：获取到从哪个路由跳转过来来的信息
    //next: next() 放行  next(path) 放行  

   //获取仓库中的token-----可以确定用户是登录了
    let token  = store.state.user.token;
    let name = store.state.user.userInfo.name;
    //用户登录了
    if(token){
      //已经登录而且还想去登录------不行
      if(to.path=="/login"||to.path=='/register'){
         next('/');
      }else{
        //已经登陆了,访问的是非登录与注册
        //登录了且拥有用户信息放行
        if(name){
          next();
        }else{
          //登陆了且没有用户信息
          //在路由跳转之前获取用户信息且放行
          try {
           await store.dispatch('user/getUserInfo');
           next();
          } catch (error) {
            //token失效从新登录
            await store.dispatch('user/userLogout');
            next('/login')
          }
        }
      }
    }else{
       //未登录：不能去交易相关、不能去支付相关【pay|paysuccess】、不能去个人中心
       //未登录去上面这些路由-----登录
       let toPath = to.path;
       if(toPath.indexOf('/trade')!=-1 || toPath.indexOf('/pay')!=-1||toPath.indexOf('/center')!=-1){
         //把未登录的时候向去而没有去成的信息，存储于地址栏中【路由】
         next('/login?redirect='+toPath);
       }else{
          //去的不是上面这些路由（home|search|shopCart）---放行
          next();
       }
       next()
     
    }
 });


export default router;