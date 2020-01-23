const sagent = require('superagent')
const URI = 'http://localhost:3000/fruits.json'
const callback = (err, res) => console.log(res.body)

sagent.get(URI).end(callback)
