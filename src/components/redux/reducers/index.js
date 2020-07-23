import { combineReducers } from 'redux';

import authUserReducer from './authUserReducer';
import schoolReducer from './schoolReducer'

export default combineReducers({
    authUser: authUserReducer,
    schools: schoolReducer
    
});
