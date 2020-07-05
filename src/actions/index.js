import axios from 'axios';
import { EVENT_DATA, EVENT_TYPE } from '../shared/constants';
export const GET_EVENT_DATA = 'BLUE_SACK/GET_EVENT_DATA';
export const SET_EVENT_DATA = 'BLUE_SACK/SET_EVENT_DATA';
export const SCHEDULE_EVENT = 'BLUE_SACK/SCHEDULE_EVENT';


export const scheduleEvent = (eventId, newTime = new Date()) => async (dispatch, getState) => {
    const {data} = getState().eventsDetail;
    if (data.length > 0) {
        const parsedTime = Date.parse(newTime);
        dispatch({
            type: SCHEDULE_EVENT,
            payload: { itemId: eventId, updatedTime: parsedTime },
        });
    }
};

export const setEventData = (eventType) => async (dispatch) => {
    let payload = [];
    if (EVENT_DATA.data.length > 0) {
        payload = EVENT_DATA.data;
        dispatch({
            type: SET_EVENT_DATA,
            payload: { data: payload },
        });
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

export const getEventData = (eventType) => async (dispatch, getState) => {
    const {data} = getState().eventsDetail;
    let payload = [];
    if (data.length > 0) {
        payload = data;
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