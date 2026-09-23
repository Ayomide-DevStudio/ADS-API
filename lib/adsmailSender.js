const nodemailer = require('nodemailer');

const adsMailSender = async ({ to, subject, html }) => {
    try {
        const port = Number(process.env.MAIL_PORT) || 465;
        const secure = port === 465;

        const transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port,
            secure,
            auth: {
                user: process.env.ADSMAIL_USER,
                pass: process.env.ADSMAIL_PASS
            }
        });

        const info = await transporter.sendMail({
            from: process.env.ADSEMAIL || 'adscodingacademy.official@gmail.com',
            to,
            subject,
            html
        });

        console.log('Email sent:', info.messageId);
        return info;

    } catch (error) {
        console.error('Mail Sender Error:', error);
        throw error;
    }
};

module.exports = {
    adsMailSender
};
