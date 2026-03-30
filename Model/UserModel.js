// Classe que define a estrutura de um Produto
class Product {
   constructor(id, product_name, preco) {
      this.id = id;
      this.product_name = product_name;
      this.preco = preco;
   }
}

// Array que armazena todos os produtos
const products = [
   new Product(1, "Notebook", 3500.00),
   new Product(2, "Mouse", 50.00),
   new Product(3, "Teclado", 150.00),
];


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