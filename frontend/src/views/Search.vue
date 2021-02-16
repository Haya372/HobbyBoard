<template>
  <div>
    <h1>検索ページ</h1>
    <Search></Search>
  </div>
</template>

<script>
import Search from "../components/Search/search";
export default {
  components: {
        Search,
    },
  mounted : function(){
    if(!localStorage.username){
        this.$router.replace("/login")
    }
  }
}
</script>