const express = require('express');

const app = express();


app.use('/users', (req, res, next) => {
    console.log('lala 1');
    res.send('<h1>Lalalallalala</h1>')
});

app.use('/', (req, res, next) => {
    console.log('lala 2');
    res.send('<h1>I am home</h1>')
});

app.listen(3002);