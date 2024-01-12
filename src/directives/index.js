import { useIntersectionObserver } from '@vueuse/core'
//定义懒加载插件
export const lazyPlugin = {
    install(app){
        //懒加载指令逻辑
        app.directive('img-lazy',{
            mounted(el,binding){
                //el:指令绑定的那个dom元素
                //binding:binding.value 指令等于号后面绑定的表达式的值
                // console.log(el,binding.value)
                const { stop } = useIntersectionObserver(
                    el,
                    ([{ isIntersecting }]) =>{
                        console.log(el,isIntersecting)
                        if(isIntersecting){
                           //进入视口区域
                            el.src = binding.value
                            stop()
                        }
                    }
                )
            }    
        })
    }
}