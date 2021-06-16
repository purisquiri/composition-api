<template>
  <p>{{ num }}</p>
  <p>{{ double }}</p>
  <button type="button" @click.prevent="addNum">Add</button>
  <p>{{ name }}</p>

  <input type="text" v-model="phrase" />
  <p>{{ reversedPhrase }}</p>
</template>

<script>
import { ref, reactive, toRefs, watchEffect, computed } from "vue";

// let num = ref(null);

export default {
  name: "App",
  setup() {
    let num = ref(0);

    function addNum() {
      num.value++;
      //values must be accessed via the value property
    }

    const double = computed(() => {
      return num.value * 2;
    });

    const user = reactive({
      name: "Mauro",
      age: 40,

      //values from properties can be accessed directly
    });

    setTimeout(() => {
      user.name = "John";
    }, 3000);

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

    return { num, addNum, ...toRefs(user), phrase, reversedPhrase, double };
    //toRefs allows you to use spread operator and mantain reactivity
  },
};
</script>
