<template>
    <div class="HobbyDetail">
        <Content v-bind:detail="hobby" v-on:edited="onedited"></Content>
        <CommentList v-bind:list="testData" v-bind:id="this.hobby.id"></CommentList>
        <div class="inputform">
            <input type="text" class="comment" v-model="comment">
            <div class="secret">
                <input type="checkbox" v-model="secret">匿名
            </div>
            <button class="submit" v-on:click="submitclick">
                <i class="far fa-paper-plane"></i>送信
            </button>
        </div>
    </div>
</template>

<script>
import Content from '@/components/HobbyDetails/Content.vue'
import CommentList from '@/components/HobbyDetails/CommentList.vue'

export default {
    name: 'HobbyDetails',
    props: ["id"],
    components: {
        Content,
        CommentList
    },
    data: function(){
        return {
            hobby: {},
            testData: [],
            hobby_id: this.$route.params.id,  // need to change
            comment: '',
            secret: false
        };
    },
    mounted: function(){
        if(!localStorage.username){
            this.$router.replace("/login")
        }        
        this.axios.get('/api/hobby/'+this.hobby_id)
        .then((res) => {
            this.hobby = res.data.hobby;
            this.testData = res.data.comments;
        }).catch((err) => {
            alert(err);
        });
    },
    methods: {
        submitclick: function(){
            if(!this.comment){
                alert('コメントを入力してください');
                return;
            }
            this.axios.post('/api/hobby/add/comments/', {
                hobby_id: this.hobby.id,
                user_id: this.user_id, //need to change
                comment: this.comment,
                secret: this.secret
            }).then((res) => {
                this.testData = res.data;
                this.comment = '';
                this.secret = false;
            }).catch((err) => {
                alert(err);
            });
        },
        onedited: function(newData){
            this.hobby = newData;
        }
    }
}
</script>

<style scoped>
.inputform{
    display: flex;
    margin-left: 20%;
}
.comment {
    text-align: left;
    width: 60%;
}
.secret{
    margin-left: 10px;
    margin-right: 10px;
}
button {
    border-radius: 15px;
    font-weight: bold;
    background: #00ff8c;
    border-color: black;
    color: #2c3e50;
}

button:hover {
    background-color: #008d4e;
}

i {
    color: rgb(255, 255, 255);
    margin-right: 5px;
}
</style>