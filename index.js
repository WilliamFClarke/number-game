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

app.post('/numbergame/setnumber',function(req, res){
  const userName = req.query.user;
  const userNumber = req.query.number;
  const expectedNumber = testVal;
  console.log(req.query)
  if (userNumber == expectedNumber) {
    res.status(200);
    res.end("CORRECT! You have claimed number: " + userNumber);
    increaseVal();
    return
  } else {
    res.end("INCORRECT! the expected number is: " + expectedNumber);
    return
  };
});

app.listen(process.env.PORT || 5000, () => console.log('Number app listening'))

function increaseVal() {
  var tempVal = testVal
  testVal += 1;
  console.log('Number increased to: ' + testVal );
  return tempVal;
};
