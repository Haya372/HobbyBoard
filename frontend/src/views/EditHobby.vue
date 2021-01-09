<template>
    <div class="container">
        <div class="card">
            <h3 class="card-header">趣味投稿</h3>
            <div class="card-body">
                <form>
                    <div class="form-group">
                        <label for="title">タイトル</label>
                        <input type="text" class="form-control" name="title" id="title" placeholder="タイトル" v-model="item.title">
                    </div>
                    <div class="form-group">
                        <label for="content">内容</label>
                        <textarea class="form-control" name="content" id="content" placeholder="内容" v-model="item.content"></textarea>
                    </div>
                    <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" name="is_secret" id="is_secret">
                        <label class="custom-control-label" for="is_secret">匿名</label>
                    </div>
                    <input type="hidden" name="user_id" value="">
                    <br>
                    <button v-bind:disabled="isMovable" type="button" class="btn btn-primary" v-on:click="submit">投稿</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'EditHobby',
    props: ["id"],
    data: function(){
        return {
            hobby_id: this.$route.params.id,
            item: {
                    id: -1,
                    user_id: this.user_id, // need to change
                    title: '',
                    content: '',
                    good: 0,
                    bad: 0,
                    secret: false,
            }
        };
    },
    computed: {
        isMovable: function(){
            if(!this.item) return false;
            return (this.item.title.length == 0) || (this.item.content.length == 0);
        }
    },
    methods: {
        submit: function(){
            if(this.item.id === -1){
                this.axios.post('/api/submit/hobby', this.item).then((res) => {
                    if(res.status === 200){
                        alert('OK'); // need to change
                    }else{
                        alert('Server Error');
                    }
                }).catch((err) => {
                    alert(err);
                });
            }else{
                this.axios.put('/api/update/articles/hobby/' + this.item.id, {
                    user_id: this.user_id, // need to change
                    title: this.item.title,
                    content: this.item.content,
                    good: this.item.good,
                    bad: this.item.bad,
                    secret: this.item.secret
                }).then((res) => {
                    if(res.status === 200){
                        alert('OK'); // need to change
                    }else{
                        alert('Server Error');
                    }
                }).catch((err) => {
                    alert(err);
                });
            }
        }
    },
    mounted: function(){
        if(this.hobby_id !== "new"){
            this.axios.get('/api/hobby/' + this.hobby_id).then((res) => {
                if(res.status === 200){
                    this.item = res.data.hobby;
                }
            });
        }
    },
    watch:{
        item: function(newValue){
            this.item = newValue;
        }
    }
}
</script>

<style scoped>
#content{
    height: 20em;
}
</style>