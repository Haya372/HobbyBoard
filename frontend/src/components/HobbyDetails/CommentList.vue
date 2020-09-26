<template>
    <RecycleScroller
        class="scroller"
        :items="list"
        :item-size="32"
        key-field="id"
        v-slot="{ item }"
    >
    <div class="user">
        {{ item.name }}
    </div>
    <div class="comment">
        {{item.content}}
    </div>
    </RecycleScroller>
</template>

<script>
export default {
    name: 'CommentList',
    props: {
        list: Array,
    },
}
</script>

<style scoped>
.scroller{
    text-align: left;
    margin-left: 20%;
}
</style>