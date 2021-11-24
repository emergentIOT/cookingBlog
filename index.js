'using strict'

const express = require('express');
const getListOfImages = require('./index');
const path = require("path");
const port = process.env.PORT || 3000;
const app = express();
const router = express.Router();
//const url = require('url');

//app.use('/AIMS_DATA2', express.static(path.resolve(__dirname, 'AIMS_DATA2')));
app.set('view engine', 'ejs');
app.listen(port, () => {console.log(`Server up at PORT: ${port}`);})


app.get("/", function(req, res) {
 console.log("hello")

})