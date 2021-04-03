<template>
    <div class="mypage">
        <h2>プロフィール</h2>
        <table class="userdata">
            <tr>
                <td class="table-active">usrname</td>
                <td class="table-active">テスト</td>
            </tr>
            <tr>
                <td class="table-default">sex</td>
                <td class="table-default">テスト</td>
            </tr>
            <tr>
                <td class="table-active">age</td>
                <td class="table-active">テスト</td>
            </tr>
        </table>
        <br/>
        <h2>過去の投稿</h2>
    </div>
</template>

<script>

export default {
    name: 'Home',
    components: {
        
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