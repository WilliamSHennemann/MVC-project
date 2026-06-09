/**
 * Representa um produto cadastrado na aplicação.
 */
class Product {
   /**
    * Cria uma nova instância de produto.
    *
    * @param {number} id - Identificador único do produto.
    * @param {string} product_name - Nome do produto.
    * @param {number|string} preco - Preço do produto.
    * @throws {Error} Lança erro quando nome ou preço não são informados.
    */
   constructor(id, product_name, preco) {
      if (!product_name || preco === undefined || preco === null || preco === "") {
         throw new Error("Nome e preço do produto são obrigatórios.");
      }

      this.id = id;
      this.product_name = product_name;
      this.preco = Number(preco);
      this.criadoEm = new Date();
   }
}

/**
 * Lista em memória usada para simular a persistência de produtos.
 *
 * @type {Product[]}
 */
const products = [
   new Product(1, "Notebook", 3500),
   new Product(2, "Mouse", 80),
   new Product(3, "Teclado", 150)
];

/**
 * Busca um produto pelo identificador.
 *
 * @param {number|string} id - Identificador do produto pesquisado.
 * @returns {Product|undefined} Produto encontrado ou undefined quando não existir.
 * @throws {Error} Lança erro quando o identificador não é numérico.
 */
const findProductById = (id) => {
   const productId = Number.parseInt(id, 10);

   if (Number.isNaN(productId)) {
      throw new Error("ID do produto deve ser numérico.");
   }

   return products.find((product) => product.id === productId);
};

/**
 * Remove um produto da lista em memória pelo identificador.
 *
 * @param {number|string} id - Identificador do produto que será removido.
 * @returns {boolean} Retorna true quando o produto é removido e false quando não existe.
 * @throws {Error} Lança erro quando o identificador não é numérico.
 */
const deleteProductById = (id) => {
   const productId = Number.parseInt(id, 10);

   if (Number.isNaN(productId)) {
      throw new Error("ID do produto deve ser numérico.");
   }

   const index = products.findIndex((product) => product.id === productId);

   if (index > -1) {
      products.splice(index, 1);
      return true;
   }

   return false;
};

module.exports = { Product, products, findProductById, deleteProductById };
