import {GET_SITE,CLEAR_TO_UPDATE_SITE} from '../actions';

const initialState = { siteToUpdate: [] }
export default function siteReducer(state = initialState, action) {
    switch (action.type) {
        case GET_SITE:
            return action.siteToUpdate;
        case CLEAR_TO_UPDATE_SITE:
            return action.siteToUpdate;
        default:
            return state;
    }
}