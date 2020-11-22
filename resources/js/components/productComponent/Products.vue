<template>
  <div class="py-2">
    <v-row class="py-2 px-4">
      <v-col
        v-for="product in products"
        :key="product.id"
        cols="12"
        sm="6"
        md="4"
      >
        <v-hover v-slot="{ hover }">
          <v-card class="mx-auto" color="grey lighten-4" max-width="600">
            <router-link :to="'/product/' + product.id">
              <v-img :aspect-ratio="16 / 9" :src="'/img/' + product.image">
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
                    style="height: 100%"
                  >
                    ${{ product.price.toLocaleString() }}
                  </div>
                </v-expand-transition>
              </v-img>
            </router-link>
            <v-card-text class="pt-5 pb-0" style="position: relative">
              <v-btn
                @click="addToCart(product)"
                absolute
                color="orange"
                class="white--text"
                fab
                right
                top
              >
                <v-icon>add_shopping_cart</v-icon>
              </v-btn>
              <v-card-subtitle class="pa-0">
                {{ product.name }}
              </v-card-subtitle>
            </v-card-text>
            <v-card-text class="pt-1">
              <v-card-subtitle class="pa-0" font-weight-light>
                <v-chip small color="grey"> Price </v-chip>:
                {{ `${product.price} ${product.currency}` }}
              </v-card-subtitle>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
      <v-snackbar :color="notification.color" v-model="notification.notify">
        {{ notification.message }}

        <template v-slot:action="{ attrs }">
          <v-btn text v-bind="attrs" @click="notification.notify = false">
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </v-row>

    <div class="text-center">
      <v-pagination
        v-model="pagination.current_page"
        circle
        :length="pagination.last_page"
        @input="getProducts()"
      ></v-pagination>
    </div>
  </div>
</template>

<script>
import ProductService from "./ProductService.ts";
import CartService from "../cartComponent/CartService.ts";

export default {
  data() {
    return {
      products: [],
      notification: {},
      pagination: {
        current_page: 1,
      },
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
    getProducts() {
      ProductService.getProducts(this.pagination.current_page)
        .then((response) => {
          this.products = response.data.data;
          this.pagination = { ...response.data };
        })
        .catch((error) => {});
    },
    addToCart(product) {
      product.quantity = 1;
      CartService.addToCart(product);
      this.notify("Product added to cart", "success");
    },
  },
  created() {
    this.getProducts();
  },
};
</script>

<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
</style>