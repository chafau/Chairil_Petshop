<template>
  <div
    class="categories-card"
    :class="{
      white: colors === 'white',
      blue: colors === 'blue',
      'light-purple': colors === 'light-purple',
    }"
  >
    <v-row>
      <v-col cols="3" class="p-0 my-auto text-center">
        <i
          class="icon justify-content-center align-items-center"
          :class="image"
        ></i>
      </v-col>
      <v-col class="d-flex flex-column">
        <div class="title text-left mb-2">{{ title.toUpperCase() }}</div>
        <div class="desc text-left">{{ description }}</div>
      </v-col>
    </v-row>

    
  </div>
</template>

<script>
export default {
  name: "DescriptionCard",

  props: {
    image: String,
    title: String,
    description: String,
    colors: String,
  },
};
</script>

<style lang="scss" scoped>
.categories-card {
  color: $black;
  padding: 28px;
  border-radius: 24px;

  @include tablet {
    width: 110%;
    height: 100%;
  }

  .icon {
    color: $white;
    @include tablet {
      width: 200%;
    }
  }

  .title {
    font-size: 24px;
    font-weight: $font-semibold;
    color: white;
  }

  .desc {
    font-size: 14px;
    color: white;
  }
}

.white {
  background-color: $white;
  margin-bottom: 10px;
}

.blue {
  background-color: $cyan;
  margin-bottom: 10px;
}

.light-purple {
  background-color: $light-purple;
  margin-bottom: 10px;
}
</style>