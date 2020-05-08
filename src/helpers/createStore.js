import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

export default function () {
  const store = createStore(reducers, {}, applyMiddleware(thunk))

  return store
}
