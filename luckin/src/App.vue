<template>
    <div id="app">
        <router-view></router-view>
        <footer-text/>
    </div>
</template>

<script>
    import footer from './components/footer/image/footer.vue'

    export default {
        name: 'app',
        data(){

        },
        mounted(){
            // let dpr = window.devicePixelRatio;
            // console.log(dpr)
        },
        components: {
            "footer-text": footer
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
