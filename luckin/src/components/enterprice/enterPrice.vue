<template>
    <div class="enterWrapper">
        <top-bar :title= title />
        <div class="enterPrice-pic">
            <img src="../../components/enterprice/images/ppic.jpg">
        </div>
        <div class="enterPrice-bottom" >
            <div class="enterPrice-bottom-content">
                <div class="enterPrice-bottom-apply">立即申请</div>
                <div class="enterPrice-list">
                    <ul class="enterPriceList" v-for="(item ,index) in applicationList" :key="index">
                        <li class="enterPriceItem" >
                            <img :src="item.src">
                            <div class="enterPriceItem-content">
                                <p>{{item.title}}</p>
                                <div>{{item.content}}</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="application-progress">
                <div class="progress">
                    申请流程
                </div>
                <ul class="progressUl">
                    <li v-for="(item ,index) in progressList" :key="index">
                        <img :src="item.src">
                        <p>{{item.content}}</p>
                    </li>
                </ul>

            </div>
            <div class="onlineApply">
                <div class="progress">在线申请</div>
                <form>
                    <label>企业名称</label><input name="commpany" type="text" placeholder="请于营业执照保持一致"/>
                    <label>联系人</label><input type="text" name="nick" placeholder="请于联系人真实姓名（必填）"/>
                    <label>联系电话</label><input type="text" name="phone" placeholder="请于联系人手机号码（必填）"/>
                    <button type="submit" ></button>
                </form>
            </div>

        </div>
    </div>
</template>

<script>
    import "../../assets/css/enterPrice.css"
    import topBar from "../topbar/topbar"
    import business from "./images/business.png"
    import fillIn from "./images/fillIn.png"
    import member from "./images/member.png"
    import offer from "./images/offer.png"
    import myCommpany from "./images/myCommpany.png"
    import check from "./images/check.png"
    import efficent from "./images/efficent.png"
    import money from "./images/money.png"
    export default {
        data(){
            return{
                minHeight: 0,
                title:"企业账户",
                applicationList:[
                    {src:business,title:"商务",content:"企业开通luckin账户，预存金额，给员工开通消费权限，员工可使用企业账户余额统一订咖啡，更好的满足客户洽谈，工作接待，会议咖啡等多场景需要，让职场更专业"},
                    {src:offer,title:"优惠",content:"预存企业账户，享受专属优惠；全场饮品7.5折（肉欲市场统一促销活动，则享受最佳优惠）"},
                    {src:efficent,title:"高效",content:"APP在线点单，免排队，自提外卖，30分钟新鲜速达，省时省力"},
                    {src:member,title:"品质",content:"优选上等阿拉比卡咖啡豆，WBC世界冠军团队精心匹配，新鲜烘焙，新鲜现磨，让员工随时随地的享用咖啡"}
                ],
                progressList:[
                    {src:fillIn,title:"商务",content:"企业开通luckin账户让职场更专业"},
                    {src:myCommpany,title:"优惠",content:"预存企业账户"},
                    {src:check,title:"高效",content:"APP在线点单，免排队"},
                    {src:money,title:"品质",content:"优选上等阿拉比卡咖啡豆"}
                ]
            }

        },

        name: "enterPrice",
        components:{
           "top-bar": topBar
        }
    }
</script>

<style scoped>

</style>