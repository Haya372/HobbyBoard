<template>
    <div>
        <div
            class="gathertitle"
            v-for="testdetail in testdata" 
            :key="testdetail.title"
            >
            <div v-if="testdetail.id == testid.id">
                <div class="title">
                    <h1>{{testdetail.title}}</h1>
                    <!--ユーザーの判別条件をv-ifでつける-->
                    <div class="editbutton">
                        <router-link to="/edithobby" >編集</router-link>
                    </div>
                </div>
                <div class="editor">投稿者： {{testdetail.username}}</div>
                <p class="text">{{testdetail.content}}</p>
                <div class="reputation">
                    <div class="good">
                        <button v-on:click="clickgood">いいね</button>：{{ testdetail.good }}
                    </div>
                    <div class="bad">
                        <button v-on:click="clickbad">よくないね</button>：{{ testdetail.bad }}
                    </div>
                </div>
            </div>
        </div>    
    </div>
</template>


<script>
export default {
    name: 'gather',
    props: {
        gatherdetail: {
            type: Object,
            default(){
                return {
                    test: "test"
                }
            }
        }
    },
    data: function(){
        return {
            testdata: this.gatherdetail,
            testid: this.$route.params
        };
    },
    methods: {
        test(){
            console.log(this.$route.params)
        },
        show(){
            this.testdata.id = this.testid.id
        }
    },
    watch: {
        gatherdetail: function(newValue){
            this.testdata = newValue;
        }
    }
}
</script>

<style scoped>
.gathertitle{
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

.reputation {
    display: flex;
    padding-bottom: 60px;
    padding-top: 30px;
}

.good {
    margin-right: 20%;
}
</style>