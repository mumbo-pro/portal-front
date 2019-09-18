import {ADD_JOB, DELETE_JOB, GET_JOBS, JOBS_LOADING} from '../actions/types';

const initialState = {
    items: [],
    loading: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_JOBS:
            return {
                ...state,
                items: action.payload,
                loading: false
            };
        case DELETE_JOB:
            return {
                ...state,
                items: state.items.filter(item => item._id !== action.payload)
            };
        case ADD_JOB:
            return {
                ...state,
                items: [action.payload, ...state.items]
            };
        case JOBS_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}
