<template>
    <div id="HobbyList">
        <div class="container">
            <div v-if="hobby_list.length==0">投稿はありません</div>
            <div v-else v-for="hobby in hobby_list" :key="hobby.id">
                <div class="card">
                    <router-link v-bind:to="'/hobbydetail/' + hobby.id" v-bind:id="hobby.id"><h3 class="card-header">{{ hobby.title }}</h3></router-link>
                    <div class="card-body">
                        <div class="content">{{ hobby.content }}</div>
                        <router-link class="edit" v-bind:to="'/edithobby/' + hobby.id">編集</router-link>
                    </div>
                </div>
            </div>
            <br>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HobbyList',
    data : function(){
        return {
        hobby_list : []
    }
    },
    props: ['user_id'],
    watch: {
        user_id: function(newValue) {
            this.user_id = newValue;
            let that = this;
                this.axios.get("/api/hobby/lists/" + this.user_id).then((res) => {
                that.hobby_list = res.data;
            }).catch((err) =>{
                console.log(err);
            });
        }
    }
}
</script>

<style scoped>
a .edit{
    width: 50px;
}
</style>
