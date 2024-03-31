import { ref, watch, onMounted } from "vue";
import { defineStore } from "pinia";
import { message } from "ant-design-vue";

// interface
import { TaskInfo } from "../interfaces/task.interface";

export const useTodoList = defineStore("todo-list", () => {
  const tasks = ref([] as TaskInfo[]);

  // add a new task
  const addTask = (taskTitle: string): void => {
    // check if there's a task with the same title
    const identifiedTask = tasks.value.find((task) => task.title == taskTitle);
    if (identifiedTask) {
      message.error("You already have a task with the same title");
      return;
    }

    const task: TaskInfo = {
      title: taskTitle as string,
      isDone: false,
    };
    tasks.value.unshift(task);
    saveTasks();
    message.success("Task added");
  };

  // empty task title message
  const emptyTask = (): void => {
    message.error("Please enter a title for your new task");
  };

  // check a task
  const checkTask = (taskTitle: string): void => {
    const identifiedTaskIdx = tasks.value.findIndex(
      (task) => task.title == taskTitle
    );
    tasks.value[identifiedTaskIdx].isDone = true;
    saveTasks();
    message.success("Task checked as done");
  };

  // delete a task
  const deleteTask = (taskTitle: string): void => {
    const identifiedTaskIdx = tasks.value.findIndex(
      (task) => task.title == taskTitle
    );
    tasks.value.splice(identifiedTaskIdx, 1);
    saveTasks();
    message.success("Task removed");
  };

  // save tasks into localStorage
  const saveTasks = (): void => {
    localStorage.setItem("NadinTask_Tasks", JSON.stringify(tasks.value));
  };

  // set stored tasks if they're existed in localStorage
  onMounted(() => {
    const storedTasks = JSON.parse(
      localStorage.getItem("NadinTask_Tasks") as string
    );
    if (storedTasks) tasks.value = storedTasks;
  });

  return { tasks, addTask, emptyTask, checkTask, deleteTask };
});
