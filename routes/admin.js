const express = require("express");

const { getAddUser, postUsers } = require("../controllers/users");

const router = express.Router();

router.get("/add-user", getAddUser);

router.post("/post-user", postUsers);

exports.router = router;
