import express from 'express'
import renderer from './helpers/renderer'
const app = express()

app.use(express.static('public'))

app.get('/', function(req, res) {
  res.send(renderer())
})

app.listen(3000, function() {
  console.log('Server listening on port 3000.')
})
