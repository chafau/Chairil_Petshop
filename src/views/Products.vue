<template>
  <div class="min-vh-100 bg-white">
      <v-container>
      <div class="row mb-4">
        <div
          class="col-md-3 mt-4"
          v-for="product in products"
          :key="product.id"
        >
          <ProductCard :item="product" :gambar="product.imageURL.join('')"/>
        </div>
      </div>
      </v-container>
  </div>
</template>

<script>
import { db } from "../firebase";

export default {
  name: "Products",

  data() {
    return {
      products: [],
    };
  },

  methods: {
    getImage(images) {
      return images[0];
    },
  },

  firestore() {
    return {
      products: db.collection("images"),
    };
  },
};
</script>
