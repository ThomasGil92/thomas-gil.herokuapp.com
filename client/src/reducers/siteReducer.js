import {GET_SITE} from '../actions';

const initialState = { siteToUpdate: [] }
export default function siteReducer(state = initialState, action) {
    switch (action.type) {
        case GET_SITE:
            return action.siteToUpdate;
        default:
            return state;
    }
}