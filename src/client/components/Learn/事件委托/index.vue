<template>
  <div>
    <ul id="list">
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
onMounted(() => {
  let list = document.getElementById("list");
  list?.addEventListener("click", function (e: any) {
    console.log(e.target.innerHTML);
  });
});
function fn(...args) {
  console.log(this, args);
}
let obj = {
  myname: "张三",
};

fn.apply(obj, [1, 2, 3]);
fn.call(obj, 1, 2, 3);
const ff = fn.bind(obj, 1,2,3,5,6)
console.log(ff())
fn(1,2)
async function fn1 (){
    console.log(1)
    await fn2()
    console.log(2) // 阻塞
}

async function fn2 (){
    console.log('fn2')
}

fn1()
console.log(3)

function pow(x, n) {
  if (n == 1) {
    return x;
  } else {
    console.log(x,  pow(x, n - 1),n , '?????')
    return x * pow(x, n - 1);
  }
}
console.log(pow(3, 3), '---------')
</script>

<style lang="less" scoped></style>
