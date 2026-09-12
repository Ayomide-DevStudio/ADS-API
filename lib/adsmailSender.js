
const nodemailer =  require('nodemailer')


    //generate mail
        const adsMailSender = async ({mailTo, subject, body}) => {
            try {
                    const transporter =  nodemailer.createTransport({
                        host: process.env.MAIL_HOST,
                        port: Number(process.env.MAIL_PORT) || 465,
                        secure: true,
                        auth: {
                            user:process.env.ADSMAIL_USER,
                            pass:process.env.ADSMAIL_PASS
                        }
                    })

                    await transporter.verify();
                    console.log('SMTP connection successful');
                   
                    // send mail
                    const info = await transporter.sendMail({
                            from: process.env.ADSEMAIL || adscodingacademy@gmail.com,
                            to: mailTo,
                            subject,
                            html: body
                    })

                     
                    return info
   
            } catch (error) {
                console.error(
                    'Mail Sender Error:',
                    error
                )


                throw error
            }
        }
        module.exports = {
             adsMailSender
        }
