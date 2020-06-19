<template>
    <div class="contact__box">
        <div class="box__img-bg" :style="cssProps">
<!--        <div class="box__img-bg" :style="{'background-image': 'url('+ image +')'}">-->
            <img :src="contactImg" alt="img">
        </div>
        <div class="box__info">
            <div class="info__title">
                {{infoTitle}}
            </div>
            <div class="info__text">
                {{infoText}}
            </div>
            <div class="info__email info__text">
                <a :href="'mailto:' + infoEmail">
                    {{infoEmail}}
                </a>
            </div>
            <div class="info__phone info__text">
               <a :href="'tel:' + infoPhone">
                   {{infoPhone}}
               </a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            backgroundImage:{
                default: 'assets/img/features-img-1.jpg'
            },
            contactImg:{
                type: String,
                required: true,
                default: 'assets/img/line-bg.jpg'
            },
            infoTitle:{
                type: String,
                required: true,
                default: 'title contact'
            },
            infoText:{
                type: String,
                required: false
            },
            infoEmail:{
                type: String,
                required: false
            },
            infoPhone:{
                type: String,
                required: false
            }
        },
        computed: {
            cssProps(){
                return {
                    'background-image': 'url('+ this.backgroundImage +')',
                    'height': '200px'
                }
            }
        }
    }
</script>

<style lang="scss">
    @import "../assets/scss/text";
    /*@import '../assets/scss/utils/fonts';*/
    /*@import '../assets/scss/utils/libs';*/
    /*@import '../assets/scss/utils/mixins';*/
    /*@import '../assets/scss/utils/reset';*/
    /*@import '../assets/scss/utils/vars';*/

    .contact__box{
        width: 290px;
        box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.50);

    }

    .box{
        &__img-bg{
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            display: flex;
            justify-content: center;
            align-items: center;
            max-height: 145px;

            img{
                filter: drop-shadow( 0px 0px 3px rgba(0,0,0,0.50));
            }
         }
        &__info{
            padding: rem(30) 0;
            background-color: $default-color;
            .info{
                &__title{
                    @extend %title;
                    font-size: rem(16);
                    padding-bottom: rem(25);
                    text-align: center;
                }
                &__text{
                    @extend %text;
                    text-align: center;

                    a{
                        @extend %text;

                        &:hover{
                            color: $default-dark-color;
                            text-shadow: 2px 2px 2px $primary-color;
                        }
                    }
                }
            }
        }
    }
</style>+