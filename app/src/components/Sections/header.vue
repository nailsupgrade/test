<template>
    <!--  Header Section  -->
    <header class="header" :style="bgImg">
        <div class="nav__box">
            <div class="container">
                <nav class="header__nav" :class="{'open':showNav}">
                    <div class="logo">
                        <div class="header__logo-img"><img :src="headerLogoImage"></div>
                        <div class="header__logo-name"><div>{{headerLogoTitle}}</div></div>
                    </div>
                    <navigation-mobile
                            v-if="mobileView"
                            link1="Уход"
                            link2="Услуги"
                            link3="Каталог"
                            link4="Контакты"
                    >
                    </navigation-mobile>
                    <navigation v-if="!mobileView"
                                link1="Уход"
                                link2="Услуги"
                                link3="Каталог"
                                link4="Контакты"
                    >
                    </navigation>
                    <enroll
                        :btn-text="enroll"
                    >
                    </enroll>
                    <div class="btn__wrapper">
                        <div class="nav__btn"
                             v-if="mobileView"
                             @click="showNav = !showNav"
                        >
                        <div class="btn"></div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
        <div class="container__header-box container">
            <div class="header__box">
                <div class="header__title">
                    {{headerTitle}}
                </div>
                <div class="header__text">
                    <ul>
                        <li v-for="text in textLocalList">{{text}}</li>
                    </ul>
                </div>
                <div class="header__enroll">
                    <enroll
                            :btn-text="enroll"
                    >
                    </enroll>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    import enroll from '../enroll.vue';
    import textBox from '../text-box.vue';

    export default {
        components:{
            enroll,
            textBox
        },
        props:{
            backgroundImage:{
                default: '/assets/img/header-bg-1.jpg'
            },
            headerLogoImage:{
              default: '/assets/img/header-bg-1.jpg'
            },
            headerLogoTitle:{type: String},
            enroll:{type: String},
            //Header Title prop
            headerTitle:{type: String},
            textList:{type: String}
        },
        data() {
            return{
                textLocalList: this.textList,
                seen: true,
                mobileView: true,
                showNav: true
            }
        },
        methods:{
            handleView(){
                this.mobileView = window.innerWidth <= 780;
            }

        },
        computed: {
            bgImg(){
                return {
                    'background-image': 'url('+ this.backgroundImage +')'
                }
            }
        },
        created: function () {
            this.textLocalList = this.textLocalList.split(';');
            this.handleView();
            window.addEventListener('resize', this.handleView);
        }
    }
</script>

<style lang="scss" scoped>
    @import './src/assets/scss/text.scss';
    @import './src/assets/scss/btn.scss';


    .open {
        #navigation-mobile{
            display: none;
        }
    }


    //Section Header
    .header{
        background-size: cover;
        background-position: center;
        min-height: 100vh;

        .container__header-box{
            height: 100vh;
        }

        .nav__box{
            background-color: $default-color;
            padding: rem(35) 0;
        }
        &__nav{
            display: flex;
            justify-content: space-between;

            .logo{
                display: flex;
                .header__logo{
                    &-img{
                        max-width: 50px;
                    }
                    &-name{
                        display: flex;
                        align-items: center;
                        text-transform: initial;
                        div{
                            line-height: initial;
                            color: $neutral-primary;
                        }
                    }
                }

            }
        }



        &__box{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100%;
        }
        &__title{
            @extend %title;
            color: $default-dark-color;
            font-size: rem(36);
            text-align: center;
        }
        &__text{
            @extend %text;
            color: $default-dark-color;
            background-color: rgba(255,255,255,0.4);
            border-radius: 5px;
            padding: 20px;
            max-width: 850px;
            line-height: 28px;
            margin-top: rem(30);
            text-align: center;
        }
        &__enroll{
            margin-top: rem(30);
            a{
                @extend %btn-enroll;
            }
        }

        // @MEDIA
        //MEDIA 781
        @media(min-width: 781px){
            .btn__wrapper{
                display: none;
            }
        }
        // @MEDIA 780
        @media(max-width: 780px){
            .header__nav{
                .btn__wrapper{
                    display: flex;
                    align-items: center
                ;
                    .nav__btn{
                        display: flex;
                        align-items: center;
                        position: relative;
                        height: 25px;
                        margin-bottom: -4px;
                        cursor: pointer;
                        div{
                            content: '';
                            width: 30px;
                            height: 3px;
                            background-color: $default-dark-color;
                            transition: .3s;

                            &:before, &:after{
                                position: absolute;
                                content: '';
                                margin-top: -10px;
                                width: 30px;
                                height: 3px;
                                background-color: $default-dark-color;
                                transition: .3s;
                            }
                            &:after{
                                margin-top: 10px;
                            }
                        }

                        &:hover{
                            div {
                                background-color: $primary-color;

                                &:before {
                                    margin-top: -12px;
                                    background-color: $primary-color;
                                }

                                &:after {
                                    margin-top: 12px;
                                    background-color: $primary-color;
                                }
                            }
                        }
                    }
                }
            }
        }
    }//Section Header end
</style>