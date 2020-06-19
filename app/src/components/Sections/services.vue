<template>
    <!--  Services Section  -->
    <section class="services">
        <div class="container">
            <div class="services__box">
                <div class="circles">
                    <div class="circle-box" v-for="text in localServicesCircleText">
                        <div class="circle">
                            100<span>%</span>
                        </div>
                        <div class="circle__name">
                            {{text}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "services",
        props:{
            servicesCircleText:{type: String},
        },
        data(){
            return{
                localServicesCircleText: this.servicesCircleText,
            }
        },
        created: function(){
            this.localServicesCircleText =  this.localServicesCircleText.split(';')
        }
    }
</script>

<style lang="scss" scoped>
    /*@import 'src/assets/scss/global';*/
    @import './src/assets/scss/text';

    //Section Services
    .services{
        padding: rem(80) 0;

        &__box{
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 0 auto;
            width: 50%;
            .circles{
                display: flex;
                width: 100%;
                justify-content: space-between;

                .circle-box{
                    text-align: center;
                    .circle{
                        @extend %text;
                        font-size: rem(25);
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 120px;
                        height: 120px;
                        border: 4px solid $primary-color;
                        border-radius: 50%;
                        span{
                            font-size: rem(14);
                        }

                        &__name{
                            @extend %text;
                            font-family: $additionalFont;
                            font-size: rem(16);
                            font-weight: 300;
                            margin-top: rem(25);
                        }
                    }
                }

            }
        }

        //@MEDIA
        @media(max-width: 1050px){
            &__box{
                width: 100%;
            }
        }
        @media(max-width: 480px){
            .circles{
                flex-direction: column;

                .circle{
                    margin: 0 auto;
                }
            }
        }
    }//Section Services end
</style>