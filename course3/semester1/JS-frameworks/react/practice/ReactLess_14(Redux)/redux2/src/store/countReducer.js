const defaultState = 0;

const INCR = 'INCR'
const DECR = 'DECR'
const RESET = 'RESET'

export const countReducer = (store = defaultState, action) => {
    // console.log(action);
    switch (action.type) {
        case INCR:
            return store + action.payload
        case DECR:
            return store - action.payload
        case RESET:
            return store = 0
        default:
            return store
    }
}

export const incrAction = payload => ({ type: INCR, payload })
export const decrAction = payload => ({ type: DECR, payload })
export const resetAction = () => ({ type: RESET })
