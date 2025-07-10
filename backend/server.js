const express= require("express")
require("dotenv").config()
const nodemailer=require("nodemailer")
const cors=require("cors")

const app= express()
app.use(express.json())
app.use(cors());

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, 
      pass: process.env.EMAIL_PASS 
    }
  })

    const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER, 
    subject: `New message from ${name}`,
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `
  }
    try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Email failed to send.' });
  }
});

const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));