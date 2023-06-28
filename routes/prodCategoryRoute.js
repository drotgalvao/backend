const express = require("express");
const {
  createCategory,
  updateCategory,
  deleteCategory,
  getCategory,
  getAllCategory,
} = require("../controller/prodCategoryCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/create-category", authMiddleware, isAdmin, createCategory);
router.put("/update-category/:id", authMiddleware, isAdmin, updateCategory);
router.delete("/delete-category/:id", authMiddleware, isAdmin, deleteCategory);
router.get("/get-category/:id", authMiddleware, isAdmin, getCategory);
router.get("/get-all-category", authMiddleware, isAdmin, getAllCategory);

module.exports = router;
