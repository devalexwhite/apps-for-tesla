export const state = () => ({
  namespaced: true,
  active: 0,
  all: []
})

export const getters = {
  active(state) {
    return state.all.filter(category => category.id === state.active)
  }
}

export const mutations = {
  setActive(state, id) {
    state.active = id
  },
  setCategories(state, categories) {
    state.all = categories
  }
}

export const methods = {}
