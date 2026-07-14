import { NextResponse } from "next/server";
import { Resend } from "resend";
import { CONTACT_INFO } from "@/lib/data";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, message, website } = body as Record<string, string>;

    // Honeypot: a hidden field named "website" that real visitors never fill in.
    // If it has a value, silently accept without sending — likely a bot.
    if (website) {
      return NextResponse.json({ success: true });
    }

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json({ error: "Name, email and message are required." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not set.");
      return NextResponse.json(
        { error: "Email service is not configured yet. Please contact us directly by phone or WhatsApp." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL || "TSENRE Website <noreply@tsenretechnologiesltdng.com>",
      to: process.env.CONTACT_TO_EMAIL || CONTACT_INFO.email,
      replyTo: email,
      subject: `New Website Inquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "—"}`,
        `Company: ${company || "—"}`,
        "",
        "Message:",
        message,
      ].join("\n"),
      html: `
        <div style="font-family: sans-serif; font-size: 14px; color: #1F2937; line-height: 1.6;">
          <h2 style="color: #0077B6;">New Website Inquiry</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(phone || "—")}</p>
          <p><strong>Company:</strong> ${escapeHtml(company || "—")}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send message. Please try again." }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
