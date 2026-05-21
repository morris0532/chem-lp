import { Resend } from 'resend';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, company, phone, product_grade, quantity, message, product_name } = req.body;

  if (!email || !name) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  if (!process.env.RESEND_API_KEY) {
    return res.status(500).json({ error: 'Resend API key not configured' });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    // 1. Send Confirmation to Customer
    await resend.emails.send({
      from: 'Sinopeakchem <info@sinopeakchem.com>',
      to: email,
      subject: `Inquiry Received: ${product_name || 'Product Inquiry'}`,
      html: `
        <h2>Thank you for your inquiry</h2>
        <p>Dear ${name},</p>
        <p>We have received your inquiry for <strong>${product_name || 'our product'}</strong>. Our sales team will review your requirements and get back to you with a formal quotation within 24 hours.</p>
        <p><strong>Your Inquiry Details:</strong></p>
        <ul>
          <li><strong>Product:</strong> ${product_name || 'N/A'}</li>
          <li><strong>Grade:</strong> ${product_grade || 'N/A'}</li>
          <li><strong>Quantity:</strong> ${quantity || 'Not specified'}</li>
        </ul>
        <p>If you have any urgent questions, please feel free to reply to this email.</p>
        <br />
        <p>Best Regards,</p>
        <p><strong>Sinopeakchem Sales Team</strong><br />info@sinopeakchem.com</p>
      `,
    });

    // 2. Send Full Details to Admin
    const data = await resend.emails.send({
      from: 'Sinopeakchem LP <info@sinopeakchem.com>',
      to: 'info@sinopeakchem.com',
      replyTo: email,
      subject: `[LP Inquiry] ${product_name || 'Product'} from ${name}`,
      html: `
        <h2>New Landing Page Inquiry</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Product</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${product_name || 'N/A'}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Grade</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${product_grade || 'N/A'}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Quantity</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${quantity || 'N/A'}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Customer Name</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${name}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Email</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${email}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Phone</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${phone || 'N/A'}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Company</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${company || 'N/A'}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Message</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${message || 'N/A'}</td></tr>
        </table>
        <hr />
        <p>Automated notification from Landing Page</p>
      `,
    });

    return res.status(200).json({ success: true, data });
  } catch (error: any) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: error.message || 'Failed to send email' });
  }
}
