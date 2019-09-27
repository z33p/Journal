import axios from 'axios';
import { GET_SUBJECT } from './types';

// GET SUBJECT
export const getSubject = () => dispatch => {
    axios.get('/api/subject/')
    .then(res => {
        dispatch({
            type: GET_SUBJECT,
            payload: res.data
        });
    })
    .catch(err => console.log(err));
}