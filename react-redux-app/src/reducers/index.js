import {combineReducers} from 'redux';
import UserReducer from './reducer-user';
import ActiveUserReducer from './reducer-active-user';

const allReducers=combineReducers({
    users:UserReducer,
    ActiveUser:ActiveUserReducer
})

export default allReducers;