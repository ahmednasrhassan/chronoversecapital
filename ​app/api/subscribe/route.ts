import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }

    // Amazon SES Webhook Endpoint or Direct Mailer Fetch Integration
    const sesEndpoint = process.env.SES_WEBHOOK_URL;

    if (sesEndpoint) {
      await fetch(sesEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: email,
          from: process.env.SES_VERIFIED_EMAIL || 'research@chronoversecapital.com',
          subject: 'ChronoVerse Capital - Intelligence Access Granted',
          message: `Welcome to ChronoVerse Capital Institutional Intelligence.\n\nYour email (${email}) has been authorized for institutional research dispatches.\n\nTo access Terminal telemetry, visit https://intel.chronoversecapital.com`,
        }),
      });
    }

    return NextResponse.json({
      success: true,
      message: 'Subscription request registered successfully',
    });
  } catch (error: any) {
    console.error('Subscription API Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
