<template>
  <v-app>
    <Header></Header>
    <v-main>
      <router-view></router-view>
    </v-main>
    <Footer :class="setHide ? '' : 'd-none'"></Footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data() {
    return {
      setHide: true,
      dialog: false,
    };
  },
  methods: {
    hideFunc() {
      if (
        this.$router.currentRoute.path === "/404" ||
        this.$router.currentRoute.path === "/admin"
      ) {
        this.setHide = false;
      } else {
        this.setHide = true;
      }
    },
  },
  mounted() {},
  watch: {
    $route(to, from) {
      this.hideFunc();
      // console.log(this.$router.currentRoute.path);
    },
  },
};
</script>

<style lang="scss">
.v-application {
  background: transparent !important;
}

.v-main {
  padding: 0 !important;
  background: transparent;
}
</style>
