<template>
  <aside
    :class="[props.isOpen ? 'w-[200px]' : 'w-0 lg:w-[204px]']"
    class="isolate h-full pt-4 bg-white/10 shadow-lg overflow-hidden transition-all duration-300">
    <a-menu
      class="lg:w-full text-xs lg:text-sm text-neutral-200 bg-white/0"
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      mode="vertical"
      :items="items"
      @click="handleClick" />
  </aside>
</template>

<script setup lang="ts">
import { h, ref } from "vue";
import { useRouter } from "vue-router";
import {
  HomeOutlined,
  CloudOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons-vue";
import type { MenuProps } from "ant-design-vue";

// emits
const emit = defineEmits(["close"]);

// props
const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
    default: false,
  },
});

// variables
const router = useRouter();
const openKeys = ref<string[]>([]);
const selectedKeys = ref<string[]>([]);
const items = ref([
  {
    key: "1",
    icon: () => h(HomeOutlined),
    label: "Dashboard",
    title: "Dashboard",
    path: "/",
  },
  {
    key: "2",
    icon: () => h(CheckCircleOutlined),
    label: "ToDo List",
    title: "ToDo List",
    path: "/todo-list",
  },
  {
    key: "3",
    icon: () => h(CloudOutlined),
    label: "Weather",
    title: "Weather",
    path: "/weather",
  },
]);

// methods
const handleClick: MenuProps["onClick"] = (menuInfo) => {
  // redirect to the path
  const path = menuInfo.item.path;
  router.push(path);

  // close the sidebar
  emit("close");
};
</script>
