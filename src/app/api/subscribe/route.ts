import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const data = await req.json();

  const { name, email } = data;

  // Create reusable transporter object using SMTP transport (Hostinger Webmail SMTP settings)
  const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com", // Hostinger SMTP server
    port: 465, // Use 465 for secure (SSL)
    secure: true,
    auth: {
      user: process.env.EMAIL_USER, // Your Hostinger email
      pass: process.env.EMAIL_PASS, // Your email password or app password
    },
  });

  const mailOptions = {
    from: `"Newsletter Subscription" <admin@cornerstonepub.com.au>`,
    to: "admin@cornerstonepub.com.au", // Where you want to receive subscriptions
    subject: `New Newsletter Subscription from ${name}`,
    html: `
      <h2>New Newsletter Subscription</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subscribed at:</strong> ${new Date().toLocaleString()}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true, message: "Subscription successful!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, message: "Failed to process subscription." },
      { status: 500 }
    );
  }
}

