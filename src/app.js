const express = require('express');
const dotenv = require('dotenv');
const { join } = require('path');
const bodyParser = require("body-parser")
const { errorHandler } = require('./lib/error-middleware');
const app = express();

// Set default value for NODE_ENV
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Read env vars
dotenv.config();

// Configure view engine
app.set('view engine', 'ejs');
app.set('views','./src/views');
app.use(express.static('./public'));

// Set app port
app.set('port', process.env.PORT || 3000);

// Add Body Parser
app.use(bodyParser.urlencoded({ extended: false }));

// Set the routes
const routes = require('./routes');
app.use('/', routes);

// Error middleware
app.use(errorHandler);

// Start
app.listen(app.get('port'), function() {
    console.log('App listening on port', app.get('port'));
});
