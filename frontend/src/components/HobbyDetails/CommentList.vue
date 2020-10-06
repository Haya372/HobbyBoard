<template>
    <RecycleScroller
        class="scroller"
        :items="list"
        :item-size="32"
        key-field="id"
        v-slot="{ item }"
    >
    <Comment v-bind:item="item" v-bind:id="id"></Comment>
    </RecycleScroller>
</template>

<script>
import Comment from '@/components/HobbyDetails/Comment.vue'

export default {
    name: 'CommentList',
    props: {
        list: Array,
        id: Number,
    },
    components: {
        Comment,
    },
    watch: {
        list: function(newValue){
            this.list = newValue;
        },
        id: function(newValue){
            this.id = newValue;
        }
    }
}
</script>

<style scoped>
.scroller{
    text-align: left;
    margin-left: 20%;
}

.info{
    display: flex;
}

.user{
    width: 30%;
}

.good .bad{
    width: 15%;
    margin-right: 10%;
}

</style>