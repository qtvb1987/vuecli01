<template>
  <div>
    <!-- 自定义组件要实现v-model必需实现:value,@input -->
    <!-- $attrs 存储的是props之外的部分 -->
    <input v-bind="$attrs"
           :value="value"
           @input="onInput" />
  </div>
</template>

<script>
import emmiter from '@/mixins/emmiter';
export default {
  inheritAttrs: false,
  mixins: [emmiter],
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  methods: {
    onInput (e) {
      // 通知父组件数值变化
      this.$emit('input', e.target.value)

      //通知Formitem校验
      //this.$parent.$emit('validate')
      this.dispatch('validate')
    }
  }
}
</script>

<style>
</style>