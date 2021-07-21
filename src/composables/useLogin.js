import { ref } from 'vue'
import { auth } from '../firebase/config.js'

const error = ref(null)

async function login(email, password) {
  error.value = null

  try {
    const res = await auth.signInWithEmailAndPassword(email, password)
    if(!res) {
      throw new Error('Could not complete login')
    }
    error.value = null
    
    return res

  } catch(err) {
    console.error(err.message)
    error.value = 'Login denied. Credentials are probably incorrect.'
  }
}

function useLogin() {
  return { error , login }
}

export default useLogin