const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const contactModel = require("../models/contactModel");

router.get("/", (req, res)=>{
  res.send("Contact route is working")
})


router.post("/contact", async (req, res) => {
  const { name, email, project, message } = req.body;

  try {
    const contact = await contactModel.create({
      name,
      email,
      project,
      message,
    });
    console.log("Saved to database : ", contact)
    res
      .status(201)
      .json({ message: "Your message has been sent successfully" });
  } catch (error) {
    console.error("Failed to save contact message", error);
    res.status(500).json({ message: "Failed to save your message" });
  }
});

module.exports = router;
