const start_data = [
    { id: 11, name: 'Alex', age: 30 },
    { id: 12, name: 'Neena', age: 40 },
    { id: 13, name: 'Steven', age: 50 },
    { id: 14, name: 'John', age: 60 }
]
const defaultState = JSON.parse(localStorage.getItem('users')) ?? start_data

const REMOVEFIRST = 'REMOVEFIRST'
const REMOVELAST = 'REMOVELAST'
const REMOVESOME = 'REMOVESOME'
const GETUSERLIST = 'GETUSERLIST'
const GETUSER = 'GETUSER'

export const usersReducer = (state = defaultState, action) => {
    switch (action.type) {
        case REMOVEFIRST:
            return state.slice(1)
        case REMOVELAST:
            return state.slice(0, state.length - 1)
        case REMOVESOME:
            // console.log(action.payload);
            // console.log(state.findIndex(user => user.id === action.payload));
            // let newState = state
            // newState.splice(state.findIndex(user => user.id === action.payload), 1)
            // console.log(newState);
            // return newState
            const removeElement = state.findIndex(user => user.id === action.payload)
            return state.slice(0, removeElement).concat(state.slice(removeElement + 1))
        case GETUSERLIST:
            return [...state, ...action.payload]
        case GETUSER:
            console.log(action.payload);
        // return [...state, ...action.payload]
        default:
            return state
    }
}

export const removeFirstAction = () => ({ type: REMOVEFIRST })
export const removeLastAction = () => ({ type: REMOVELAST })
export const removeSomeAction = payload => ({ type: REMOVESOME, payload })
export const getUserListAction = payload => ({ type: GETUSERLIST, payload })
export const getUserAction = payload => ({ type: GETUSER, payload })