<template>
    <div> 
        <h1> Logout!</h1>
        <button><router-link to="/login">ログインページに戻る</router-link></button>
    </div>
</template>

<script>
export default {
 name : "LogoutView",
 mounted : function(){
    localStorage.removeItem('username');
    // console.log("localStorage",localStorage.username)
 },
}
</script>