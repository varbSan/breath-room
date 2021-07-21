import { ref } from 'vue'
import { auth } from '../firebase/config.js'

const error = ref(null)

async function logout() {
  error.value = null

  try {
    const res = await auth.signOut()
  } catch(err) {
    console.error(err.message)
    error.value = err.message
  }
}

function useLogout() {
  return { error , logout }
}

export default useLogout