const { StatusCodes } = require("http-status-codes");
const { EmailService } = require("../services");
const { successResponse, errorResponse } = require("../utils/common");
const AppError = require("../utils/error/app-error");

async function createTicket(req, res) {
  try {

    const ticket = await EmailService.createTicket({
      subject: req.body.subject,
      content: req.body.content,
      recipientEmail: req.body.recipientEmail,
    });
    successResponse.data = ticket;
    return res.status(StatusCodes.CREATED).json(successResponse);
  } catch (error) {
    errorResponse.message = error.message;
    return res.status(error.statusCode).json(errorResponse);
  }
}

module.exports = {
    createTicket,
}