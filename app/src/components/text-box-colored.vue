<template>
    <div class="text__box">
        <div class="box__title"  v-for="item in titleItems">
            {{item}}
        </div>
        <div class="box__text" v-for="item in textItems">
            {{item}}
        </div>
    </div>
</template>

<script>
    export default{
        props: {
            messageTitle:{type: String, default: 'Title'},
            messageTitleColored:{type: String},
            messageTitleStrong:{type: String},
            messageText:{type: String},
            messageTextColored:{type: String},
            messageTextStrong:{type: String},

        },
        data(){
            return{
                titleItems:{
                    localMessageTitle: this.messageTitle,
                    localMessageTitleColored: this.messageTitleColored,
                    localMessageTitleStrong: this.messageTitleStrong,
                },
                textItems:{
                    localMessageText: this.messageText,
                    localMessageTextColored: this.messageTextColored,
                    localMessageTextStrong: this.messageTextStrong,
                }
            }
        },
        created: function(){
            this.localMessageTitleColored = this.localMessageTitleColored.split(';');
            this.localMessageTitleStrong = this.localMessageTitleStrong.split(';');
            this.localMessageTextColored = this.localMessageTextColored.split(';');
            this.localMessageTextStrong = this.localMessageTextStrong.split(';');
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

    %title{
        font-family: $titleFont;
        font-weight: 300;
        color: $titleFontColor;
        font-size: rem(24);
        line-height: 1.15;
        letter-spacing: 2px;
        text-transform: uppercase;
    }

    %text{
        font-family: $mainFont;
        color: $mainFontColor;
        font-size: rem(18);
        line-height: 25px;
        letter-spacing: 1px;
    }
</style>