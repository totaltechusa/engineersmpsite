const nodemailer = require('nodemailer');

async function sendVerificationEmail(to, verificationLink) {
    await sendMail({
        to,
        subject: 'Verify your Engineers account',
        text: `Verify your email address by opening this link: ${verificationLink}`,
        html: `<p>Verify your email address to activate your Engineers account.</p><p><a href="${verificationLink}">Verify email</a></p><p>This link expires in 24 hours.</p>`,
    });
}

async function sendPasswordResetEmail(to, resetLink) {
    await sendMail({
        to,
        subject: 'Reset your Engineers password',
        text: `Reset your password by opening this link: ${resetLink}`,
        html: `<p>A password reset was requested for your Engineers account.</p><p><a href="${resetLink}">Reset password</a></p><p>This link expires in one hour. If you did not request a reset, you can ignore this email.</p>`,
    });
}

async function sendMail(message) {
    const { host, port, user, password, from } = getSmtpConfig();

    const transporter = nodemailer.createTransport({
        host,
        port,
        secure: port === 465,
        auth: { user, pass: password },
    });

    await transporter.sendMail({ from, ...message });
}

function getSmtpConfig() {
    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT);
    const user = process.env.SMTP_USER;
    const password = process.env.SMTP_PASSWORD;
    const from = process.env.SMTP_FROM;

    if (!host || !Number.isInteger(port) || port < 1 || port > 65535 || !user || !password || !from) {
        throw new Error('SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, and SMTP_FROM must be configured');
    }
    return { host, port, user, password, from };
}

function validateSmtpConfig() {
    getSmtpConfig();
}

module.exports = { sendVerificationEmail, sendPasswordResetEmail, validateSmtpConfig };
