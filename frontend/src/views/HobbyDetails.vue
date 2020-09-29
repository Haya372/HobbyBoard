<template>
    <div class="HobbyDetail">
        <Content v-bind:detail="hobby" v-on:edited="onedited"></Content>
        <CommentList v-bind:list="testData" v-bind:id="hobby.id"></CommentList>
        <div class="inputform">
            <input type="text" class="comment" v-model="comment">
            <div class="secret">
                <input type="checkbox" v-model="secret">匿名
            </div>
            <button class="submit" v-on:click="submitclick">送信</button>
        </div>
    </div>
</template>

<script>
import Content from '@/components/HobbyDetails/Content.vue'
import CommentList from '@/components/HobbyDetails/CommentList.vue'

export default {
    name: 'HobbyDetails',
    components: {
        Content,
        CommentList
    },
    data: function(){
        return {
            hobby: {
                id: 1,
                title: 'title',
                username: 'user1',
                content: 'test',
                good: 1,
                bad: 0
            },
            testData: [{
                id: '1',
                username: '1',
                comment: 'hoge',
                secret: false,
                good: 2,
                bad: 5
            },{
                id: '2',
                username: '2',
                comment: 'hoge',
                secret: true,
                good: 2,
                bad: 5
            },{
                id: '3',
                username: '3',
                comment: 'hoge',
                secret: true,
                good: 2,
                bad: 5
            }],
            comment: '',
            secret: false
        };
    },
    methods: {
        submitclick: function(){
            this.axios.post('/api/add/comments/hobby', {
                hobby_id: this.hobby.id,
                user_id: this.user_id,
                comment: this.comment,
                secret: this.secret
            }).then((res) => {
                this.testData = res;
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
</style>