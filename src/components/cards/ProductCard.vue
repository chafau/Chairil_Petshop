<template>
  <v-card class="mx-auto" max-width="300">
    <v-img width="300" :aspect-ratio="16 / 9" :src="gambar"></v-img>

    <v-card-text class="text-center">
      <h3>{{ item.imageName }}</h3>
      <div>
        <p class="text-subtitle-3">Makanan</p>
      </div>
      <div>
        <!-- <h2>Rp. {{item.imageName.toString().split("").reverse().join("").match(/\d{1,3}/g).join(".").split("").reverse().join("")}}</h2> -->
      </div>
    </v-card-text>

    <!-- .toString().split("").reverse().join("").match(/\d{1,3}/g).join(".").split("").reverse().join("") -->

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn text> Full Report </v-btn>
    </v-card-actions>

    <input
      type="text"
      v-model="displayValue"
      @blur="isInputActive = false"
      @focus="isInputActive = true"
    />
  </v-card>
</template>

<script>
import $ from "jquery";

export default {
  name: "ProductCard",
  props: ["gambar", "item"],
  method: {},
  data() {
    return {
      price: "1000",
      isInputActive: false,
    };
  },
};
</script>

<style lang="scss">
.weight-box-text {
  font-size: 13px;
  margin: 0 !important;
}

.cards {
  border-radius: 30px !important;
}

// .v-ripple__container {
//     display:none !important;
// }

button::before {
  display: none;
}
</style>