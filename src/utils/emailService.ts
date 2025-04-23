import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail', // Use your email service (e.g., Gmail, Outlook, etc.)
  auth: {
    user: process.env.EMAIL_USER, // Your email address
    pass: process.env.EMAIL_PASSWORD // Your email password or app-specific password
  }
});

export const sendThankYouEmail = async (to: string, name: string) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject: 'Thank You for Joining the MyRite Wallet Waitlist!',
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h2 style="color: #4E0165;">Thank You, ${name}!</h2>
        <p>We are thrilled to have you on the waitlist for the MyRite Wallet. Stay tuned for updates and exciting news about our launch!</p>
        <p>If you have any questions, feel free to reach out to us at <a href="mailto:support@myritewallet.com">support@myritewallet.com</a>.</p>
        <p>Best regards,</p>
        <p>The MyRite Wallet Team</p>
      </div>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Thank-you email sent to ${to}`);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};