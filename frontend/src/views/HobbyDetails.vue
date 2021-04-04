<template>
    <div class="HobbyDetail">
        <div class="content">
            <div class="card">
                <div class="card-body">
                    <router-link to="/showHobby">一覧へ戻る</router-link>
                    <h2 class="card-title">{{hobby.title}}</h2>
                    <h6 class="card-subtitle mb-2 text-muted" v-if="hobby.secret">投稿者 : 匿名ユーザー</h6>
                    <h6 class="card-subtitle mb-2 text-muted" v-else>投稿者 : {{hobby.username}}</h6>
                    <p class="card-text">
                        {{hobby.content}}
                    </p>
                    <div class="reputation">
                        <div class="reputation-button">
                            <button v-on:click="clickgood">
                                <i class="far fa-thumbs-up"></i>
                            </button>：{{ hobby.good }}
                        </div>
                        <div class="reputation-button">
                            <button v-on:click="clickbad">
                                <i class="far fa-thumbs-down"></i>
                            </button>：{{ hobby.bad }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="comments" v-if="comments.length"><CommentList v-bind:list="comments" v-bind:id="this.hobby.id"></CommentList></div>
		<div class="comments" v-else>まだコメントはありません。</div>
        <div class="input-group">
            <input type="text" class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1" v-model="comment">
            <div class="input-group-append">
                <button class="btn btn-success" type="button" v-on:click="submitClick">送信</button>
            </div>
            <div class="secret">
                <input type="checkbox" v-model="secret">匿名でコメント
            </div>
        </div>
    </div>
</template>

<script>
import CommentList from '@/components/HobbyDetails/CommentList.vue'

export default {
    name: 'HobbyDetails',
    props: ["id"],
    components: {
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
                this.comments = res.data.comments;
                this.comment = '';
                this.secret = false;
            }).catch((err) => {
                alert(err);
            });
        },
        onEdited: function(newData){
            this.hobby = newData;
        },
        clickgood: function(){
            this.axios.put('/api/hobby/good/'+this.hobby.id)
            .then((res) => {
                if(res.status === 200){
                    this.hobby.good = res.data[0].good;
                    // console.log("確認",res)
                }else{
                    console.log('Server Error');
                }
            })
            .catch((e) => alert(e));
        },
        clickbad: function(){
            this.axios.put('/api/hobby/bad/'+this.hobby.id)
            .then((res) => {
                if(res.status === 200){
                    this.hobby.bad = res.data[0].bad;
                }else{
                    console.log('Server Error');
                }
            })
            .catch((e) => console.log(e));
        }
    }
}
</script>

<style scoped>
.inputform{
    display: flex;
    margin-left: 5%;
	margin-left: 5%;
	font-size: 24px;
}
.comment {
    text-align: left;
    width: 75%;
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
.title{
    display: flex;
    border-bottom: solid;
    border-top: solid;
    border-color: #3b4242;
    border-width: 2px;
    align-items: baseline;
    padding-top: 5px;
    padding-bottom: 5px;
	padding-left: 3%;
	text-align: left;
}
.title h1{
    float: right;
    width: 70%;
    font-weight: bold;
	margin-left: 30px;
}
.content{
    align-items: baseline;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 5%;
    padding-right: 5%;
}
.editor{
    font-size: 18px;
    text-align: left;
    color: #3b4242;
}
p{
    font-size: 24px;
    text-align: left;
}
.reputation {
    display: flex;
}
.reputation .reputation-button{
    padding-right: 20px;
}
.comments{
	height: 600px;
	overflow-y: scroll;
	margin-left: 6%;
    margin-right: 6%;
	margin-bottom: 10px;
	font-size: 24px;
    margin-top: 10px;
    background-color: rgb(236, 236, 236);
}
.input-group {
    padding-left: 5%;
    padding-right: 5%;
}
a {
    float: left;
}
</style>