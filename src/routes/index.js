var express = require('express');
var router = express.Router();
const { indexRoute } = require('../managers/index')

/* GET home page. */
router.get('/', indexRoute)

module.exports = router;
