<template>
    <div id="app">
        <router-view :contentHeight="contentHeight"></router-view>
        <nav-text  v-if="$route.meta.isShow" />
    </div>
</template>

<script>
    import navText from './components/navgater/navgater.vue'

    export default {
        name: 'app',
        data(){
            return{
                contentHeight:""
            }
        },
        mounted(){
            let height = window.screen.height
            // let dpr = window.devicePixelRatio;
            // console.log(height-64);
            this.contentHeight = height-64;

        },
        components: {
            "nav-text": navText
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

    }
</style>
