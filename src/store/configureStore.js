import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import promiseMiddleware from 'redux-promise-middleware'
import rootReducer from '../reducers/rootReducer'

export default function configureStore () {
  const middlewares = [promiseMiddleware()]
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(logger)
  }
  return createStore(rootReducer, {}, applyMiddleware(...middlewares))
}
