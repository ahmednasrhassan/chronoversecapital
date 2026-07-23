import { NextResponse } from 'next/server';
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

const sesClient = new SESClient({
  region: process.env.AWS_REGION || 'us-east-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
  },
});

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }

    // 1. Send Notification to Admin & Confirmation to Subscriber via Amazon SES
    const sendParams = {
      Source: process.env.SES_VERIFIED_EMAIL || 'research@chronoversecapital.com',
      Destination: {
        ToAddresses: [email],
      },
      Message: {
        Subject: {
          Data: 'ChronoVerse Capital - Intelligence Access Granted',
        },
        Body: {
          Text: {
            Data: `Welcome to ChronoVerse Capital Institutional Intelligence.\n\nYour email (${email}) has been authorized for institutional research dispatches.\n\nTo access Terminal telemetry, visit https://intel.chronoversecapital.com`,
          },
        },
      },
    };

    const command = new SendEmailCommand(sendParams);
    await sesClient.send(command);

    return NextResponse.json({ success: true, message: 'Subscription processed successfully' });
  } catch (error: any) {
    console.error('Amazon SES Error:', error);
    return NextResponse.json({ error: 'Failed to process subscription' }, { status: 500 });
  }
}

