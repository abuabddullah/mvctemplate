const express = require("express");
const { testControllerGet } = require("../../controllers/v1/testController");

const router = express.Router();

router.route("/test").get(testControllerGet);

module.exports = router;