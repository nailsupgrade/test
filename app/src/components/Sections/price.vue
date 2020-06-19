<template>
    <!--  Price Section  -->
    <section class="price" :style="bgImg" id="services">
        <div class="container">
            <div class="price__text-box">
                <text-box
                        :message-title="priceMessageTitle"
                        :message-text="priceMessageText"
                ></text-box>
            </div>
            <div class="price__cards">
                <div class="cards">
                    <div class="cards__top">
                        <card
                                card-front-title="Манекюр"
                                card-back-price="30 Лей"
                                card-back-title="Маникюр"
                        ></card>
                        <card
                                card-front-title="Покрытие гипоаллергенным гелем"
                                card-back-price="250 Лей"
                                card-back-title="Покрытие гипоаллергенным гелем"
                        ></card>
                        <card
                                card-front-title="Покрытие гелем"
                                card-back-price="200 Лей"
                                card-back-title="Покрытие гелем"
                        ></card>
                        <card
                                card-front-title="Покрытие гель-лакам"
                                card-back-price="150 Лей"
                                card-back-title="Покрытие гель-лакам"
                        ></card>
                    </div>

                    <div class="cards__bottom">
                        <card
                                card-front-title="Укрипление"
                                card-back-price="50 Лей"
                                card-back-title="Укрипление"
                        ></card>
                        <card
                                card-front-title="Снятие"
                                card-back-price="100 Лей"
                                card-back-title="Снятие"
                        ></card>
                        <card
                                card-front-title="Наращивание"
                                card-back-price="250 Лей"
                                card-back-title="Наращивание"
                        ></card>
                        <card
                                card-front-title="Коррекция"
                                card-back-price="От 150 лей."
                                card-back-title="Коррекция"
                        ></card>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    // import textBox from '../text-box.vue';

    export default {
        name: "price",
        // components:{
        //     textBox,
        // }
        props: {
            priceBackgroundImage:{
                default: '/assets/img/header-bg-1.jpg'
            },
            priceMessageTitle:{type: String},
            priceMessageText:{type: String},
        },
        computed:{
            bgImg(){
                return{
                    'background-image': 'url('+ this.priceBackgroundImage +')'
                }
            }
        }
    }
</script>

<style lang="scss">
    @import "./src/assets/scss/utils/vars";
    @import "./src/assets/scss/utils/mixins";

    //Section Price
    .price{
        padding: rem(80) 0;
        -webkit-background-size: cover;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;

        .cards{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin: rem(30) auto 0;

            &__top, &__bottom{
                display: flex;
                flex-direction: row;
                     }
            &__bottom{
                 margin-top: rem(20);
            }

        }

        //@MEDIA
        @media (max-width: 1280px){
            .cards{
                flex-direction: row;
                justify-content: space-between;
                &__top, &__bottom{
                    flex-direction: column;
                    width: 45%;
                    margin: 0;

                    .card{
                        width: 100%;
                        margin: 10px 0 0;
                    }
                }
            }
        }
        @media (max-width: 600px){
            .cards{
                flex-direction: column;
                &__top, &__bottom{
                    width: 100%;
                }
            }
        }
    }//Section Price end
</style>