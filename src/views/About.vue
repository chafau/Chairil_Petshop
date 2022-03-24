<template>
  <div id="home">
    <div class="min-vh-100">
      <v-container>
        <div class="my-3">
          <h2 class="text-white">PETshop.COM</h2>
          <p class="text-white">
            Lorem ipsum dolor sit amet, vix natum labitur eleifend, mel ad amet
            laoreet menandri. Mauris id enim id purus ornare tincidunt. Aenean
            vel consequat risus. Proin viverra nisi at nisl imperdiet.Lorem
            ipsum dolor sit amet, vix natum labitur eleifend.
          </p>
        </div>
        <div class="my-5]=">
          <h2 class="text-white">Privacy Policy</h2>
          <p class="text-white">
            Amet minim mol claslit non deserunt ullamco est sit aliqua dolor do
            amet sint. Velit officia consequat duis enim velit mollit.
          </p>
        </div>
        <div>
          <h1 class="text-white my-3">FAQ</h1>

          <v-expansion-panels focusable>
            <v-expansion-panel class="transparent white--text my-3">
              <v-expansion-panel-header
                >Amet minit mollit non deserunt ullamco
                est</v-expansion-panel-header
              >
              <v-expansion-panel-content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </v-expansion-panel-content>
            </v-expansion-panel>

            <!-- -- -->
            <v-expansion-panel class="transparent white--text my-3">
              <v-expansion-panel-header
                >Velit officia consequat duis enim velit
                mollit</v-expansion-panel-header
              >
              <v-expansion-panel-content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </v-expansion-panel-content>
            </v-expansion-panel>

            <!-- -- -->
            <v-expansion-panel class="transparent white--text my-3">
              <v-expansion-panel-header
                >Velit officia consequat duis enim velit
                mollit</v-expansion-panel-header
              >
              <v-expansion-panel-content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </v-expansion-panel-content>
            </v-expansion-panel>

            <!-- -- -->
            <v-expansion-panel class="transparent white--text my-3">
              <v-expansion-panel-header
                >Velit officia consequat duis enim velit
                mollit</v-expansion-panel-header
              >
              <v-expansion-panel-content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
      </v-container>
    </div>
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
    };
  },
};
</script>

<style lang="scss">
.v-expansion-panel {
}
</style>