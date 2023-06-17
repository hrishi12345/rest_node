// Import necessary modules and dependencies
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// Import your routes file
const restRoutes = require('./routes/restRoutes');

// Create an Express app
const app = express();

// Set up the view engine and views directory
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Set up body-parser middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: false }));

// Set up static file serving
app.use(express.static(path.join(__dirname, 'public')));

// Define your routes
app.use('/', restRoutes);

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
