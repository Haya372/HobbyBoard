<template>
    <div class="GatherList">
        <Gatherlist :detail="gather" @edited="onedited"></Gatherlist>
    </div>
</template>

<script>
import Gatherlist from '../components/GatherDetails/gatherlist'

export default {
    name: 'GatherList',
    components: {
        Gatherlist,
    },
    data: function(){
        return {
            gather: {},
            testData: [],
            gather_id: 1,  // need to change
            comment: '',
            secret: false
        };
    },
    mounted: function(){
        this.axios.get('/api/gather/lists')
        .then((res) => {
            this.gather = res.data;
            this.testData = res.data.comments;
            console.log("this.gather",this.gather)
        }).catch((err) => {
            alert(err);
        });
    },
}
</script>