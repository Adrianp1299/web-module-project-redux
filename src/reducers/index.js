import { combineReducers } from 'redux';

import movieReducer from './movieReducer';
import favoritesReducer from './favReducer'


const rootReducer = combineReducers({
    movieReducer,
    favoritesReducer

})
export default rootReducer;