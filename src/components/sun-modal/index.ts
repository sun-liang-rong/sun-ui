import { ref, defineEmits } from 'vue';
export function useModal(emit: any, props: any){
  //确认
  const confirm = () => {
    emit('confirm', '点击确认')
  }
  //取消
  const cancel = () => {
    emit('cancel', '点击取消')
  }
  return {confirm, cancel}
  
}