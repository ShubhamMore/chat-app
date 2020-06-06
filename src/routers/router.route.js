const express = require('express');
const router = new express.Router();

router.get('/', async (req, res) => {
  res.send('<h1>Hey Socket.io</h1>');
});

module.exports = router;
