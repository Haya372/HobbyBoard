<template>
    <div class="content">
        <h1>{{title}}</h1>
        <div id="user">
            <div align="left">投稿者：{{username}}</div>
            <div align="right">
                <button v-on:click="edit">編集</button>
            </div><br/>
        </div>
        <p>{{content}}</p><br/>
    </div>
</template>

<script>
export default {
    name: 'Content',
    data: function(){
        return {
            title: 'title',
            username: 'user1',
            content: 'test'
        };
    },
    methods: {
        edit: function(){
            alert('edit button clicked')
        }
    }
}
</script>

<style>
#user{
    padding: 30px;
}

</style>