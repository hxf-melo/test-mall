export default {
    addCart(context, payload) {
        //1.查找之前的数组中是否有该元素
        let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
            //2.判断当前商品是否存在
        if (oldProduct) {
            context.commit('addCount', oldProduct)
        } else {
            payload.count = 1;
            context.commit('addToCart', payload)
        }
    }
}