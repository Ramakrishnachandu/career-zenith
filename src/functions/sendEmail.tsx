import nodemailer from "nodemailer";
import dotenv from "dotenv";
interface EmailOptions {
  to: string;
  subject: string;
  text?: string;
  html?: string;
  from?: string;
}
dotenv.config();
const transporter = nodemailer.createTransport({
  service: 'gmail',
  port: 587, // Port for TLS
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false, // Optional: to handle self-signed certificates
  },
});

// Reusable function to send an email
export async function sendEmail({
  to,
  subject,
  text,
  html,
  from = `"Career Zenith" <${process.env.EMAIL_USER}>`,
}: EmailOptions) {
  const mailOptions = {
    from,
    to,
    subject,
    text,
    html,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
  } catch (error) {
    console.error("Error sending email: " + error);
  }
}
