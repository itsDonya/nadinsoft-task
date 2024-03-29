<template>
  <aside
    class="isolate w-[264px] h-full pt-4 bg-white/10 shadow-lg overflow-hidden">
    <a-menu
      class="app-sidebar-menu bg-white/0 text-neutral-200"
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      style="width: 226px"
      mode="vertical"
      :items="items"
      @click="handleClick" />
  </aside>
</template>

<script setup lang="ts">
import { h, ref } from "vue";
import { useRouter } from "vue-router";
import { HomeOutlined } from "@ant-design/icons-vue";
import type { MenuProps } from "ant-design-vue";

// variables
const router = useRouter();
const openKeys = ref<string[]>([]);
const selectedKeys = ref<string[]>([]);
const items = ref<
  {
    key: string;
    icon: () => ReturnType<typeof h>;
    label: string;
    title: string;
    path: string;
  }[]
>([
  {
    key: "1",
    icon: () => h(HomeOutlined),
    label: "Dashboard",
    title: "Dashboard",
    path: "/",
  },
]);
const handleClick: MenuProps["onClick"] = (menuInfo) => {
  const path = menuInfo.item.path;
  router.push(path);
};
</script>
