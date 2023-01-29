<template>
  <div class="container">
    <sun-button type="default">hello</sun-button>
    <sun-button type="primary" plain>hello</sun-button>
    <sun-button color="#7232dd" size="large" plain>hello</sun-button>
    <sun-button type="warning" size="mini" disabled>hello</sun-button>
    <sun-button type="danger" size="small" round square plain>hello</sun-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
export default defineComponent({
  
})
</script>

<style lang="less" scoped></style>
