const db = require("../Config/db");

const listProducts = async () => {
  const [products] = await db.execute(
    "SELECT id, nome AS product_name, preco FROM produtos ORDER BY id"
  );
  return products;
};

const findProductById = async (id) => {
  const [products] = await db.execute(
    "SELECT id, nome AS product_name, preco FROM produtos WHERE id = ?",
    [id]
  );
  return products[0];
};

const createProduct = async (productName, preco) => {
  await db.execute(
    "INSERT INTO produtos (nome, preco) VALUES (?, ?)",
    [productName, preco]
  );
};

const updateProduct = async (id, productName, preco) => {
  await db.execute(
    "UPDATE produtos SET nome = ?, preco = ? WHERE id = ?",
    [productName, preco, id]
  );
};

const deleteProductById = async (id) => {
  await db.execute("DELETE FROM produtos WHERE id = ?", [id]);
};

module.exports = {
  listProducts,
  findProductById,
  createProduct,
  updateProduct,
  deleteProductById
};