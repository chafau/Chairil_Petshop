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

    <v-container>
      <!--  -->
      <v-col sm="12" md="6" class="m-auto align-items-center text-center">
        <v-col class="align-items-center text-center white--text">
          <h2 class="text-center mt-10">How PETshop Works</h2>
          <p class="my-4">
            Di Pusat Kebutuhan Hewan Peliharaan Terbesar, Terlengkap, dan
            Terpercaya No.1 di Indonesia
          </p>
        </v-col>
      </v-col>
      <!--  -->

      <!-- V-ROW -->
      <v-row>
        <v-col cols="4" align-self="center">
          <div class="card-box">
            <div class="box-num d-flex ml-auto">
              <p class="box-text d-block m-auto">1</p>
            </div>
            <h4 class="text-right my-2">Pilih Trainer Kamu</h4>
            <p class="desc-text text-right mb-0">
              Pilih trainer dari daftar yang sudah kami sesuaikan dengan jadwal
              dan tipe latihanmu
            </p>
          </div>

          <div style="height: 120px"></div>

          <div class="card-box">
            <div class="box-num d-flex ml-auto">
              <p class="box-text d-block m-auto">2</p>
            </div>
            <h4 class="text-right my-2">Pilih Trainer Kamu</h4>
            <p class="desc-text text-right mb-0">
              Pilih trainer dari daftar yang sudah kami sesuaikan dengan jadwal
              dan tipe latihanmu
            </p>
          </div>
        </v-col>

        <!-- batas v-col pertama -->

        <v-col cols="4" align-self="center"
          ><v-img
            class="main mx-auto"
            :src="require('../assets/images/Android.png')"
          ></v-img
        ></v-col>

        <!-- batas v-col kedua -->

        <v-col cols="4" align-self="center">
          <div class="card-box">
            <div class="box-num d-flex mr-auto">
              <p class="box-text d-block m-auto">2</p>
            </div>
            <h4 class="text-left my-2">Pilih Trainer Kamu</h4>
            <p class="desc-text text-left mb-0">
              Pilih trainer dari daftar yang sudah kami sesuaikan dengan jadwal
              dan tipe latihanmu
            </p>
          </div>

          <div style="height: 120px"></div>

          <div class="card-box">
            <div class="box-num d-flex mr-auto">
              <p class="box-text d-block m-auto">2</p>
            </div>
            <h4 class="text-left my-2">Pilih Trainer Kamu</h4>
            <p class="desc-text text-left mb-0">
              Pilih trainer dari daftar yang sudah kami sesuaikan dengan jadwal
              dan tipe latihanmu
            </p>
          </div>
        </v-col>

        <!-- batas v-col ketiga -->
      </v-row>
    </v-container>

    <v-container>
      <v-divider class="test mx-auto my-15" inset></v-divider>
    </v-container>

    <v-container>
      <div>
        <v-carousel show-arrows-on-hover cycle>
          <v-carousel-item
            v-for="item in products"
            :key="item.id"
            :src="item.imageURL.join('')"
          ></v-carousel-item>
        </v-carousel>
      </div>
    </v-container>

    <v-container>
      <v-divider class="test mx-auto my-15" inset></v-divider>
    </v-container>
  </div>
</template>

<script>
import { fb, db } from "../firebase";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import Swal from "sweetalert2";
import $ from "jquery";

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
});

export default {
  name: "Home",
  components: {},
  data() {
    return {
      product: [
        {
          imageURL:
            "https://firebasestorage.googleapis.com/v0/b/petshop-firebase.appspot.com/o/products%2F6b.png?alt=media&token=b25eac84-d7bc-4496-9b0e-1bb8a7994b52",
        },
      ],

      products: [],
      DescriptionCard: [
        {
          id: 1,
          title: "kualitas",
          description:
            "Kami menjual berbagai makanan dan juga berbagai snack yang pastinya dengan rasa terbaik",
          image: "fas fa-thumbs-up fa-3x",
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
      testimonials: [
        {
          index: 1,
          reviewer_name: "woy",
        },
        {
          index: 2,
        },
        {
          index: 3,
        },
      ],
    };
  },
  firestore() {
    return {
      products: db.collection("products"),
    };
  },
};
</script>

<style lang="scss">
#home {
  min-height: 100vh;

  .jumbo-title {
    font-family: $primary-font;
    font-size: 50px; //perlu diganti dan max-width gambar
    line-height: 60px !important;
  }

  .subtitle {
    font-family: $primary-font;
    font-size: 18px;
  }

  .m-jumbotron {
    min-height: 100vh !important;

    @include tablet {
      min-width: 100%;
      height: 100%;
    }

    @include small-mobile {
      min-width: 100%;
      height: 100% !important;
    }

    .btn-action {
      width: 230px !important;
    }

    .btn-black {
      margin-left: 130%;
      width: 230px !important;
    }
  }

  .box-num {
    width: 50px;
    height: 50px;
    background: $black-transparent;
    border-radius: 30%;

    @include small-mobile {
      margin: auto;
    }
  }

  .box-text {
    font-family: $primary-font;
    font-weight: $font-semibold;
    color: $white;
  }

  .detail-title {
    font-family: $primary-font;
    font-weight: $font-semibold;

    @include small-mobile {
      text-align: center !important;
    }
  }

  .detail-img {
    @include small-mobile {
      display: none;
    }
  }

  .detail-paragraph {
    @include small-mobile {
      text-align: center !important;
    }
  }

  .card-box {
    .detail-paragraph-right {
      text-align: right !important;

      @include small-mobile {
        text-align: center !important;
      }
    }

    .detail-paragraph-left {
      text-align: left !important;

      @include small-mobile {
        text-align: center !important;
      }
    }

    .desc-text {
      line-height: 25px;
    }
  }

  .test {
    width: 510px;
    border: 4px solid white;
    background: $white;
    border-radius: 30px;
  }

  .v-item-group {
    border-radius: 30px;
  }
}
</style>
