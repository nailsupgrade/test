<template>
    <div id="navigation-mobile">
        <transition name="fade">
            <div class="nav__links">
                <ul>
                    <li class="nav__link margin-0"><a href="#care" v-smooth-scroll>{{link1}}</a></li>
                    <li class="nav__link"><a href="#services" v-smooth-scroll>{{link2}}</a></li>
                    <li class="nav__link"><a href="#portfolio" v-smooth-scroll>{{link3}}</a></li>
                    <li class="nav__link"><a href="#contact" v-smooth-scroll>{{link4}}</a></li>
                </ul>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "navigationMobile",
        props:{
            link1:{type: String},
            link2:{type: String},
            link3:{type: String},
            link4:{type: String},
        }
    }
</script>

<style lang="scss" scoped>
    @import "../assets/scss/utils/vars";
    @import "../assets/scss/btn";

    #navigation-mobile{
            .fade-enter-active, .fade-leave-active {
                transition: opacity .5s;
            }
            .fade-enter, .fade-leave-to {
                opacity: 0;
            }
            /*position: relative;*/
            /*align-items: center;*/
            .nav__links{
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                min-height: 350px;
                height: 33vh;
                display: flex;
                align-items: center;

                ul{
                    background: linear-gradient($default-color, $primary-color);
                    position: absolute;
                    display: flex;
                    margin: 0;
                    flex-direction: column;
                    justify-content: space-between;
                    width: 100%;
                    height: 100%;
                    padding: rem(30) 0;
                    li{
                        margin: rem(20) 0 0;
                        display: flex;
                        justify-content: center;
                        a{
                            min-width: 120px;
                            text-align: center;
                            line-height: 1.15;
                            font-family: $mainFont;
                            font-size: rem(16);
                            border: 1px solid transparent;
                            border-radius: 50px;
                            padding: 10px;
                            color: $neutral-primary;

                            &:hover{
                                @extend %btn;
                                border: 1px solid $secondary-color ;
                                padding: 10px;
                                background-color: transparent;
                                color: $neutral-primary;

                            }
                        }
                    }
                }
            }
    }
</style>