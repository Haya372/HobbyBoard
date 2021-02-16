<template>
  <div id="app">
    <div v-if="show">
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/search">Search</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/edithobby">Post Hobby</router-link> |
        <router-link to="/postGather">Post Gather</router-link> |
        <router-link to="/showHobby">Show Hobby</router-link> |
        <router-link to="/showGather">Show Gather</router-link>|
        <router-link to="/logout">Logout</router-link> 
      </div>
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
  updated: function(){
    // console.log("before",this.show)
    if(!localStorage.username){
      this.show = false
    }
    else{
      this.show = true
    }
    // console.log("next",this.show)
  },

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
  /* width: 85%;
  float:left; */
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
