<template>
  <div id="app">
    <p v-for="(user, i) in users" :key="i">
        {{user.name}}
    </p>
  </div>
</template>

<script>
export default {
  props:['users'],
  data() {
    return {
      message: "Users"
    }
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
