const {
   listProducts,
   findProductById,
   createProduct,
   updateProduct,
   deleteProductById
} = require("../Model/ProdutoModel");

/**
 * Renderiza a página inicial com a lista de produtos do banco de dados.
 *
 * @param {import('express').Request} req - Objeto de requisição do Express.
 * @param {import('express').Response} res - Objeto de resposta do Express.
 * @returns {Promise<void>}
 */
exports.getIndex = async (req, res) => {
   try {
      const products = await listProducts();
      res.render("index", { products, session: req.session });
   } catch (error) {
      console.error("Erro ao buscar produtos:", error.message);
      res.status(500).send("Erro ao carregar a página inicial.");
   }
};

/**
 * Renderiza a página de listagem de produtos consultando o banco de dados.
 *
 * @param {import('express').Request} req - Objeto de requisição do Express.
 * @param {import('express').Response} res - Objeto de resposta do Express.
 * @returns {Promise<void>}
 */
exports.getProducts = async (req, res) => {
   try {
      const products = await listProducts();
      res.render("produto", { products, session: req.session });
   } catch (error) {
      console.error("Erro ao listar produtos:", error.message);
      res.status(500).send("Erro ao listar produtos.");
   }
};

/**
 * Renderiza os detalhes de um produto específico consultado pelo ID.
 *
 * @param {import('express').Request<{ id: string }>} req - Requisição com o ID do produto nos parâmetros da rota.
 * @param {import('express').Response} res - Objeto de resposta do Express.
 * @returns {Promise<void>}
 */
exports.getProductbyId = async (req, res) => {
   try {
      const product = await findProductById(req.params.id);

      if (!product) {
         return res.redirect("/produtos");
      }

      res.render("produtoDetalhes", { product, session: req.session });
   } catch (error) {
      console.error("Erro ao buscar produto:", error.message);
      res.redirect("/produtos");
   }
};

/**
 * Cria um novo produto no banco de dados a partir dos dados do formulário.
 *
 * @param {import('express').Request<{}, {}, { product_name: string, preco: string }>} req - Requisição com os dados do produto no corpo.
 * @param {import('express').Response} res - Objeto de resposta do Express.
 * @returns {Promise<void>}
 */
exports.createProduct = async (req, res) => {
   try {
      const { product_name, preco } = req.body;

      await createProduct(product_name, preco);
      res.redirect("/produtos");
   } catch (error) {
      console.error("Erro ao criar produto:", error.message);
      res.status(400).send("Não foi possível cadastrar o produto.");
   }
};

/**
 * Remove um produto do banco de dados pelo ID recebido na rota.
 *
 * @param {import('express').Request<{ id: string }>} req - Requisição com o ID do produto nos parâmetros da rota.
 * @param {import('express').Response} res - Objeto de resposta do Express.
 * @returns {Promise<void>}
 */
exports.deleteProduct = async (req, res) => {
   try {
      await deleteProductById(req.params.id);
      res.redirect("/produtos");
   } catch (error) {
      console.error("Erro ao remover produto:", error.message);
      res.status(400).send("Não foi possível remover o produto.");
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
 * Atualiza os dados de um produto existente no banco de dados.
 *
 * @param {import('express').Request<{ id: string }, {}, { product_name: string, preco: string }>} req - Requisição com ID na rota e dados atualizados no corpo.
 * @param {import('express').Response} res - Objeto de resposta do Express.
 * @returns {Promise<void>}
 */
exports.editProduct = async (req, res) => {
   try {
      const { product_name, preco } = req.body;

      const updated = await updateProduct(
         req.params.id,
         product_name,
         preco
      );

      if (!updated) {
         return res.redirect("/produtos");
      }

      res.redirect("/produtos");
   } catch (error) {
      console.error("Erro ao editar produto:", error.message);
      res.status(400).send("Não foi possível atualizar o produto.");
   }
};

/**
 * Renderiza o formulário de edição de um produto consultado pelo ID.
 *
 * @param {import('express').Request<{ id: string }>} req - Requisição com o ID do produto nos parâmetros da rota.
 * @param {import('express').Response} res - Objeto de resposta do Express.
 * @returns {Promise<void>}
 */
exports.showEditForm = async (req, res) => {
   try {
      const product = await findProductById(req.params.id);

      if (!product) {
         return res.redirect("/produtos");
      }

      res.render("produtoEditar", { product, session: req.session });
   } catch (error) {
      console.error("Erro ao carregar formulário de edição:", error.message);
      res.redirect("/produtos");
   }
};
