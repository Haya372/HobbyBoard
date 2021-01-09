<template>
 <div id="ShowGather">
  <div class="container">
   <h1 v-if="gather_list.length">Gather list</h1>
   <h1 v-else>No openings. </h1>

   <div v-for="gather in gather_list" :key="gather.id">
    <div class="card">
      <router-link v-bind:to="'/gatherdetail/' + gather.id" v-bind:id="gather.id"><h3 class="card-header">{{ gather.title }}</h3></router-link>
     <div class="card-body">{{ gather.content }}</div>
    </div>
    <br>
    </div>


  </div>
 </div>
</template>

<script>
export default {
  name: 'ShowGather',
  data : function(){
   return {
    gather_list : []
  }
  },
  mounted : function(){ 
    this.axios.get("api/gather/lists").then((res) => {
      this.gather_list = res.data;
      }).catch((err) =>{
       console.log(err);
       });
            },
}
</script>

<style scoped>
    
</style>