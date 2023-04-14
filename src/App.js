const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const history = require('connect-history-api-fallback');

app.use(cors());
app.use(morgan('tiny'));
app.use(history());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')))

// Test 
app.get('/', function (req, res){
    res.send('Hola mundo!');
});


app.listen(3000, function(){
    console.log('API corriendo.');    
});