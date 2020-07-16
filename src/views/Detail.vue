<template>
  <div>
    detail
    <p>
      id: {{$route.params.id}} -{{id}}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>
</style>