const emailActions = require("../controllers/emailController.ts");
var express = require("express");
var router = express.Router();

router.post('/notifications', emailActions.sendNotificationEmailC);


module.exports = router;