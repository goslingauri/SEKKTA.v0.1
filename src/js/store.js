import { createStore } from 'vuex'

export const store = createStore({
    state () {
      return {
        showmodal: false
      }
    },
    mutations: {
      triggerModal (state) {
        state.showmodal = !state.showmodal;
      }
    }
})