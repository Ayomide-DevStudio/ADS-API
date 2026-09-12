const nodemailer = require('nodemailer');

const adsMailSender = async ({ to, subject, html }) => {
    try {
        const transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: Number(process.env.MAIL_PORT) || 465,
            secure: Number(process.env.MAIL_PORT) === 465,
            auth: {
                user: process.env.ADSMAIL_USER,
                pass: process.env.ADSMAIL_PASS
            }
        });

        await transporter.verify();
        console.log('SMTP connection successful');

        const info = await transporter.sendMail({
            from: process.env.ADSEMAIL || 'adscodingacademy@gmail.com',
            to,
            subject,
            html
        });

        return info;

    } catch (error) {
        console.error('Mail Sender Error:', error);
        throw error;
    }
};

module.exports = {
    adsMailSender
};