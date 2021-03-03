<template>
  <div id="app">
    <div id="nav" v-if="show">
      <router-link to="/">home</router-link> |
      <router-link to="/search">Search</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/edithobby">Post Hobby</router-link> |
      <router-link to="/postGather">Post Gather</router-link> |
      <router-link to="/showHobby">Show Hobby</router-link> |
      <router-link to="/showGather">Show Gather</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  data: function(){
      return {
        show: Boolean
      }
    },
  created: function(){
    /*this.axios.get('/login')
    .then((res) => {
      if (res.status == 200){
        console.log("test",res)
        this.show = true
      }else{
        console.log("test2",res)
      }
    }).catch((err) => {
      console.log(err)
      alert("ログインしてください")
      this.show = false
      this.$router.replace("/login")
      });*/
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
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
