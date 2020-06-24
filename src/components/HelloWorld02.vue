<template>
  <div class="hello">
    <h1 :title="title">{{ msg }}-{{title}}</h1>
    {{foo}}
  </div>
</template>

<script>
export default {
  name: 'HelloWorld02',
  props: {
    msg: String,
    title: String
  },
  data () {
    return {
      foo: 'foo'
    }
  },
  created () {
    this.$parent.$on('test01', () => {
      console.log('获取helloworld 组件事件 test01');

    })
  }


}
</script>

 