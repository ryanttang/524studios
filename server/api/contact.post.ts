import { defineEventHandler, readBody, createError } from 'h3'
import { Resend } from 'resend'

export default defineEventHandler(async (event) => {
  // Only allow POST requests
  if (event.node.req.method !== 'POST') {
    throw createError({
      statusCode: 405,
      statusMessage: 'Method Not Allowed'
    })
  }

  try {
    const body = await readBody(event)
    
    // Validate required fields
    if (!body.firstName || !body.lastName || !body.email || !body.message) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Missing required fields'
      })
    }

    // Get email configuration from environment variables
    const recipientEmail = process.env.CONTACT_EMAIL || 'hello@fivetwentyfour.studio'
    const resendFrom = process.env.RESEND_FROM || 'onboarding@resend.dev'
    const smtpHost = process.env.SMTP_HOST
    const smtpPort = process.env.SMTP_PORT
    const smtpUser = process.env.SMTP_USER
    const smtpPassword = process.env.SMTP_PASSWORD
    const smtpFrom = process.env.SMTP_FROM || recipientEmail

    // Format the email content
    const emailSubject = `New Contact Form Submission from ${body.firstName} ${body.lastName}`
    const emailBody = `
New contact form submission from FiveTwentyFour Studios website:

Name: ${body.firstName} ${body.lastName}
Email: ${body.email}
Company: ${body.company || 'Not provided'}
Service Interested In: ${body.service || 'Not specified'}
Project Budget: ${body.budget || 'Not specified'}

Message:
${body.message}

---
This email was sent from the contact form on fivetwentyfour.studio
    `.trim()

    // Try to send email using available method
    let emailSent = false

    // Method 1: Use Resend SDK if RESEND_API_KEY is set
    if (process.env.RESEND_API_KEY) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY)
        
        const { data, error } = await resend.emails.send({
          from: resendFrom,
          to: recipientEmail,
          reply_to: body.email,
          subject: emailSubject,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${body.firstName} ${body.lastName}</p>
            <p><strong>Email:</strong> ${body.email}</p>
            <p><strong>Company:</strong> ${body.company || 'Not provided'}</p>
            <p><strong>Service Interested In:</strong> ${body.service || 'Not specified'}</p>
            <p><strong>Project Budget:</strong> ${body.budget || 'Not specified'}</p>
            <hr>
            <p><strong>Message:</strong></p>
            <p>${body.message.replace(/\n/g, '<br>')}</p>
            <hr>
            <p><em>This email was sent from the contact form on fivetwentyfour.studio</em></p>
          `,
          text: emailBody
        })

        if (error) {
          console.error('Resend API error:', error)
        } else {
          emailSent = true
          console.log('Email sent successfully via Resend:', data)
        }
      } catch (error) {
        console.error('Resend API request failed:', error)
      }
    }

    // Method 2: Use SMTP if configured
    if (!emailSent && smtpHost && smtpUser && smtpPassword) {
      try {
        // Dynamic import of nodemailer
        const nodemailer = await import('nodemailer')
        
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: parseInt(smtpPort || '587'),
          secure: smtpPort === '465',
          auth: {
            user: smtpUser,
            pass: smtpPassword
          }
        })

        await transporter.sendMail({
          from: smtpFrom,
          to: recipientEmail,
          subject: emailSubject,
          text: emailBody,
          replyTo: body.email
        })

        emailSent = true
      } catch (error) {
        console.error('SMTP email sending failed:', error)
      }
    }

    // Method 3: Use SendGrid API if SENDGRID_API_KEY is set
    if (!emailSent && process.env.SENDGRID_API_KEY) {
      try {
        const sendgridResponse = await fetch('https://api.sendgrid.com/v3/mail/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`
          },
          body: JSON.stringify({
            personalizations: [{
              to: [{ email: recipientEmail }],
              subject: emailSubject
            }],
            from: { email: smtpFrom },
            content: [{
              type: 'text/plain',
              value: emailBody
            }],
            reply_to: { email: body.email }
          })
        })

        if (sendgridResponse.ok) {
          emailSent = true
        } else {
          const errorText = await sendgridResponse.text()
          console.error('SendGrid API error:', errorText)
        }
      } catch (error) {
        console.error('SendGrid API request failed:', error)
      }
    }

    if (!emailSent) {
      // Log the submission for manual processing if email fails
      console.log('Contact form submission (email not configured):', {
        recipientEmail,
        subject: emailSubject,
        body: emailBody
      })
      
      // Return success anyway, but log that email wasn't sent
      return {
        success: true,
        message: 'Form submitted successfully. We will get back to you soon.',
        emailSent: false,
        note: 'Email service not configured. Please check server logs for form submission details.'
      }
    }

    return {
      success: true,
      message: 'Thank you for your message! We\'ll get back to you within 24 hours.',
      emailSent: true
    }

  } catch (error) {
    console.error('Contact form error:', error)
    
    const statusCode = (error as any)?.statusCode || 500
    const statusMessage = (error as any)?.statusMessage || 'Failed to send message'
    
    throw createError({
      statusCode,
      statusMessage
    })
  }
})

