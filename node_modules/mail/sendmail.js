const {createTransport} = require("nodemailer")

/**
 * send mail just by configuring mail object
 * @param {{appName : "appName", to : "destination email", subject : "email subject", template : "mail body in html form"}} mail - mail obj for configuring email
 * @author MHRRONI
 */

const sendMail = async (mail) =>{
    try {
        //creating transporter that will send mail
        const transporter = createTransport({
            host : "smtp.gmail.com",
            port : 587,
            secure : false,
            auth : {
                user : process.env.SMTP_EMAIL,
                pass : process.env.SMTP_PASSWORD
            }
        })

        //configuring mail with given arguments
        const mailOptions = {
            from : `${mail.appName} <support@${mail.appName}.com>`,
            to : mail.to,
            subject : mail.subject,
            html : mail.template
        }
        
        //sending mail
        await transporter.sendMail(mailOptions)

    } catch (error) {
        //handling error
        console.log("error in sending mail ====> " + error)
    }
}

module.exports = sendMail