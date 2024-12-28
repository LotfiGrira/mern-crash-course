import express from "express";
import { createProduct, deleteProduct, getProducts, updateProduct } from "../controllers/product.controller.js";
const router = express.Router();
// Route pour récupérer tous les produits
router.get("/",getProducts);
// Route pour créer un produit
router.post("/", createProduct);
// Route pour mettre à jour un produit
router.put("/:id",updateProduct);
// Route pour supprimer un produit
router.delete("/:id", deleteProduct);
export default router;