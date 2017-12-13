import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import promiseMiddleware from 'redux-promise-middleware'
import rootReducer from '../reducers/rootReducer'

export default function configureStore () {
  return createStore(rootReducer, {}, applyMiddleware(logger, promiseMiddleware()))
}
