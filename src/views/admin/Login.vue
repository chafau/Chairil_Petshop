<template>
  <div>
    <!-- <div>
      <form @submit.prevent="pressed">
        <input type="email" name="" placeholder="email" v-model="email" />
        <input
          type="password"
          name=""
          placeholder="passwords"
          v-model="password"
        />
        <input type="submit" value="submit" />
      </form>
      <p>{{ LoggedIn }}</p>
      <button @click="signOut">signout</button>
    </div> -->

    <div class="white--text">
      <v-form @submit.prevent="pressed" id="check-login-form">
        <v-container>
          <v-row class="">
            <v-col cols="12" md="4">
              <v-text-field
                v-model="password"
                :counter="10"
                label="Last name"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model="email"
                label="E-mail"
                required
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
        <v-btn type="submit" color="success" form="check-login-form"
          >Login</v-btn
        >
        <v-btn color="success" v-on:click="signOut">Sign Out</v-btn>
      </v-form>
    </div>
  </div>
</template>

<script>
import {fb} from "@/firebase"
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
    async pressed() {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((data) => {
          this.$router.replace(`${"/admin"}?success=${fb.auth().currentUser.uid}`)
        //   console.log(data);
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
  },
};
</script>