/**
 * Global configuration, styles, etc.
 */
import Vue from 'vue'
// import VueRouter from 'vue-router'
import App from './app.vue'

// import './css/base.css'
import './css/common.scss'

let app = new Vue({
    el: "ask",
    render: h => h(App)
});



Vue.config.devtools = true