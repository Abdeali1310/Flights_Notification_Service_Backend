const express = require('express');

const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');
const mailSender = require('./config/email-config');
const serverConfig = require('./config/server-config');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, async () => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
    const res = await mailSender.sendMail({
        from:serverConfig.GMAIL_ID,
        to:"abdealidahodwala163@gmail.com",
        subject:'Is the service working',
        text:'Yes, it is!'
    });
    console.log(res);
    
});
