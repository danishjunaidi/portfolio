import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export const sendContactEmail = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
      replyTo: email,
    };

    await transporter.sendMail(mailOptions);

    const confirmationEmail = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'We received your message',
      html: `
        <h2>Thank you for reaching out!</h2>
        <p>Hi ${name},</p>
        <p>I've received your message and will get back to you as soon as possible.</p>
        <p>Best regards,<br>Rahematullah Balolkhan</p>
      `,
    };

    await transporter.sendMail(confirmationEmail);

    res.json({
      message: 'Email sent successfully!',
      data: { name, email, subject },
    });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({
      message: 'Failed to send email',
      error: error.message,
    });
  }
};

export const getContactInfo = async (req, res) => {
  try {
    res.json({
      email: 'contact@example.com',
      phone: '+1 (555) 123-4567',
      linkedin: 'https://linkedin.com/in/rahematullah',
      github: 'https://github.com/rahematullah',
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching contact info' });
  }
};
