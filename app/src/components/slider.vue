<template>
    <VueSlickCarousel class="slick-slider" v-bind="settings" >

<!--        <div class="slider__item">-->
<!--            <img v-for="img in localLibs" title="image" alt="image" :src="img"/>-->
<!--        </div>-->

        <div class="slider__item" v-for="img in localLibs">
            <img title="image" alt="image" :src="img"/>
        </div>

    </VueSlickCarousel>
</template>


<script>
    import VueSlickCarousel from 'vue-slick-carousel'

    export default {
        components: { VueSlickCarousel },
        // props:['imgLibs'],
        props:{
            imgLibs: String,
        },
        data() {
            return {
                localLibs: this.imgLibs.url,
                settings: {
                    arrows: true,
                    dots: true,
                    dotsClass: "slick-dots custom-dot-class",
                    edgeFriction: 0.35,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        },
        created: function () {
            this.localLibs = this.imgLibs.split(';');
            // alert(this.localLibs.length);
        }
    }
</script>

<style lang="scss">
    @import 'node_modules/vue-slick-carousel/dist/vue-slick-carousel';
    @import 'node_modules/vue-slick-carousel/dist/vue-slick-carousel-theme';

    .slick-slider{
        img {
            width: 1024px;
            height: 720px;
            object-fit: cover;
        }
        .slick-arrow{
            &::before{
                color: black;
            }
        }
    }
</style>