import axios from 'axios';

import {
    FETCH_COINS_REQUEST,
    FETCH_COINS_SUCCESS,
    FETCH_COINS_ERROR
} from './actionTypes';

import { request, received, error } from '../shared/redux/baseActions';

export const fetchCoins = () => dispatch => {
    // Dispatching our request action
    dispatch(request(FETCH_COINS_REQUEST));

    const axiosData = { 
        method: 'GET',
        url: 'https://api.bitso.com/v3/available_books/',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    }

    // If everything is correct we dispatch our received action
    // otherwise our error action

    return axios(axiosData)
      .then(response => dispatch(received(FETCH_COINS_SUCCESS, response.data)))
      .catch(err => {
        // eslint-disable-next-line no-console
        console.log('AXIOS ERROR:', err)
        dispatch(error(FETCH_COINS_ERROR))
      })
}
