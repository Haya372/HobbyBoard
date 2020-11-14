<template>
    <div id="ShowHobby">
    <div class="container">
        <!-- <h1 v-if="hobby.length">Hobby list</h1>
        <h1 v-else>No openings. </h1> -->
        <!-- <div v-for="hobbytest in hobby" :key="hobbytest.id"> -->
            <router-link :to="`/hobby/${hobby.user_id}`">
                    <div class="card">
                    <h3 class="card-header">{{ hobby.title }}</h3>
                    <div class="card-body">{{ hobby.content }}</div>
                    </div>
            </router-link>
        <!-- </div> -->
        <br>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ShowHobby',
    data: function(){
        return {
            hobby: {},
            hobby_id: 1,  // need to change
            comment: '',
            secret: false
        };
    },
    mounted: function(){
         //need to change
            this.axios.get('/api/hobby/'+this.hobby_id)
            .then((res) => {
                this.hobby = res.data.hobby;
                console.log("hobbylist",this.hobby)
            }).catch((err) => {
                alert(err);
            });
    },
}
</script>

<style scoped>
</style>
