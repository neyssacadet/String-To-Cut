//Initializing Express framework 
const express = require('express');
const app = express();

function cutString (stringInput){
    let processedString = '';
    const characters = stringInput.split('');
    for (let i = 2; i < characters.length; i += 3) {
      processedString += characters[i];
    }
    
    return { return_string: processedString };
}
console.log(cutString("iamyourlyftdriver"));

//Post route
app.post('/test', (req, res) => {
    res.send('POST request to the homepage')
  })