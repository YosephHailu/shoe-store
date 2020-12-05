<template>
  <v-app>
    <Login v-on:dialog-change="toggleLoginDialog" :loginDialog="loginDialog" />
    <register
      v-on:register-dialog-change="toggleRegisterDialog"
      :registerDialog="registerDialog"
    />
    <v-container class="text-center">
      <v-btn
        v-if="!access_token"
        color="primary"
        @click="loginDialog = true"
        outlined
        >Login</v-btn
      >
      <v-btn
        v-if="!access_token"
        color="purple"
        @click="registerDialog = true"
        outlined
        >register</v-btn
      >

      <v-btn-toggle v-if="access_token">
        <v-btn color="purple" outlined>
          <v-icon left>person</v-icon>
          {{ user.name }}
        </v-btn>
        <v-btn icon @click="logout">
          <v-icon>power_settings_new</v-icon>
        </v-btn>
      </v-btn-toggle>

      <v-layout justify-center class="my-md-5">
        <v-flex xs12 md10 lg10 class="center-content">
          <v-card class="elevation-12">
            <!-- Search bar component -->
            <ProductSearchBar />
            <!-- Search bar component end -->

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

              <v-tab
                v-if="access_token"
                :to="{ path: '/add-product' }"
                class="primary--text"
              >
                <v-icon>playlist_add</v-icon>
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
import Login from "./components/loginComponent/Login";
import ProductSearchBar from "./components/productComponent/ProductSearchBar";
import CartService from "./components/cartComponent/CartService.ts";
import LoginService from "./components/loginComponent/LoginService.ts";
import Register from "./components/registerComponent/Register";

import { mapState } from "vuex";

export default {
  components: {
    ProductSearchBar,
    Login,
    Register,
  },
  data() {
    return {
      tabs: "ProductsTab",
      notification: {},
      loginDialog: false,
      registerDialog: false,
    };
  },
  computed: {
    ...mapState({
      user: "user",
      access_token: "access_token",
    }),
  },
  methods: {
    toggleLoginDialog() {
      this.loginDialog = !this.loginDialog;
    },

    toggleRegisterDialog() {
      this.registerDialog = !this.registerDialog;
    },

    logout() {
      LoginService.logout()
        .then((response) => {
          this.$store.commit("removeUserAndToken");
          location.reload();
        })
        .catch((error) => {
          this.$store.commit("removeUserAndToken");
        });
    },

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