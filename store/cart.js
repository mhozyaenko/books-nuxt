export const state = () => ({
  items: [],
  total: 0
})

export const mutations = {
  addItem: (state, payload) => {
    state.items = [...state.items, payload]
  },
  countCartTotal(state) {
    state.total = state.items.reduce( (acc, cur) => (cur.saleInfo.listPrice || cur.saleInfo.retailPrice) ?
      acc + (cur.saleInfo.listPrice.amount || cur.saleInfo.retailPrice.amount) : acc, 0)
  },
  clearCart(state) {
    state.items = [];
    state.total = 0;
  }
}

export const actions = {
  addToCart({commit}, payload) {
    commit('addItem', payload);
    commit('countCartTotal');
  }
}
