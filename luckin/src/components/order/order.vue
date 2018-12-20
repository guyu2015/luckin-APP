<template>
    <div class="foot_wrapper">
        <div class="footer">
            <ul class="footer_list">
                <li class="item" @click="clickItem(index)" v-for="(item,index) in footerList" :key="index" :style="{color:item.flag ? '#172991':'#b4d2f1'}">
                    <img :src="item.flag ? item.src1 : item.src2">
                    <div><router-link :to="item.path">{{item.title}}<router-link/></div>

                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import "../../assets/css/footer.css"
    import mine from "./image/mine.png"
    import mine0 from "./image/mine0.png"
    import drink from "./image/drink.png"
    import drink0 from "./image/drink0.png"
    import shopping from "./image/shopping.png"
    import shopping0 from "./image/shopping0.png"
    import logo from "./image/logo.png"
    import logo0 from "./image/logo0.png"
    import order from "./image/order.png"
    import order0 from "./image/order0.png"
    export default {
        data(){
            return{
               footerList:[
                   {src1:logo,src2:logo0,title:"首页",flag:true,path:""},
                   {src1:drink,src2:drink0,title:"菜单",flag:false},
                   {src1:order,src2:order0,title:"订单",flag:false},
                   {src1:shopping,src2:shopping0,title:"购物车",flag:false},
                   {src1:mine,src2:mine0,title:"我的",flag:false},
               ]
            }
        },
        methods:{
            clickItem(index){
                let array = this.footerList;
                for(let i=0;i<array.length;i++){
                    if(index == i){
                        array[i].flag = true
                    }else{
                        array[i].flag = false
                    }
                }
            }
        },
        name: "footer"
    }
</script>

<style scoped>

</style>