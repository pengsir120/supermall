export default {
  // mutations唯一的目的就是修改state中状态
  // mutations中的每个方法尽可能完成的事件比较单一一点
  addCount(state, payload) {
    payload.count++
  },
  addCart(state, payload) {
    payload.checked = true
    state.cartList.push(payload)
  }
}
