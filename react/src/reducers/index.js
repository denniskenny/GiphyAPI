import { combineReducers } from 'redux';
import { gifsReducer } from './gifs/gifsReducer';
import { filterReducer } from './filter/filterReducer';
import { offsetReducer } from './offset/offsetReducer';
import { modalReducer } from './modal/modalReducer';

 const rootReducer = combineReducers({
    gifs: gifsReducer,
    filter: filterReducer,
    offset: offsetReducer,
    modal: modalReducer,
 });

 export default rootReducer;
