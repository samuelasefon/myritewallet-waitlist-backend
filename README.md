# MyRite Wallet Backend

This is the backend for the MyRite Wallet waitlist landing page application. It is built using Node.js, Express.js, and MySQL.

## Project Structure

- **src/**: Contains the source code for the backend application.
  - **app.ts**: Entry point of the application, sets up the Express server and middleware.
  - **controllers/**: Contains the logic for handling requests.
    - **waitlistController.ts**: Manages waitlist-related operations.
  - **models/**: Defines the data structure and database interactions.
    - **waitlistModel.ts**: Represents the waitlist data model.
  - **routes/**: Defines the API routes.
    - **waitlistRoutes.ts**: Sets up routes for waitlist operations.
  - **database/**: Manages database connections.
    - **connection.ts**: Establishes connection to the MySQL database.

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the backend directory:
   ```
   cd myrite-wallet-waitlist/backend
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Configuration

Before running the application, ensure that you have a MySQL database set up. Update the database connection details in `src/database/connection.ts`.

## Running the Application

To start the backend server, run:
```
npm start
```

The server will be running on `http://localhost:3000`.

## API Endpoints

- **POST /api/waitlist**: Add a user to the waitlist.

## License

This project is licensed under the MIT License.