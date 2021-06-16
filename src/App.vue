<template>
  <p>{{ num }}</p>
  <button type="button" @click.prevent="addNum">Add</button>
</template>

<script>
import { ref } from "vue";

// let num = ref(null);

export default {
  name: "App",
  setup() {
    let num = ref(0);

    console.log(num);

    function addNum() {
      num.value++;
    }

    return { num, addNum };
  },
};
</script>
