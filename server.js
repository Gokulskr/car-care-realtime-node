const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

app.post("/book-appointment", (req, res) => {
  const { name, email, date, time } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "gokulvijayskr@gmail.com",
      pass: "aszcfzkpkizbpsoz",
    },
  });

  const mailOptions = {
    from: "gokulvijayskr@gmail.com",
    to: "gokulvijayskr@gmail.com",
    subject: "New Appointment Booking",
    text: `Name: ${name}\nEmail: ${email}\nDate: ${date}\nTime: ${time}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send("Email sent");
  });
});

app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
