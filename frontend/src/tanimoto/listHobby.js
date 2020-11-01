var app = new Vue({
    el : "#listHobby",
    data : {
        hobby_list : null
    },
    mounted : function(){
        axios.get("/api/gather/lists").then(function(res){
            this.hobby_list = res;
            this.hobby_list = "Halloe";
        }).catch(function(err){
            this.hobby_list = err;
    })
    }
});
