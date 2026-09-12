const { adsMailSender } = require('../lib/adsmailSender');

const msgCreator = async (req, res) => {

    console.log('===== MAIL API REQUEST =====');
    console.log('METHOD:', req.method);
    console.log('HEADERS:', req.headers);
    console.log('BODY:', req.body);

    const { mailTo, subject, html } = req.body || {};

    console.log('PARSED:', {
        mailTo,
        subject,
        hasHtml: !!html,
        htmlType: typeof html
    });

    if (!mailTo || !subject || !html) {
        return res.status(400).json({
            success: false,
            message: 'Missing required fields',
            received: {
                hasTo: !!mailTo,
                hasSubject: !!subject,
                hasHtml: !!html
            }
        });
    }

    try {

        const mailObj = {
            mailTo,
            subject,
            html
        };

        console.log('SENDING:', {
            mailTo: mailObj.mailTo,
            subject: mailObj.subject,
            hasHtml: !!mailObj.html
        });

        const sent = await adsMailSender(mailObj);

        if (!sent) {
            return res.status(400).json({
                success: false,
                message: 'Request Failed!'
            });
        }

        return res.status(200).json({
            success: true,
            message: 'Email sent successfully'
        });

    } catch (error) {

        console.error('MAIL API ERROR:', error);

        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = msgCreator;
