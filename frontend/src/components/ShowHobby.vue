<template>
 <div id="ShowHobby">
  <div class="container">
   <h1 v-if="hobby_list.length">Hobby list</h1>
   <h1 v-else>No openings. </h1>

   <div v-for="hobby in hobby_list" :key="hobby.id">
    <div class="card">
      <router-link v-bind:to="'/hobbydetail/' + hobby.id" v-bind:id="hobby.id"><h3 class="card-header">{{ hobby.title }}</h3></router-link>
     <div class="card-body">{{ hobby.content }}</div>
    </div>
    <br>
    </div>


  </div>
 </div>
</template>

<script>
export default {
  name: 'ShowHobby',
  data : function(){
   return {
hobby_list : []
  }
  },
  mounted : function(){
    // I replace /api/hobby/lists with /api/gather/lists for test because I cannot find /api/hobby/lists. In the production environment gather -> hobby. 
    this.axios.get("/api/hobby/lists").then((res) => {
      this.hobby_list = res.data;
      }).catch((err) =>{
       console.log(err);
       });
            },
}
</script>

<style scoped>
</style>
