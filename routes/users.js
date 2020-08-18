const express = require('express');
const router = express.Router();
const userControler = require('../controller/userControler');



/* GET users listing. */
router.get('/', userControler.root, userControler.test);

module.exports = router;
