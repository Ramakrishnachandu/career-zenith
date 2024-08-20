import { sendEmail } from "@/functions/sendEmail";

async function sendWelcomeEmailToUser(user: { email: string; name: string }) {
  const subject = "Welcome to Career Zenith!";
  const text = `Hello ${user.name}, welcome to Career Zenith! We're glad to have you on board.`;

  // Example HTML content with a company logo
  const html = `
  <html>
  <body>
    <p><strong>Dear ${user.name},</strong></p>
    <p>Thank you for registering with Career Zenith! We are excited to have you join our community.</p>
    <p>Your registration has been successfully completed, and your account is now active. You can log in to your account using the following link:</p>
    <p><a href="https://career-zenith.vercel.app/login-page">Login to Career Zenith</a></p>
    <p>As a registered member, you now have access to a range of features designed to enhance your job search and career development. Here’s what you can do:</p>
    <ul>
      <li><strong>Explore Job Listings:</strong> Browse through a variety of job postings tailored to your interests.</li>
      <li><strong>Manage Your Profile:</strong> Update your resume, add new skills, and manage your career information.</li>
      <li><strong>Apply for Jobs:</strong> Apply to positions that match your career goals with ease.</li>
      <li><strong>Receive Notifications:</strong> Stay updated with the latest job opportunities and application status.</li>
    </ul>
    <p>If you have any questions or need assistance, please feel free to reach out to our support team at <a href="mailto:info.careerzenith@gmail.com">info.careerzenith@gmail.com</a>.</p>
    <p>We look forward to helping you achieve your career aspirations!</p>
    <p>Best regards,<br>The Career Zenith Team</p>
    <p><a href="https://career-zenith.vercel.app/">Career Zenith</a></p>
    <p><a href="https://linkedin.com/company/career-zenith">LinkedIn</a> | <a href="https://twitter.com/career-zenith">Twitter</a> | <a href="https://facebook.com/career-zenith">Facebook</a></p>
    <p><a href="https://careerzenith.com/unsubscribe">Unsubscribe</a> from these notifications.</p>
  </body>
  </html>
`;

  await sendEmail({
    to: user.email,
    subject,
    text,
    html,
  });
}

export default sendWelcomeEmailToUser;
