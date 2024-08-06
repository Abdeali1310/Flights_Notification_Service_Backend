const express = require("express");
const amqplib = require('amqplib');

const { ServerConfig, MAILER } = require("./config");
const apiRoutes = require("./routes");
const { EmailService } = require("./services");
const serverConfig = require("./config/server-config");
const {GMAIL_ID} = serverConfig

async function connectQueue(){
  try {
      const connection = await amqplib.connect("amqp://localhost");
      const channel = await connection.createChannel();
      await channel.assertQueue("noti-queue");
      channel.consume("noti-queue",async (data)=>{
        // console.log(`${Buffer.from(data.content)}`);
        const object = JSON.parse(`${Buffer.from(data.content)}`);
        await EmailService.sendEmail(GMAIL_ID,object.recipientEmail,object.subject,object.text)
        channel.ack(data);
      })
  } catch (error) {
      console.log(error);
      
  }
}

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", apiRoutes);

app.listen(ServerConfig.PORT, () => {
  console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
  connectQueue()
});
