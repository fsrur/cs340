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

The React front-end displays distinct sections or tables for books, authors, genres, and series.

- **Viewing All Entities**: The main page offers tables that showcase lists of all books, authors, genres, and series.

- **Adding an Entity**: For each category (e.g., books, authors), click the "Add" button, fill out the provided form with the necessary details, and click "Add" to create a new entry.

- **Editing an Entity**: Next to each entry of an entity, click the "Edit" button. This will bring up a form filled with the current data. Make the necessary changes and click "Edit" to save changes.

- **Deleting an Entity**: To remove an entry, click the "Delete" button located next to the item you want to remove.

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
