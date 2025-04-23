import express from 'express';
import cors from 'cors';
import { setRoutes } from './routes/waitlistRoutes'; // Updated to use named import

const app = express();
const PORT = process.env.PORT || 4000;


// Middleware
const allowedOrigins = ['https://www.myritewallet.com', 'http://localhost:3000'];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json()); // Built-in middleware for parsing JSON
app.use(express.urlencoded({ extended: true })); // Built-in middleware for parsing URL-encoded data

// Routes
setRoutes(app);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://www.myritewallet.com:${PORT}`);
});