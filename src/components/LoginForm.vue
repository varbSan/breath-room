<template>
  <form @submit.prevent="handleSubmit">
    <input type="email" required placeholder="email" v-model="email">
    <input type="password" required placeholder="password" v-model="password">
    <button>Log in</button>
    <p class="error">{{ error }}</p>
  </form>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import useLogin from '../composables/useLogin.js'

  const emits = defineEmits(['login'])
  const { login, error } = useLogin()
  const email = ref('')
  const password = ref('')

  async function handleSubmit() {
    await login(email.value, password.value)
    if(!error.value) {
      console.log(' user logged in')
      emits('login')
    }
  }
</script>

<style lang="scss" scoped>
/* form styles */
  form {
    width: 300px;
    margin: 20px auto;
  }
  label {
    display: block;
    margin: 20px 0 10px;
  }
  input {
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #eee;
    outline: none;
    color: #999;
    margin: 10px auto;
  }
</style>
