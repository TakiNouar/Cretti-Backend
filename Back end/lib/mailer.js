const nodemailer = require("nodemailer");

//this transporter handles the job of sending and receiving email
//using SMTP ( Simple Mail Transfer Protocol)
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
  requireTLS: true, // Force TLS
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false, // Only if needed for self-signed certificates
  },
});

// when user send contact form data
//using this we send it to owner email
const sendOwnerEmail = async (formData) => {
  const {
    name,
    email,
    phone,
    referral,
    company,
    services,
    minBudget,
    maxBudget,
    message,
    newsletter,
  } = formData;

  const budgetRange =
    minBudget && maxBudget ? `£${minBudget} - £${maxBudget}` : "Not specified";
  const servicesList =
    services && services.length > 0 ? services.join(", ") : "Not specified";

  try {
    await transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: process.env.MAIL_TO,
      subject: `New contact from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "N/A"}`,
        `Company: ${company || "N/A"}`,
        `How they heard about us: ${referral || "N/A"}`,
        `Services interested in: ${servicesList}`,
        `Budget range: ${budgetRange}`,
        `Newsletter subscription: ${newsletter ? "Yes" : "No"}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });
  } catch (error) {
    console.error("Failed to send owner email:", error);
    throw new Error("Failed to send notification email");
  }
};

//using this we send confirmation to the user
//that his email arrived
const sendUserConfirmation = async (formData) => {
  const { name, email } = formData;

  try {
    await transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: email,
      subject: "We received your message",
      text: `Hi ${name},\n\nThanks for reaching out! We received your message and will get back to you shortly.\n\n— Team`,
    });
  } catch (error) {
    console.error("Failed to send confirmation email:", error);
    throw new Error("Failed to send confirmation email");
  }
};

module.exports = { sendOwnerEmail, sendUserConfirmation };
