<template>
  <div id="home">
    <div class="m-jumbotron d-flex min-vh-100">
      <v-row class="m-0" align="center" justify="center">
        <v-col cols="7">
          <v-img
            class="main mx-auto"
            :src="require('../assets/images/home_jumbo.png')"
            max-width="700"
          ></v-img>
        </v-col>
        <v-col
          cols="5"
          class="justify-content-center align-items-center text-left px-9"
        >
          <div>
            <h1 class="jumbo-title text-left text-white font-weight-bold">
              Petshop Terbaik Untuk Hewan Kesayangan
            </h1>
            <p class="subtitle text-white text-left w-75 m-0">
              Kami telah dipercaya oleh ribuan pelanggan dari seluruh Indonesia
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
          v-for="item in DescriptionCard"
          :key="item.id"
        >
          <DescriptionCard
            :title="item.title"
            :description="item.description"
            :colors="item.color"
            :image="item.image"
          />
        </v-col>
      </v-row>
    </v-container>

    <v-container class="">
      <v-row>
        <v-col
          class="mt-4"
          sm="12"
          md="4"
          v-for="item in DescriptionCard"
          :key="item.id"
        >
          <DescriptionCard
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
      DescriptionCard: [
        {
          id: 1,
          title: "berkualitas",
          description:
            "Kami menjual berbagai makanan dan juga berbagai snack yang pastinya dengan rasa terbaik",
          image: "fa-solid fa-shield fa-3x",
        },
        {
          id: 2,
          title: "nyaman",
          description:
            "Kami menjual berbagai makanan dan juga berbagai snack yang pastinya dengan rasa terbaik",
          image: "fas fa-thumbs-up fa-3x",
        },
        {
          id: 3,
          title: "murah",
          description:
            "Kami menjual berbagai makanan dan juga berbagai snack yang pastinya dengan rasa terbaik",
          image: "fas fa-dollar-sign fa-3x",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
#home {
  max-height: 100vh 1;

  .jumbo-title {
    font-family: $primary-font;
    font-size: 50px; //perlu diganti dan max-width gambar
    line-height: 60px !important;
  }

  .subtitle {
    font-family: $primary-font;
    font-size: 18px;
  }
}
</style>
