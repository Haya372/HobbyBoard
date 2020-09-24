<template>
    <div class="HobbyDetail">
        <Content></Content>
        <CommentList v-bind:list="testData"></CommentList>
    </div>
</template>

<script>
import Content from '@/components/HobbyDetails/Content.vue'
import CommentList from '@/components/HobbyDetails/CommentList.vue'

export default {
    name: 'HobbyDetails',
    components: {
        Content,
        CommentList
    },
    data: function(){
        return {
            testData: [{
                id: '1',
                name: '1',
                content: 'hoge',
            },{
                id: '2',
                name: '2',
                content: 'hoge',
            },{
                id: '3',
                name: '3',
                content: 'hoge',
            }]
        };
    }
}
</script>