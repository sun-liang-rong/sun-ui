//时间戳写法
function throttled(fn: Function, dealy = 500){
    let oldTime = Date.now()
    return function(...args: any){
        let  newTime = Date.now()
        if(newTime - oldTime >= dealy){
            fn.apply(null, args)
        }
    }
}
//定时器写法
function throttled1(fn: Function, dealy = 500){
    let timeId: number = 0
    return function(...args: any){
        if(timeId != 0){
            timeId = window.setTimeout(function(){
                fn.apply(null, args)
                timeId = 0
            }, dealy)
        }
    }
}
//防抖定时器写法
function debounce(fn: Function, wait: any){
    let timeId: number = 0
    return function(...args: any){
        clearTimeout(timeId)
        timeId = window.setTimeout(function(){
            fn.apply(null, args)
        }, wait)
    }
}

//防抖立即执行
function debounce1(fn: Function, wait: any, immediate: any){
    let timeId: number = 0
    return function(...args: any){
        if(timeId) clearTimeout(timeId)
        if(immediate){
            // 第一次会立即执行，以后只有事件执行后才会再次触发
            let callNow = !timeId; 
            timeId = window.setTimeout(function(){
                timeId = 0;
            }, wait)
            if (callNow) {
                fn.apply(null, args)
            }
        }else {

        }
        
        
    }
}
export {
    throttled
}