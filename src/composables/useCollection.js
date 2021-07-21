import { ref } from 'vue'
import { db } from '../firebase/config.js'

function useCollection(collection) {
  const error = ref(null)
  async function addDoc(doc) {
    error.value = null
    try {
      await db.collection(collection).add(doc)
    }
    catch(err) {
      console.error(err.message)
      error.value = 'Could not send the message'
    }
  }
  return { addDoc, error }
}

export default useCollection