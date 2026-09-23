const express = require("express");
const server = express();
const cors = require("cors")
require("dotenv").config();
const contactRoutes = require("../routes/contactRoutes");
const connectDB = require("./db");

const allowedOrigins = [
  "http://localhost:5173",
  "https://frontend-five-tau-62.vercel.app",
];

server.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);
server.use(express.json());
server.use("/contact", contactRoutes);

connectDB();
const PORT = process.env.PORT;
server.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});
