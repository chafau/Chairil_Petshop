<template>
  <div id="home">
    <v-container class="min-vh-100 mt-10" fluid>
      <ImageProduct></ImageProduct>
      <ProductTable class="mt-10"></ProductTable>
      <v-btn color="warning" class="mt-5 white--text" elevation="2" large @click="signOut">Logout</v-btn>
    </v-container>
    <!-- <h1>
      <h1>{{ LoggedIn }}</h1>
    </h1> -->
  </div>
</template>

<script>
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

export default {
  data() {
    return {
      LoggedIn: null,
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
    async signOut() {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          // Sign-out successful.
          this.$router.push({ path: "/" });
        })
        .catch((error) => {
          // An error happened.
        });
    },
  },
};
</script>