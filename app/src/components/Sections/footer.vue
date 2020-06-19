<template>
    <div class="footer__section">
        <div class="footer__text-box">
            <text-box
                    :message-title="footerMessageTitle"
                    :message-text="footerMessageText"
            ></text-box>
        </div>
    </div>

</template>

<script>
    export default {
        name: "footer_component",
        props:{
            footerMessageTitle: String,
            footerMessageText: String,
        }
    }
</script>

<style lang="scss">
    /*@import "src/assets/scss/global";*/
    @import './src/assets/scss/logo';

    .footer__section{
        padding: rem(80) 0;

        .box__title{
            @extend .logo;
            color: $titleFontColor;
        }
    }
</style>