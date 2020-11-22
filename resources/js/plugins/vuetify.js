import "material-design-icons-iconfont/dist/material-design-icons.css"; // Ensure you are using css-loader

import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

const opts = {
    icons: {
        iconfont: "mdiSvg" // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4'
    }
};

export default new Vuetify(opts);