import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { adsReducer } from './reducers/ads'

const rootReducer = combineReducers({
  ads: adsReducer
})

export default createStore(rootReducer, applyMiddleware(thunk))
