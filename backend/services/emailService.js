import nodemailer from 'nodemailer'

const createTransporter = () => {
  const host = process.env.EMAIL_HOST || 'smtp.gmail.com'
  const port = parseInt(process.env.EMAIL_PORT || '587', 10)
  const secure = process.env.EMAIL_SECURE === 'true'
  const user = (process.env.EMAIL_USER || process.env.CONTACT_RECEIVER_EMAIL || '').trim()
  const pass = process.env.EMAIL_APP_PASSWORD ? process.env.EMAIL_APP_PASSWORD.replace(/\s+/g, '') : ''

  if (!user || !pass) {
    console.warn('[EmailService Warning] EMAIL_USER or EMAIL_APP_PASSWORD is not set. Email delivery will fail until configured.')
  }

  // Use service: 'gmail' for optimal cloud serverless (Vercel) compatibility
  if (host === 'smtp.gmail.com' || host === 'gmail') {
    return nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user,
        pass,
      },
    })
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
  })
}

export const sendProjectInquiry = async (data) => {
  const { name, email, company, projectType, budget, projectDetails } = data
  const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || 'barun.mishraofficial1505@gmail.com'
  const appPassword = process.env.EMAIL_APP_PASSWORD

  // If Gmail App Password is not set or placeholder, log cleanly for local testing without failing
  if (!appPassword || appPassword.includes('YOUR_GMAIL_APP_PASSWORD')) {
    console.log('\n📬 [EMAIL INQUIRY RECEIVED] (Set 16-char EMAIL_APP_PASSWORD in server/.env for live Gmail SMTP delivery)')
    console.log(`To: ${receiverEmail}`)
    console.log(`Client: ${name} <${email}>`)
    console.log(`Company: ${company || 'N/A'} | Service: ${projectType || 'N/A'} | Budget: ${budget || 'N/A'}`)
    console.log(`Message: ${projectDetails}\n`)
    return { messageId: 'simulated-inquiry-' + Date.now() }
  }

  const transporter = createTransporter()

  const timestamp = new Date().toLocaleString('en-US', {
    dateStyle: 'full',
    timeStyle: 'short',
    timeZone: 'Asia/Kolkata',
  })

  // 1. Primary Notification Email to Developer (Barun Mishra)
  const mailToDeveloper = {
    from: `"Barun Mishra Portfolio" <${process.env.EMAIL_USER || receiverEmail}>`,
    to: receiverEmail,
    replyTo: `"${name}" <${email}>`,
    subject: `New Portfolio Project Inquiry — ${name}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #090d16; color: #e2e8f0; margin: 0; padding: 24px; }
          .card { background-color: #0d1320; border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 16px; padding: 32px; max-width: 600px; margin: 0 auto; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5); }
          .header { border-bottom: 1px solid rgba(255, 255, 255, 0.08); padding-bottom: 20px; margin-bottom: 24px; }
          .tag { background-color: rgba(59, 130, 246, 0.15); color: #60a5fa; border: 1px solid rgba(59, 130, 246, 0.3); font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; padding: 4px 10px; border-radius: 6px; display: inline-block; margin-bottom: 10px; }
          h2 { font-size: 22px; font-weight: 800; color: #ffffff; margin: 0; }
          .field-group { margin-bottom: 18px; }
          .label { font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #94a3b8; font-weight: 600; margin-bottom: 4px; display: block; }
          .value { font-size: 14px; color: #f8fafc; background-color: #111827; border: 1px solid rgba(255, 255, 255, 0.06); padding: 10px 14px; border-radius: 8px; line-height: 1.6; }
          .highlight { color: #60a5fa; font-weight: 600; }
          .footer { border-top: 1px solid rgba(255, 255, 255, 0.08); pt-20px; margin-top: 28px; padding-top: 20px; text-align: center; font-size: 12px; color: #64748b; }
        </style>
      </head>
      <body>
        <div class="card">
          <div class="header">
            <span class="tag">New Direct Project Inquiry</span>
            <h2>Client Brief Received</h2>
          </div>
          
          <div class="field-group">
            <span class="label">Client Name</span>
            <div class="value highlight">${name}</div>
          </div>

          <div class="field-group">
            <span class="label">Work Email</span>
            <div class="value"><a href="mailto:${email}" style="color: #60a5fa; text-decoration: none;">${email}</a></div>
          </div>

          <div class="field-group">
            <span class="label">Company / Organization</span>
            <div class="value">${company || 'Not provided'}</div>
          </div>

          <div class="field-group">
            <span class="label">Project Type</span>
            <div class="value">${projectType || 'Not specified'}</div>
          </div>

          <div class="field-group">
            <span class="label">Estimated Budget</span>
            <div class="value">${budget || 'Not specified'}</div>
          </div>

          <div class="field-group">
            <span class="label">Project Details & Requirements</span>
            <div class="value" style="white-space: pre-wrap;">${projectDetails}</div>
          </div>

          <div class="footer">
            Submitted At: ${timestamp}<br>
            Source: <strong>Barun Mishra Portfolio Site</strong>
          </div>
        </div>
      </body>
      </html>
    `,
  }

  // Send primary notification email
  const info = await transporter.sendMail(mailToDeveloper)

  // 2. Optional Client Auto-Acknowledgment Email
  try {
    const mailToClient = {
      from: `"Barun Mishra" <${process.env.EMAIL_USER || receiverEmail}>`,
      to: email,
      subject: `Thanks for reaching out — Barun Mishra`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #090d16; color: #e2e8f0; margin: 0; padding: 24px; }
            .card { background-color: #0d1320; border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 16px; padding: 32px; max-width: 550px; margin: 0 auto; }
            h3 { font-size: 20px; font-weight: 700; color: #ffffff; margin-top: 0; }
            p { font-size: 14px; line-height: 1.6; color: #cbd5e1; }
            .btn { display: inline-block; background-color: #2563eb; color: #ffffff; padding: 10px 20px; border-radius: 8px; font-weight: 600; text-decoration: none; margin-top: 12px; }
          </style>
        </head>
        <body>
          <div class="card">
            <h3>Hi ${name},</h3>
            <p>Thanks for reaching out through my portfolio website.</p>
            <p>I have received your project details regarding <strong>${projectType || 'your project inquiry'}</strong> and will review your requirements thoroughly.</p>
            <p>I will get back to you via email within 24 business hours to discuss feasibility, timeline, and structure.</p>
            <p>Best regards,<br><strong>Barun Mishra</strong><br><span style="color: #64748b; font-size: 12px;">Full-Stack & AI Systems Developer</span></p>
          </div>
        </body>
        </html>
      `,
    }
    await transporter.sendMail(mailToClient)
  } catch (ackError) {
    console.warn('[EmailService Notice] Auto-acknowledgment email to client could not be delivered, but primary inquiry email succeeded.', ackError.message)
  }

  return info
}
