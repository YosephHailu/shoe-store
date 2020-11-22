<template>
  <v-app>
    <v-container>
      <v-layout justify-center class=" my-md-5">
        <v-flex xs12 md10 lg10 class="center-content">
          <v-card class="elevation-12">
            <ProductSearchBar />
            
            <v-tabs class="mt-5" v-model="tabs" fixed-tabs>
              <v-tabs-slider></v-tabs-slider>
              <v-tab :to="{ path: '/home' }" class="primary--text">
                <v-icon>home</v-icon>
              </v-tab>

              <v-tab :to="{ path: '/products' }" class="primary--text">
                <v-icon>shop</v-icon>
              </v-tab>

              <v-tab :to="{ path: '/my-cart' }" class="primary--text">
                <v-badge>
                  <v-icon>add_shopping_cart</v-icon>
                </v-badge>
              </v-tab>
            </v-tabs>
            <router-view></router-view>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <v-snackbar :color="notification.color" v-model="notification.notify">
      {{ notification.message }}

      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="notification.notify = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>
<script>
import ProductSearchBar from "./components/productComponent/ProductSearchBar";
import CartService from "./components/cartComponent/CartService.ts";

export default {
  components: {
    ProductSearchBar,
  },
  data() {
    return {
      tabs: "ProductsTab",
      messages: 2,
      notification: {},
    };
  },
  methods: {
    notify(message, color) {
      this.notification = {
        notify: true,
        message: message,
        color: color,
      };
    },
  },
};
</script>

<style>
.center-content {
  margin: auto;
}
</style>