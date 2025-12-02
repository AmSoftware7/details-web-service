const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// 1️⃣ Serve static files (CSS, JS, images)
app.use(express.static(path.join(__dirname)));

// 2️⃣ Serve index.html manually
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Contact form
app.post("/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "awsedrftghyyy@gmail.com",
        pass: "gddysvzexurytbki",
      },
    });

    await transporter.sendMail({
      from: email,
      to: "awsedrftghyyy@gmail.com",
      subject: `Kontaktformular: ${subject}`,
      text: `Von: ${name}\nE-Mail: ${email}\n\n${message}`,
    });

    res.json({ success: true, message: "Nachricht gesendet!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Fehler" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
