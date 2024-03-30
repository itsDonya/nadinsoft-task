import { ref } from "vue";
import { defineStore } from "pinia";
import { message } from "ant-design-vue";

// interface
import { TaskInfo } from "../interfaces/task.interface";

export const useTodoList = defineStore("todo-list", () => {
  const tasks = ref([] as TaskInfo[]);

  // add task
  const addTask = (taskName: string): void => {
    const task: TaskInfo = {
      name: taskName as string,
      isDone: false,
    };
    tasks.value.unshift(task);
    message.success("Task added");
  };

  // empty task name message
  const emptyTask = (): void => {
    message.error("Please enter a name for your new task");
  };

  return { tasks, addTask, emptyTask };
});
