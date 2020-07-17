import {GET_SITES} from '../actions';

const initialState = { sites: [] }
export default function sitesReducer(state = initialState, action) {
    switch (action.type) {
        case GET_SITES:
            return action.sites;
        default:
            return state;
    }
}