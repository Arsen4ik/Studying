const defaultState = {}

const GETEMPLOYEE = 'GETEMPLOYEE'

export const employeeReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GETEMPLOYEE:
            // console.log(action.payload);
            return action.payload
        default:
            return state
    }
}

export const getEmployeeAction = payload => ({ type: GETEMPLOYEE, payload })