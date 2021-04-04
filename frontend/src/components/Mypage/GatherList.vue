<template>
    <div id="GatherList">
        <div class="container">
            <div v-if="gather_list.length==0">投稿はありません</div>
            <div v-else v-for="gather in gather_list" :key="gather.id">
                <div class="card">
                    <router-link v-bind:to="'/gatherdetail/' + gather.id" v-bind:id="gather.id"><h3 class="card-header">{{ gather.title }}</h3></router-link>
                    <div class="card-body">
                        <div class="content">{{ gather.content }}</div>
                        <router-link class="edit" v-bind:to="'/editgather/' + gather.id">編集</router-link>
                    </div>
                </div>
            </div>
            <br>
        </div>
    </div>
</template>

<script>
export default {
    name: 'GatherList',
    data : function(){
        return {
        gather_list : []
    }
    },
    props: ['user_id'],
    watch: {
        user_id: function(newValue) {
            this.user_id = newValue;
            let that = this;
            this.axios.get("/api/gather/lists/" + this.user_id).then((res) => {
                that.gather_list = res.data;
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
