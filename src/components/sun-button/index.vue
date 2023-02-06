<template>
  <button :class="computedClass" :style="
    color
      ? `background-color: ${plain ? '#fff' : color
      };border: 1px solid ${color}; color: ${plain ? color : '#fff'};`
      : ''
  " :disabled="disabled">
    <slot></slot>
  </button>
</template>
<script lang="ts">
export default{
  name: "sunButton",
}
</script>
<script setup lang="ts">
import {
  defineComponent,
  ref,
  reactive,
  toRefs,
  computed,
onMounted,
} from "vue";

const props = defineProps({
    //按钮颜色
    type: {
      type: String,
      default: "default",
    },
    //按钮是否是朴素按钮
    plain: {
      type: Boolean,
      default: false,
    },
    //按钮是否禁用
    disabled: {
      type: Boolean,
      default: false,
    },
    //按钮是否为直角
    square: {
      type: Boolean,
      default: false,
    },
    //按钮是否是圆角
    round: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "sun-normal",
    },
    color: {
      type: String,
      default: "",
    }
  })

  const computedClass = computed(() => {
    return `sun-button ${'sun-' + props.type} ${props.plain ? "plain" : ""} ${props.disabled ? "sun-disabled" : ""
      } ${props.square ? "sun-square" : ""} ${props.round ? "sun-round" : ""} ${props.size ? 'sun-' + props.size : ""
      }`;
  })
  onMounted(() => {
    let element = document.getElementById('app')
    console.log(element, 'element', props.type)
  })

  
 
</script>

<style lang="less" scoped>
@import "./index.less";
</style>
