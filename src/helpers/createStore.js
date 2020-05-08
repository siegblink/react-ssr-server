import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from '../client/reducers'

export default function () {
  const store = createStore(reducers, {}, applyMiddleware(thunk))

  return store
}
