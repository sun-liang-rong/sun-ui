import { reactive, onMounted, onUnmounted } from 'vue'

export function useMove(){
    // interface Imove {
    //     x: string;
    //     y: string
    // }
    const position = reactive({
        x: '',
        y: ''
    })
    const hoverMove = (e: MouseEvent) => {
        console.log(e)
        position.x = String(e.clientX)
        position.y = String(e.clientY)
        
    }
    onMounted(() => {
        window.addEventListener('mousemove', hoverMove)
    })
    onUnmounted(() => {
        window.removeEventListener('mousemove', hoverMove)
    })
    return {
        position
    }
}