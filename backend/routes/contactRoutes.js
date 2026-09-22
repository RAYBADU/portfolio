const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const contactModel = require("../models/contactModel");

router.post("/", async (req, res) => {
  const { name, email, project, message } = req.body;

  try {
    const contact = await contactModel.create({
      name,
      email,
      project,
      message,
    });
    res
      .status(201)
      .json({ message: "Your message has been sent successfully" });
  } catch (error) {
    res.status(400).json({ message: "Failed to submit" });
    console.log("Failed to submit", error);
  }
});

module.exports = router;
