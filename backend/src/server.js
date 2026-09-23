const express = require("express");
const server = express();
const cors = require("cors")
require("dotenv").config();
const contactRoutes = require("../routes/contactRoutes");
const connectDB = require("./db");

server.use(cors())
server.use(express.json());
server.use("/contact", contactRoutes);

connectDB();
const PORT = process.env.PORT;
server.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});
