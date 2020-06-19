<template>
    <div class="card">
        <div class="front">
            <div class="front__title">
                {{cardFrontTitle}}
            </div>
        </div>
        <div class="back">
            <div class="back__title">
                {{cardBackTitle}}
            </div>
            <div class="back__price">
                {{cardBackPrice}}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            cardFrontTitle:{
                type: String,
                required: true,
                default: 'Название'
            },
            cardBackTitle:{
              type: String,
              required: true,
              default: 'Название услуги'
            },
            cardBackPrice:{
                type: String,
                required: true,
                default: '10$'
            }
        }
    }
</script>

<style lang="scss">
    /*@import '../assets/scss/global';*/
    @import '../assets/scss/text';

    .card{
        width: 25%;
        margin: 0 5px 0 5px;
        height: 110px;
        background-color: transparent;
        position: relative;
        cursor: pointer;

        &:hover{
            .front{
                transform: perspective(600px) rotateY(-180deg);
            }
            .back{
                transform: perspective(600px) rotateY(0deg);
            }
        }

        .front,.back{
            width: 100%;
            height: 100%;
            overflow: hidden;
            backface-visibility: hidden;
            position: absolute;
            transition: transform .6s linear;
        }

        .front{
            transform: perspective(600px) rotateY(0deg);
            /*<!--background-color: $default-color;-->*/
            background-color: $primary-color;
            display: flex;
            flex-direction: column;
            height: 100%;


                &__title{
                    @extend %title;
                    text-align: center;
                    text-transform: uppercase;
                    color: $default-dark-color;
                    background-color: $primary-color;
                    /*padding: rem(30) 0;*/
                    margin: auto 0;
                }


        }
        .back{
            background: #f1f1f1;
            transform: perspective(600px) rotateY(180deg);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            &__title{
                @extend %title;
                text-align: center;
                margin: auto 0;
                line-height: 1.15;
                font-size: rem(20);
            }
            &__price{
                @extend %title;
                margin: auto auto;
                font-size: rem(20);
                font-weight: 900;
                color: $primary-color;
                text-shadow: 2px 2px 2px $default-dark-color;
            }

        }
    }
</style>