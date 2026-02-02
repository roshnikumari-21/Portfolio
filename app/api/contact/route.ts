import { NextResponse } from "next/server";
import { sendEmail } from "@/utils/sendEmail";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    await sendEmail({
      to: process.env.SMTP_EMAIL as string, // Sending to yourself
      subject: `Portfolio | New Message from ${name}: ${subject}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 },
    );
  }
}
