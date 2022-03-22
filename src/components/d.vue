<template>
  <div
    id="header"
    :class="{
      change_color: scrollPosition > 50,
      resizing: scrollPosition > 50,
    }"
  >
    <b-navbar toggleable="md">
      <b-container>
        <div class="navbar-brand m-0 text-white">PETshop</div>
        <b-navbar-toggle target="nav-collapse text-white"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="mx-auto align-items-center">
            <b-nav-item>
              <router-link to="/" class="text-white">Home</router-link>
            </b-nav-item>
            <b-nav-item>
              <router-link to="/about" class="text-white">Product</router-link>
            </b-nav-item>
            <b-nav-item>
              <router-link to="/contact" class="text-white"
                >Contact</router-link
              >
            </b-nav-item>
            <b-nav-item>
              <router-link to="/profiles" class="text-white"
                >Profile</router-link
              >
            </b-nav-item>
            <!-- <b-nav-item>
              <nuxt-link to="/about" class="text-primary">About</nuxt-link>
            </b-nav-item> -->
          </b-navbar-nav>
        </b-collapse>
        <div class="navbar-brand invisible m-0 text-white">PETshop</div>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      scrollPosition: null,
    };
  },
  methods: {
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
#header {
  top: 0;
  position: sticky;
  font-family: "Nunito", sans-serif;
  transition: 0.4s ease-in-out;
  z-index: 4;
  font-family: $secondary-font;
  font-weight: $font-regular;
  // background-color: $dark;

  .icon {
    display: inline-block;
  }

  .page-tolink {
    display: inline-block;
    vertical-align: middle;
    font-family: $primary-font;
    color: $yellow;
    font-weight: 800;
    font-size: 18px;
  }

  .user-icon {
    $size: 2.5rem;

    display: inline-block;
    width: $size;
    height: $size;
    line-height: $size;
    color: $white;
    font-weight: bold;
    background-color: $purple;
  }

  .navbar {
    padding: 0 40px;
    min-height: 85px;
  }

  .navbar-brand {
    font-family: $primary-font;
    font-style: normal;
    font-weight: $font-semibold;
    font-size: 32px;
    color: #ffffff;
    line-height: 41px;
  }

  .btn-login {
    padding: 9px 22px;
  }

  a {
    font-size: 16px;
    position: relative;
    margin: 0 0.3rem;

    &:hover {
      // transform: scale(1.2);
      transition: all 0.1s ease-in-out 0.1s;
      text-decoration: none;
    }

    &.router-link-exact-active {
      font-weight: bold;

      &::after {
        content: "";
        position: absolute;
        top: 1.4rem;
        left: 50%;
        background-color: $white;
        border-radius: 50%;
        width: 5px;
        height: 5px;

        @include small-mobile {
          display: none !important;
        }
      }
    }
  }
}

.default {
  padding-top: 0;
  padding-bottom: 0;
  background-color: $white;
}

.second {
  padding-top: 0;
  padding-bottom: 0;
  background-color: $primary;
}

.active-user {
  background-color: white;
}

.myModal {
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: white;
  padding: $sizing-standard * 2 0;
  z-index: 40;

  .header {
    position: sticky;
    top: 0;
    .logo {
      font-family: $primary-font;
      font-size: 32px;
      font-weight: 800;
    }
    .cancel {
      background-color: $black;
      border-radius: 50%;
      width: 50px;
      height: 50px;
      padding: $sizing-standard - 5;

      img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: fill;
        object-position: center;
        transform: rotate(45deg);
      }
    }
  }

  .hide {
    display: none;
  }
}

.hide {
  display: none;
}

@media (max-width: 768px) {
  .navbar {
    padding: 25px 24px !important;
  }

  .navbar-brand {
    margin: 0 !important;
  }
}

.change_color {
  background-color: $primary !important;
}

