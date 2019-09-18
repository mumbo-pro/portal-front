import axios from 'axios';
import {ADD_JOB, DELETE_JOB, GET_JOBS, JOBS_LOADING} from './types';
import {tokenConfig} from './authActions';
import {returnErrors} from './errorActions';

const BASE_URL = process.env.APP_URL || 'http://localhost:6005';

export const getJobs = () => dispatch => {
    dispatch(setJobsLoading());
    axios
        .get(BASE_URL + '/api/jobs')
        .then(res =>
            dispatch({
                type: GET_JOBS,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};

export const addJob = item => (dispatch, getState) => {
    axios
        .post(BASE_URL + '/api/jobs', item, tokenConfig(getState))
        .then(res =>
            dispatch({
                type: ADD_JOB,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};

export const deleteItem = id => (dispatch, getState) => {
    axios
        .delete(`${BASE_URL}/api/jobs/${id}`, tokenConfig(getState))
        .then(res =>
            dispatch({
                type: DELETE_JOB,
                payload: id
            })
        )
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};

export const setJobsLoading = () => {
    return {
        type: JOBS_LOADING
    };
};
