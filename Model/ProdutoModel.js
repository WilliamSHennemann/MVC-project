const mongoose = require('mongoose');

// Definindo a estrutura do documento no banco
const ProdutoSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    preco: { type: Number, required: true },
    criadoEm: { type: Date, default: Date.now }
});

// Exportando o modelo para ser usado no Controller
module.exports = mongoose.model('Produto', ProdutoSchema);

const findProductById = (id) => {
   return products.find(p => p.id === parseInt(id));
};

const deleteProductById = (id) => {
   const index = products.findIndex(p => p.id === parseInt(id));
   if (index > -1) {
      products.splice(index, 1);
      return true;
   }
   return false;
};

module.exports = { Product, products, findProductById, deleteProductById };