<template>
  <div class="hello">
    <h1>{{ msg }}-{{title}}</h1>
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld02',
  props: {
    msg: String,
    title:String
  }
}
</script>

 