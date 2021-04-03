<template>
    <div class="mypage">
        <h2>プロフィール</h2>
        <table class="userdata">
            <tr>
                <td class="table-active">username</td>
                <td class="table-active" v-if="!change">{{this.username}}</td>
                <td class="table-active" v-else><input type="text" v-model="username_edit"></td>
            </tr>
            <tr>
                <td class="table-default">sex</td>
                <td class="table-default" v-if="!change">{{this.sex}}</td>
                <td class="table-default" v-else>
                    <select type="text" v-model="sex_edit">
                        <option>male</option>
                        <option>female</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td class="table-active">age</td>
                <td class="table-active" v-if="!change">{{this.age}}</td>
                <td class="table-active" v-else><input type="number" v-model="age_edit"></td>
            </tr>
        </table>
        <button @click="onEdit" v-if="!change">編集</button>
        <div v-else>
            <button @click="onChange">変更</button>
            <button @click="onUnchange">取り消し</button>
        </div>
        <br/>
        <br/>
        <h2>過去の投稿</h2>
    </div>
</template>

<script>

export default {
    name: 'Home',
    components: {
        
    },
    data: function (){
        return {
            id: "",
            username: "",
            sex: "",
            age: "",
            username_edit: "",
            sex_edit: "",
            age_edit: "",
            change: false
        };
    },
    mounted: function(){
        var that = this;
        this.axios.get('/api/user/Mitomi').then(function (res) { // usernameはvuexで管理できるようになったら変更
            if(res.status === 200){
                that.username = res.data.username;
                that.sex = res.data.sex;
                that.age = res.data.age;
                that.id = res.data.id;
            }
        }).catch(function () {
            alert("ユーザーが見つかりません");
            // ページ遷移を追加で書く
        });
    },
    methods: {
        onEdit: function () {
            this.username_edit = this.username;
            this.sex_edit = this.sex;
            this.age_edit = this.age;
            this.change = true;
        },
        onChange: function(){
            if(!this.username_edit || !this.age_edit || !this.sex_edit){
                alert("空欄が存在します");
                return;
            }
            var that = this;
            this.axios.put('/api/user/' + this.id, {
                username: this.username_edit,
                sex: this.sex_edit,
                age: this.age_edit
            }).then(function(res) {
                if(res.status === 200){
                    that.change = false;
                    that.username = that.username_edit;
                    that.sex = that.sex_edit;
                    that.age = that.age_edit;
                    alert("変更されました");
                }
            }).catch(function (e) {
                console.log(e);
                alert("サーバーエラー");
            });
        },
        onUnchange: function(){
            this.username_edit = this.username;
            this.sex_edit = this.sex;
            this.age_edit = this.age;
            this.change = false;
        }
    }
}
</script>

<style scoped>
.mypage {
    width: 800px;
    margin: auto;
    font-size: 24px;
}
table {
    width: 800px;
}
</style>