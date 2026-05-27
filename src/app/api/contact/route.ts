import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, brand, email, phone, selectedPlan, message } = body;

    // Server-side validation
    if (!name || !brand || !email || !phone || !message) {
      return NextResponse.json(
        { error: "All fields except Selected Plan are required." },
        { status: 400 }
      );
    }

    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    // Check if environment variables are set up
    if (!smtpUser || !smtpPass) {
      console.error("Missing SMTP_USER or SMTP_PASS environment variables.");
      return NextResponse.json(
        {
          error: "Email service is not configured. Please set SMTP_USER and SMTP_PASS in your .env.local file.",
        },
        { status: 500 }
      );
    }

    // Configure Nodemailer SMTP Transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // Premium HTML Email Template
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>AG Media Global - New Lead Inquiry</title>
          <style>
            body {
              font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
              background-color: #050505;
              color: #e2e8f0;
              margin: 0;
              padding: 0;
              -webkit-font-smoothing: antialiased;
            }
            .container {
              max-width: 600px;
              margin: 40px auto;
              background-color: #0c0c0c;
              border: 1px solid #1e293b;
              border-radius: 24px;
              overflow: hidden;
              box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
            }
            .header-glow {
              height: 4px;
              background: linear-gradient(90deg, #ff6b00, #f59e0b, #ff6b00);
            }
            .content {
              padding: 40px;
            }
            .header {
              text-align: center;
              margin-bottom: 40px;
              border-bottom: 1px solid rgba(255, 255, 255, 0.05);
              padding-bottom: 24px;
            }
            .logo-text {
              font-size: 24px;
              font-weight: 800;
              letter-spacing: 2px;
              color: #ffffff;
              text-transform: uppercase;
            }
            .logo-accent {
              color: #ff6b00;
            }
            .title {
              font-size: 20px;
              font-weight: 700;
              color: #ffffff;
              margin-top: 10px;
              margin-bottom: 0;
            }
            .grid {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 20px;
              margin-bottom: 30px;
            }
            @media (max-width: 480px) {
              .grid {
                grid-template-columns: 1fr;
              }
            }
            .card {
              background-color: rgba(255, 255, 255, 0.02);
              border: 1px solid rgba(255, 255, 255, 0.05);
              padding: 16px;
              border-radius: 16px;
            }
            .label {
              font-size: 11px;
              text-transform: uppercase;
              letter-spacing: 1px;
              color: #64748b;
              font-weight: 700;
              margin-bottom: 4px;
            }
            .value {
              font-size: 15px;
              font-weight: 600;
              color: #ffffff;
            }
            .value a {
              color: #ff6b00;
              text-decoration: none;
            }
            .value a:hover {
              text-decoration: underline;
            }
            .plan-badge {
              display: inline-block;
              background: rgba(255, 107, 0, 0.1);
              border: 1px solid rgba(255, 107, 0, 0.3);
              color: #ff6b00;
              padding: 8px 16px;
              border-radius: 9999px;
              font-weight: 800;
              font-size: 14px;
              text-transform: uppercase;
              letter-spacing: 1px;
              margin-top: 5px;
            }
            .plan-badge.none {
              background: rgba(255, 255, 255, 0.05);
              border: 1px solid rgba(255, 255, 255, 0.1);
              color: #94a3b8;
            }
            .message-box {
              background: rgba(255, 255, 255, 0.01);
              border-left: 3px solid #ff6b00;
              padding: 20px;
              border-radius: 0 16px 16px 0;
              margin-top: 30px;
              margin-bottom: 30px;
            }
            .message-text {
              font-size: 15px;
              line-height: 1.6;
              color: #cbd5e1;
              font-style: italic;
              margin: 0;
              white-space: pre-wrap;
            }
            .footer {
              text-align: center;
              border-top: 1px solid rgba(255, 255, 255, 0.05);
              padding-top: 24px;
              font-size: 12px;
              color: #475569;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header-glow"></div>
            <div class="content">
              <div class="header">
                <div class="logo-text">AG <span class="logo-accent">Media</span></div>
                <h1 class="title">New Client Inquiry</h1>
              </div>

              <div class="grid">
                <div class="card">
                  <div class="label">Customer Name</div>
                  <div class="value">${name}</div>
                </div>
                <div class="card">
                  <div class="label">Brand Name</div>
                  <div class="value">${brand}</div>
                </div>
                <div class="card">
                  <div class="label">Email Address</div>
                  <div class="value"><a href="mailto:${email}">${email}</a></div>
                </div>
                <div class="card">
                  <div class="label">Phone Number</div>
                  <div class="value"><a href="tel:${phone}">${phone}</a></div>
                </div>
              </div>

              <div class="card" style="margin-bottom: 30px; text-align: center;">
                <div class="label">Plan Selection</div>
                <div class="value">
                  ${
                    selectedPlan
                      ? `<span class="plan-badge">${selectedPlan} Plan</span>`
                      : `<span class="plan-badge none">No Plan Selected (General Consultation)</span>`
                  }
                </div>
              </div>

              <div class="message-box">
                <div class="label" style="margin-bottom: 8px;">Customer Goals & Message</div>
                <p class="message-text">"${message}"</p>
              </div>

              <div class="footer">
                This email was sent automatically from the AG Media website contact form.
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    // Email Options
    const mailOptions = {
      from: `"${name} (${brand})" <${smtpUser}>`, // Send via authenticated SMTP user, showing sender details in name
      to: "ojhasumit677@gmail.com",
      replyTo: email, // Replying in Gmail will automatically reply to customer's email
      subject: `New Lead Inquiry: ${brand} (${name})`,
      text: `New Lead Inquiry from AG Media Website:
      
Name: ${name}
Brand: ${brand}
Email: ${email}
Phone: ${phone}
Selected Plan: ${selectedPlan || "None"}
Message: ${message}`,
      html: htmlContent,
    };

    // Send Email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Error in contact POST API Route:", error);
    return NextResponse.json(
      { error: error.message || "An unexpected error occurred while sending the email." },
      { status: 500 }
    );
  }
}
