import { ref } from "vue";
import { defineStore } from "pinia";
import { message } from "ant-design-vue";

// interface
import { TaskInfo } from "../interfaces/task.interface";

export const useTodoList = defineStore("todo-list", () => {
  const tasks = ref([] as TaskInfo[]);

  // add task
  const addTask = (taskTitle: string): void => {
    const task: TaskInfo = {
      title: taskTitle as string,
      isDone: false,
    };
    tasks.value.unshift(task);
    message.success("Task added");
  };

  // empty task title message
  const emptyTask = (): void => {
    message.error("Please enter a title for your new task");
  };

  // check task
  const checkTask = (taskTitle: string): void => {
    const identifiedTask = tasks.value.findIndex(
      (task) => task.title == taskTitle
    );
    tasks.value[identifiedTask].isDone = true;
  };
  return { tasks, addTask, emptyTask, checkTask };
});
