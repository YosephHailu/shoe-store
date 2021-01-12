<template>
  <v-flex xs12 md8 lg8 class="center-content py-5">
    <v-card grid-list-xs class="text-center pb-5">
      <v-card-title class="text-center py-3 title purple darken-2">
        <v-list-item-title class="white--text py-0 my-0">
          Product registration form</v-list-item-title
        >
      </v-card-title>

      <v-col class="pb-0 mb-0">
        <v-text-field
          v-model="product.name"
          :rules="[(v) => !!v || 'Name is required']"
          label="Product name"
          required
        ></v-text-field>
      </v-col>

      <v-row class="px-3">
        <v-col>
          <v-text-field
            type="number"
            v-model="product.price"
            :rules="[(v) => !!v || 'product price is required']"
            label="Product price"
            required
          ></v-text-field>
        </v-col>

        <v-col>
          <v-text-field
            v-model="product.currency"
            :rules="[(v) => !!v || 'Currency is required']"
            label="Product currency"
            required
          ></v-text-field>
        </v-col>
      </v-row>

      <v-col class="pb-0 mb-0">
        <v-file-input
          v-model="product.photo"
          :rules="[
            (value) =>
              !value ||
              value.size < 2000000 ||
              'Image size should be less than 2 MB!',
          ]"
          accept="image/*"
          label="Image"
        ></v-file-input>
      </v-col>

      <v-btn color="purple" outlined light @click="registerProduct">
        <v-icon left>add</v-icon>
        Save</v-btn
      >

      <v-snackbar :color="notification.color" v-model="notification.notify">
        {{ notification.message }}

        <template v-slot:action="{ attrs }">
          <v-btn text v-bind="attrs" @click="notification.notify = false">
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </v-card>
  </v-flex>
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
    registerProduct() {
      let formData = new FormData();

      Object.keys(this.product).forEach(key =>
        formData.append(key, this.product[key])
      );

      ProductService.registerProduct(formData)
        .then((response) => {
          console.log(response);
          this.clearForm();
          this.notify("Product added", "success");
        })
        .catch((error) => {});
    },

    clearForm() {
      this.product = {};
    },
  },
};
</script>