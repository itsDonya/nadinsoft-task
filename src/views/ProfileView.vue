<template>
  <section
    class="w-[90vw] md:w-[700px] md:h-full mx-auto py-12 flex flex-col items-center justify-center gap-12">
    <a-form
      class="w-full flex flex-col items-start justify-start gap-8"
      :model="profileData"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 16 }"
      autocomplete="off"
      @finish="onSubmit"
      @finishFailed="onSubmitFailed">
      <a-flex align="center" justify="center" gap="24" class="w-full">
        <!-- name -->
        <a-space class="flex-1" direction="vertical">
          <label class="!text-base text-white">Name</label>
          <a-input
            class="w-full"
            v-model:value="profileData.name"
            placeholder="Enter your name" />
        </a-space>

        <!-- locale -->
        <a-space class="flex-1" direction="vertical">
          <label class="!text-base text-white">Locale</label>
          <a-select
            ref="select"
            class="w-full"
            v-model:value="profileData.locale"
            :options="selectOptions"></a-select>
        </a-space>
      </a-flex>

      <!-- theme -->
      <a-flex vertical align="start" justify="center" gap="10" class="w-full">
        <label class="!text-base text-white">Theme Background</label>

        <!-- backgrounds -->
        <a-radio-group
          v-model:value="profileData.theme"
          class="w-full grid grid-cols-2 md:grid-cols-4 gap-5">
          <a-radio
            :key="i"
            v-for="(item, i) in backgrounds"
            :value="item"
            :class="item == profileData.theme ? 'border-2 border-white' : ''"
            class="relative w-full h-44 md:h-20 flex items-center justify-center rounded-xl md:rounded-md shadow-xl hover:shadow-black/30 overflow-hidden transition-all duration-75 group">
            <!-- overlay (name) -->
            <div
              class="absolute top-0 left-0 w-full h-full bg-neutral-900/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
              <span class="capitalize text-sm text-white">{{
                item.split("-").join(" ")
              }}</span>
            </div>

            <!-- overlay (checked) -->
            <div
              v-if="item == profileData.theme"
              class="absolute top-0 left-0 w-full h-full bg-neutral-900/60 flex items-center justify-center z-10">
              <check-circle-outlined
                class="text-3xl md:text-xl text-neutral-300"></check-circle-outlined>
            </div>

            <!-- image -->
            <img
              class="min-w-full min-h-full"
              :src="`/img/backgrounds/${item}.jpg`"
              :alt="item.split('-').join(' ')" />
          </a-radio>
        </a-radio-group>
      </a-flex>

      <!-- save button -->
      <a-button
        type="primary"
        html-type="submit"
        class="h-auto px-6 py-2 text-base text-black bg-white transition-all">
        Save changes
        <!-- <loading-outlined></loading-outlined> -->
      </a-button>
    </a-form>
  </section>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue";
import { useProfile } from "../stores/profile";
import { CheckCircleOutlined, LoadingOutlined } from "@ant-design/icons-vue";

// interfaces
import { ProfileInfo } from "../interfaces/profile.interface";

// variables
const store = useProfile();
const profileData = reactive<ProfileInfo>({
  name: "",
  locale: "en",
  theme: "white-clouds",
});
const selectOptions = ref<object[]>([
  {
    value: "en",
    label: "en",
  },
  {
    value: "fa",
    label: "fa",
  },
]);
const backgrounds = ref<string[]>([
  "white-clouds",
  "purple-moon",
  "fresh-leaves",
  "relaxing-cottage",
]);

// methods
const onSubmit = () => {
  store.saveChanges(profileData);
};
const onSubmitFailed = (errorInfo: Event) => {
  store.failureHandler(errorInfo);
};
</script>

<style>
.ant-radio {
  display: none !important;
}
.ant-radio-wrapper input:checked {
  display: none !important;
}
.ant-radio-wrapper span {
  padding: 0 !important;
}
.ant-input,
.ant-input *,
.ant-input:focus,
.ant-input::placeholder,
.ant-select-selection-item {
  color: #000000 !important;
}
.ant-input,
.ant-select-selector {
  font-size: 16px !important;
  background-color: #f7f7f770 !important;
}
</style>
