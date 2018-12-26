<template>
    <div class="mine-wrapper" :style="{'height':contentHeight+'px'}">
        <div>mine</div>
    </div>
</template>

<script>
    export default {
        props:{"content-height":Number},
        name: "mine"
    }
</script>

<style scoped>

</style>