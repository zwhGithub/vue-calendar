import Vue from 'vue'
import App from './App'

import Calendar from 'vue-calendar-component';
import "vue-calendar-component/style.css";
Vue.use(Calendar);

new Vue({
    el: '#app',
    template: '<App/>',
    components: { App }
})
