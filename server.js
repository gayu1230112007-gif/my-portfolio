const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Please complete all fields before sending."
    });
  }

  // Demo behavior: the message is printed in the terminal.
  // To receive messages by email, connect a mail service before publishing.
  console.log("\\n--- Portfolio contact form submission ---");
  console.log("Name:", String(name).slice(0, 120));
  console.log("Email:", String(email).slice(0, 200));
  console.log("Message:", String(message).slice(0, 3000));
  console.log("------------------------------------------\\n");

  return res.json({
    success: true,
    message: "Thanks for reaching out! Your message was received by this demo server."
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Portfolio running at http://localhost:${PORT}`);
});
