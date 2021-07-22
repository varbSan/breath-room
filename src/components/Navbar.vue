<template>
  <nav v-if="user">
    <div>
      <p class="username">{{ user.displayName }}</p>
      <p class="email">{{ user.email }}</p>
    </div>
    <button @click="handleLogout">Logout</button>
  </nav>
</template>

<script setup>
import useLogout from '../composables/useLogout.js'
import getUser from '../composables/getUser.js'

const { logout, error } = useLogout()
const { user } = getUser()

async function handleLogout() {
  await logout()
  if(!error.value) {
    console.log('User is logged out')
  }
}

</script>

<style>
  nav {
    padding: 20px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: start;
  }
  nav p {
    margin: 2px auto;
    font-size: 16px;
    color: hsl(0, 0%, 27%);
  }
  nav p.email {
    font-size: 14px;
    color: hsl(0, 0%, 60%);
  }

  .username {
    font-weight: bold;
    font-size: 2rem;
  }
</style>