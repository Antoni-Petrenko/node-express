const express = require("express");
const jsonParser=express.json();

const { getAddUser, postUsers } = require("../controllers/users");

const router = express.Router();

router.get("/add-user", getAddUser);

router.post("/post-user",jsonParser, postUsers);

exports.router = router;
