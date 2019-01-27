import * as actions from "./actions"

export const setValue = (value) => {
    return {
        type: actions.SET_VALUE,
        payload: {
            value: value
        }
    }
}