import { ref } from "vue";
import { TimeInfo } from "../interfaces/time.interface";

export const useTime = (): TimeInfo => {
  // 24 message texts, based on current hour of the day
  const hourMessages = ref([
    "It's the quiet hour of the night, where the world sleeps peacefully.",
    "The dawn breaks, painting the sky with hues of orange and pink.",
    "The early morning hustle begins as people start their day with a cup of coffee.",
    "The sun rises higher, casting long shadows and warming the earth.",
    "Mid-morning brings productivity as tasks are tackled with focus and determination.",
    "Lunchtime arrives, filling the air with the aroma of various cuisines.",
    "The afternoon sun shines brightly, inviting outdoor activities and leisurely strolls.",
    "Late afternoon sees a brief lull before the rush hour traffic begins.",
    "The evening approaches, bringing with it a sense of relaxation and anticipation.",
    "Dinner time arrives, families gather around the table to share stories and laughter.",
    "The night sets in, stars twinkle in the sky, and the city comes alive with lights.",
    "Midnight strikes, a time for reflection and quiet contemplation in the stillness of the night.",
    "The mid-afternoon slump, where eyelids grow heavy and minds wander.",
    "The late afternoon hustle, where deadlines loom and tasks demand attention.",
    "The sun begins its descent, casting a warm glow over the landscape.",
    "The golden hour arrives, bathing everything in a soft, ethereal light.",
    "Evening approaches, bringing with it the promise of rest and relaxation.",
    "The early evening bustle, as families gather and friends reunite.",
    "Dinner time arrives, filling homes with the savory scents of home-cooked meals.",
    "The night begins to fall, stars twinkle in the sky like diamonds scattered across velvet.",
    "The city comes alive with lights, illuminating the streets and painting the night in vibrant colors.",
    "Midnight strikes, a time for secrets and whispers in the stillness of the night.",
    "The witching hour returns, where the veil between worlds grows thin and spirits roam free.",
    "The darkest hour of the night, where shadows lurk and dreams take flight in the depths of slumber.",
  ]);

  //   current hour of day
  const currentHour: number = new Date().getHours();

  //   current message, based on current hour
  const currentMessage: string = hourMessages.value[currentHour] || "";

  return { currentHour, currentMessage };
};
