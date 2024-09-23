import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from 'url'; // Required for getting __dirname in ES modules
import cookieParser from "cookie-parser";
import authRoute from './routes/auth.js';
import userRoute from './routes/user.js';
import salonRoute from './routes/salon.js';

// Initialize express app
const app = express();

// Get __dirname in ES module environment
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// CORS setup
app.use(cors({
    origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
    credentials: true
}));

// JSON and URL encoded payload limits
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// Static file serving (for frontend)
const buildpath = path.join(__dirname, "../frontend/dist");
app.use(express.static(buildpath));

// Cookie parser
app.use(cookieParser());

// Routes
app.use('/api/v1/auth', authRoute); // domain/api/v1/auth/register or /login
app.use('/api/v1/users', userRoute); // domain/api/v1/users/delete/getsingle/update/getAll/getprofile
app.use('/api/v1/salons', salonRoute); // domain/api/v1/salons/delete/getsingle/update/getAll/getprofile

// Catch-all route for serving frontend
app.get('*', (req, res) => {
    res.sendFile(path.join(buildpath, 'index.html'));
});
export { app };
