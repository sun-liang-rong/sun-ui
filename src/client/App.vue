<template>
  <div class="container">
    <!-- <myMode /> -->
    <!-- <sun-modal
      @confirm="confirm"
      @cancel="cancel"
      :showModal="flag"
      title="大家早上好"
    >
      <div>大家走上好</div>
    </sun-modal> -->
    <sun-button type="primary" @click="confirm">发请求</sun-button>
    <sun-button @click="cancel">取消请求</sun-button>
  </div>
</template>

<script lang="ts" setup>
import { reactive, toRefs, ref, onMounted } from "vue";
import myMode from "./components/demo/index.vue";
import { test } from "@/utils/api/index";
import { source } from "@/utils/rpc/index";

const flag = ref(true);
const obj = {
  "Real-kkk": "sss",
};
console.log(obj["Real-kkk"]);
const confirm = async () => {
  // flag.value = false;
  const data = await test("/", { name: "slr", age: "24" });
  console.log(data);
};
const cancel = () => {
  // flag.value = false;
  source.cancel("取消请求");
};
onMounted(async () => {});
// const data = await test('/', {}, source)
// console.log(data)
</script>

<style lang="less" scoped></style>
