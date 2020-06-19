<template>
    <!--  Contact Section  -->
    <section class="contact" id="contact">
        <div class="container">
            <div class="contact__text-box">
                <text-box
                        :message-title="contactMessageTitle"
                        :message-text="contactMessageText"
                ></text-box>
            </div>
            <div class="contact__boxes">
                <contact-box
                        background-image="assets/img/line-bg.jpg"
                        contact-img="assets/img/mail.png"
                        info-title="Email"
                        info-email="nailsupgrade3@gmail.com"
                ></contact-box>
                <contact-box
                        background-image="assets/img/line-bg.jpg"
                        contact-img="assets/img/adress.png"
                        info-title="Adress"
                        info-text="Chisinau"
                ></contact-box>
                <contact-box
                        background-image="assets/img/line-bg.jpg"
                        contact-img="assets/img/phone.png"
                        info-title="Phone"
                        info-phone="+37360462811"
                ></contact-box>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "contact",
        props:{
            contactMessageTitle: String,
            contactMessageText: String
        }
    }
</script>

<style lang="scss">
    /*@import './src/assets/scss/global';*/
    @import "./src/assets/scss/utils/vars";
    @import "./src/assets/scss/utils/mixins";

    //Section Contact
    .contact{
        padding: rem(80) 0;
        background-color: $primary-bg-color;
        &__boxes{
            display: flex;
            justify-content: space-between;
            margin-top: rem(60);
        }

        //@MEDIA
        @media(max-width: 1050px){
            &__boxes{
                flex-wrap: wrap;

                .contact__box{
                    margin: 0 auto;
                    margin-bottom: rem(50);
                }
            }
        }
    } //Section Contact end
</style>