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
                <button v-on:click="clickgood">いいね</button>：{{ comment.good }}
            </div>
            <div class="bad">
                <button v-on:click="clickbad">よくないね</button>：{{ comment.bad }}
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
            this.axios.put('/api/good/' + this.id)
            .then((res) => {
                if(res.status === 200){
                    this.comment.good++;
                }else{
                    alert('Server Error');
                }
            })
            .catch((e) => alert(e));
        },
        clickbad: function(){
            this.axios.put('/api/bad/' + this.id)
            .then((res) => {
                if(res.status === 200){
                    this.comment.bad++;
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
</style>