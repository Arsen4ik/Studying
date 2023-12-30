const _defaultState = [
    { id: 1, title: 'Велосипед', count: 5 },
    { id: 2, title: 'Самокат', count: 4 },
    { id: 3, title: 'Гантели', count: 7 },
    { id: 4, title: 'Ракетки', count: 1 }
]

const defaultState = JSON.parse(localStorage.getItem('productList')) ?? _defaultState

const INCREASE_COUNT = 'INCREASE_COUNT'
const DECREASE_COUNT = 'DECREASE_COUNT'
const ADD_PRODUCT = 'ADD_PRODUCT'

export const productListReducer = (state = defaultState, action) => {
    switch (action.type) {
        case INCREASE_COUNT:
            return state.map(el => el.id === action.payload ? { ...el, count: el.count + 1 } : el)
        case DECREASE_COUNT:
            const decreasedElement = state.findIndex(el => el.id === action.payload)
            if (state[decreasedElement].count === 1) return state.slice(0, decreasedElement).concat(state.slice(decreasedElement + 1))
            return state.map(el => el.id === action.payload ? { ...el, count: el.count - 1 } : el)
        case ADD_PRODUCT:
            return action.payload ? [{ id: new Date().getTime(), title: action.payload, count: 1 }].concat(state) : state
        default:
            return state
    }
}

export const INCREASE_COUNT_action = payload => ({ type: INCREASE_COUNT, payload })
export const DECREASE_COUNT_action = payload => ({ type: DECREASE_COUNT, payload })
export const ADD_PRODUCT_action = payload => ({ type: ADD_PRODUCT, payload })
