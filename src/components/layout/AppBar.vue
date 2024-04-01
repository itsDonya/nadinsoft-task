<template>
  <a-flex
    class="isolate w-full h-14 min-h-14 pl-4 pr-4 bg-white/10 z-20"
    align="center"
    justify="space-between">
    <a-flex align="center" justify="start" gap="8">
      <!-- hamburger menu -->
      <menu-outlined
        @click="toggleSidebar"
        class="lg:hidden icon text-neutral-400 text-lg mr-4 cursor-pointer"></menu-outlined>

      <!-- logo -->
      <img class="w-7" src="/logo-plain.png" alt="NadinSoft Logo" />

      <!-- title -->
      <h1 class="italic text-lg text-neutral-300">
        <strong>{{ $t("app_title") }}</strong>
      </h1>
    </a-flex>

    <!-- buttons -->
    <a-flex align="center" justify="center" gap="20">
      <a-space style="display: flex; flex-wrap: wrap">
        <a-dropdown
          placement="bottomLeft"
          :arrow="{ pointAtCenter: true }"
          class="!bg-inherit">
          <a-button
            class="text-xs lg:text-sm text-neutral-200 flex items-center justify-center gap-1">
            <user-outlined class="icon"></user-outlined>
            <span>{{ userName }}</span>
          </a-button>
          <template #overlay>
            <a-menu class="min-w-max">
              <a-menu-item>
                <router-link to="/profile">{{
                  $t("bar_settings")
                }}</router-link>
              </a-menu-item>

              <a-menu-item>
                <button @click="logout">{{ $t("bar_logout") }}</button>
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </a-space>
    </a-flex>
  </a-flex>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { message } from "ant-design-vue";
import { MenuOutlined, UserOutlined } from "@ant-design/icons-vue";

// emits
const emit = defineEmits(["toggle-sidebar"]);

// computed
const userName = computed<string | null>(() => {
  const profileData = JSON.parse(
    localStorage.getItem("NadinTask_Profile") as string
  );
  return profileData?.name || "";
});

// methods
const logout = () => {
  // remove all user's data from localStorage
  localStorage.removeItem("NadinTask_Profile");
  localStorage.removeItem("NadinTask_Tasks");

  // show message
  message.success("You successfully logged out");

  // reload the page
  location.reload();
};
const toggleSidebar = (): void => {
  emit("toggle-sidebar");
};
</script>
