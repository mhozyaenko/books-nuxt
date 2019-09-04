export const state = () => ({
  total: 0,
  success: false
});

export const mutations = {
  setTotalOrder(state, payload) {
    state.total = payload;
    state.success = true;
  },
  clearOrder(state) {
    state.success = false;
  }

};

