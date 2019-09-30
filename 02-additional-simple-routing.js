const express = require('express');

const app = express(); //creating a new application


// Variables
PORT = 3000;


// Middlewares
app.use('/', (req, res, next) => {
  res.setHeader('x-server-date', new Date);
  next();
})

// Routes
app.get('/', (req, res,next) => {
  res.send('Hello, I am a webserver');
});

app.get('/time', (req, res, next) => {
  res.send(new Date().toString());
});

app.get('/hello', (req, res, next) => {
  if(!req.query.name) {
    res.status(400).end();
  }
  res.send(`Hello ${req.query.name}`);
});

app.get('/user/:name', (req, res, next) =>{
  res.send(`User Profile of: ${req.params.name}`);
});

// Error handling demo Routes
app.get('/throw', (req, res, next) => {
  throw new Error('Something is wrong!!!');
});

app.get('/next', (req, res, next) => {
  setTimeout( () => console.log('>>> But life still goes on...'), 1500); // Funny :))
  next(new Error('Something is wrong!!!')); // NOT RECOMMENDED, because next is async. Any async error is not recommended
});

app.listen(PORT, PORT => console.log('Server URL: http://localhost:3000'));