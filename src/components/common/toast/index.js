import Toast from './Toast'

const obj = {}

obj.install = function(Vue) {
    //1.创建组件构造器
    const toastContrustor = Vue.extend(Toast)

    //2.通过new,根据组件构造器，创建一个组件对象
    const toast = new toastContrustor()

    //3.将组件对象手动挂载到某个元素上面
    toast.$mount(document.createElement('div'))

    //4.把toast.$el添加到body
    document.body.appendChild(toast.$el)

    //5.添加到vue原型
    Vue.prototype.$toast = toast
}

export default obj