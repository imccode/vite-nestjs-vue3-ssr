import { createStore as _createStore, useStore as _useStore } from 'vuex'
import state, { State } from './state'

export const createStore = (initState: { [key: string]: any } = {}) => {

  return _createStore({
    state() {
      return {
        ...state,
        ...initState,
      }
    },
  })
}


export const useStore = () => {
  return _useStore<State>()
}