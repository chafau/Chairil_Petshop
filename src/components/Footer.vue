<template>
  <v-footer padless class="">
    <v-card flat tile class="footer primary text-center">
      <v-card-text class="white--text">
        <h2 class="py-3">PETshops</h2>
        <p class="mb-0">Street Address No.00 City Province</p>
        Copyright - ©{{ new Date().getFullYear() }}
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      currentDate: new Date(),
    };
  },
};
</script>

<style lang="scss" scoped>
.footer {
    // background: $primary !important;
    width: 100%;
}
</style>