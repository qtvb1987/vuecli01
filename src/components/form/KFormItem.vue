<template>
  <div>
    <label v-if="label">
      {{label}}
    </label>
    <slot></slot>
    <p v-if="errorMessage">{{errorMessage}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      errorMessage: ''
    }
  },
  props: {
    label: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>
</style>