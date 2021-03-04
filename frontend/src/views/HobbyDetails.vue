<template>
    <div class="HobbyDetail">
        <div class="title">
            <!-- あとでアイコンに変更-->
            <router-link to="/showHobby">戻る</router-link>
            <h1>{{hobby.title}}</h1>
        </div>
        <div class="content">
            <div class="editor">投稿者： {{hobby.username}}</div>
            <p class="text">{{hobby.content}}</p>
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
        <div class="comments" v-if="testData.length"><CommentList v-bind:list="testData" v-bind:id="this.hobby.id"></CommentList></div>
		<div class="comments" v-else>まだコメントはありません。</div>
        <div class="inputform">
			コメント：
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
            testData: [],
            hobby_id: this.$route.params.id,  // need to change
            comment: '',
            secret: false
        };
    },
    mounted: function(){
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
	margin-left: 3%;
    margin-right: 3%;
	padding-left: 3%;
	padding-right: 3%;
	border: double;
	margin-top: 10px;
	margin-bottom: 10px;
	font-size: 24px;
}
</style>