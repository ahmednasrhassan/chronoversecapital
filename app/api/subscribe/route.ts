import { NextResponse } from 'next/server';
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

// Initialize Amazon SES Client
const ses = new SESClient({
  region: process.env.AWS_REGION || 'eu-north-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
  },
});

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    // Validate email payload
    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid institutional email is required.' }, { status: 400 });
    }

    // Construct Amazon SES Email Payload
    const command = new SendEmailCommand({
      Source: 'newsletter@chronoversecapital.com',
      Destination: {
        ToAddresses: [email],
      },
      Message: {
        Subject: {
          Data: 'Authorization Granted | ChronoVerse Capital Intelligence',
          Charset: 'UTF-8',
        },
        Body: {
          Html: {
            Data: `
              <!DOCTYPE html>
              <html>
              <head>
                <style>
                  body { background-color: #0A0A0C; color: #E4E4E7; font-family: 'Helvetica Neue', Arial, sans-serif; margin: 0; padding: 40px 20px; }
                  .container { max-width: 600px; margin: 0 auto; background-color: #121216; border: 1px solid rgba(245, 158, 11, 0.2); padding: 32px; border-radius: 8px; }
                  .header { font-size: 18px; font-weight: bold; letter-spacing: 2px; color: #F59E0B; text-transform: uppercase; margin-bottom: 24px; border-bottom: 1px solid rgba(255, 255, 255, 0.05); padding-bottom: 16px; }
                  .content { font-size: 14px; line-height: 1.6; color: #A1A1AA; }
                  .highlight { color: #FBBF24; font-weight: 600; }
                  .footer { margin-top: 32px; font-size: 11px; color: #52525B; font-family: monospace; border-top: 1px solid rgba(255, 255, 255, 0.05); padding-top: 16px; }
                </style>
              </head>
              <body>
                <div class="container">
                  <div class="header">ChronoVerse <span style="font-weight: 300; font-size: 12px; color: #F59E0B;">CAPITAL</span></div>
                  <div class="content">
                    <p>Welcome to the Institutional Intelligence Hub.</p>
                    <p>Your subscription request for <span class="highlight">${email}</span> has been authorized. You will now receive our priority macro-economic research, market signals, and confidential dossiers directly to your inbox.</p>
                    <p>No further action is required on your part.</p>
                  </div>
                  <div class="footer">
                    CONFIDENTIALITY NOTICE: This transmission is intended solely for authorized institutional subscribers.
                    <br/>&copy; 2026 ChronoVerse Capital. All rights reserved.
                  </div>
                </div>
              </body>
              </html>
            `,
            Charset: 'UTF-8',
          },
        },
      },
    });

    // Send dispatch command to AWS SES
    await ses.send(command);

    return NextResponse.json({ message: 'Subscription authorized successfully.' }, { status: 200 });

  } catch (error) {
    console.error('Amazon SES Integration Error:', error);
    return NextResponse.json({ error: 'Failed to authorize subscription.' }, { status: 500 });
  }
}
