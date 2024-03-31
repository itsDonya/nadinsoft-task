<template>
  <div
    class="app-wrapper relative w-screen h-screen flex flex-col items-start justify-start gap-0 bg-black overflow-hidden">
    <img
      class="fixed top-0 left-0 min-w-max w-full lg:min-w-full min-h-full blur z-10"
      :src="`/img/backgrounds/${background}.jpg`"
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
        <article class="w-full h-full overflow-y-auto">
          <router-view></router-view>
        </article>
      </div>
    </a-flex>

    <!-- name prompt -->
    <div
      v-if="!isRegistered"
      class="fixed top-0 left-0 w-screen h-screen bg-gradient-to-r from-fuchsia-500 to-fuchsia-800 flex items-center justify-center z-50">
      <a-flex
        vertical
        align="center"
        justify="center"
        gap="18"
        class="w-96 p-6 bg-neutral-300 rounded-xl shadow-xl shadow-fuchsia-800">
        <!-- title -->
        <p class="text-xl font-bold">Please enter your name</p>

        <!-- input -->
        <a-input class="h-10" v-model:value="userName"></a-input>

        <a-button
          @click="onSubmit"
          type="primary"
          class="w-full bg-fuchsia-800"
          :disabled="!userName"
          >Submit</a-button
        >
      </a-flex>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import AppBar from "./components/layout/AppBar.vue";
import AppSidebar from "./components/layout/AppSiderbar.vue";

// variables
const userName = ref<string>("");
const sidebarIsOpen = ref(false);

// computed
const isRegistered = computed<boolean>(() => {
  const storedData = localStorage.getItem("NadinTask_Profile");
  return !!storedData;
});
const background = computed<string>(() => {
  const storedData = localStorage.getItem("NadinTask_Profile");
  if (storedData) {
    return JSON.parse(storedData).theme;
  } else {
    return "white-clouds";
  }
});

// methods
const onSubmit = (): void => {
  // set profile data
  const profileData = {
    name: userName.value,
    locale: "en",
    theme: "white-clouds",
  };

  // save name into localStorage
  localStorage.setItem("NadinTask_Profile", JSON.stringify(profileData));

  // reload the page
  location.reload();
};
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
