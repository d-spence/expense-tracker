const Transaction = require('../models/Transaction');

// @desc  Get all transactions
// @route GET /api/v1/transactions
// @access Public
exports.getTransactions = (req, res, next) => {
  res.send('GET getTransactions: NOT IMPLEMENTED');
}

// @desc  Add transaction
// @route POST /api/v1/transactions/
// @access Public
exports.addTransaction = (req, res, next) => {
  res.send('POST addTransaction: NOT IMPLEMENTED');
}

// @desc  Delete transaction
// @route DELETE /api/v1/transactions/:id
// @access Public
exports.deleteTransaction = (req, res, next) => {
  res.send('DELETE deleteTransaction: NOT IMPLEMENTED');
}