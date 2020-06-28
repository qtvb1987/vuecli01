<template>

  <div class="hello">
    <p @click="$bus.$emit('bustest02')"> hello2</p>
    <h1 :title="title">{{ msg }}-{{title}}</h1>
    {{foo}}
    <br>
    <!-- 匿名插槽 -->
    <slot></slot>

    <!-- 具名插槽 -->
    <template>
      <slot name="footer"></slot>
    </template>
    <!-- 作用域插槽 -->
    <template>
      <slot name="main"
            zuoyongyu="zuoyongyu....."
            zuo2="zuo2"></slot>
    </template>
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
  methods: {
    eventBus () {
      this.$bus.$emit('bustest02')
    }
  },
  created () {
    this.$parent.$on('test01', () => {
      console.log('获取helloworld 组件事件 test01');

    })
  }


}
</script>

 