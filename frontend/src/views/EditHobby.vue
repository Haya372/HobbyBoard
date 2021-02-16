<template>
    <div class="edit">
        <div class="title">
            <p>タイトル</p>
            <input type="text" v-model="item.title">
        </div>
        <div class="content">
            <p>内容</p>
            <textarea class="content" v-model="item.content"></textarea>
        </div>
        <input type="checkbox" class="secret" v-model="item.secret">匿名<br/>
        <router-link to="content">
            <button v-bind:disabled="isMovable" v-on:click="submit">投稿</button>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'EditHobby',
    props: {
        hobby: {
            type: Object,
            default: function(){
                return {
                    id: -1,
                    user_id: this.user_id, // need to change
                    title: '',
                    content: '',
                    good: 0,
                    bad: 0,
                    secret: false,
                };
            }
        }
    },
    data: function(){
        return {
            item: this.hobby
        };
    },
    mounted : function(){
        if(!localStorage.username){
            this.$router.replace("/login")
        }
    },
    computed: {
        isMovable: function(){
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
    }
}
</script>

<style scoped>
.edit {
    font-size: 23px;
}
.title {
    font-size: 30px;
}
input {
    width: 60%;
    font-size: 30px;
}
.content{
    font-size: 30px;
}
.content textarea{
    width: 60%;
    height: 15em;
}
.secret{
    width: 3%;
}
button {
    font-size: 25px;
}
</style>