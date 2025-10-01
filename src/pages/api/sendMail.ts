import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: "Missing fields" });
  }

  try {
    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // your Gmail
        pass: process.env.GMAIL_PASS, // your App Password (not normal password!)
      },
    });

    // Define mail options
    const mailOptions = {
      from: email,
      to: process.env.GMAIL_USER, // send to your Gmail
      subject: `[Portfolio Contact] ${subject}`,
      text: `You got a message from ${name} (${email}):\n\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Message sent successfully" });
  } catch (err: any) {
    console.error("Email error:", err);
    res.status(500).json({ message: "Failed to send message", error: err.message });
  }
}
