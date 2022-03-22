<template>
  <div id="home">
    <div class="m-jumbotron d-flex min-vh-100">
      <v-row class="m-0" align="center" justify="center"
        >>
        <v-col>
          <v-img
            class="main mx-auto"
            :src="require('../assets/images/home_jumbo.png')"
            max-width="100"
          ></v-img>
        </v-col>
        <v-col
          sm="12"
          md="6"
          class="justify-content-center align-items-center text-left px-9"
        >
          <h1 class="jumbo-title text-left text-dark font-weight-bold mb-3 pr-9">
            Pesan Makanan Dari Rumah Secara Cepat
          </h1>
          <div class="text-center">
            <p class="subtitle text-dark text-left pr-9">
              “Kami Mempunyau 10.000+ Review dan customer kami mempercayai
              makanan makanan kami dan jasa pengiriman kami”
            </p>
          </div>
        </v-col>
      </v-row>
    </div>

    <v-container class="">
      <v-row>
        <v-col
          class="mt-4"
          sm="12"
          md="4"
          v-for="item in CategoriesCard"
          :key="item.id"
        >
          <ConsultationList
            :title="item.title"
            :description="item.description"
            :colors="item.color"
            :image="item.image"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      CategoriesCard: [
        {
          id: 1,
          title: "BERKUALITAS",
          description:
            "Terbesar, Terlengkap, dan Terpercaya dari sabang sampai merauke",
          image: require("@/assets/images/categories/categories_love.svg"),
        },
        {
          id: 2,
          title: "woy",
          description: "Belanja Online Tanpa Ribet",
          image: require("@/assets/images/categories/categories_luck.svg"),
        },
        {
          id: 3,
          title: "woy",
          description:
            "Terjamin murah dan juga barang barang yang disediakan jelas dengan kualitas terbaik",
          image: require("@/assets/images/categories/categories_work.svg"),
        },
      ],
    };
  },
};
</script>

<style lang="scss">
#home {
}
.cek {
  /* padding:0 px; */
  font-family: $primary-font;
}
</style>
