e<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" required placeholder="display name" v-model="displayName">
    <input type="email" required placeholder="email" v-model="email">
    <input type="password" required placeholder="password" v-model="password">
    <button>Sign Up</button>
    <p v-show="error" class="error"> {{ error }} </p>
  </form>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import useSignup from '../composables/useSignup.js'

  const emits = defineEmits(['signup'])
  const { signup, error } = useSignup()
  const displayName = ref('')
  const email = ref('')
  const password = ref('')

  const handleSubmit = async () => {
    await signup(email.value, password.value, displayName.value)
    if(!error.value) {
      console.log('User signed up')
      emits('signup')
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
