const { Product, products, deleteProductById, findProductById } = require("../Model/UserModel");

exports.getIndex = (req, res) => {
   res.render("index", { products, session: req.session });
};

exports.getProducts = (req, res) => {
   res.render("produto", { products, session: req.session });
};

exports.getProductbyId = (req, res) => {
   const idProduct = req.params.id;
   const product = findProductById(idProduct);
   if (product) {
      res.render("produtoDetalhes", { product, session: req.session });
   } else {
      res.redirect("/produtos");
   }
};

exports.createProduct = (req, res) => {
   const { product_name, preco } = req.body;
   const newId = products.length + 1;
   const newProduct = new Product(newId, product_name, preco);
   products.push(newProduct);
   res.redirect("/produtos");
};

exports.deleteProduct = (req, res) => {
   deleteProductById(req.params.id);
   res.redirect("/produtos");
};

exports.getContato = (req, res) => {
   res.render("contato", { session: req.session });
};

exports.getSobre = (req, res) => {
   res.render("sobre", { session: req.session });
};

exports.editProduct = (req, res) => {
   const { product_name, preco } = req.body;
   const idProduct = req.params.id;
   const product = products.find(p => p.id === parseInt(idProduct));
   
   if (product) {
      product.product_name = product_name;
      product.preco = preco;
   }
   
   res.redirect("/produtos");
};

exports.showEditForm = (req, res) => {
   const idProduct = req.params.id;
   const product = products.find(p => p.id === parseInt(idProduct));
   
   if (product) {
      res.render("produtoEditar", { product, session: req.session });
   } else {
      res.redirect("/produtos");
   }
};