import { createStore } from 'redux'
import favouriteReducer from './favouriteApp'

const store = createStore(favouriteReducer)

export default store