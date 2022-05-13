# String-To-Cut.
This is a small web application that returns a string containing every third letter from the original given string. 

# Installation

* Clone the repo by using ```git clone```.
* Run ```npm install``` on the cloned directory.

# Testing
```bash
curl -X POST http://localhost:3000/test --data '{"string_to_cut": "iamyourlyftdriver"}' -H 'Content-Type: application/json' 
```
Expected output
```bash
{"return_string":"muydv"}
```