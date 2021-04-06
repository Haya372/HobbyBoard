<template>
  <div id="app">
    <div id="nav" v-if="$store.state.auth.userId !== ''">
      <router-link to="/">home</router-link> |
      <router-link to="/search">Search</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/edithobby/new">Post Hobby</router-link> |
      <router-link to="/postGather">Post Gather</router-link> |
      <router-link to="/showHobby">Show Hobby</router-link> |
      <router-link to="/showGather">Show Gather</router-link> |
      <router-link to="/Mypage">Mypage</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {

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
