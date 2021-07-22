<template>
  <form>
    <textarea
      placeholder="Share a thought..." 
      v-model="message"
      @keypress.enter.prevent="handleSubmit"
    ></textarea>
    <div class="error"> {{ error }}</div>
  </form>
</template>

<script setup>
import getUser from '../composables/getUser.js'
import useCollection from '../composables/useCollection.js'
import { timestamp } from '../firebase/config.js'
import { ref } from 'vue'

const { user } = getUser()
const { addDoc, error } = useCollection('messages')
// refs
const message = ref('')
const handleSubmit = async () => {
  const chat = {
    name: user.value.displayName,
    message: message.value,
    createdAt: timestamp()
  }

  await addDoc(chat)
  if(!error.value) message.value = '' 
  console.log(chat)
  message.value = ''
}
</script>

<style scoped>
  form {
    margin: 10px;
  }
  textarea {
    width: 100%;
    max-width: 100%;
    margin-bottom: 6px;
    padding: 10px;
    background-color: transparent;
    box-sizing: border-box;
    border: 0;
    border-radius: 20px;
    font-family: inherit;
    outline: none;
  }
</style>