<template>
    <div class="HobbyDetail">
        <Content v-bind:detail="hobby" v-on:edited="onEdited"></Content>
        <CommentList v-bind:list="comments" v-bind:id="this.hobby.id"></CommentList>
        <div class="inputform">
            <input type="text" class="comment" v-model="comment">
            <div class="secret">
                <input type="checkbox" v-model="secret">匿名
            </div>
            <button class="submit" v-on:click="submitClick">
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
            comments: [],
            hobby_id: this.$route.params.id,  // need to change
            comment: '',
            secret: false
        };
    },
    mounted: function(){
        this.axios.get('/api/hobby/'+this.hobby_id)
        .then((res) => {
            this.hobby = res.data.hobby;
            this.comments = res.data.comments;
        }).catch((err) => {
            alert(err);
        });
    },
    methods: {
        submitClick: function(){
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
                this.comments = res.data;
                this.comment = '';
                this.secret = false;
            }).catch((err) => {
                alert(err);
            });
        },
        onEdited: function(newData){
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