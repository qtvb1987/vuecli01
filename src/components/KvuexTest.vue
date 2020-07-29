<template>
  <div>
    <h1>vuex</h1>
    <p>{{$store.state.count}}</p>
    <p>{{$store.getters["score"]}}</p>
    <p>{{Person.name}}</p>
    <button @click="add">add</button>
    <br>
    <button @click="asyncAdd">asyncAdd</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      Person: {}
    }
  },
  mounted () {
    Object.defineProperty(this.Person, 'name', {
      value: 'lalala',
      writable: true
    });
    console.log(this.Person.name);
  },
  methods: {
    add () {
      this.$store.commit('add', 2);
    },
    async asyncAdd () {
      const result = await this.$store.dispatch('asyncAdd');
      if (result.ok == 1) {
        alert('操作成功！')
      }
    }
  }
}
</script>

<style>
</style>