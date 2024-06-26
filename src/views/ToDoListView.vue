<template>
  <section
    class="w-full h-full p-8 flex flex-col items-center justify-start gap-16">
    <!-- title -->
    <h1 class="w-full text-start text-xl text-neutral-300">
      <strong>{{ $t("todo_title") }}</strong>
    </h1>

    <!-- list -->
    <div
      class="w-[90vw] lg:w-[600px] flex flex-col items-center justify-start gap-6">
      <!-- input -->
      <a-input-group compact class="!w-full group peer">
        <a-input
          v-model:value="taskTitle"
          class="h-10 bg-white/40 !w-[calc(100%-96px)] lg:!w-0 group-hover:!w-[calc(100%-96px)] focus:!w-[calc(100%-96px)] lg:!p-0 hover:!px-2 focus:!px-2 focus:!p-4 lg:opacity-0 group-hover:opacity-100 focus:opacity-100 duration-500 peer" />
        <a-button
          @click="submitHandler"
          type="primary"
          class="w-24 h-10 text-neutral-700 bg-neutral-300 lg:!rounded-md group-hover:!rounded-l-none peer-focus-within:!rounded-l-none"
          >{{ $t("todo_add") }}</a-button
        >
      </a-input-group>

      <!-- tasks -->
      <ul class="w-full flex flex-col items-center justify-start gap-2">
        <li
          :key="i"
          v-for="(task, i) in tasks"
          :class="[task.isDone ? 'bg-neutral-300/30' : 'bg-neutral-300/60']"
          class="w-full p-4 flex items-center justify-between gap-4 rounded-lg">
          <!-- title -->
          <p :class="[task.isDone ? 'line-through' : '']">{{ task.title }}</p>

          <!-- buttons -->
          <a-flex align="center" justify="center" gap="12">
            <check-outlined
              v-if="!task.isDone"
              @click="checkTask(task.title)"
              class="text-lg text-white" />
            <delete-outlined
              @click="deleteTask(task.title)"
              class="text-lg text-neutral-800" />
          </a-flex>
        </li>

        <!-- empty state -->
        <p v-if="!tasks.length" class="w-full text-start text-white">
          {{ $t("todo_empty_state") }}
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
const taskTitle = ref<string>("");

// computed
const tasks = computed(() => store.tasks);

// methods
const addTask = (): void => {
  store.addTask(taskTitle.value);
  taskTitle.value = "";
};
const emptyTask = (): void => {
  store.emptyTask();
};
const submitHandler = (): void => {
  if (taskTitle.value) {
    addTask();
  } else {
    emptyTask();
  }
};
const checkTask = (title: string): void => {
  store.checkTask(title);
};
const deleteTask = (title: string): void => {
  store.deleteTask(title);
};
</script>
