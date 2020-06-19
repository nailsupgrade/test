<template>
    <div class="order__line--bg-color">
        <div class="container">
            <div class="order__line-box">
                <div class="order__text">
                    {{orderText}}
                    <span class="strong__text">{{strongText}}</span>
                    <span class="colored__text">{{coloredText}}</span>
                    {{orderTextContinue}}
                </div>
                <div class="order__btn">
                    <a :href="linkAdress" v-smooth-scroll>
                        {{orderBtnText}}
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        props: {
            orderText:{
                type: String,
                required: false,
                default: 'Уже понравилось? Свяжитесь!'
            },
            strongText:{
                type: String,
                required: false
            },
            coloredText:{
                type: String,
                required: false
            },
            orderTextContinue: {
                type: String,
                required: false
            },
            orderBtnText:{
                type: String,
                // required: true,
                default: 'Связаться'

            },
            linkAdress:{
                type: String,
                // required: true,
                default: 'https://google.com'
            }
        }
    }
</script>

<style lang="scss">
    /*@import "src/assets/scss/global.scss";*/
    @import '../assets/scss/text';
    @import '../assets/scss/btn';

    .order__line--bg-color{
        background-color: $primary-color;
        .order__line-box{
            display: flex;
            justify-content: center;
            height: 200px;

            .order__text{
                @extend %text;
                color: $default-dark-color;
                font-size: rem(20);
                padding: 0;
                margin: auto 0;
            }
            .order__btn{
                display: flex;
                margin-left: rem(30);
                a{
                    margin: auto auto;
                    @extend %btn;
                    //background-color: $neutral-placeholder ;
                    //background-color: $default-lighter;
                    color: $default-dark-color;
                    border: 1px solid $default-dark-color;
                    /*min-width: 200px;*/

                    &:hover{
                        background-color: $default-dark-color;
                        color: $default-color;
                    }
                }
            }
        }
    }
</style>