<template>
    <div>
        <div class="">
            <div class="turn-wrapper">
                <ul class="pic-wrapper" :style="{'left':picWrapperLeft}" ref="picWrapper">
                    <li v-for="(item,index) in picList" :key="index"><img :src="item.src"></li>
                </ul>
                <div class="circle"><span  v-for="(item,index) in picList" :key="index" :style="{'background':(currentPic == index)? 'white' : 'transparent'}"  v-if="(index == picList.length-1) ? false : true"></span></div>
                <div>
                </div>
            </div>
        </div>
        <div class="home_list_menu">
            <ul class="homeList">
                <li class="home-item" v-for="(item,index) in menuList" :key="index" @click="clickMenu(index)">
                    <router-link :to="item.path">
                        <div class="home-item-title">
                            <div class="list-title">{{item.title}}</div>
                            <div class="English">{{item.English}}</div>
                        </div>
                        <img :src="item.src">
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import "../../assets/css/home.css"
    import oneImage from "./images/active_0810.png"
    import contact from "./images/contact.png"
    import picture2 from "./images/part2_picture2.png"
    import commpany from "./images/commpany.png"
    import coffee from "./images/coffee.png"
    import gifs from "./images/gifs.png"
    import peny from "./images/peny.png"

    export default {
        name: "home",
        data() {
            return {
                timer:"",
                currentPic :0,
                picWrapperLeft:0,
                picList: [
                    {src: oneImage},
                    {src: contact},
                    {src: picture2},
                    {src: oneImage},
                ],
                menuList:[
                    {src:coffee,title:"现在下单",English:"ORDER NOW",path:"/Menu"},
                    {src:peny,title:"咖啡钱包",English:"COFFEE WALLET",path: '/coffeeWallet'},
                    {src:gifs,title:"送TA咖啡",English:"SEND COFFEE",path:"/sendCoffee"},
                    {src:commpany,title:"企业账户",English:"ENTERPRISE ACCOUNT",path:"/enterPrice"},
                ]
            }
        },
        mounted() {
            let that = this;
            let i = 0;
            this.timer = setInterval(function () {
                i++;
                that.currentPic = i;
                that.picWrapperLeft = -i *100+"%";
                if(i>2){
                    that.currentPic = 0;
                    var _that = that
                    setTimeout(function () {
                        i=0;
                        _that.picWrapperLeft = "0";
                        _that.$refs.picWrapper.style.transition = "0s";
                    },1900)

                }else{
                    that.$refs.picWrapper.style.transition = "1s";
                }
            },3000)
        },
        destroyed(){
            let that = this;
            clearInterval(that.timer)
        },
        methods:{
            clickMenu(index){

            }
        }
    }
</script>

<style scoped>

</style>