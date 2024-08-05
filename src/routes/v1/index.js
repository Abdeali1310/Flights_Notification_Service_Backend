const express = require('express');

const { InfoController } = require('../../controllers');

const router = express.Router();
const TicketRoutes = require('./email-route');

router.get('/info', InfoController.info);
router.use('/tickets',TicketRoutes);
module.exports = router;