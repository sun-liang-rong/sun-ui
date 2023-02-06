<template>
  <div class="container">
    <!-- <myMode /> -->
    <!-- <sun-modal
      @confirm="confirm"
      @cancel="cancel"
      :showModal="flag"
      title="大家早上好"
    >
      <div>大家走上好</div> -->
    <!-- </sun-modal> -->
    <sun-button type="primary" @click="confirm">发请求</sun-button>
    <sun-button @click="cancel">取消请求</sun-button> -->
    <shi-jian></shi-jian>
    <sliding-door>
      <div class="slidingdoor">
        <div class="box">
          <div style="width: 375px; height: 500px; background-color: orange">
            slidingdoor
          </div>
          <div
            style="width: 375px; height: 500px; background-color: yellowgreen"
          >
            slidingdoor
          </div>
          <div style="width: 375px; height: 500px; background-color: hotpink">
            slidingdoor
          </div>
        </div>
      </div>
    </sliding-door>
  </div>
</template>

<script lang="ts" setup>
import { reactive, toRefs } from "vue";
import myMode from "./components/demo/index.vue";
import modal from './components/modal/index.vue'
</script>

<style lang="less" scoped>
.container {
  .slidingdoor {
    width: 100%;
    height: 500px;
    background-color: pink;
    display: flex;
    justify-content: space-evenly;
    .box {
      width: 100%;
      display: flex;
      overflow: hidden;
      overflow-x: auto;
      div {
        flex: 0 0 auto;
      }
    }
  }
}
</style>
