<template>
    <div class="content">
        <div class="title">
            <h1>{{title}}</h1>
            <div class="editbutton">
                <button v-on:click="edit">編集</button>
            </div>
        </div>
        <div class="editor">投稿者： {{username}}</div>
        <p class="text">{{content}}</p><br/>
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

.editor{
    clear: both;
    text-align: left;
}

.text{
    font-size: 28px;
}
</style>