import './assets/scss/style.scss'

import Vue from 'vue'
import { BootstrapVue,} from 'bootstrap-vue'
Vue.use(BootstrapVue);
import { CarouselPlugin } from 'bootstrap-vue'
Vue.use(CarouselPlugin);

import vueSmoothScroll from 'vue2-smooth-scroll'
Vue.use(vueSmoothScroll);

//Types of import file
// import 'vue'
// import 'bootstrap/dist/css/bootstrap.css'
// import Vue from 'vue'
// window.Vue = require('vue')

window.Vue = require('vue');

// Import Section Components
Vue.component('header_section', require('./components/Sections/header.vue').default);
Vue.component('about_section', require('./components/Sections/about.vue').default);
Vue.component('price', require('./components/Sections/price.vue').default);
Vue.component('services', require('./components/Sections/services.vue').default);
Vue.component('portfolio', require('./components/Sections/portfolio.vue').default);
Vue.component('team', require('./components/Sections/team.vue').default);
Vue.component('contact', require('./components/Sections/contact.vue').default);
Vue.component('footer_section', require('./components/Sections/footer.vue').default);


// Import components
Vue.component('text-box', require('./components/text-box.vue').default);
Vue.component('order-line', require('./components/order-line.vue').default);
Vue.component('card', require('./components/card.vue').default);
Vue.component('contact-box', require('./components/contact-box.vue').default);
Vue.component('slider', require('./components/slider.vue').default);
Vue.component('navigation', require('./components/navigation.vue').default);
Vue.component('navigationMobile', require('./components/navigationMobile.vue').default);
// Vue.component('text-box-colored', require('./components/text-box-colored.vue').default);


const app = new Vue({
    el: '#app',

});