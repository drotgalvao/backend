const express = require("express");
const {
  createBrand,
  updateBrand,
  deleteBrand,
  getBrand,
  getAllBrand,
} = require("../controller/brandCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/create-brand", authMiddleware, isAdmin, createBrand);
router.put("/update-brand/:id", authMiddleware, isAdmin, updateBrand);
router.delete("/delete-brand/:id", authMiddleware, isAdmin, deleteBrand);
router.get("/get-brand/:id", authMiddleware, isAdmin, getBrand);
router.get("/get-all-brand", authMiddleware, isAdmin, getAllBrand);

module.exports = router;