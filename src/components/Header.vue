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
    <div class="navbar-brand white--text hidden-sm-only mr-0 ml-5">PETshops</div>

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
        <v-tab
          to="/admin"
          :ripple="false"
          class="white--text"
          min-width="96"
          text
        >
          Admin
        </v-tab>
      </v-tabs>
    </div>

    <div class="navbar-brand transparent--text hidden-sm-only mr-0 ml-5">
      PETshops
    </div>

    <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer" />
  </v-app-bar>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      drawer: false,
      scrollPosition: null,
    };
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
    test() {
      console.log(this.drawer);
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