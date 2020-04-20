const express = require("express");

const router = express.Router();

const { getUsersList } = require("../controllers/users");

router.get("/", getUsersList);

module.exports = router;
