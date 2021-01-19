<template>
    <div class="comment">
        <div class="info">
            <div class="user" v-if="item.secret">
                匿名ユーザー
            </div>
            <div class="user" v-else>
                {{ comment.username }}
            </div>
            <div class="good">
                <button v-on:click="clickgood">
                    <i class="far fa-thumbs-up"></i>いいね
                </button>：{{ comment.good }}
            </div>
            <div class="bad">
                <button v-on:click="clickbad">
                    <i class="far fa-thumbs-up"></i>よくないね
                </button>：{{ comment.bad }}
            </div>
        </div>
        <div class="comment">
            {{ comment.comment }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'Comment',
    props: ['item', 'id'],
    data: function(){
        return {
            comment: this.item,
        };
    },
    methods: {
        clickgood: function(){
            this.axios.put('/api/hobby/comment/good/' + this.id)
            .then((res) => {
                if(res.status === 200){
                    console.log("確認",res)
                    this.comment.good = res.data[0].good;
                }else{
                    alert('Server Error');
                }
            })
            .catch((e) => alert(e));
        },
        clickbad: function(){
            this.axios.put('/api/hobby/comment/bad/' + this.id)
            .then((res) => {
                if(res.status === 200){
                    this.comment.bad = res.data[0].bad;
                }else{
                    alert('Server Error');
                }
            })
            .catch((e) => console.log(e));
        }
    },
    watch: {
        item: function(newValue){
            this.comment = newValue;
        }
    }
}
</script>

<style scoped>
.info{
    display: flex;
}

.user{
    width: 30%;
}

.good .bad{
    width: 15%;
}

.good {
    margin-right: 10%;
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