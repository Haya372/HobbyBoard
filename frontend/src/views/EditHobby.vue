<template>
    <div class="edit">
        <div class="title">
            <p>タイトル</p>
            <input type="text" v-model="title">
        </div>
        <div class="content">
            <p>内容</p>
            <textarea class="content" v-model="content"></textarea>
        </div>
        <input type="checkbox" class="secret" v-model="secret">匿名<br/>
        <button v-on:click="submit">投稿</button>
    </div>
</template>

<script>
export default {
    name: 'EditHobby',
    props: ['hobby'],
    data: function(){
        if(this.hobby){
            return {
                title: '',
                content: '',
                secret: false
            }
        }else{
            return {
                title: this.hobby.title,
                content: this.hobby.content,
                secret: false
            }
        }
    },
    methods: {
        submit: function(){
            this.axios.post('/api/submit/hobby',{
                title: this.title,
                content: this.content,
                user_id: this.user_id,
                secret: this.secret
            }).then((res) => {
                if(res.status === 200){
                    alert('OK');
                }else{
                    alert('Server Error');
                }
            }).catch((err) => {
                alert(err);
            });
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