import { combineReducers } from 'redux'
import counterReducer from './counterReducer'

export default combineReducers({
    counter: counterReducer
})

//export default counterReducer
