<template>
  <section
    class="w-full h-full p-8 flex flex-col items-center justify-start gap-16">
    <!-- title -->
    <h1 class="w-full text-start text-xl text-neutral-300">
      <strong>ToDo List</strong>
    </h1>

    <!-- list -->
    <div class="w-[600px] flex flex-col items-center justify-start gap-8">
      <!-- input -->
      <a-input-group compact class="!w-full group peer">
        <a-input
          v-model:value="taskName"
          class="h-10 focus:opacity-100 bg-white/40 !w-0 group-hover:!w-[calc(100%-96px)] focus:!w-[calc(100%-96px)] !p-0 hover:!px-2 focus:!px-2 focus:!p-4 opacity-0 group-hover:opacity-100 duration-500 peer" />
        <a-button
          @click="submitHandler"
          type="primary"
          class="w-24 h-10 text-neutral-700 bg-neutral-300 !rounded-md group-hover:!rounded-l-none peer-focus-within:!rounded-l-none"
          >Add</a-button
        >
      </a-input-group>

      <!-- tasks -->
      <ul class="w-full flex flex-col items-center justify-start gap-2">
        <li
          :key="i"
          v-for="(task, i) in tasks"
          class="w-full p-4 bg-neutral-300/30 flex items-center justify-between gap-4 rounded-lg">
          <!-- title -->
          <p :class="[task.isDone ? 'line-through' : '']">{{ task.name }}</p>

          <!-- buttons -->
          <a-flex align="center" justify="center" gap="12">
            <check-outlined
              v-if="!task.isDone"
              class="text-lg text-neutral-400" />
            <delete-outlined class="text-lg text-neutral-800" />
          </a-flex>
        </li>

        <!-- empty state -->
        <p v-if="!tasks.length" class="w-full text-start text-white">
          You haven't added any task yet.
        </p>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useTodoList } from "../stores/todo-list";
import { CheckOutlined, DeleteOutlined } from "@ant-design/icons-vue";

// variables
const store = useTodoList();
const taskName = ref<string>("");

// computed
const tasks = computed(() => store.tasks);

// methods
const addTask = (): void => {
  store.addTask(taskName.value);
  taskName.value = "";
};
const emptyTask = (): void => {
  store.emptyTask();
};
const submitHandler = (): void => {
  if (taskName.value) {
    addTask();
  } else {
    emptyTask();
  }
};
</script>
