<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/search">Search</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/edithobby">Post Hobby</router-link> |
      <router-link to="/postGather">Post Gather</router-link> |
      <router-link to="/showHobby">Show Hobby</router-link> |
      <router-link to="/login">Login</router-link>|
      <router-link to="/showGather">Show Gather</router-link>
    </div>
    <router-view/>
  </div>
</template>

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
