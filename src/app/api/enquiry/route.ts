import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const data = await req.json();

  const escapeHtml = (value: unknown) =>
    String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    country,
    preferredDate,
    dateFlexible,
    numberOfGuests,
    eventStartTime,
    interest,
    hiringInfo,
    celebrationDescription,
    enquiryType,
  } = data;

  if (!firstName || !lastName || !email || !phoneNumber) {
    return NextResponse.json(
      { success: false, message: "Required fields are missing." },
      { status: 400 },
    );
  }

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
    from: `"Function Enquiry" <admin@cornerstonepub.com.au>`,
    to: "admin@cornerstonepub.com.au", // Where you want to receive form submissions
    subject: `New ${escapeHtml(enquiryType || "function enquiry")} from ${escapeHtml(firstName)} ${escapeHtml(lastName)}`,
    html: `
      <h2>New Enquiry Details</h2>
      <p><strong>Name:</strong> ${escapeHtml(firstName)} ${escapeHtml(lastName)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(country)} ${escapeHtml(phoneNumber)}</p>
      <p><strong>Preferred Date:</strong> ${escapeHtml(preferredDate)}</p>
      <p><strong>Date Flexibility:</strong> ${escapeHtml(dateFlexible)}</p>
      <p><strong>Guests:</strong> ${escapeHtml(numberOfGuests)}</p>
      <p><strong>Time of Event:</strong> ${escapeHtml(eventStartTime)}</p>
      <p><strong>Interest:</strong> ${escapeHtml(interest)}</p>
      <p><strong>Hiring Info:</strong> ${escapeHtml(hiringInfo)}</p>
      <p><strong>Description:</strong><br/>${escapeHtml(celebrationDescription)}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true, message: "Enquiry sent!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send enquiry." },
      { status: 500 }
    );
  }
}
