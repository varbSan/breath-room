<template>
  <div class="chat-window" > 
    <div v-if="documents" class="messages" ref="messages">
      <div class="single" v-for="doc in formattedDocuments" :key="doc.id">
          <span class="created-at">{{ doc.createdAt }}</span>
          <span class="name">{{ doc.name }}</span>
          <span class="message">{{ doc.message }}</span>
      </div>
    </div>
    <div v-if="error">{{ error }}</div>
  </div>
</template>

<script setup>
import getCollection from '../composables/getCollection.js'
import { formatDistanceToNow } from 'date-fns'
import { computed, onUpdated, ref } from '@vue/runtime-core'


const { documents, error } = getCollection('messages')
const messages = ref(null)
onUpdated(() => {
  if(messages.value) messages.value.scrollTop = messages.value.scrollHeight
}) 


const formattedDocuments = computed(() => {
  return documents.value.map(doc => {
    let time = formatDistanceToNow(doc.createdAt.toDate())
    return {...doc, createdAt: time}
  })
})
</script>

<style scoped>
  .chat-window {
    background-color: transparent;
    padding: 1rem 2rem;
    text-align: start;
  }
  .single {
    margin: 18px 0;
  }
  .created-at {
    display: block;
    color: #999;
    font-size: 12px;
    margin-bottom: 4px;
  }
  .name {
    font-weight: bold;
    margin-right: 6px;
  }
  .messages {
    max-height: 40vh;
    overflow: auto;
  }
</style>