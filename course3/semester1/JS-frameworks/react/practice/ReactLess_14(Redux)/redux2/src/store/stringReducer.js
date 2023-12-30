const defaultState = 'default string';

const UPPER = 'UPPER'
const LOWER = 'LOWER'
const INITCAP = 'INITCAP'
const INITCAPWORD = 'INITCAPWORD'
const NEWWORD = 'NEWWORD'

export const stringReducer = (state = defaultState, action) => {
    switch (action.type) {
        case UPPER:
            return state.toLocaleUpperCase()
        case LOWER:
            return state.toLocaleLowerCase()
        case INITCAP:
            return state[0].toLocaleUpperCase() + state.slice(1).toLocaleLowerCase()
        case INITCAPWORD:
            return state.split(' ').map(word => word[0].toLocaleUpperCase() + word.slice(1).toLocaleLowerCase()).join(' ')
        case NEWWORD:
            return action.payload
        default:
            return state
    }
}

export const upperAction = () => ({ type: UPPER })
export const lowerAction = () => ({ type: LOWER })
export const initCapAction = () => ({ type: INITCAP })
export const initCapWordAction = () => ({ type: INITCAPWORD })
export const newWordAction = payload => ({ type: NEWWORD, payload })