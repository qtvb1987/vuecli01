<template>
  <div class="home">
    <h1>Home asdfasdfasdfasdfsd</h1>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },
  data () {
    return {
      message: "Hello"
    }
  },
  mounted () {
    console.log(this);
    console.log(this.$router);
    console.log(this.$xxxx);
  },
  created () {
    console.log(this.message);
    this.$reverseText('message');
    console.log(this.message);
  }
}
</script>
