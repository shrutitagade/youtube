import { connectDB } from "./db/dbconnect.js";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from 'url';

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Specify the path to your .env file
const envPath = path.resolve(__dirname, '../.env');
dotenv.config({ path: envPath });


connectDB();
