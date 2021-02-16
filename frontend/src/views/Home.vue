<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <h1>login-information</h1>
    <h2>username:{{ username }}</h2>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  data: function(){
    return {
      username: ""
    }
  },
  mounted : function(){
    if(!localStorage.username){
        this.$router.replace("/login")
    }
    this.username = localStorage.username
  }
}
</script>
