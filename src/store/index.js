import { vuexfireMutations } from 'vuexfire'
import Vuex from 'vuex'

const store = new Vuex.Store({
  mutations: {
    // other mutations
    ...vuexfireMutations,
  },
})
