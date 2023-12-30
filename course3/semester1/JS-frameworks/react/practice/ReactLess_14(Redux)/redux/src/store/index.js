import { createStore } from "redux";

const defaultState = 0;
const reducer = (store = defaultState, action) => {
  switch (action.type) {
    case 'INCR':
      return store + 1
    case 'DECR':
      return store - 1
    case 'NULL':
      return store = 0
    default:
      return store
  }
}

export const store = createStore(reducer);