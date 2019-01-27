import * as actions from "../actions/actions"
import { updateObject } from "../utils"

const initialState = {
    value: 0,
}

const setValue = (state, action) => {
    return updateObject(state, { 
        value: action.payload.value 
    })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.SET_VALUE: return setValue(state, action)
        default: return state
    }
}

export default reducer
