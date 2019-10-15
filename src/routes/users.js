var express = require('express');
var router = express.Router();
const { getList, getOne } = require('../managers/users')

/* GET users listing. */
router.get('/', getList);
router.get('/:id', getOne)

module.exports = router;
