<template>
  <v-app-bar
    id="home-app-bar"
    :class="{
      transparent: scrollPosition < 0.1,
      primary: scrollPosition > 0.1,
    }"
    app
    elevation="1"
    elevate-on-scroll
    height="80"
  >
    <div class="navbar-brand white--text hidden-sm-only mr-0 ml-5">
      PETshops
    </div>

    <div class="mx-auto">
      <v-tabs
        centered
        class="hidden-sm-and-down"
        background-color="transparent"
      >
        <v-tab to="/" :ripple="false" class="white--text" min-width="96" text>
          Home
        </v-tab>
        <v-tab
          to="/about"
          :ripple="false"
          class="white--text"
          min-width="96"
          text
        >
          About
        </v-tab>
        <!-- gak wajib ada @click, dihapus pun gak pengaruh -->

        <v-tab
          @click="redirectAdmin"
          :ripple="false"
          class="white--text"
          min-width="96"
          text
        >
          Admin
        </v-tab>
        
        <v-tab
          to="/products"
          :ripple="false"
          class="white--text"
          min-width="96"
          text
        >
          Products
        </v-tab>
      </v-tabs>
    </div>

    <div class="navbar-brand transparent--text hidden-sm-only mr-0 ml-5">
      PETshops
    </div>

    <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer" />

    <v-dialog v-model="dialog" max-width="600px" justify="center">
      <v-card>
        <v-card-title>
          <span class="text-h5">Login</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form @submit.prevent="pressed" id="check-login-form" ref="form">
              <v-row class="">
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="email"
                    label="E-mail"
                    required
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="password"
                    type="password"
                    label="password"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-form>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-btn color="danger" text @click="resetForm">Reset</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Close
          </v-btn>
          <v-btn
            color="success"
            type="submit"
            text
            @click="dialog = false"
            form="check-login-form"
          >
            Submit
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app-bar>
</template>

<script>
import { fb } from "@/firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

export default {
  name: "Header",
  data() {
    return {
      drawer: false,
      scrollPosition: null,
      dialog: false,
      LoggedIn: null,
      valid: false,
      password: "admin123",
      email: "admin123@admin.com",
    };
  },
  created() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.LoggedIn = true;
      } else {
        this.LoggedIn = false;
      }
    });
  },
  methods: {
    resetForm() {
      this.$refs.form.reset();
    },
    async pressed() {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((data) => {
          this.$router.replace(
            `${"/admin"}?success=${fb.auth().currentUser.uid}`
          );
          // console.log(data);
        })
        .catch((err) => {});
    },
    async signOut() {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          // Sign-out successful.
          this.$router.push({ path: "/login" });
        })
        .catch((error) => {
          // An error happened.
        });
    },
    redirectAdmin() {
      if (fb.auth().currentUser) {
        this.$router.replace(`${"/admin"}?edit=${fb.auth().currentUser.uid}`);
      } else if (!fb.auth().currentUser) {
        // this.$router.push({ path: "/login" });
        this.dialog = true;
      }
    },
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
};
</script>

<style lang="scss">
#home-app-bar {
  position: sticky;

  .v-tabs-slider {
    max-width: 2.5px;
    bottom: 50px !important;
    margin: 0 auto;
    background: $white;
    border-radius: 30px;

    &-wrapper {
      bottom: 0.5rem;
    }
  }

  .v-tab {
    text-decoration: none;
    text-transform: none;
    &::before {
      display: none;
    }
    &--active {
      // color: darkblue;
      font-weight: $font-black;
    }
  }

  .navbar-brand {
    font-family: $primary-font;
    font-style: normal;
    font-weight: $font-semibold;
    font-size: 22px;
    line-height: 41px;
  }
}
</style>