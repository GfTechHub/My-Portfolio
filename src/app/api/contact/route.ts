import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'olaleyeezekiel06@gmail.com',
      replyTo: email,
      subject: `New message from ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#0a0a0a;color:#f0ede8;border-radius:8px">
          <h2 style="color:#e8b86d;font-size:1.4rem;margin-bottom:4px">New Portfolio Message</h2>
          <p style="color:#8a8580;font-size:0.85rem;margin-bottom:24px">Via your portfolio contact form</p>
          <table style="width:100%;border-collapse:collapse">
            <tr>
              <td style="padding:12px 0;border-bottom:1px solid #222;color:#8a8580;font-size:0.8rem;width:80px">NAME</td>
              <td style="padding:12px 0;border-bottom:1px solid #222;font-weight:600">${name}</td>
            </tr>
            <tr>
              <td style="padding:12px 0;border-bottom:1px solid #222;color:#8a8580;font-size:0.8rem">EMAIL</td>
              <td style="padding:12px 0;border-bottom:1px solid #222"><a href="mailto:${email}" style="color:#e8b86d">${email}</a></td>
            </tr>
          </table>
          <div style="margin-top:24px">
            <p style="color:#8a8580;font-size:0.8rem;margin-bottom:8px">MESSAGE</p>
            <p style="line-height:1.7;white-space:pre-wrap;background:#141414;padding:16px;border-radius:6px;border:1px solid #222">${message}</p>
          </div>
          <p style="margin-top:24px;font-size:0.75rem;color:#4a4744">Reply directly to this email to respond to ${name}.</p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    console.log('Email sent, id:', data?.id);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Resend exception:', err);
    return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 });
  }
}
