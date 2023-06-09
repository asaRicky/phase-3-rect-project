# phase-3-react-project

# Movie Finder Application
This is a web application that allows users to share information about movies. The application is built using React for the frontend and Sinatra for the backend. The following are the MVPs that have been implemented in the application:

## Users should be able to register/login to the application.
A user should be able to add a new movie.
A user can view all the movies they have added.
A user should be able to view all the available movies.
A user should be able to search for a movie through title or year.
A user should be able to update details of movies they added.
A user should be able to remove details of movies they added.
Users should be NOT able to update or delete movies they have not added.
In order to use the application, the user must be logged in.

## Technologies Used
React, Sinatra, SQLite3

# Backend github link for the sinatra app
https://github.com/asaRicky/phase-3-react-sinatra-project

## Getting Started
To get started with the application, please follow the steps below:

Clone the repository from GitHub.

Install dependencies by running npm install and bundle install.

Run the backend server using ruby server.rb.

Run the frontend server using npm start.

The application should now be running on localhost:3000.

## Components
The following are the main components that have been implemented in the application:

LoginPage - This component displays a login form that allows users to enter their username and password.

RegistrationPage - This component displays a registration form that allows users to create a new account by providing a username and password.

MovieList - This component displays a list of movies. It can show all movies or only the movies that the user has added.

NavBar - This component displays a search bar that allows users to search for movies by title or release year.


## Authentication and Authorization
To ensure that users are authenticated and authorized before accessing certain parts of the application, the following measures have been implemented:

Users must be logged in to access the movie listing, movie details, and movie form pages.

Users can only update and delete movies that they have added.

Users cannot update or delete movies that they have not added.

Database Schema
The application uses an SQLite3 database to store information about users and movies. The following is the schema for the database:

Users table:
id: integer
username: string
password: string

Movies table:
id: integer
title: string
year: integer
description: string
user_id: integer (foreign key referencing the id field in the Users table)

# Conclusion
The Movie Finder application is a basic web application that allows users to share information about movies. It has been built using React for the frontend and Sinatra for the backend. The application implements the MVPs that were required for the project, and also incorporates authentication and authorization measures to ensure that users are only able to perform actions that they are authorized to perform.

# Author : Derrick Walala
# github : https://github.com/asaRicky