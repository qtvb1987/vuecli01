<template>
  <div>
    <KForm :model="model"
           :rules="rules"
           ref="loginForm">
      <KFormItem label='用户名'
                 prop="username">
        <KInput v-model="model.username"></KInput>
      </KFormItem>
      <KFormItem label='密码'
                 prop="password">
        <KInput v-model="model.password"
                type="password"></KInput>
      </KFormItem>
      <KFormItem label="记住密码"
                 prop="password">
        <!-- <KCheckBox v-model="model.remember"></KCheckBox> -->
        <KCheckBox :checked="model.remember"
                   @change="model.remember=$event"></KCheckBox>
      </KFormItem>
      <KFormItem>
        <button @click="onLogin">登陆</button>
      </KFormItem>

    </KForm>
    {{model}}
  </div>
</template>

<script>
import KInput from './Kinput.vue';
import KFormItem from './KFormItem.vue'
import KForm from './KForm.vue'
import KCheckBox from './KCheckBox.vue'
export default {
  components: {
    KInput,
    KFormItem,
    KForm,
    KCheckBox
  },
  data () {
    return {
      model: {
        username: 'tom',
        password: '',
        remember: true
      },
      rules: {
        username: [{ required: true, message: '用户名不能为空' }],
        password: [{ required: true, message: '密码不能为空' }]
      }
    }
  },
  methods: {
    onLogin () {
      this.$refs.loginForm.validate((isValid) => {
        if (isValid) {
          alert('登陆ok')
          //console.log('ok');

        }
        else {
          //console.log('no');

          alert('登陆失败')
        }
      })
    }
  }

}
</script>

<style>
</style>