# CS340

## Introduction

This is a simple Node.js application that provides basic CRUD functionality for books, authors, genres, and series. It's built using Express.js, Handlebars for templating, and includes a connection to a SQL-compatible database.

## Prerequisites

- Node.js and npm
- Express.js
- Handlebars.js
- SQL-compatible database

## Getting Started

1. Clone the repository.
2. Navigate into the repository in your terminal.
3. Install the required dependencies with <b>'npm install'</b>.
4. Set up an SQL-compatible database and adjust the <b>'./database/db-connector'</b> file to match your specific database configuration.

## Features

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

## Running the Application

To start the application, run the following command in your terminal:

`npm start`

This will start the server on port 3000 (or the port specified in your environment variables). If the server starts successfully, you'll see a message indicating that Express has started.

## API Endpoints
This application supports the following endpoints:

- <b>/</b> - Renders the home page.
- <b>/books</b>, <b>/authors</b>, <b>/genres</b>, <b>/series</b> - These routes are for displaying, adding, editing, and deleting the respective entities.
  - <b>/get</b> and <b>/add</b> - These endpoints are for retrieving and adding the respective entities.
  - <b>/edit</b> and <b>/delete</b> - These endpoints are for editing and deleting the respective entities.

Please note that each endpoint supports different HTTP methods (<b>'GET'</b>, <b>'POST'</b>, <b>'PUT'</b>, <b>'DELETE'</b>), which correspond to different actions (retrieving, creating, updating, and deleting data, respectively).
