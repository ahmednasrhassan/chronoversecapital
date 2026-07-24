import { NextResponse } from 'next/server';
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

const ses = new SESClient({
  region: process.env.AWS_REGION || 'eu-north-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
  },
});

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }

    const command = new SendEmailCommand({
      Destination: {
        ToAddresses: [email],
      },
      Message: {
        Body: {
          Html: {
            Charset: 'UTF-8',
            Data: `
              <div style="background-color: #0a0a0c; color: #e5e5e5; padding: 40px; font-family: monospace; border: 1px solid #2a1a12; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #b36b39; text-transform: uppercase; letter-spacing: 2px;">ChronoVerse Capital</h2>
                <hr style="border-color: #2a1a12; margin: 20px 0;" />
                <p style="font-size: 14px; line-height: 1.6;">Thank you for subscribing to institutional research & intelligence updates.</p>
                <p style="font-size: 12px; color: #a3a3a3; margin-top: 30px;">
                  This confirms your email registration via Amazon SES pipeline.
                </p>
                <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #1a120c; font-size: 11px; color: #737373;">
                  © ${new Date().getFullYear()} ChronoVerse Capital. All rights reserved.
                </div>
              </div>
            `,
          },
        },
        Subject: {
          Charset: 'UTF-8',
          Data: 'Welcome to ChronoVerse Capital Intelligence Briefings',
        },
      },
      Source: process.env.AWS_SES_FROM_EMAIL || 'info@chronoversecapital.com',
    });

    await ses.send(command);

    return NextResponse.json({ success: true, message: 'Subscribed successfully!' });
  } catch (error: any) {
    console.error('SES Error:', error);
    return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 });
  }
}