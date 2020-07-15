<template>
  <div id="app">

    <!-- <img alt="Vue logo"
         src="./assets/logo.png">
    <HelloWorld msg="test01"
                @foo="onFoo($event)" />
    <HelloWorld2 msg="test02"
                 ref="hw"
                 title="第二个标题">
      我是来自父组件的内容，匿名插槽获取的值
      <template v-slot:footer>
        <p>我是具名插槽</p>
      </template>
      <template v-slot:main="{zuoyongyu,zuo2}">
        {{zuoyongyu}}-{{zuo2}}
      </template>
    </HelloWorld2>
    <p ref="pMsg">{{oldMsg}}</p>

    <button @click="changeMsg()">点我修改内容</button> -->
    <Tree></Tree>
    <!-- <FormTest></FormTest> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import HelloWorld2 from './components/HelloWorld02.vue'
// import FormTest from './components/form'
import Tree from './components/tree'
export default {
  name: 'App',
  provide () {
    return { pfoo: this.mpfoo }
  },
  data () {
    return {
      oldMsg: '这是默认值',
      newMsg: '我是新的内容',
      mpfoo: 'pfooprovide'
    }
  },
  components: {
    // HelloWorld,
    // HelloWorld2,
    // FormTest,
    Tree
  },
  created () {
    //父组件先于子组件创建
    // console.log(this.$refs.hw);

    // this.$on('test01', () => {
    //   console.log('test01');

    // })

  },
  mounted () {
    // this.$refs.hw.foo = "bar"

    // this.$children[1].foo = 'dong'

  },
  methods: {
    // changeMsg () {
    //   this.$refs.pMsg.innerHTML = this.newMsg
    // },
    // onFoo (e) {
    //   console.log('this emit foo: ' + e);

    // }
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
