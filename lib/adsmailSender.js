
const nodemailer =  require('nodemailer')


    //generate mail
        const adsMailSender = async ({mailTo, subject, html}) => {
            try {
                    const transporter =  nodemailer.createTransport({
                        host: process.env.MAIL_HOST,
                        port: Number(process.env.MAIL_PORT) || 465,
                        secure: true,
                        auth: {
                            user:process.envADSMAIL_USER,
                            pass:process.env.ADSMAIL_PASS
                        }
                    })

                    await transporter.verify();
                    console.log('SMTP connection successful');
                   
                    // send mail
                    const info = await transporter.sendMail({
                            from: process.env.ADSEMAIL,
                            to: mailTo,
                            subject,
                            html
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
