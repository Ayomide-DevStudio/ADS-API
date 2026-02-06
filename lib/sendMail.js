const nodemailer =  require('nodemailer')
const crypto = require('crypto')

    //generate token
        // const generateOTP = () => {
        //     return Math.floor(100000 + Math.random() * 900000).toString()
        // }
        // const getExpiry = () => new Date(Date.now() + 200 * 60 * 1000)

        // const sendOTP = () => ({
        //     otpCode: generateOTP(),
        //     expiry: getExpiry()
        // })

    //generate mail
        const mailSender = async ({mailFrom, mailTo, subject, body}) => {
            try {
                    const transporter =  nodemailer.createTransport({
                        host: process.env.MAIL_HOST,
                        port:process.env.MAIL_PORT,
                        secure: true,
                        auth: {
                            user:process.env.ALH_MAIL,
                            pass:process.env.ALH_PASS
                        }
                    })
                    await transporter.verify()
                    // send mail
                    const info = await transporter.sendMail({
                            from: mailFrom,
                            to: mailTo,
                            subject,
                            html: body
                    })
                    res.status(200).json({ success: true })
                    return info
   
            } catch (error) {
                res.status(500).json({
                    message: error.message
                })
            }
        }
        module.exports = {
             mailSender
        }
