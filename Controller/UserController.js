const { Product, products, deleteProductById, findProductById } = require("../Model/ProdutoModel");

/**
 * Renderiza a página inicial com a lista de produtos.
 *
 * @param {import('express').Request} req - Objeto de requisição do Express.
 * @param {import('express').Response} res - Objeto de resposta do Express.
 * @returns {void}
 */
exports.getIndex = (req, res) => {
   res.render("index", { products, session: req.session });
};

/**
 * Renderiza a página de listagem de produtos.
 *
 * @param {import('express').Request} req - Objeto de requisição do Express.
 * @param {import('express').Response} res - Objeto de resposta do Express.
 * @returns {void}
 */
exports.getProducts = (req, res) => {
   res.render("produto", { products, session: req.session });
};

/**
 * Renderiza os detalhes de um produto específico.
 *
 * @param {import('express').Request<{ id: string }>} req - Requisição com o ID do produto nos parâmetros da rota.
 * @param {import('express').Response} res - Objeto de resposta do Express.
 * @returns {void}
 */
exports.getProductbyId = (req, res) => {
   try {
      const idProduct = req.params.id;
      const product = findProductById(idProduct);

      if (product) {
         res.render("produtoDetalhes", { product, session: req.session });
      } else {
         res.redirect("/produtos");
      }
   } catch (error) {
      res.redirect("/produtos");
   }
};

/**
 * Cria um novo produto a partir dos dados enviados pelo formulário.
 *
 * @param {import('express').Request<{}, {}, { product_name: string, preco: string }>} req - Requisição com nome e preço no corpo.
 * @param {import('express').Response} res - Objeto de resposta do Express.
 * @returns {void}
 */
exports.createProduct = (req, res) => {
   try {
      const { product_name, preco } = req.body;
      const newId = products.length + 1;
      const newProduct = new Product(newId, product_name, preco);

      products.push(newProduct);
   } finally {
      res.redirect("/produtos");
   }
};

/**
 * Remove um produto pelo ID recebido na rota.
 *
 * @param {import('express').Request<{ id: string }>} req - Requisição com o ID do produto nos parâmetros da rota.
 * @param {import('express').Response} res - Objeto de resposta do Express.
 * @returns {void}
 */
exports.deleteProduct = (req, res) => {
   try {
      deleteProductById(req.params.id);
   } finally {
      res.redirect("/produtos");
   }
};

/**
 * Renderiza a página de contato.
 *
 * @param {import('express').Request} req - Objeto de requisição do Express.
 * @param {import('express').Response} res - Objeto de resposta do Express.
 * @returns {void}
 */
exports.getContato = (req, res) => {
   res.render("contato", { session: req.session });
};

/**
 * Renderiza a página sobre o projeto.
 *
 * @param {import('express').Request} req - Objeto de requisição do Express.
 * @param {import('express').Response} res - Objeto de resposta do Express.
 * @returns {void}
 */
exports.getSobre = (req, res) => {
   res.render("sobre", { session: req.session });
};

/**
 * Atualiza os dados de um produto existente.
 *
 * @param {import('express').Request<{ id: string }, {}, { product_name: string, preco: string }>} req - Requisição com ID na rota e dados do produto no corpo.
 * @param {import('express').Response} res - Objeto de resposta do Express.
 * @returns {void}
 */
exports.editProduct = (req, res) => {
   const { product_name, preco } = req.body;
   const idProduct = Number.parseInt(req.params.id, 10);
   const product = products.find((item) => item.id === idProduct);

   if (product) {
      product.product_name = product_name;
      product.preco = Number(preco);
   }

   res.redirect("/produtos");
};

/**
 * Renderiza o formulário de edição de um produto.
 *
 * @param {import('express').Request<{ id: string }>} req - Requisição com o ID do produto nos parâmetros da rota.
 * @param {import('express').Response} res - Objeto de resposta do Express.
 * @returns {void}
 */
exports.showEditForm = (req, res) => {
   const idProduct = Number.parseInt(req.params.id, 10);
   const product = products.find((item) => item.id === idProduct);

   if (product) {
      res.render("produtoEditar", { product, session: req.session });
   } else {
      res.redirect("/produtos");
   }
};
