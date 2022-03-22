<template>
  <div
    class="categories-card"
    :class="{
      white: colors === 'white',
      blue: colors === 'blue',
      'light-purple': colors === 'light-purple',
    }"
  >
    <b-row>
      <b-col cols="3">
        <img
          :src="image"
          class="categories-icon"
          alt
        />
      </b-col>
      <b-col class="d-flex flex-column">
        <div class="title text-left mb-2">{{ title }}</div>
        <div class="desc text-left">{{ description }}</div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "ConsultationList",

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

  img {
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