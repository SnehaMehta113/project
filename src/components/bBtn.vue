<template>
  <button :style="buttonProps" @click="increaseSize">
    <slot>{{ label }}</slot>
  </button>
</template>
<script>
export default {
  name: 'bBtn',
  props: {
    label: {
      type: String,
      default () {
        return 'Button'
      },
    },
    size: {
      type: Object,
      default () {
        return 'md'
      }
    }
  },
  data () {
    return {
      offset: 1,
      redColor: 0
    }
  },
  computed: {

    buttonHeight () {
      let height = 40
      if (this.size === "md") {
        height = 100
      }
      if (this.size === "lg") {
        height = 200
      }
      height = height * this.offset
      return height
    },
    buttonStyleHeight () {
      return this.buttonHeight + 'px'
    },
    buttonPadding () {
      if (this.size === "md") {
        return '10px'
      }
      if (this.size === "lg") {
        return '15px'
      }
      return '5px'
    },
    buttonProps () {
      return {
        height: this.buttonStyleHeight,
        padding: this.buttonPadding,
        backgroundColor: 'rgb(' + Math.floor(this.redColor) + ', 0, 0)'
      }
    }
  },
  methods: {
    increaseSize () {
      this.offset = this.offset + 0.1
    },
    calculateRedColor () {
      this.redColor = 255 * ((this.offset > 2 ? 2 : this.offset) - 1)
    }
  },
  watch: {
    buttonHeight () {
      this.calculateRedColor()
    }
  }
}
</script>
