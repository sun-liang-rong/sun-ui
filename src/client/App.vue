<template>
  <div class="container">
    <myMode/>
    <modal/>
  </div>
</template>

<script lang="ts" setup>
import { reactive, toRefs } from "vue";
import myMode from "./components/demo/index.vue";
import modal from './components/modal/index.vue'
</script>

<style lang="less" scoped></style>
