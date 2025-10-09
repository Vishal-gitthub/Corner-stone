import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const data = await req.json();

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
  } = data;

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
    subject: `New Function Enquiry from ${firstName} ${lastName}`,
    html: `
      <h2>New Enquiry Details</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> (${country}) ${phoneNumber}</p>
      <p><strong>Preferred Date:</strong> ${preferredDate}</p>
      <p><strong>Date Flexibility:</strong> ${dateFlexible}</p>
      <p><strong>Guests:</strong> ${numberOfGuests}</p>
      <p><strong>Time of Event:</strong> ${eventStartTime}</p>
      <p><strong>Interest:</strong> ${interest}</p>
      <p><strong>Hiring Info:</strong> ${hiringInfo}</p>
      <p><strong>Description:</strong><br/>${celebrationDescription}</p>
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
