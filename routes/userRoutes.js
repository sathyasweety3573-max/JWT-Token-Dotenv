const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
  getUsers,
  deleteUser,
} = require("../controllers/userController");

const authMiddleware = require("../middleware/authMiddleware");

router.post("/register", registerUser);
router.post("/login", loginUser);

router.get("/", authMiddleware, getUsers);
router.delete("/:id", authMiddleware, deleteUser);

module.exports = router;