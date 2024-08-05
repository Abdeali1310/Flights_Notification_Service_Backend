const CrudRepository = require("./crud-repository");
const AppError = require("../utils/error/app-error");

const { Ticket } = require("../models");
const { enums } = require("../utils/common");
const { StatusCodes } = require("http-status-codes");

class TicketRepository extends CrudRepository {
  constructor() {
    super(Ticket);
  }

  async getPendingEmails() {
    try {
      const response = await Ticket.findAll({
        where: { status: enums.NOTIFICATION_STATUS.PENDING },
      });
      return response;
    } catch (error) {
      console.log(error);
      throw new AppError(
        "Error in finding pending emails",
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }
}

module.exports = TicketRepository;
