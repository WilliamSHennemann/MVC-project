const express = require("express");
const router = express.Router();

console.log("=== TESTANDO ROTAS ===");

const testController = {
   showEditForm: (req, res) => {
      console.log(`✓ showEditForm foi chamado com ID: ${req.params.id}`);
      res.send(`Editar produto ${req.params.id}`);
   }
};

router.get("/produtos/:id/editar", testController.showEditForm);
router.get("/produtos/:id", (req, res) => {
   console.log(`✓ getProductById foi chamado com ID: ${req.params.id}`);
   res.send(`Produto ${req.params.id}`);
});

console.log("Rotas registradas:");
console.log("- GET /produtos/:id/editar");
console.log("- GET /produtos/:id");

module.exports = router;
