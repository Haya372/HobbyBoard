<template>
    <div>
        <h1>募集詳細</h1>
        <GatherDetail :gatherdetail="gather"></GatherDetail>
    </div>
</template>


<script>
import GatherDetail from '../components/GatherDetails/gatherdetail'
export default {
    name: 'GatherDetails',
    components: {
        GatherDetail,
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