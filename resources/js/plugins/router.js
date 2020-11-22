import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            alias: "/home",
            component: () => import("../components/Home")
        },
        {
            path: "/products",
            alias: "/products",
            component: () => import("../components/productComponent/Products")
        },
        {
            path: "/product/:id",
            alias: "/product-detail",
            component: () => import("../components/productComponent/Product")
        },
        {
            path: "/my-cart",
            alias: "/my-cart",
            component: () => import("../components/cartComponent/MyCarts")
        },
    ]
});
