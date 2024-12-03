<template>
  <div>
    <p>Hello, {{ name }}!</p>
    <v-btn @click="sayHello">Say Hello</v-btn>
  </div>
</template>

<script setup lang="ts">

const name = ref('World')
const sayHello = () => {
  name.value = 'Vitest!'
}
</script>
