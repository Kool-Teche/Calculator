const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
})

app.get('/bmicalculator', function(req, res) {
    res.sendFile(__dirname + '/bmiCalculator.html');
})

app.post('/', function(req, res) {
    const { num1, num2 } = req.body;
    const result = Number(num1) + Number(num2);
    res.send('Your SUM is ' + result);
})

app.post('/bmicalculator', function(req, res) {
    const { height, weight } = req.body;
    const bmi = parseFloat(weight) / (parseFloat(height) * parseFloat(height));
    res.send('Your BMI is ' + bmi);
})

app.listen('3000', function() {
    console.log('Server is listening on port 3000');
})