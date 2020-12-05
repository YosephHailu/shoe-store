<template>
  <v-toolbar flat color="purple" dark>
    <v-autocomplete
      v-model="select"
      :loading="loading"
      :items="products"
      :search-input.sync="search"
      item-text="name"
      item-value="id"
      cache-items
      class="mx-4"
      flat
      hide-no-data
      hide-details
      @input="selectProduct()"
      label="Search your products?"
      solo-inverted
    ></v-autocomplete>
  </v-toolbar>
</template>
<script>
import ProductService from "./ProductService.ts";

export default {
  data() {
    return {
      loading: false,
      products: [],
      search: null,
      select: null,
    };
  },
  watch: {
    search(val) {
      val && val !== this.select && this.queryProducts(val);
    },
  },
  methods: {
    selectProduct() {
      this.$router.push("/product/" + this.select);
    },
    queryProducts(v) {
      this.loading = true;

      ProductService.queryProduct(this.search)
        .then((response) => {
          this.products = response.data.data;
        })
        .catch((error) => {})
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>