<template>
 <div> 
  <h1>Show Hobby page</h1>
  <ShowHobby/>
 </div>
</template>

<script>
import ShowHobby from "@/components/ShowHobby.vue"
export default {
 name : "ShowHobbyView",
 components : {
  ShowHobby
 },
  mounted : function(){
    if(!localStorage.username){
        this.$router.replace("/login")
    }
  }
}
</script>


