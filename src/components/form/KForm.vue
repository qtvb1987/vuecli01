<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  provide () {
    return {
      form: this//传递Form实例给后代，比如Formitem来校验
    }
  },
  props: {
    model: {
      type: Object,
      required: true
    },
    rules: {
      type: Object
    }
  },
  methods: {
    validate (cb) {
      //map 结果是若干promise数组
      const tasks = this.$children
        .filter(item => item.prop)
        .map(item => item.validate());
      //所有任务执行成功返回才校验证成功
      //console.log(tasks, cb);

      Promise.all(tasks)
        .then(() => cb(true))
        .catch(() => cb(false));
    }
  }

}
</script>

<style>
</style>