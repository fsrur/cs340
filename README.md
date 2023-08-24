# CS340 - Node.js CRUD Application

## Introduction
This is a basic Node.js application that provides CRUD functionality for books, authors, genres, and series. The application is built with Express.js, uses Handlebars for templating, and connects to a SQL-compatible database.

## Prerequisites
- Node.js
- Express.js
- Handlebars.js
- SQL-compatible database

## Installation or Setup
1. Clone the repository.
2. Navigate into the repository in your terminal.
3. Install the required dependencies with `npm install`.
4. Set up an SQL-compatible database and adjust the <b>'./database/db-connector'</b> file to match your specific database configuration.

## Running the Application
To start the application, run the following command in your terminal:

`npm start`

This will start the server on port 3000 (or the port specified in your environment variables). If the server starts successfully, you'll see a message indicating that Express has started.

## Usage
This application provides both a user interface (UI) for managing books, authors, genres, and series, as well as an API with CRUD operations. Here's how to use each:

### User Interface

The React front-end displays distinct sections or tables for books, authors, genres, and series.

- **Viewing All Entities**: The main page offers tables that showcase lists of all books, authors, genres, and series.

- **Adding an Entity**: For each category (e.g., books, authors), click the "Add" button, fill out the provided form with the necessary details, and click "Submit" to create a new entry.

- **Editing an Entity**: Next to each entry of an entity, click the "Edit" button. This will bring up a form filled with the current data. Make the necessary edits and click "Submit" to save changes.

- **Deleting an Entity**: To remove an entry, click the "Delete" button located next to the item you want to remove.

### API Endpoints

This application supports CRUD operations on books, authors, genres, and series through the following API endpoints:

**/books, /authors, /genres, /series**: Depending on the HTTP method used, these routes allow for displaying, adding, editing, and deleting the respective entities.
- 'GET': Retrieves all entries for the entity.
- 'POST': Adds a new entry. Include the necessary data in the request body.
- 'PUT': Updates a specific entry. Include the specific entity's ID in the route (e.g., /books/5 for a book with ID 5) and updated data in the request body.
- 'DELETE': Deletes a specific entry. Include the specific entity's ID in the route (e.g., /books/5 for deleting the book with ID 5).

## Project Structure and Implementation Details

### Express.js
The app is built with Express.js as the web server, and uses JSON and URL encoding for parsing incoming request bodies.

### Database
This application uses a SQL database. The connection settings for the database are defined in the <b>'db-connector.js'</b> file.

### Handlebars
Handlebars is used as the template engine for rendering HTML files. The file extension for Handlebars templates is <b>'.hbs'</b>.

### Helper Functions
Two Handlebars helper functions, 'eq' and 'inList', are defined to enable conditional rendering in the Handlebars templates.

### Modules
This application is modular, with separate modules for each section of the application (books, authors, genres, series).

### Routes
The application includes routes for books, authors, genres, and series. Each route supports <b>GET</b>, <b>POST</b>, <b>PUT</b> (edit), and <b>DELETE</b> requests. Each route's functionality is defined in its respective module in the <b>'routes'</b> directory.
