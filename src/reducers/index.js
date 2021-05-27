import { combineReducers } from 'redux'
import articles from './articles'
import loader from './loader';

export default combineReducers({
    articles,
    loader
})