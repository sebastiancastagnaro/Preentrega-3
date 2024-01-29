// ticketService.js
const Ticket = require('../models/ticketModel');

class TicketService {
  generateTicket(code, amount, purchaser) {
    const purchaseDatetime = new Date();
    return new Ticket(code, purchaseDatetime, amount, purchaser);
  }
}

module.exports = TicketService;
