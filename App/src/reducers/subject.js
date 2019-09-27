import { GET_SUBJECT } from "../actions/types.js"

const initialState = {
    subject: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_SUBJECT:
            return {
                ...state,
                subject: action.payload
            }

        default:
            return state;
    }
}