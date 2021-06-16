import { ref, computed } from "vue";

export const useNumber = () => {
  let num = ref(0);

  function addNum() {
    num.value++;
    //values must be accessed via the value property
  }

  const double = computed(() => {
    return num.value * 2;
  });

  return {
    num,
    addNum,
    double,
  };
};
