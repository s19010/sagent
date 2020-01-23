const sagent = require('superagent')
const URI = 'http://localhost:3000/fruits.json'

sagent
  .get(URI)
  .then(res => res.body)
  .then(json => json.fruits)
  .then(console.log)
  .catch(e => console.log(e))
