const { StatusCodes } = require("http-status-codes");
const { MAILER } = require("../config");
const AppError = require("../utils/error/app-error");
const { TicketRepository } = require("../repositories");

const ticketRepo = new TicketRepository();
async function sendEmail(from, to, subject, text) {
  try {
    const response = MAILER.sendMail({
      from: from,
      to: to,
      subject: subject,
      text: text,
    });
    return response;
  } catch (error) {
    console.log(error);
    throw error
  }
}

async function createTicket(data) {
  try {
    const response = ticketRepo.create(data);
    return response;
  } catch (error) {
    console.log(error);
    throw error
  }
}

async function getPendingEmails() {
  try {
    const response = ticketRepo.getPendingEmails();
    return response;
  } catch (error) {
    console.log(error);
    throw error
  }
}
module.exports = {
  sendEmail,
  createTicket,
  getPendingEmails
};
