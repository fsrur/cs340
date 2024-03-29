/*
    SETUP
*/
// Express
const express = require('express');   // We are using the express library for the web server
const app     = express();            // We need to instantiate an express object to interact with the server in our code
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public')); 

// Port
const port = process.env.PORT || 3000                 

// Database
const db = require('./database/db-connector')

// Test the database connection
db.pool.getConnection((err, connection) => {
    if (err) {
        // If an error occurred during the connection, log it and end the process
        console.error("Error connecting to the database:", err);
        process.exit(1); // Exit the process with a failure code
    } else {
        // If the connection to the database was successful, log it and release the connection
        console.log("Successfully connected to the database.");
        connection.release(); // Release the connection back to the pool
    }
});

// Handlebars
const { engine } = require('express-handlebars');
const exphbs = require('express-handlebars');     // Import express-handlebars
app.engine('.hbs', engine({extname: ".hbs"}));  // Create an instance of the handlebars engine to process templates
app.set('view engine', '.hbs');                 // Tell express to use the handlebars engine whenever it encounters a *.hbs file.

// Helper Functions
const Handlebars = require('handlebars');
Handlebars.registerHelper('eq', function(a, b) {
    return a === b;
  });

Handlebars.registerHelper('inList', function(item, list, options) {
if (list.includes(item)) {
    return this;
}
});


// Import Modules
const booksModule = require('./routes/books.js');
const authorsModule = require('./routes/authors.js');
const genresModule = require('./routes/genres.js');
const seriesModule = require('./routes/series.js');

/*
    ROUTES
*/

// Home
app.get('/', function(req, res) {
    res.render('index');
});

//Books
app.get('/books', function(req, res) {  
    booksModule.getBooks(req, res)
});

app.get('/add_books', function(req, res) {
    booksModule.getAddBooks(req, res)
});

app.post('/add_books', function(req, res){
    booksModule.postAddBooks(req, res)
});

app.get('/edit_books', function(req, res) {
    booksModule.getEditBooks(req, res)
});

app.put('/edit_books', function (req, res) {
    booksModule.postEditBooks(req, res)
});

app.delete('/delete_book', function(req, res) {
    booksModule.deleteBooks(req, res)
});


// Authors
app.get('/authors', function(req, res) {
    authorsModule.getAuthors(req, res)
});

app.get('/add_authors', function(req, res) {
    authorsModule.getAddAuthors(req, res)
});

app.post('/add_authors', function(req, res){
    authorsModule.postAddAuthors(req, res)
});

app.get('/edit_authors', function(req, res) {
    authorsModule.getEditAuthors(req, res)
});

app.put('/edit_authors', function (req, res) {
    authorsModule.postEditAuthors(req, res)
});

app.delete('/delete_author', function(req, res) {
    authorsModule.deleteAuthors(req, res)
});


// Genres
app.get('/genres', function(req, res) {
    genresModule.getGenres(req, res)
});

app.get('/add_genres', function(req, res) {
    genresModule.getAddGenres(req, res)
});

app.post('/add_genres', function(req, res){
    genresModule.postAddGenres(req, res)
});

app.get('/edit_genres', function(req, res) {
    genresModule.getEditGenres(req, res)
});

app.put('/edit_genres', function (req, res) {
    genresModule.postEditGenres(req, res)
});

app.delete('/delete_genre', function(req, res) {
    genresModule.deleteGenres(req, res)
});


// Series
app.get('/series', function(req, res) {
    seriesModule.getSeries(req, res)
});

app.get('/add_series', function(req, res) {
    seriesModule.getAddSeries(req, res)
});

app.post('/add_series', function(req, res){
    seriesModule.postAddSeries(req, res)
});

app.get('/edit_series', function(req, res) {
    seriesModule.getEditSeries(req, res)
});

app.put('/edit_series', function (req, res) {
    seriesModule.postEditSeries(req, res)
});

app.delete('/delete_series', function(req, res) {
    seriesModule.deleteSeries(req, res)
});


/*
    LISTENER
*/
app.listen(port, function(){            // This is the basic syntax for what is called the 'listener' which receives incoming requests on the specified PORT.
    console.log('Express started on http://localhost:' + port + '; press Ctrl-C to terminate.')
});