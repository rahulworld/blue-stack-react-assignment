import axios from 'axios';
import { EVENT_DATA, EVENT_TYPE } from '../shared/constants';
export const GET_EVENT_DATA = 'BLUE_SACK/GET_EVENT_DATA';


export const getEventData = (eventType) => async (dispatch, getState) => {
    let payload = [];
    if (EVENT_DATA.data.length > 0) {
        payload = EVENT_DATA.data;
        if (eventType === 'UPCOMING') {
            payload = payload.filter((item) => (new Date(item.createdOn) > new Date()));
        } else if (eventType === 'PAST') {
            payload = payload.filter((item) => (new Date(item.createdOn) < new Date()));
        } else if (eventType === 'LIVE') {
            payload = payload.filter((item) => (new Date(item.createdOn) == new Date()));
        }
        dispatch({
            type: GET_EVENT_DATA,
            payload: { eventData: payload },
        });
    }
};