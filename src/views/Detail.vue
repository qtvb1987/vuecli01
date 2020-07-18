
<template>
  <div>
    detail
    <p>
      id: {{$route.params.id}} -{{id}}

    </p>
    <p>{{crumbData}}</p>
  </div>
</template>

<script> 
export default {
  name: 'Detail',
  data () {
    return {
      crumbData: String
    }
  },
  props: {
    id: {
      type: String,
      default: ''
    }
  },
  mounted () {
    console.log(this.$route.matched);
    this.crumbData = this.$route.matched.map(m => m.name)

  }

}
</script>

<style>
</style>