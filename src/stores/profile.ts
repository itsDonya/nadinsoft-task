import { ref } from "vue";
import { defineStore } from "pinia";
import { message } from "ant-design-vue";

// interfaces
import { ProfileInfo } from "../interfaces/profile.interface";

export const useProfile = defineStore("weather", () => {
  const loading = ref<boolean>(false);

  // save changes into localStorage
  const saveChanges = (data: ProfileInfo): void => {
    // validate name input
    if (!data.name) {
      message.error("Please enter a valid name!");
      return;
    }

    // start loading
    loading.value = true;

    // save into localStorage
    localStorage.setItem("NadinTask_Profile", JSON.stringify(data));

    // reload the page, to apply background changes
    location.reload();

    // display success message
    message.success("Changes hav been saved successfully");

    // stop loading
    loading.value = false;
  };

  // handle form submission failure
  const failureHandler = (error: Event): void => {
    // display failure message with the error details
    message.error(`An error occurred while saving profile change: ${error}`);

    // stop laoding
    loading.value = false;
  };

  return { loading, saveChanges, failureHandler };
});
