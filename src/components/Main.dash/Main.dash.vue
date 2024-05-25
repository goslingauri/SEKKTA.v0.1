<script setup>
import loginModal from './login/login.modal.vue';
import { store } from '../../js/store';
function showLogin(){
    store.commit('triggerModal')
}
</script>

<template>
  <div class="main-title">
    <h1>[SEKKTA]</h1>
    <button @click="showLogin">>shesvla</button>
    <div class="hide" v-if="store.state.showmodal">
        <loginModal/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.main-title{
    display: flex;
    flex-direction: column;
 
    h1{
        font-size: 4vw;
        color: rgb(5, 255, 0);
    }

    button{
        background: none;
        border: none;
        color: rgb(5, 255, 0);
        font-size: 1.5vw;
        cursor: pointer;
    }
}
</style>
