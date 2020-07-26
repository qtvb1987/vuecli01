
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
  // mounted () {
  //   console.log(this.$route.matched);
  //   this.crumbData = this.$route.matched.map(m => m.name)

  // },
  watch: {
    $route: {
      handler () {
        console.log(this.$route.matched);
        this.crumbData = this.$route.matched.map(m => m.name || m.redirect);
      },
      immediate: true //这一行要加上，让它一开始执行一次
    }
  }

}
</script>

<style>
</style>