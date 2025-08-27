# CineSky

CineSky is a personal movie logging app where you can add movies with directors and descriptions, just like Letterboxd.

## Features
- Add movies with title, director, and description
- View list of all movies
- Django + MySQL backend

## Environment Variables

This project uses environment variables for sensitive settings like `SECRET_KEY` and database credentials. 

To run the project locally, create a `.env` file in the project root with the following variables:

DJANGO_SECRET_KEY=your-secret-key,
DB_NAME=your-database-name,
DB_USER=root,
DB_PASSWORD=your-database-password,
DB_HOST=localhost,
DB_PORT=3306,
DEBUG=True.
