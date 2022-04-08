<template>
  <div class="min-vh-100 bg-white">
    <v-container>
      <div class="row mb-4">
        <div
          class="col-md-4 mt-4"
          v-for="product in products"
          :key="product.id"
        >
          <ProductCard
            :item="product"
            :gambar="product.imageProductURL.join('')"
            :categories="product.selectCategory"
            :prices="Number(product.productPrice).toLocaleString()"
          />
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

const snap = await getDoc(doc(db, 'products', 'fK3ddutEpD2qQqRMXNW5'))

if (snap.exists()) {
  console.log(snap.data())
}
else {
  console.log("No such document")
}

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

  firestore() {sZVBcLW3AVYobgPAtYfU
    return {
      products: db.collection("products"),
    };
  },
  mounted() {
   
  }
};
</script>
