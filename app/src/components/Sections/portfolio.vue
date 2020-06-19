<template>
    <section class="portfolio" id="portfolio">
        <div class="container">
            <div class="portfolio__text-box">
                <text-box
                        message-title="Каталог"
                ></text-box>
            </div>
            <div class="portfolio__images">
                <div class="portfolio__column">
                    <img class="portfolio__images--360" src="assets/img/nails/1.jpg" alt="image">
                    <img class="portfolio__images--360" src="assets/img/nails/2.jpg" alt="image">
                    <img class="portfolio__images--210" src="assets/img/nails/3.jpg" alt="image">
                </div>
                <div class="portfolio__column">
                    <img class="portfolio__images--230" src="assets/img/nails/4.jpg" alt="image">
                    <img class="portfolio__images--340" src="assets/img/nails/5.jpg" alt="image">
                    <img class="portfolio__images--360" src="assets/img/nails/6.jpg" alt="image">
                </div>
                <div class="portfolio__column">
                    <img class="portfolio__images--300" src="assets/img/nails/7.jpg" alt="image">
                    <img class="portfolio__images--375" src="assets/img/nails/8.jpg" alt="image">
                    <img class="portfolio__images--255" src="assets/img/nails/9.jpg" alt="image">
                </div>
                <div class="portfolio__column">
                    <img class="portfolio__images--360" src="assets/img/nails/10.jpg" alt="image">
                    <img class="portfolio__images--270" src="assets/img/nails/11.jpg" alt="image">
                    <img class="portfolio__images--300" src="assets/img/nails/12.jpg" alt="image">
                </div>
            </div>
            <div class="portfolio__bar">
                <order-line
                        order-text="Больше можете посмотреть"
                        strong-text="ниже."
                        link-adress="#portfolio-slider"
                        order-btn-text="Смотреть ниже"
                >
                </order-line>
            </div>
            <div class="portfolio__slider" id="portfolio-slider">
                <slider
                        :img-libs="importedImageLibs"
                >
                </slider>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "portfolio",
        props:{
            importedImageLibs: {type: String},
        }
    }
</script>

<style lang="scss">
    /*@import './src/assets/scss/global';*/
    @import "./src/assets/scss/utils/vars";
    @import "./src/assets/scss/utils/mixins";

    //Section Portfolio
    .portfolio{
        padding: rem(80) 0 rem(100);
        background-color: $primary-bg-color;

        &__images{
            display: flex;
            .portfolio__column{
                width: 25%;
            }
            img{
                width: 100%;
                padding: 5px;
                background-size: cover;
                background-position: center;
                transition: .4s;
                &:hover{
                    padding: 0;
                }
            }

            &--375{
                height: 375px;
            }
            &--360{
                height: 360px;
            }
            &--340{
                height: 340px;
            }
            &--300{
                height: 300px;
            }
            &--270{
                height: 270px;
            }
            &--255{
                height: 255px;
            }
            &--230{
                height: 230px;
            }
            &--210{
                height: 210px;
            }
        }

        &__bar{
            margin-top: rem(30);
            .order__line--bg-color{
                .order__line-box{
                    flex-direction: column;

                    .order__text{
                        margin: 0 0 rem(20);
                        text-align: center;
                    }
                }
            }
        }
        &__slider{
            margin-top: rem(40);
            img{
                margin: 0 auto;
            }
        }

        //@MEDIA
        @media(max-width: 1100px){
            &__images{
                flex-wrap: wrap;
                .portfolio__column{
                    width: 50%;
                    text-align: center;
                    img{
                        max-width: 312px;
                    }
                }
            }
        }
        @media(max-width: 800px){
            .portfolio__slider{
                img{
                    max-height: 450px;
                }
            }
        }
        @media(max-width: 700px){
            &__images{
               display: none;
            }
            .portfolio__slider{
                .slick-next{
                    top: unset;
                    bottom: -20px;
                    left: 50%;
                    margin-left: 40px;
                    transform: translateX(-50%);
                    /*display: none !important;*/
                    @media(max-width: 330px){
                        left: 46%;
                    }
                }
                .slick-prev{
                    top: unset;
                    bottom: -20px;
                    left: 47%;
                    /*margin-right: 40px;*/
                    z-index: 1;
                    transform: translateX(-50%);
                    /*display: none !important;*/
                    @media(max-width: 330px){
                        left: 40%;
                    }
                }
                @media (max-width: 449px){
                    padding-bottom: 50px;
                }
                .slick-dots{
                    bottom: -50px;
                    @media (max-width: 449px) {
                        bottom: -100px;
                    }
                }
            }
        }
        @media(max-width: 500px){
            .portfolio__slider{
                img{
                    max-height: 350px;
                }

            }
        }

    }//Section Portfolio end
</style>