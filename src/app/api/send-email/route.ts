import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface EmailRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = (await request.json()) as EmailRequest;
    
    if (!process.env.YOUR_EMAIL) {
      throw new Error('YOUR_EMAIL environment variable is not set');
    }

    // Send to your email
    await resend.emails.send({
      from: `${name} <onboarding@resend.dev>`,
      to: process.env.YOUR_EMAIL, // or [process.env.YOUR_EMAIL] if you prefer array format
      subject: subject,
      html: `
        <p><strong>From:</strong> ${name} (${email})</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
      // reply_to: email
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}