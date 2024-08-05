const nodemailer = require('nodemailer');
const serverConfig = require('./server-config');
const {GMAIL_PASS,GMAIL_ID} = serverConfig;

const mailSender = nodemailer.createTransport({
    service:'Gmail',
    auth:{
        user:GMAIL_ID,
        pass:GMAIL_PASS,
    }
});

module.exports = mailSender;