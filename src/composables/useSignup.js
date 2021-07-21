import { ref } from 'vue'
import { auth } from '../firebase/config.js'

const error = ref(null)

const signup = async (email, password, displayName) => {
  error.value = null

  try {
    const res = await auth.createUserWithEmailAndPassword(email, password)
    if(!res) {
      throw new Error('Could not complete the signup')
    }
    await res.user.updateProfile({ displayName })
    error.value = null
    
    return res

  } catch(err) {
    console.error(err.message)
    error.value = err.message

  }
}

const useSignup = () => {
  return { error , signup }
}

export default useSignup