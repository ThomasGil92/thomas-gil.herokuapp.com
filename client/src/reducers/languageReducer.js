import { SET_LANGUAGES } from '../actions';

const initialState = "fr"
export default function languageReducer(state = initialState, action) {
    switch (action.type) {
        case SET_LANGUAGES:
            return action.language;
        default:
            return state;
    }
}