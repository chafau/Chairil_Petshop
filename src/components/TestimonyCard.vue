<template>
  <div class="testimony-card p-4 text-black">
    <!-- <img class="rounded-circle" :src="testimony.picture_name" alt /> -->

    <h4>{{testimony.reviewer_name}}</h4>
    <p>“{{testimony.testi}}”</p>
  </div>
</template>

<script>
export default {
  name: "TestimonyCard",
  props: {
    testimony: Object
  }
};
</script>

<style scoped lang="scss">
.testimony-card {
  background: $white;
  border: 3px dashed $matcha;
  box-sizing: border-box;
  border-radius: 24px;
  width: 340px;
  height: 266px;
  margin-top: 60px;
  text-align: center;

  img {
    width: 120px;
    height: 120px;
    margin-top: calc(-24px + -60px);
    margin-bottom: 32px;
  }

  h4 {
    font-family: $primary-font;
    color: $black;
    font-style: normal;
    font-weight: 800;
    font-size: 30px;
    line-height: 30px;
    max-lines: 2;
  }

  p {
    font-family: $secondary-font;
    color: $black;
    font-style: italic;
    font-weight: 300;
    font-size: 18px;
    line-height: 25px;
  }
}

@media (max-width: 576px) {
  .testimony-card {
    width: 320px;
    margin: 60px auto;
  }
}

@media (max-width: 360px) {
  .testimony-card {
    width: 270px;
    height: 243px;
    margin: 40px auto;

    img {
      width: 100px;
      height: 100px;
      margin-top: calc(-24px + -40px);
      margin-bottom: 32px;
    }

    h4 {
      font-size: 24px;
      line-height: 36px;
    }

    p {
      font-size: 14px;
    }
  }
}
</style>
