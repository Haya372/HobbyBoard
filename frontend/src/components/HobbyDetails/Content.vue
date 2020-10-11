<template>
    <div class="content">
        <div class="title">
            <h1>{{content.title}}</h1>
            <!--ユーザーの判別条件をv-ifでつける-->
            <div class="editbutton">
                <router-link to="/edithobby" v-bind:hobby="content">
                <i class="fas fa-edit"></i>編集
            </router-link>
            </div>
        </div>
        <div class="editor">投稿者： {{content.username}}</div>
        <p class="text">{{content.content}}</p>
        <div class="reputation">
            <div class="good">
                <button v-on:click="clickgood">
                    <i class="far fa-thumbs-up"></i>いいね
                </button>：{{ content.good }}
            </div>
            <div class="bad">
                <button v-on:click="clickbad">
                    <i class="far fa-thumbs-down"></i>よくないね
                </button>：{{ content.bad }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Content',
    props: {
        detail: Object
    },
    data: function(){
        return {
            content: this.detail
        };
    },
    methods: {
        edit: function(){
            this.content.title = 'change';
            this.$emit('edited', this.content);
        },
        clickgood: function(){
            this.axios.put('/api/hobby/good/'+this.content.id)
            .then((res) => {
                if(res.status === 200){
                    this.content.good++;
                }else{
                    console.log('Server Error');
                }
            })
            .catch((e) => alert(e));
        },
        clickbad: function(){
            this.axios.put('/api/hobby/bad/'+this.content.id)
            .then((res) => {
                if(res.status === 200){
                    this.content.bad++;
                }else{
                    console.log('Server Error');
                }
            })
            .catch((e) => console.log(e));
        }
    },
    watch: {
        detail: function(newValue){
            this.content = newValue;
        }
    }
}
</script>

<style scoped>
.content{
    text-align: left;
    margin-left: 20%;
}

.title{
    display: flex;
    clear: both;
    align-items: baseline;
}

h1 {
    margin-right: 30px;
}

.editbutton{
    text-align: right;
}

.editbutton i {
    margin-right: 5px;
}

.editor{
    clear: both;
    text-align: left;
}

.text{
    font-size: 28px;
}

.reputation {
    display: flex;
    padding-bottom: 60px;
    padding-top: 30px;
}

.good {
    margin-right: 20%;
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

.reputation i {
    color: rgb(255, 255, 255);
    margin-right: 5px;
}


</style>