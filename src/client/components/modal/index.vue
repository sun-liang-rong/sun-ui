<template>
  <Teleport to="body">
    <div class="modal_container">
      <div class="pop_box">
        <div class="title">提示</div>
        <div class="container">我今天吃饭了</div>
        <div class="pop_button">
          <div class="left">
            <button>取消</button>
          </div>
          <div class="right">
            <button>确定</button>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script lang="ts" setup>
import { ref } from "vue";
</script>

<style lang="less" scoped>
.modal_container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  .pop_box {
    width: 500px;
    // margin:auto;
    min-height: 200px;
    background-color: #fff;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    .title {
      width: 100%;
      height: 60px;
      text-align: center;
      color: #1989fa;
      line-height: 60px;
      border-bottom: 0.5px solid #ccc;
    }
    .container {
        width: 100%;
        // height: 100%;
        flex: 1;
        text-align: center;
        line-height: 30px;
    }
    .pop_button {
      width: 100%;
      height: 60px;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      .left {
        width: 50%;
        border-right: 0.5px solid #ccc;
        display: flex;
        justify-content: center;
        button {
          background: none;
          border: none;
          padding: 5px 10px;
          width: 100%;
          color: #ccc;
        }
      }
      .right {
        width: 50%;
        display: flex;
        justify-content: center;
        button {
          background: none;
          border: none;
          padding: 5px 10px;
          width: 100%;
          color: #1989fa;
        }
      }
    }
  }
}
</style>
