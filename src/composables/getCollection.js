import { ref, watchEffect } from 'vue'
import { db } from '../firebase/config.js'

function getCollection(collection) {
  const documents = ref(null)
  const error = ref(null)
  let collectionRef = db.collection(collection)
    .orderBy('createdAt', 'desc')
    .limit(10)

  const unsub = collectionRef.onSnapshot(snap => {
    let results = []
    snap.docs.forEach(doc => {
      doc.data().createdAt && results.unshift({...doc.data(), id: doc.id})
    })
    documents.value = results
    error.value = null
  }, err => {
    console.log(err.message)
    documents.value = null
    error.value = 'could not fetch data'
  })

  watchEffect(onInvalidate => {
    onInvalidate(() => unsub())
  })

  return { documents, error }
}

export default getCollection