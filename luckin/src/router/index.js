import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../components/home/home"
import Order from "../components/order/order"
import Menu from "../components/menu/menu"
import Mine from "../components/mine/mine"
import Shopping from "../components/shopping/shopping"
import coffeeWallet from "../components/coffeeWallet/coffeeWallet"
import enterPrice from "../components/enterprice/enterPrice"
import sendCoffee from "../components/sendCoffee/sendCoffee"


Vue.use(VueRouter);


export default new VueRouter({
    mode: 'history', // 去掉#
    // 配置应用所有的路由
    routes: [
        {
            path: '/Home',
            component: Home,
            meta: {
                isShow: true // 标识显示底部导航
            }
        },
        {
            path: '/Order',
            component: Order,
            meta: {
                isShow: true // 标识显示底部导航
            }
        },
        {
            path: '/Menu',
            component: Menu,
            meta: {
                isShow: true // 标识显示底部导航
            }
        },
        {
            path: '/Mine',
            component: Mine,
            meta: {
                isShow: true // 标识显示底部导航
            }
        },
        {
            path: '/coffeeWallet',
            component: coffeeWallet,
            meta: {
                isShow: false // 标识显示底部导航
            }
        },
        {
            path: '/enterPrice',
            component: enterPrice,
            meta: {
                isShow: false // 标识显示底部导航
            }
        },
        {
            path: '/sendCoffee',
            component: sendCoffee,
            meta: {
                isShow: false // 标识显示底部导航
            }
        },
        {
            path: '/Shopping',
            component: Shopping
        },
        {
            path: '/',
            redirect: '/Home'
        }
    ]
})