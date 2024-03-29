<template>
  <div
    class="app-wrapper relative w-screen h-screen flex flex-col items-start justify-start gap-0 bg-black overflow-hidden">
    <img
      class="fixed top-0 left-0 min-w-full min-h-full blur z-10"
      src="/img/backgrounds/white-clouds.jpg"
      alt="Blured Background Image" />

    <!-- app bar -->
    <app-bar @toggle-sidebar="toggleSidebar"></app-bar>

    <a-flex align="center" justify="start" class="w-full h-full z-20">
      <app-sidebar
        @close="sidebarIsOpen = false"
        :is-open="sidebarIsOpen"></app-sidebar>

      <div class="relative w-full h-full shadow-xl overflow-hidden">
        <!-- a quarter square, for section's top-left radius -->
        <div class="quarter"></div>

        <!-- dynamic content goes here -->
        <div class="h-full overflow-y-auto"></div>
      </div>
    </a-flex>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import AppBar from "./components/layout/AppBar.vue";
import AppSidebar from "./components/layout/AppSiderbar.vue";

// variables
const sidebarIsOpen = ref(false);

// methods
const toggleSidebar = (): void => {
  sidebarIsOpen.value = !sidebarIsOpen.value;
};
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
