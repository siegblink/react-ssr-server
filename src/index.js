import 'core-js/stable'
import 'regenerator-runtime/runtime'
import express from 'express'
import renderer from './helpers/renderer'
import createStore from './helpers/createStore'

const app = express()

app.use(express.static('public'))

app.get('*', function (req, res) {
  const store = createStore()

  // Some logic to initialize
  //  and load data into the store
  
  res.send(renderer(req, store))
})

app.listen(3000, function() {
  console.log('Server listening on port 3000.')
})
