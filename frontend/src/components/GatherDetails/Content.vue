<template>
    <div class="content">
        <div class="title">
            <h1>{{content.title}}</h1>
            
            <div class="editbutton">
                <router-link to="/edithobby" v-bind:gather="content">
                <i class="fas fa-edit"></i>編集
            </router-link>
            </div>
        </div>
        <div class="editor">投稿者： ダミー</div>
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
        console.log("data")
        return {
            content: this.detail,
            gatherinfo: this.$route.params
        };
    },
    methods: {
        edit: function(){
            this.content.title = 'change';
            this.$emit('edited', this.content);
        },
        //need to change
        clickgood: function(){
            // console.log("contentid",this.gatherinfo.id)
            this.axios.put('/api/gather/good/'+this.gatherinfo.id)
            .then((res) => {
                if(res.status === 200){
                    this.content.good = res.data.good;
                    console.log("clickgood")
                    console.log("確認",res)
                    console.log("data",res.data.good)
                }else{
                    console.log('Server Error');
                }
            })
            .catch((e) => alert(e));
        },
        clickbad: function(){
            this.axios.put('/api/gather/bad/'+this.gatherinfo.id)
            .then((res) => {
                if(res.status === 200){
                    this.content.bad = res.data.bad;
                }else{
                    console.log('Server Error');
                }
            })
            .catch((e) => console.log(e));
        },
    },
    watch: {
        detail: function(newValue){
            const gatherdata = newValue.filter(g => g.id ===  Number(this.gatherinfo.id));
            this.content = gatherdata[0]
            // console.log("watch",this.content,"value",newValue)
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