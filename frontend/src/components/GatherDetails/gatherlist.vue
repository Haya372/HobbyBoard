<template>
    <div>
        <div
            class="gathertitle"
            v-for="contentlist in content" 
            :key="contentlist.title"
            >
            <router-link :to="`/gather/${contentlist.user_id}`">
                <h1>{{ contentlist.title }}</h1>
                <ul class="gathercontent">
                    <li>募集内容:{{ contentlist.content }}</li>
                    <li>作成日時:{{ contentlist.createdAt }}</li>
                </ul>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Content',
    props: {
        detail: Object
    },
    data: function(){
        return {
            content: this.detail,
            test: '',
            contentlist: {}
            
        };
    },
    computed: {
        // 作成時刻 2020-10-26T07:09:25.000Z"
    },
    watch: {
        detail: function(newValue){
            this.content = newValue;
        }
    }
}
</script>

<style scoped>
.gathertitle{
    background-color:silver;
    padding: 20;
    margin: 30;
    box-shadow: 6px 6px black;
}

.gathercontent{
    text-align: left;
}
</style>