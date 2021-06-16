import { ref, watchEffect } from "vue";

export const usePhrase = () => {
  const phrase = ref("");

  const reversedPhrase = ref("");

  // watch([phrase], ([newVal], [oldVal]) => {
  //   reversedPhrase.value = phrase.value
  //     .split("")
  //     .reverse()
  //     .join("");
  // })
  //when you have more variables to take care

  watchEffect(() => {
    reversedPhrase.value = phrase.value
      .split("")
      .reverse()
      .join("");
  });

  return {
    phrase,
    reversedPhrase,
  };
};
