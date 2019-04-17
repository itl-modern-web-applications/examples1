const store = new Vuex.Store({
  state: {
    heroes: [],
    planets: []
  },

  actions: {
    async loadHeroes ({ commit }) {
      let response = await fetch('https://swapi.co/api/people')
      let { results } = await response.json()
      commit('updateHeroes', results)
    },
    async loadPlanets ({ commit }) {
      let response = await fetch('https://swapi.co/api/planets')
      let { results } = await response.json()
      commit('updatePlanets', results)
    }
  },

  mutations: {
    updateHeroes (state, data) {
      state.heroes = data
    },
    updatePlanets (state, data) {
      state.planets = data
    }
  },

  getters: {
    heroes: state => state.heroes,
    planets: state => state.planets
  }
})
