<template>
    <div class="card">
        <div class="card-body">
            <h6 class="card-subtitle mb-2 text-muted" v-if="comment.secret">匿名ユーザー</h6>
            <h6 class="card-subtitle mb-2 text-muted" v-else>{{comment.username}}</h6>
            <p class="card-text">
                {{comment.comment}}
            </p>
            <div class="reputation">
                <div class="reputation-button">
                    <button v-on:click="clickgood">
                        <i class="far fa-thumbs-up"></i>
                    </button>：{{ comment.good }}
                </div>
                <div class="reputation-button">
                    <button v-on:click="clickbad">
                        <i class="far fa-thumbs-down"></i>
                    </button>：{{ comment.bad }}
                </div>
            </div>
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

.reputation {
    display: flex;
}
.reputation .reputation-button{
    padding-right: 20px;
}

i {
    color: rgb(255, 255, 255);
    margin-right: 5px;
}

.card-subtitle {
    text-align: left;
}

.card {
    background-color: rgb(236, 236, 236);
}
</style>