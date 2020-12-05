/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require("./bootstrap");
import App from "./App.vue";
import store from "./plugins/store";
import router from "./plugins/router";
import vuetify from "./plugins/vuetify"; // path to vuetify export

window.Vue = require("vue");

const app = new Vue({
    router,
    vuetify,
    store,
    render: h => h(App)
}).$mount("#app");
