/**
 * 
 * @param {Sting} [appName] - app name  (optional)
 * @param {String} [userName] - user name  (optional)
 * @param {URL} [verificationLink] - verification link  (optional)
 * @param {String} [supportEmail] - support mail  (optional)
 * @returns html template of account creation mail
 */


const accountCreate = (appName, userName, verificationLink, supportEmail) =>{

    return(`<!DOCTYPE html>
        <html>
        <head>
            <title>Account Creation Email</title>
            <style>
                /* Define color variables */
                :root {
                    --primary-color: #FF5722; /* Deep Orange */
                    --secondary-color: #FFC107; /* Amber */
                    --text-color: #333333; /* Dark Gray */
                }
        
                /* Define global styles */
                body {
                    font-family: Arial, sans-serif;
                    line-height: 1.6;
                    margin: 0;
                    padding: 0;
                    background-color: #f7f7f7;
                    color: var(--text-color);
                }
        
                /* Define specific element styles */
                .container {
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                    border-radius: 8px;
                    background-color: white;
                    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
                    margin-top: 20px;
                }
        
                .header {
                    text-align: center;
                    color: var(--primary-color);
                    font-size: 24px;
                    margin-bottom: 20px;
                }
        
                .message {
                    margin-bottom: 20px;
                }
        
                .btn {
                    display: inline-block;
                    padding: 10px 20px;
                    background-color: var(--primary-color);
                    border-radius: 4px;
                    color: white;
                    text-decoration: none;
                    transition: background-color 0.2s;
                }
        
                .btn:hover {
                    background-color: var(--secondary-color);
                }
        
                .footer {
                    text-align: center;
                    color: var(--secondary-color);
                    margin-top: 30px;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">Welcome ${appName ? `to ${appName}` : ""}</div>
                <p class="message">Hello ${userName ? userName : "there"},</p>
                <p class="message">Thank you for joining ${appName}! Your account has been successfully created.</p>
                ${verificationLink ? `<p class="message">To get started, please <a class="btn" href="${verificationLink}">Verify Email Address</a></p>` : ""}
                ${supportEmail ? `<p class="message">If you have any questions or need assistance, please contact our support team at <a href="mailto:${supportEmail}">support@${appName ? appName : "app"}.com</a>.</p>` : ""}
                <div class="footer">Best regards${appName ? `,<br>The ${appName} Team` : ""}</div>
            </div>
        </body>
        </html>`
        )
}

module.exports = accountCreate