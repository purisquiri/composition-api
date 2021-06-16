<template>
  <div v-if="!flag" style="color:red">Name changed!</div>
</template>

<script>
import { computed } from "vue";

export default {
  props: ["user"],
  setup(props) {
    //context.emit('eventName', {})
    //in order to use this.$emit like in Option API you have to use
    //pass a second parameter in setup(props, contex) end then
    //use it like before
    const flag = computed(() => {
      return props.user.name === "Mauro";
    });

    return { flag };
  },
};
</script>

<style></style>
