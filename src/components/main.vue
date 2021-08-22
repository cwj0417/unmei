<template>hi, there is unmei.</template>

<script lang="ts">
import { ref, defineComponent, onMounted } from "vue";
import test from "../service";
export default defineComponent({
  name: "home",
  setup: () => {
    onMounted(() => {
      test();
    });
    return {};
  },
});
</script>

<style>
</style>
