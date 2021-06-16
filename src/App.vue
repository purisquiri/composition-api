<template>
  <p>{{ num }}</p>
  <button type="button" @click.prevent="addNum">Add</button>
  <p>{{ user.name }}</p>
</template>

<script>
import { ref, reactive } from "vue";

// let num = ref(null);

export default {
  name: "App",
  setup() {
    let num = ref(0);

    function addNum() {
      num.value++;
    }

    const user = reactive({
      name: "Mauro",
      age: 40,
    });

    setTimeout(() => {
      user.name = "John";
    }, 3000);

    return { num, addNum, user };
  },
};
</script>
