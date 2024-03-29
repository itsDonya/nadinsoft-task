<template>
  <a-flex
    class="isolate w-full h-14 pl-4 pr-8 bg-white/10 z-20"
    align="center"
    justify="space-between">
    <a-flex align="center" justify="start" gap="8">
      <img class="w-7" src="/logo-plain.png" alt="NadinSoft Logo" />
      <h1 class="italic text-lg text-neutral-300">
        <strong>NadinTask</strong>
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
            class="text-neutral-200 flex items-center justify-center gap-1">
            <user-outlined class="icon"></user-outlined>
            <span>Donya Davoodi</span>
          </a-button>
          <template #overlay>
            <a-menu class="min-w-max">
              <a-menu-item>
                <router-link to="/profile">Profile Settings</router-link>
              </a-menu-item>

              <a-menu-item>
                <button>Logout</button>
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </a-space>

      <setting-outlined
        class="icon text-xl text-neutral-300 cursor-pointer"></setting-outlined>
    </a-flex>
    <!-- </a-flex> -->
  </a-flex>
</template>

<script setup lang="ts">
import { UserOutlined, SettingOutlined } from "@ant-design/icons-vue";
</script>
