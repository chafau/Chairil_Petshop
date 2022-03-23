<template>
  <button id="default-button" class="text-center" :class="setClass()" @click="$emit('onClick')">
    <span v-if="isLoading">
      <Loading size="35px" color="#ffffff" />
    </span>
    <span v-else>
      <b-img v-if="imgBefore && imgSrc" :src="imgSrc" class="icon d-inline mb-1" />
      {{title}}
      <b-img v-if="imgAfter && imgSrc" :src="imgSrc" class="icon d-inline mb-1" />
    </span>
  </button>
</template>

<script>
export default {
  name: 'DefaultButton',
  props: {
    title: {
      type: String,
      required: true
    },
    variant: {
      type: String,
      default: 'default'
    },
    bordered: {
      type: Boolean
    },
    imgBefore: {
      type: Boolean
    },
    imgAfter: {
      type: Boolean
    },
    imgSrc: {
      type: String
    },
    isLoading: {
      type: Boolean
    }
  },
  methods: {
    setClass() {
      if (this.bordered) return `${this.variant}-bordered`
      return this.variant
    }
  }
}
</script>

<style lang="scss" scoped>
#default-button {
  min-width: 100px;
  width: 100%;
  font-size: 18px;
  box-sizing: border-box;
  font-weight: $font-medium;
  padding: $sizing-standard / 3 $sizing-standard;
  border-radius: $border-standard * 3;
  transition: 0.3s;

  @include small-mobile {
    font-size: 16px;
  }

  .icon {
    @include small-mobile {
      display: none;
      width: 5px;
      height: 5px;
    }
  }
}

// default
.default {
  background-color: $primary;
  color: white;

  &:hover {
    background-color: darken($primary, 10%);
  }
}

.default-bordered {
  background-color: white;
  border: 2px solid $primary;
  color: $primary;

  &:hover {
    color: darken($primary, 10%);
  }
}

// black

.black {
  background-color: $black;
  color: white;

  &:hover {
    background-color: darken($black, 10%);
  }
}

.black-bordered {
  background-color: white;
  border: 2px solid $black;
  color: $black;

  &:hover {
    color: darken($black, 10%);
  }
}

// blue

// .blue {
//   background-color: $accent;
//   color: white;

//   &:hover {
//     background-color: darken($accent, 10%);
//   }
// }

// .blue-bordered {
//   background-color: white;
//   border: 2px solid $accent;
//   color: $accent;

//   &:hover {
//     color: darken($accent, 10%);
//   }
// }

// gray

.gray {
  background-color: $gray;
  color: white;

  &:hover {
    background-color: darken($gray, 10%);
  }
}

.gray-bordered {
  background-color: white;
  border: 2px solid $gray;
  color: $gray;

  &:hover {
    color: darken($gray, 10%);
  }
}

// white

.white {
  background-color: $white;
  color: $black;

  &:hover {
    background-color: darken($white, 10%);
  }
}

.white-bordered {
  background-color: transparent;
  border: 2px solid $black;
  color: $black;

  &:hover {
    color: darken($black, 10%);
  }
}
</style>