
const {adsmailSender} = require('../lib/adsmailSender')

const msgCreator= async (req, res) => {
        const {  to, subject, html} = req.body
       
        if( !to|| !subject || !html) return res.status(400).json({message: "Missing required fields"})
            try {           
                // to send mail 
                const mailObj = {
                    mailTo: to,
                    subject: subject,
                    body: html
                }
                const sent = await adsmailSender(mailObj)
                if (!sent) return res.status(400).json({message: "Request Failed!"})
                res.status(200).json({success: true, message: 'Email sent successfully'})
            } catch (error) {
                res.status(500).json({
                        success: false,
                    message: error.message
                })
            }
}

module.exports = msgCreator
