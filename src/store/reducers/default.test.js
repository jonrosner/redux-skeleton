import reducer from "./default"
import * as actionTypes from "../actions/actionTypes"

describe("default reducer", () => {
    it("should return the initial state", () => {
        expect(reducer(undefined, {})).toEqual({
            token: null
        })
    })

    it("should store value", () => {
        const state = {
            value: null
        }
        expect(reducer(state, {
            type: actionTypes.SET_VALUE, payload: {
                value: "12345"
            }
        })).toEqual({
            value: "12345"
        })
    })
})
