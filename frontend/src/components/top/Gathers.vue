<template>
    <div>
        <!-- <RecycleScroller
            class="scroller"
            :items="gathers"
            :item-size="32"
            key-field="id"
            v-slot="{ item }"
        >
        <div class="item" v-on:click="onclick">{{ item.title }}</div>
        </RecycleScroller> -->
        テスト
        <button @click="test">テスト</button>
        <!-- ここにタイトルとか加えつつコメントは別にコンポーネント作る -->
    </div>
</template>

<script>
// propsをつくって大本のviewの中にaxiousのgetを作る詳しくはhobby見ればいけそう
export default {
    name: 'Gathers',
    data: function(){
        return {
            gathers: []
        }
    },
    mounted: function(){
        this.axios.get('/api/gather/lists').then((res) => {
            this.gathers = res.data;
        }).catch((err) => {
            console.log(err);
        });
    },
    methods: {
        onclick: function(){
            console.log('clicked'); // need to change
        },
        test() {
            console.log("gathers.title")
        }
    }
}
</script>

<style scoped>
.item {
    font-size: 25px;
    border-bottom: solid;
}
</style>