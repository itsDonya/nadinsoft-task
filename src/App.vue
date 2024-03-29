<template>
  <div
    class="app-wrapper relative w-screen h-screen flex flex-col items-start justify-start gap-0 bg-black overflow-hidden">
    <img
      class="absolute top-0 left-0 min-w-full min-h-full blur z-10 hue"
      src="/img/backgrounds/white-clouds.jpg"
      alt="Blured Background Image" />

    <!-- app bar -->
    <app-bar></app-bar>

    <a-flex align="center" justify="start" class="w-full h-full z-20">
      <app-sidebar></app-sidebar>

      <div class="app-section relative w-full h-full shadow-xl overflow-hidden">
        <div class="quarter"></div>
      </div>
    </a-flex>
  </div>
</template>

<script setup lang="ts">
import AppBar from "./components/layout/AppBar.vue";
import AppSidebar from "./components/layout/AppSiderbar.vue";
</script>

<style>
.quarter {
  box-sizing: content-box;
  position: absolute;
  width: 40px;
  height: 40px;
  top: -1rem;
  left: -1rem;
  border-width: 1rem 0 0 1rem;
  border-color: rgb(255 255 255 / 0.1);
  border-radius: 100% 0 0 0;
}
</style>
