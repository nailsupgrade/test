<template>
    <!--  Team Section  -->
    <section class="team">
        <div class="container">
            <div class="team__text-box">
                <text-box
                        :message-title="teamMessageTitle"
                        :message-text="teamMessageText"
                ></text-box>
            </div>
            <div class="team__box">
                <div class="team__box-left">
                    <img :src="teamImage" alt="s">
                </div>
                <div class="team__box-right">
                    <div class="team__scale">
                        <p v-for="text in localTeamTextLine"><span>{{text}}</span><span class="prabel">100%</span></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "team",
        props:{
            teamMessageTitle:{type: String},
            teamMessageText:{type: String},
            teamImage:{type: String},
            teamTextLine:{type: String},
        },
        data(){
            return{
                localTeamTextLine: this.teamTextLine
            }
        },
        created: function(){
            this.localTeamTextLine = this.localTeamTextLine.split(';')
        }
    }
</script>

<style lang="scss">
    @import './src/assets/scss/text';

    .team{
        padding: rem(80) 0 rem(100);
        &__text-box{
            text-align: center;
        }

        &__box{
            display: flex;
            justify-content: space-between;
            margin-top: rem(60);
            &-left{
                max-width: 280px;
                max-height: 360px;
            }
            &-right{
                text-align: right;
                display: flex;
                flex-direction: column;
                max-width: 400px;
                .team{
                    &__name{
                        @extend %title;
                    }
                    &__description, &__scale{
                        @extend %text;
                    }

                    &__description{
                        margin: rem(30) 0;
                    }

                    &__scale{
                        p{
                            width: 100%;
                            margin-bottom: rem(30);
                            display: flex;
                            justify-content: space-between;
                            text-transform: uppercase;

                            border-bottom: 4px solid $primary-color;

                            .prabel{
                                margin-left: rem(10);
                            }
                        }
                    }
                }
            }
        }
        //@MEDIA
        @media(max-width: 470px){
            &__box{
                flex-direction: column;

                &-left{
                    margin: 0 auto;
                    max-height: unset;
                }
            }
        }
    }//Section Team end

</style>