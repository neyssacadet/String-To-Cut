const port = 3000;

//Initializing Express framework and bodyParser
const bodyParser = require("body-parser");
const express = require("express");
const app = express();

//Parsing requests with bodyParser as a middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//function that cuts every 3rd character in string to return a JSON.
function cutString(stringInput) {
  let processedString = "";
  const characters = stringInput.split("");
  for (let i = 2; i < characters.length; i += 3) {
    processedString += characters[i];
  }

  return { return_string: processedString };
}

//Post test route
app.post("/test", (req, res) => {
  const { string_to_cut } = req.body;
  if (string_to_cut && typeof string_to_cut === "string") {
    res.status(200).json(cutString(string_to_cut));
  } else {
    res.status(400).send({
      error: "Incorrect body format. Request expected: string_to_cut: <string>",
    });
  }
  res.end();
});

app.listen(port, () => console.log(`api is running on ${port}`));
