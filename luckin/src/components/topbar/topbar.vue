<template>
    <div>
        <div class="topBar">
            <span class="backPic"></span>
            <div>{{title}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        props:[
            'title'
        ],
        name: "topbar"
    }
</script>

<style scoped>
.topBar{
    position: relative;
    width: 100%;

    height: 40px;
    line-height: 50px;
    text-align: center;
    font-size: 0.8rem;

}
    .topBar span{
        position: absolute;
        left: 0;
        top: 10px;
        display: inline-block;
        font-size: 1rem;
        width: 20px;
        height: 20px;
        margin: 15px;

    }
    .backPic::after{
        width: 20px;
        height: 20px;
        background: url("../../components/enterprice/images/back.png") 100% 100% no-repeat;
        position: absolute;
        left: 10px;
        top: 10px;
    }
</style>