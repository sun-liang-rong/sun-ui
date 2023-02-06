<template>
  <Teleport to="body">
    <div class="modal_container" v-if="showModal">
      <div class="pop_box">
        <div class="title">提示</div>
        <div class="container">
          <slot v-if="!title"></slot>
          {{ title }}
        </div>
        <div class="pop_button">
          <div class="left">
            <button @click="cancel">取消</button>
          </div>
          <div class="right">
            <button @click="confirm">确定</button>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>
<script lang="ts">
export default {
  name: "sunModal",
};
</script>
<script lang="ts" setup>
import { ref, toRefs } from "vue";
import { useModal } from './index'
const emit = defineEmits(['confirm', 'cancel'])
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  showModal: {
    type: Boolean,
    default: ''
  }
})
const usemodal = useModal(emit, props)
const { cancel, confirm } = toRefs(usemodal)

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
    width: rem(300px);
    // margin:auto;
    min-height: rem(200px);
    max-height: rem(350px);
    background-color: #fff;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    .title {
      width: 100%;
      height: rem(60px);
      text-align: center;
      color: #1989fa;
      line-height: rem(60px);
      border-bottom: 0.5px solid #ccc;
    }
    .container {
      overflow-y: auto;
      width: 100%;
      max-height: rem(230px);
      // height: 100%;
      flex: 1;
      text-align: center;
      line-height: rem(30px);
    }
    .pop_button {
      border-top: 1px solid #ccc;
      width: 100%;
      height: rem(60px);
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
          padding: rem(5px 10px);
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
          padding: rem(5px 10px);
          width: 100%;
          color: #1989fa;
        }
      }
    }
  }
}
</style>
