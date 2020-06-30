<template>
  <div>
    <KFormItem label='用户名'>
      <KInput v-model="model.username"></KInput>
    </KFormItem>
    <KFormItem label='密码'>
      <KInput v-model="model.password"
              type="password"></KInput>
    </KFormItem>

    {{model}}
  </div>
</template>

<script>
import KInput from './Kinput.vue';
import KFormItem from './KFormItem.vue'
export default {
  components: {
    KInput,
    KFormItem
  },
  data () {
    return {
      model: {
        username: 'tom',
        password: ''
      }
    }
  }
}
</script>

<style>
</style>