const express = require("express");
const router = express.Router();
const userController = require("../Controller/UserController");

router.get("/", userController.getIndex);
router.get("/contato", userController.getContato);
router.get("/sobre", userController.getSobre);

router.get("/produtos", userController.getProducts);
router.post("/produtos", userController.createProduct);
router.get("/produtos/:id/editar", userController.showEditForm);
router.put("/produtos/:id/editar", userController.editProduct);
router.post("/produtos/:id/editar", userController.editProduct);
router.get("/produtos/:id/deletar", userController.deleteProduct);
router.get("/produtos/:id", userController.getProductbyId);

module.exports = router;