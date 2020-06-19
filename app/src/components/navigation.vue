<template>
    <div id="navigation">
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
        name: "navigation",
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

    #navigation{
        display: flex;
        align-items: center;
        .nav__links{
                display: flex;
                align-items: center;
                ul{display: flex;}

                .margin-0{
                    margin: 0;
                }

                li{
                    margin-left: 30px;

                    a{
                        font-family: $mainFont;
                        font-size: rem(16);
                        border: 1px solid transparent;
                        border-radius: 50px;
                        padding: 10px;

                        &:hover{
                            @extend %btn;
                            border: 1px solid $secondary-color ;
                            padding: 10px;
                            background-color: transparent;
                            color: $neutral-primary;

                        }

                        color: $neutral-primary;
                    }
                }
            }
    }

</style>