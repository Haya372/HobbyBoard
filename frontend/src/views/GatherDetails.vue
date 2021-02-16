<template>
    <div>
        <!--  -->
        <GatherDetail :detail="gather"></GatherDetail>
        <!-- dbにgatherコメント未実装 -->
        <!-- <CommentList v-bind:list="testData" v-bind:id="this.hobby.id"></CommentList> -->
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
import GatherDetail from '../components/GatherDetails/Content'
// import CommentList from '../components/HobbyDetails/CommentList.vue'

export default {
    name: 'GatherDetails',
    components: {
        GatherDetail,
        // CommentList
    },
    data: function(){

        return {
            gather: {},
            testData: [],
            gather_id: this.$route.params.id,  // need to change
            comment: '',
            secret: false
        };
    },
    computed: {

    },
    mounted: function(){
        if(!localStorage.username){
            this.$router.replace("/login")
        }
        this.axios.get('/api/gather/lists')
        .then((res) => {
            // console.log("確認用gatherdetail_id",gather_id)
            this.gather = res.data;
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
            //コメントの実装が必要そう
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
    },
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