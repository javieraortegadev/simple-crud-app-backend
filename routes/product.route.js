const express = require("express");
const Product = require("../models/product.model.js");
const router = express.Router();
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller.js");

//controller
//Get all Products
router.get("/", getProducts);
//Get a product by ID
router.get("/:id", getProduct);
//Create Product
router.post("/", createProduct);
//Update Product
router.put("/:id", updateProduct);
//Delete Product
router.delete("/:id", deleteProduct);
module.exports = router;
