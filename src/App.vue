<template>
  <p>{{ num }}</p>
  <p>{{ double }}</p>
  <button type="button" @click.prevent="addNum">Add</button>
  <p>{{ name }}</p>

  <input type="text" v-model="phrase" />
  <p>{{ reversedPhrase }}</p>

  <app-alert :user="user" />

  <button type="butoon" ref="btn">Button</button>
</template>

<script>
import { ref, reactive, toRefs, onBeforeMount, onMounted } from "vue";

import AppAlert from "@/components/Alert.vue";
import { useNumber } from "./hooks/number";
import { usePhrase } from "./hooks/phrase";

export default {
  name: "App",
  components: {
    AppAlert,
  },
  setup() {
    const btn = ref(null);

    onBeforeMount(() => {
      console.log("onBeforeMount");
    });

    onMounted(() => {
      console.log("onMounted");

      btn.value.addEventListener("click", () => {
        console.log("button clicked");
      });
    });

    const user = reactive({
      name: "Mauro",
      age: 40,

      //values from properties can be accessed directly
    });

    setTimeout(() => {
      user.name = "John";
    }, 3000);

    const { num, addNum, double } = useNumber();
    const { phrase, reversedPhrase } = usePhrase();

    return {
      num,
      addNum,
      ...toRefs(user),
      phrase,
      reversedPhrase,
      double,
      user,
      btn,
    };
    //toRefs allows you to use spread operator and mantain reactivity
  },
};
</script>
