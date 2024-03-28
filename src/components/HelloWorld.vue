<template>
  <article>
    <p>{{ message }}</p>
  </article>
</template>

<script setup lang="ts">
const message: string = "Hello User!";
</script>

<style scoped>
article {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: lightgrey;
}
p {
  font-size: 14px;
  color: rebeccapurple;
  font-family: sans-serif;
}
</style>