.resizing {
  .navbar {
    min-height: 55px !important;
    transition: all 2s;
  }
  .navbar-brand {
    font-size: 16px !important;
    transition: all 2s;
  }
  a {
    font-size: 12px !important;
    transition: all 2s !important;

    &.router-link-exact-active {

      &::after {
        top: 1rem !important;
        width: 3px !important;
        height: 3px !important;

        @include small-mobile {
          display: none !important;
        }
      }
    }
  }
}

// .btn-mobile {
//   @include large {
//     display: none;
//   }
// }
</style>


<template>
  <v-app-bar
    app
    :elevation="scrollPosition ? 24 : 0"
    :class="{
      change_beforeScroll: scrollPosition < 50,
      change_afterScroll: scrollPosition > 50,
      setElevation: true,
    }"
  >
    <div class="navbar-brand white--text hidden-sm-only mr-0 ml-5">PETshop</div>

    <v-tabs centered color="grey darken-1" append="false">
      <v-tab to="/about"> hai </v-tab>
      <v-tab to="/"> hai </v-tab>
    </v-tabs>

    <div class="navbar-brand transparent--text hidden-sm-only mr-0 ml-5">
      PETshop
    </div>
  </v-app-bar>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      scrollPosition: null,
      setElevation: false,
    };
  },
  methods: {
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

.v-sheet {
  position: sticky !important;
}

.v-tabs-slider-wrapper {
  bottom: 20% !important;

  .v-tabs-slider {
    // display: none;
    width: 50% !important;
    margin-left: 25% !important;
  }
}

.v-tab::before{
    display: none !important;
}

.v-tab-active::after{
    display: none !important;
}

.v-toolbar__content {
  flex: 0 !important;
}

.change_beforeScroll {
  background-color: transparent !important;
}
.change_afterScroll {
  background-color: $primary !important;
}

.resizing {
  .navbar {
    min-height: 55px !important;
  }
  .navbar-brand {
    font-size: 16px !important;
  }
}

.v-tab {
  font-family: $primary-font;
}

.navbar-brand {
  font-family: $primary-font;
  font-style: normal;
  font-weight: $font-semibold;
  font-size: 22px;
  line-height: 41px;

  
}

.navbar-brand::after {
  background-color: turquoise;
}
</style>


<template>
  <v-app-bar id="home-app-bar" app elevation="1" elevate-on-scroll height="80">
    <base-img
      :src="require('@/assets/logo.svg')"
      class="mr-3 hidden-xs-only"
      contain
      max-width="46"
      width="100%"
    />

    <!-- <base-img
      :src="
        require(`@/assets/zero-logo-${
          $vuetify.theme.isDark ? 'dark' : 'light'
        }.svg`)
      "
      contain
      max-width="96"
      width="100%"
    /> -->

    <v-spacer />

    <div>
      <v-tabs
        class="hidden-sm-and-down"
        optional
        background-color="transparent"
      >
        <v-tab
          v-for="(name, i) in items"
          :key="i"
          :to="{ name }"
          :exact="name === 'Home'"
          :ripple="false"
          class="font-weight-bold"
          min-width="96"
          text
        >
          {{ name }}
        </v-tab>
      </v-tabs>
    </div>

    <v-btn
      class="font-weight-bold ml-6"
      color="#11c684"
      dark
      depressed
      href="https://store.vuetifyjs.com/products/zero-theme-pro/?ref=vtyd-app-bar"
      rel="noopener"
      target="_blank"
      x-large
    >
      Upgrade to PRO
    </v-btn>

    <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer" />
  </v-app-bar>
</template>

<script>
export default {
    name: "Header",
  data() {
    return {
      drawer: null,
      items: ["Home", "about"],
    };
  },
};
</script>

<style lang="scss">
#home-app-bar {
  .v-tabs-slider {
    max-width: 24px;
    margin: 0 auto;
    background: darkblue;
  }

  .v-tab {
    &::before {
      // display: none;
    }
  }
}
</style>
