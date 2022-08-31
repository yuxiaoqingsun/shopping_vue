const ShopHome = () => import('@/pages/ShopHome')
const ShopSearch = () => import('@/pages/ShopSearch')
const ShopLogin = () => import('@/pages/ShopLogin')
const ShopRegister = () => import('@/pages/ShopRegister')

import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import PaySuccess from '@/pages/PaySuccess'


export default [
    {
        path: '/home',
        component: ShopHome,
        meta: {
            showFooter: true,
            showTypeNav: true
        }
    },
    {
        name: 'search',
        path: '/search/:keyword?',
        component: ShopSearch,
        meta: {
            showFooter: true,
            showTypeNav: false
        }
    },
    {
        name: 'detail',  // 是当前路由的标识名称
        path: '/detail/:skuId',
        component: Detail,
    },
    {
        path: '/addcartsuccess',
        name: 'addcartsuccess',
        component: AddCartSuccess,
        meta: {
            showFooter: true,
        }

        /* beforeEnter (to, from, next) {
          // 得到当前路由信息对象
          // const route = router.currentRoute  // route就是from
    
          // 得到要跳转到目路由的query参数
          const skuNum = to.query.skuNum
          // 读取保存的数据
          const skuInfo = JSON.parse(window.sessionStorage.getItem('SKU_INFO_KEY'))
          console.log('---', skuNum, skuInfo)
          // 只有都存在, 才放行
          if (skuNum && skuInfo) {
            next()
          } else { // 在组件对象创建前强制跳转到首页
            next('/')
          }
        } */
    },
    {
        path: '/shopcart',
        component: ShopCart,
    },
    {
        path: '/login',
        component: ShopLogin,
    },
    {
        path: '/register',
        component: ShopRegister,
    },
    {
        path: '/trade',
        component: Trade,
        /* 只能从购物车界面, 才能跳转到交易界面 */
        /* beforeEnter (to, from, next) {
          if (from.path==='/shopcart') {
            next()
          } else {
            next('/shopcart')
          }
        } */
      },
      {
        path: '/pay',
        component: Pay,
    
        // 将query参数映射成props传递给路由组件
        // props: route => ({orderId: route.query.orderId}),
    
        /* 只能从交易界面, 才能跳转到支付界面 */
        /* beforeEnter (to, from, next) {
          if (from.path==='/trade') {
            next()
          } else {
            next('/trade')
          }
        } */
      },
      {
        path: '/paysuccess',
        component: PaySuccess,
        /* 只有从支付界面, 才能跳转到支付成功的界面 */
        /* beforeEnter (to, from, next) {
          if (from.path==='/pay') {
            next()
          } else {
            next('/pay')
          }
        } */
      },
    {
        // 路由重定向
        path: '*',
        redirect: '/home'
    }
]