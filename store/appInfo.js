export const state = () => ({
  visible: false,
  appId: 0
})

export const getters = {
  application(state, getters, rootState) {
    return rootState.applications.all.find(app => app.id === state.appId)
  }
}

export const mutations = {
  setVisible(state, value) {
    state.visible = value
  },
  setAppId(state, value) {
    state.appId = value
  }
}

export const actions = {
  showApp({ commit }, id) {
    commit('setVisible', true)
    commit('setAppId', id)
  },
  hideApp({ commit }) {
    commit('setVisible', false)
    commit('setAppId', 0)
  }
}
