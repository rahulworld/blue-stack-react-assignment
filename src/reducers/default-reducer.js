import { GET_EVENT_DATA, SET_EVENT_DATA, SCHEDULE_EVENT } from '../actions';

const INITIAL_STATE = {
    eventData: [],
    data: [],
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SCHEDULE_EVENT:
            const eventItem = state.data.filter((item) => (item.id == action.payload.itemId));
            return { ...state, data: [ ...state.data.filter(item => item.id != action.payload.itemId), { ...eventItem[0], createdOn: action.payload.updatedTime } ] };
        case SET_EVENT_DATA:
            return { ...state, ...action.payload };
        case GET_EVENT_DATA:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}