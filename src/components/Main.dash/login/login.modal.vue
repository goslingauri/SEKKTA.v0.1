<script setup>
import { store } from '../../../js/store';
import loginForm from './login.form.vue';
function closeModal(){
    store.commit("triggerModal")
}
</script>

<template>
<div class="modal">
    <div class="modal-content">
        <span class="close" @click="closeModal">&times;</span>
        <loginForm/>
    </div>
</div>
</template>

<style lang="scss">
.modal { 
  position: fixed; 
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 2;
  top: 0;
  width: 50%; /* Full width */
  height: 50%; /* Full height */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  
  .modal-content {
        margin: auto;
        padding: 20px;
        border: 2px solid rgb(5, 255, 0);
        width: 80%;
        .close {
            color: #aaaaaa;
            float: right;
            font-size: 28px;
            font-weight: bold;

            &:hover{
                color: #000;
                text-decoration: none;
                cursor: pointer;
            }
        }
    }
}
</style>