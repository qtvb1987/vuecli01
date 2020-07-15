<template>
  <ul>
    <Item class="item"
          :model="treeData"></Item>
  </ul>
</template>

<script>
import Item from './Item'
export default {
  name: 'app',
  components: {
    Item
  },
  data () {
    return {
      treeData: {
        title: 'Web全栈架构师',
        children: [
          { title: 'java架构师' },
          {
            title: 'js高级',
            children: [
              { title: 'es5' },
              {
                title: '动效'
              }
            ]
          }
        ]
      }
    }
  }
}
</script>

<style>
</style>