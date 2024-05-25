<script setup>
</script>

<template>
<div class="form-wrap">
    <form action="submit">
        <input type="text" placeholder="username...">
        <input type="password" placeholder="passwd...">
        <button type="submit">>shesvla</button>
    </form>
</div>
</template>

<style lang="scss">
.form-wrap{
    height: 100%;
    width: 80%;
    form{
        display: flex;
        flex-direction: column;
    }
    input{
        height: 5vh;
        margin-bottom: 2vh;
        background: none;
        outline: none;
        border-bottom: 2px solid rgb(5, 255, 0);
        color: rgb(168, 168, 168);
        font-size: 1.5vw;
    }
    button{
        background: none;
        color: rgb(5, 255, 0);
        font-size: 1.5vw;
        cursor: pointer;
    }
}
</style>