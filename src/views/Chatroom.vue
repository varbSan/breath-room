<template>
  <h1>Breath Room</h1>
  <div class="container">
    <Navbar />
    <ChatWindow />
    <NewChatForm />
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
import NewChatForm from '../components/NewChatForm.vue'
import ChatWindow from '../components/ChatWindow.vue'

import { useRouter } from 'vue-router'
import getUser from '../composables/getUser.js'
import { watchEffect } from '@vue/runtime-core'

const router = useRouter()
const { user } = getUser()


watchEffect(() => {
  if(!user.value) {
    exitChatroom()
  }
})

function exitChatroom() {
  router.push({name: 'Welcome'})
  console.log(user)
}
</script>

<style lang="scss">
 
  .welcome {
    text-align: center;
    padding: 1rem 0;
  }
  .welcome span{
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
  }
  .welcome button {
    margin: 20px auto;
  }

</style>
