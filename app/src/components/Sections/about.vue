<template>
    <!--  About Section  -->
    <section class="about" id="care">
        <div class="container__about">
            <div class="container">
                <div class="about__box">
                    <text-box
                            :message-title="aboutBoxTitle"
                            :message-text="aboutBoxText"
                    >
                    </text-box>
                    <div class="about__text--next" v-if="seen">
                        {{aboutBoxTextNext}}
                    </div>
                    <div class="about__btn">
                        <button v-on:click="toggleSeen"> {{ button.text }} </button>
                    </div>
                </div>
                <div class="about__img">
                    <img :src="aboutImageRight" alt="img">
                </div>
            </div>
        </div>

        <div class="details__bg">
            <div class="container container__details">
                <div class="details__box">
                    <div class="details__list">
                        <h3 class="list__title">{{detailsTitle}}</h3>
                        <ul class="list__text">
                            <li v-for="text in localDetailsTextList">{{text}}</li>
                        </ul>
                    </div>
                    <div class="details__icons">
                        <div class="icon" v-for="icon in localDetailsIconList">
                            <img :src="icon">
                        </div>
                    </div>
                </div>
                <div class="details__box-2">
                    <div class="details__title">
                        {{detailBottomBoxTitle}}
                    </div>
                    <div class="details__box-2--left">
                        <div class="details__text">
                            <span class="text--bold">Для сосздания дизайна</span> обращайтесь к
                            опытныи мастерам, хорошие мастера всегда используют лучшие средства и
                            компоненты одной марки
                            <span class="text--colored">которые подходят друг к другу</span>.
                        </div>
                    </div>
                    <div class="details__box-2--right">
                        <div class="details__text">
                            Любые
                            <span class="text--bold">ногти</span>
                            не любят долгого контакта с горячей водой и агрессивными химическими
                            средствами,
                            <span class="text--bold">для домашних дел по возможностью
                            работайте в перчатках.</span>
                            <span class="text--colored">Это поможет зберечь не только
                            покрытие на ногтях но и кожу рук</span>,
                            через которую в организм так же могут попасть вредные вещества.

                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="features">
            <div class="container">
                <div class="features__box">
                    <text-box
                            :message-title="featuresBoxTitle"
                            :message-text="featuresBoxText"
                    ></text-box>
                </div>
            </div>
            <div class="features__img">
                <div v-for="image in localFeaturesImageBar">
                    <img :src="image">
                </div>
            </div>
            <div class="features__bar">
                <order-line
                        :order-text="featuresOrderText"
                        :strong-text="featuresStrongText"
                        :order-btn-text="featuresButtonText"
                        :link-adress="featuresLinkAdress"
                ></order-line>
            </div>
        </div>
    </section>
</template>

<script>
    import textBox from '../text-box.vue';

    export default {
        components:{
            textBox
        },
        props:{
            aboutBoxTitle:{type: String},
            aboutBoxText:{type: String},
            aboutBoxTextNext:{type: String},
            aboutImageRight:{type: String},
            detailsTitle:{type: String},
            detailsTextList:{type: String},
            detailsIconList:{type: String},

            detailBottomBoxTitle:{type: String},

            featuresBoxTitle:{type: String},
            featuresBoxText:{type: String},
            featuresImageBar:{type: String},

            featuresOrderText:{type: String},
            featuresStrongText:{type: String},
            featuresButtonText:{type: String},
            featuresLinkAdress:{type: String}
        },
        data(){
            return{
                localDetailsTextList: this.detailsTextList,
                localDetailsIconList: this.detailsIconList,
                localFeaturesImageBar: this.featuresImageBar,
                seen: false,
                button: {
                    text: 'Читать далее',
                },
            }
        },
        methods: {
            toggleSeen: function() {
                this.seen = !this.seen;
                this.button.text = this.seen ? 'Скрыть' : 'Читать далее';
            }
        },
        created: function(){
          this.localDetailsTextList = this.localDetailsTextList.split(';');
          this.localDetailsIconList = this.detailsIconList.split(';');
          this.localFeaturesImageBar = this.localFeaturesImageBar.split(';');
        },

    };

</script>

<style lang="scss" scoped>
    @import './src/assets/scss/text';
    @import './src/assets/scss/btn';

    //details__bg
    .about{

        .container__about{
            margin-top: rem(80);
            margin-bottom: rem(70);
            display: flex;
            justify-content: space-between;
            overflow: hidden;

            .container{
                width: 100%;
                display: flex;
                justify-content: space-between;
                position: relative;
            }
        }

        &__box{
            /*padding: 0 20px;*/
            max-width: 480px;

            .text__box{
                text-align: left;
            }
        }
        &__img{
            img{
                position: absolute;
                width: 30%;
                transform: rotate(270deg) translateX(60%);

            }
        }

        &__text--next{
            @extend  %text;
        }

        &__btn{
            button{
                @extend %btn;
                &:hover{
                    cursor: pointer;
                }
            }
            margin-top: rem(30);
        }

        .details{
            padding-top: rem(80);
            &__bg{
                background-color: $primary-bg-color;
                padding: rem(80) 0;

                .container__details{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin-top: 0;
                    margin-bottom: 0;
                }
            }

            &__box{
                //@extend .text-box;
                max-width: 750px;

                .details__list{
                    .list{
                        &__title{
                            @extend %title;
                            color: $default-dark-color;
                        }
                        &__text{
                            @extend %text;
                            margin-top: rem(60);
                            color: $default-dark-color;
                            text-align: left;

                            li{
                                list-style-type: initial;
                            }
                        }
                    }
                }
            }
            &__title{
                @extend %title;
                text-align: center;
            }
            &__text{
                @extend %text;
                text-align: center;
            }

            &__icons{
                display: flex;
                justify-content: center;
                margin-top: rem(60);

                .icon{
                    width: 55px;
                    height: 55px;
                    margin: 0 10px;
                    background-color: $primary-color;
                    border-radius: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            }

            &__box-2{
                margin-top: rem(60);
                display: flex;
                justify-content: space-between;
                width: 100%;
                flex-wrap: wrap;

                .details{
                    &__title{
                        color: $default-dark-color;
                        text-align: left;
                        width: 100%;
                        margin-bottom: rem(30);
                    }
                    &__text{
                        color: $default-dark-color;
                        text-align: left;
                    }
                }

                &--left{
                    max-width: 340px;

                    .details__text{
                        /*font-size: rem(16);*/

                    }
                }

                &--right{
                    max-width: 520px;
                    margin-right: rem(65);
                }
            }
        }//Details__bg end

        //Features
        .features{
            padding-top: rem(80);
            &__box{
                margin: 0 auto rem(60);
                max-width: 460px;
            }

            &__img{
                max-height: 550px;
                display: flex;
                div{
                    width: 33.33%;
                }
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }//Features end

        //@MEDIA
        @media (max-width: 1050px){
            .details{
                &__box-2{
                    &--left{
                        max-width: 100%;
                    }
                    &--right{
                        max-width: 100%;
                        margin: 0;
                    }
                }
            }
        }
    }//Section About End
</style>