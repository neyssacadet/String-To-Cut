//Initializing Express framework 
const express = require('express');
const app = express();


app.post('/test', (req, res) => {
    res.send('POST request to the homepage')
  })