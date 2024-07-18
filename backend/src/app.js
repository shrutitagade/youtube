import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
export const app = express();
app.use(express.json({ limit: "15kb" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
app.use(cookieParser());