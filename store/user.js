import {firebaseApp} from "../plugins/firebase";

export const state = () => ({
  user: {},
  isAuthorized: false,
})

export const mutations = {
  setUser: (state, payload) => {
    state.user = {
      email: payload.user.email
    };
    state.isAuthorized = true;
  },
  deleteUser: (state) => {
    state.user = {};
    state.isAuthorized = false;
  }
}

export const actions = {
  login({commit}, payload) {
    commit('setUser', payload);
  },
  logout({commit}) {
    firebaseApp.auth().signOut()
      .then(commit('deleteUser'));
  }
}
