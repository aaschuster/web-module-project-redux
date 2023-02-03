import { combineReducers } from 'redux';

import movieReducer from './movieReducer';

export const reducer = combineReducers({
    movie: movieReducer
})

export default movieReducer;