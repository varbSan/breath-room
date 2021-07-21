<template>
  <div class="welcome container">
    <div v-if="isLoggedIn">
      <h2>Log In to Breath Room</h2>
      <LoginForm @login="enterChatroom"/>
      <p>No account yet? <span @click="isLoggedIn = false">Sign up</span> instead</p>
    </div>
    <div v-else>
      <h2>Sign Up to Breath Room</h2>
      <SignupForm @signup="enterChatroom"/>
      <p>Already registered? <span @click="isLoggedIn = true">Log in</span> instead</p>
    </div>
  </div>
</template>

<script setup>
import SignupForm from '../components/SignupForm.vue'
import LoginForm from '../components/LoginForm.vue'
import { ref } from '@vue/reactivity'
import { useRouter } from 'vue-router'

const isLoggedIn = ref(true)
const router = useRouter()

function enterChatroom() {
  router.push({name: 'Chatroom'})
}

</script>

<style lang="scss">
  .welcome {
    text-align: center;
    padding: 20px 0;
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
