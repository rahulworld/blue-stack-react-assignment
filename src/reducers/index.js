import { combineReducers } from 'redux';
import eventsDetail from './default-reducer';

const rootReducers = combineReducers({
    eventsDetail: eventsDetail,
});

export default rootReducers;