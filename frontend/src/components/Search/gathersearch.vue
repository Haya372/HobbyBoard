<template>
    <div>
        <input type="text" v-model="keyword">
        <button @click="search">検索</button>
        <div>
            <input type="checkbox" v-model="gatherchange">趣味の募集を検索
            <input type="checkbox" v-model="hobbychange">趣味の投稿を検索
        </div>
        <div v-if="gatherchange===true">
            <div v-for="gatherdataset in gatherdatalist" :key="gatherdataset.user_id">
                <router-link :to="`/gather/${gatherdataset.user_id}`">
                    <div class="card">
                        <h3 class="card-header">タイトル：{{ gatherdataset.title }}</h3>
                        <div class="card-body">内容：{{ gatherdataset.content }}</div>
                    </div>
                </router-link>
            </div>
        </div> 
        <div v-if="hobbychange===true">
            <div v-for="hobbydataset in hobbydatalist" :key="hobbydataset.user_id">
                <router-link :to="`/hobby/${hobbydataset.user_id}`">
                    <div class="card">
                        <h3 class="card-header">タイトル：{{ hobbydataset.title }}</h3>
                        <div class="card-body">内容：{{ hobbydataset.content }}</div>
                    </div>
                </router-link>
            </div>
        </div>           
    </div>
</template>

<script>
export default {
    data() {
        return{
    keyword: '',
    gatherdatalist: {},
    hobbydatalist: {},
    hobbychange: false,
    gatherchange: false,
        }
}, 
methods:{
     search(){
         if (this.gatherchange === true){
            this.axios.get('/api/gather/search/'+this.keyword)
            .then((res) => {
                this.gatherdatalist = res.data;
                console.log("this.gather",this.gatherdatalist)
            }).catch((err) => {
                alert(err);
            });
        }
        if (this.hobbychange === true){
            this.axios.get('/api/hobby/search/'+this.keyword)
            .then((res) => {
                this.hobbydatalist = res.data;
                console.log("this.hobby",this.hobbydatalist)
            }).catch((err) => {
                alert(err);
            });            
        }
    }
},
}
</script>

<style scoped>
</style>