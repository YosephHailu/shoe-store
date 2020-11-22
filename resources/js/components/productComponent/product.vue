<template>
  <v-card class="pt-10">
    <v-row>
      <v-col cols="12" md="7">
        <v-img :aspect-ratio="16 / 12" :src="'/img/' + product.large_image">
        </v-img
      ></v-col>
      <v-col cols="12" md="5">
        <v-img :aspect-ratio="16 / 9" :src="'/img/' + product.image"> </v-img>
        <v-card-title
          primary-title
          class="px-0 h2 font-weight-medium display-1"
        >
          {{ product.name }}
        </v-card-title>
        <v-card-subtitle class="px-0 h1 title">
          Price: {{ `${product.price} ${product.currency}` }}
        </v-card-subtitle>

        <v-btn-toggle small mandatory>
          <v-btn color="purple" class="white--text" @click="addToCart">
            <v-icon left class="yellow--text"> shopping_cart </v-icon>
            <span class="hidden-sm-and-down">Add to cart</span>
          </v-btn>

          <v-text-field
            v-model="product.quantity"
            flat
            name="name"
            solo
            label="Quantity"
            id="id"
          ></v-text-field>
        </v-btn-toggle>
      </v-col>
    </v-row>

    <v-snackbar :color="notification.color" v-model="notification.notify">
      {{ notification.message }}

      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="notification.notify = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-card>
</template>

<script>
import ProductService from "./ProductService.ts";
import CartService from "../cartComponent/CartService.ts";

export default {
  data() {
    return {
      product: {},
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
    getProduct() {
      ProductService.getProduct(this.$route.params.id)
        .then((response) => {
          console.log("get", response);
          this.product = response.data;
          this.product.quantity = 1;
        })
        .catch((error) => {
          console.log("error", error.response.data);
        });
    },

    addToCart() {
      console.log(this.product);
      CartService.addToCart(this.product);
      this.notify("Product added to cart", "success");
    },
  },
  created() {
    this.getProduct();
  },
  watch: {
    "$route.params": {
      handler() {
        this.getProduct();
      },
    },
  },
};
</script>