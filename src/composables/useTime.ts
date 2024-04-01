import { ref } from "vue";
import { TimeInfo } from "../interfaces/time.interface";
import { useI18n } from "vue-i18n";

export const useTime = (): TimeInfo => {
  const { t } = useI18n();

  // current hour of day
  const currentHour: number = new Date().getHours();

  // current message, based on current hour
  const currentMessage: string = t(currentHour) || "";

  return { currentHour, currentMessage };
};
