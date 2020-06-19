<template>
    <div class="enroll"><a href="#contact" v-smooth-scroll="{duration: 800, updateHistory: false}">{{btnText}}</a></div>
</template>


<script>
    export default {
        props:['btnText']
    }
</script>

<style lang="scss">
    /*@import '../app/src/assets/scss/global';*/
    @import '../assets/scss/btn';

    .enroll{
        display: flex;
        align-items: center;
        a{
            @extend %btn-enroll;
        }
    }
</style>