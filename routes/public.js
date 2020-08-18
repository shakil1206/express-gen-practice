const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
    res.json({
        name: "Shakil Ahmed",
        Age: 12,
        versity: "GUB"
    })
});


module.exports = router;