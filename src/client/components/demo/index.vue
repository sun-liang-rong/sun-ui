<template>
  <!-- <div class="container">position {{ x }}, {{ y }}</div> -->
</template>
<script lang="ts">
export default {
  name: "myMode",
};
</script>
<script lang="ts" setup>
import { toRefs } from "vue";
import { useMove } from "./index";

// const { position } = useMove();
// const { x, y } = toRefs(position);
// console.log(x, y);
</script>

<style lang="less" scoped>
.container {
  width: 200px;
  height: 200px;
  background-color: pink;
}
</style>
