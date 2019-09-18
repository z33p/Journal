import { combineReducers } from 'redux';
import subject from './subject';
import auth from './auth';

export default combineReducers({
    subject,
    auth
});