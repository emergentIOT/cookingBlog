'using strict'

const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const port = process.env.PORT || 2000;
const app = express();

const routes = require('./server/routes/recipeRoutes.js');
//require('dotenv').config
//const url = require('url');


app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('layout', './layouts/main');



app.use('/', routes);

app.listen(port, () => {console.log(`Server up at PORT: ${port}`);})

