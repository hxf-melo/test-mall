import { debounce } from './untils'

export const mixin = {
    data() {
        return {
            itemImgLoad: null,
            refresh: null
        }
    },
    mounted() {
        //1.使用防抖函数
        this.refresh = debounce(this.$refs.scroll.refresh, 100)
        this.itemImgLoad = () => {
                this.refresh()
            }
            //2.监听事件总线
        this.$bus.$on('ItemImageLoad', this.itemImgLoad)
    }
}