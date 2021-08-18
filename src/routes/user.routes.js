const router = require("express").Router();
const { getUsers, addUser , deleteUser , updateUser } = require('../controller/user.controller');
router.get("/",getUsers);
router.delete("/:id", deleteUser);
router.post("/", addUser);
router.put("/:id", updateUser);

module.exports = router;