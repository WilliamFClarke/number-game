const express = require('express')
var cors = require('cors')
const app = express()
var bodyParser = require("body-parser");
var testVal = 0

app.use(cors())

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/numbergame/getnumber', (req, res) => {

  res.send(testVal.toString());

});


app.listen(process.env.PORT || 5000, () => console.log('Example app listening on env port'))
