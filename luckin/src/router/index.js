import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../components/home/home"
import order from "../components/order/order"
import menu from "../components/menu/menu"
import mine from "../components/mine/mine"
import shopping from "../components/shopping/shopping"

Vue.use(VueRouter);

export default new VueRouter({
       routes:[
           {
               path:"/",
               components:Home
           },
           {
               path:"/Home",
               components:Home
           },
           {
               path:"/order",
               components:order
           },
           {
               path:"/menu",
               components:menu
           },
           {
               path:"/shopping",
               components:shopping
           },
           {
               path:"/mine",
               components:mine
           },


       ]
})