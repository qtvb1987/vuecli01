<template>
  <div class="hello"
       @click="$parent.$emit('test01')">
    <h1 @click="$emit('foo','str')">{{ msg }}-{{pfoo}}</h1>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  inject: ['pfoo'],
  props: {
    msg: String
  },
  mounted () {
    this.$bus.$on('bustest02', () => {
      console.log('bustest02事件');

    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
