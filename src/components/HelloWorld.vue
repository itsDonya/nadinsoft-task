<template>
  <article class="w-screen h-screen flex items-center justify-center">
    <a-button type="primary" class="flex items-center justify-center gap-4"
      >centered button using <span class="font-bold underline"> AntDV </span> &
      <span class="font-bold underline"> TailwindCSS </span></a-button
    >
  </article>
</template>

<script lang="ts">
import { Button } from "ant-design-vue";

export default {
  components: {
    "a-button": Button,
  },
};
</script>
