<template>
  <v-flex xs12 md10 lg10 class="center-content py-5">
    <v-card
      class="my-1"
      v-for="(product, index) in my_cart_products"
      :key="index"
    >
      <v-list-item two-line>
        <v-list-item-avatar color="white">
          <img :src="'/img/' + product.image" alt />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>{{ product.name }}</v-list-item-title>
          <v-list-item-subtitle>
            Price : {{ `${product.price} ${product.currency}` }}
          </v-list-item-subtitle>
          <v-list-item-subtitle>
            Total price :
            {{ `${product.price * product.quantity} ${product.currency}` }}
          </v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-content class="pt-2">
          <v-btn-toggle small class="mt-7">
            <v-btn
              color="purple"
              class="white--text"
              @click="decrement(product)"
            >
              <v-icon class="yellow--text"> remove </v-icon>
            </v-btn>

            <v-text-field
              v-model="product.quantity"
              flat
              name="name"
              solo
              disabled
              label="Quantity"
            ></v-text-field>

            <v-btn
              color="purple"
              @click="increment(product)"
              class="white--text"
            >
              <v-icon class="yellow--text"> add </v-icon>
            </v-btn>
          </v-btn-toggle>
        </v-list-item-content>
        <v-list-item-content>
          <div class="text-center">
            <v-btn color="red" dark @click="removeProductFromCart(product)">
              <v-icon left>delete</v-icon>
              Remove</v-btn
            >
          </div>
        </v-list-item-content>
      </v-list-item>
    </v-card>

    <div class="text-center my-4" v-if="my_cart_products">
      <v-btn color="yellow" large @click="paymentDialog = true">
        <v-icon left>payment</v-icon>
        Proceed to payment</v-btn
      >
    </div>
    <div v-else>
      <v-alert border="left" colored-border type="error" elevation="2">
        Your cart is empty!!
      </v-alert>
    </div>
    <v-dialog v-model="paymentDialog" width="500">
      <v-card color="purple" dark>
        <v-card-title class="text-center py-3 title purple darken-2">
          <v-list-item-title class="py-0 my-0">
            Great, That's ${{ totalCartPrice }}!
          </v-list-item-title>
          <v-list-item-subtitle class="py-0 my-0"
            >Select payment method</v-list-item-subtitle
          >
        </v-card-title>

        <v-list-item>
          <v-radio v-model="paymentMethod" value="CBE"></v-radio>
          <v-list-item-content>
            <v-list-item-title>CBE Birr</v-list-item-title>
          </v-list-item-content>
          <v-list-item-avatar rounded color="white">
            <img
              :src="'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRey5H59WoqUQ46fE5Uecb7TcZy9S-gOaCblAiShla6S7NC8g5Ce7G2ckTym9HJYvVBOcAzyPeT1YsVkx7MMucD2P3Tv5l-sbw&usqp=CAU&ec=45725302'"
              alt
            />
          </v-list-item-avatar>
        </v-list-item>
        <v-divider></v-divider>

        <v-list-item>
          <v-radio v-model="paymentMethod" value="Amole"></v-radio>
          <v-list-item-content>
            <v-list-item-title>Amole Wallet</v-list-item-title>
          </v-list-item-content>
          <v-list-item-avatar rounded color="white">
            <img
              :src="'https://play-lh.googleusercontent.com/s08nKSNOkmhKskmLAc5zrO7ntp435ikFY7GzLfJAFndxZUS2YLlUIR8lnOxaG8nwmg'"
              alt
            />
          </v-list-item-avatar>
        </v-list-item>
        <v-divider></v-divider>

        <v-card-text class="text-center mt-3">
          <v-btn color="yellow" large light @click="payAndClearCart()">
            <v-icon left>payment</v-icon>
            Pay and finish</v-btn
          >
        </v-card-text>
      </v-card>
    </v-dialog>

    <v-snackbar :color="notification.color" v-model="notification.notify">
      {{ notification.message }}

      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="notification.notify = false">
          Undo
        </v-btn>
      </template>
    </v-snackbar>
  </v-flex>
</template>

<script>
import CartService from "./CartService.ts";
export default {
  data() {
    return {
      my_cart_products: [],
      notification: {},
      paymentDialog: false,
      paymentMethod: "CBE",
    };
  },
  computed: {
    totalCartPrice() {
      if (this.my_cart_products)
        return this.my_cart_products.reduce((total, value) => {
          return total + value.price * value.quantity;
        }, 1);
      else return 0;
    },
  },
  methods: {
    decrement(product) {
      if (product.quantity > 1) product.quantity--;
    },

    increment(product) {
      product.quantity++;
    },
    getMyCartProducts() {
      this.my_cart_products = CartService.getMyCart();
    },
    payAndClearCart() {
      CartService.removeCart();
      this.getMyCartProducts();
      this.paymentDialog = false;
      this.notify("transaction successfully", "success");
    },
    removeProductFromCart(product) {
      CartService.removeProductFromCart(product);
      this.getMyCartProducts();
      this.notify("Product removed from your cart", "error");
    },
    notify(message, color) {
      this.notification = {
        notify: true,
        message: message,
        color: color,
      };
    },
  },
  created() {
    this.getMyCartProducts();
  },
};
</script>