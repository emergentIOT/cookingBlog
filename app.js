'using strict'

const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const port = process.env.PORT || 2000;
const app = express();
const router = express.Router();
//require('dotenv').config
//const url = require('url');

//app.use('/AIMS_DATA2', express.static(path.resolve(__dirname, 'AIMS_DATA2')));
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));
app.set('view engine', 'ejs');


app.listen(port, () => {console.log(`Server up at PORT: ${port}`);})


app.get("/", function(req, res) {
 console.log("hello");

})