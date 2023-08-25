const express = require("express");
const {
  createEnquiry,
  updateEnquiry,
  deleteEnquiry,
  getEnquiry,
  getAllEnquiry,
} = require("../controller/enqCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/create-enq", createEnquiry);
router.put("/update-enq/:id", authMiddleware, isAdmin, updateEnquiry);
router.delete("/delete-enq/:id", authMiddleware, isAdmin, deleteEnquiry);
router.get("/get-enq/:id", getEnquiry);
router.get("/get-all-enq", getAllEnquiry);

module.exports = router;