const express = require('express');
const { EmailController } = require('../../controllers');
const router = express.Router();

//for creating new Ticket
router.post('/',EmailController.createTicket)

module.exports = router;