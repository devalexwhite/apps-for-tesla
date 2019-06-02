import {
  LocalStorageService,
  StorageKeys
} from '../services/localStorageService'

export const state = () => ({
  namespaced: true,
  all: [],
  installed: []
})

export const getters = {
  filtered(state, getters, rootState) {
    let apps = state.all

    if (rootState.categories.active === -1)
      apps = state.installed.map(id => state.all.find(app => app.id === id))
    else if (state.installed && state.installed.length)
      apps = apps.filter(app => !state.installed.includes(app.id))

    const query = rootState.searchQuery.trim().toLowerCase()

    if (query)
      apps = apps.filter(
        app =>
          app.title
            .trim()
            .toLowerCase()
            .indexOf(query) !== -1
      )

    if ([-1, 0].includes(rootState.categories.active)) return apps

    return apps.filter(app =>
      app.categories
        ? app.categories.includes(rootState.categories.active)
        : false
    )
  },
  installed(state) {
    return state.installed.map(id => state.all.find(app => app.id === id))
  },
  hasInstalled(state) {
    return state.installed && state.installed.length
  }
}

export const mutations = {
  setApplications(state, applications) {
    state.all = applications
  },
  setInstalledApplications(state, applications) {
    state.installed = applications
  },
  addInstalled(state, id) {
    if (!state.installed) state.installed = [id]
    else {
      if (state.installed.includes(id)) return
      state.installed.push(id)
    }
  },
  removeInstalled(state, id) {
    if (!state.installed.includes(id)) return
    state.installed.splice(state.installed.indexOf(id), 1)
  }
}

export const actions = {
  installApplication({ commit }, id) {
    commit('addInstalled', id)
    LocalStorageService.push(StorageKeys.INSTALLED_APPS, id)
    commit('appInfo/setVisible', false, { root: true })
    commit('categories/setActive', -1, { root: true })
  },
  uninstallApplication({ commit, state }, id) {
    const lastApp = state.installed.length === 1
    commit('removeInstalled', id)
    LocalStorageService.pop(StorageKeys.INSTALLED_APPS, id)
    commit('appContext/setVisible', false, { root: true })
    if (lastApp) commit('categories/setActive', 0, { root: true })
  },
  setInstalled({ commit }) {
    const applications = LocalStorageService.get(StorageKeys.INSTALLED_APPS)
    commit('setInstalledApplications', applications || [])
  }
}
