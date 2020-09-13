import {SET_NEW_SITE} from '../actions';

const initialState = { newSite: [] }
export default function newSiteReducer(state = initialState, action) {
    switch (action.type) {
        case SET_NEW_SITE:
            return action.newSite;
        default:
            return state;
    }
}