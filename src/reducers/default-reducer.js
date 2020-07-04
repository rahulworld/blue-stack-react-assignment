import { GET_EVENT_DATA } from '../actions';

const INITIAL_STATE = {
    eventData: [],
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case GET_EVENT_DATA:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}