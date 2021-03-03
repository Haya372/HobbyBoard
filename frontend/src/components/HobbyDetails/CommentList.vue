<template>
    <div id="lists">
        <div class="list" v-for="item in list" :key="item.id">
        <Comment class="comment" v-bind:item="item" v-bind:id="id"></Comment>
        </div>
    </div>
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
.lists{
    text-align: left;
}
.comment{
    height: 10%;
}
</style>