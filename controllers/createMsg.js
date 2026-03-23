const {mailSender} = require('../lib/sendMail')

const createMsg = async (req, res) => {
        const { senderEmail, recipientEmail, subject, htmlContent} = req.body
       
        if(!senderEmail || !recipientEmail || !subject || !htmlContent) return res.status(400).json({message: "Missing required fields"})
            try {           
                // to send mail 
                const mailObj = {
                    mailFrom: senderEmail,
                    mailTo: recipientEmail,
                    subject: subject,
                    body: htmlContent
                }
                const sent = await mailSender(mailObj)
                if (!sent) return res.status(400).json({message: "Request Failed!"})
                res.status(200).json({success: true, message: 'Email sent successfully'})
            } catch (error) {
                res.status(500).json({
                        success: false,
                    message: error.message
                })
            }
}

module.exports = createMsg
