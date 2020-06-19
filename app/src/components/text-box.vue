<template>
    <div class="text__box">
        <div class="box__title">
            {{messageTitle}}
        </div>
        <div class="box__text">
            {{messageText}}
        </div>
    </div>
</template>

<script>
    export default{
        props: {
            messageTitle:{
                type: String,
                // required: true,
                default: 'Title'
            },
            messageText:{
                type: String
            }
        }

    }
</script>

<style lang="scss">
    /*@import '../app/src/assets/scss/global';*/
    @import '../assets/scss/text';

    .text__box{
        max-width: 480px;
        margin: 0 auto;
        text-align: center;
        .box__title{
            @extend %title;
            margin-bottom: rem(40);
        }
        .box__text{
            @extend %text;
        }
    }
</style>