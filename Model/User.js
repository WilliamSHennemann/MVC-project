const db = require("../Config/db");

const findUserByEmail = async (email) => {
  const [users] = await db.execute(
    `SELECT id, nome AS name, email, senha AS password
     FROM usuarios
     WHERE email = ?`,
    [email]
  );

  return users[0];
};

const validateCredentials = async (email, password) => {
  const user = await findUserByEmail(email);
  return user && user.password === password ? user : null;
};

module.exports = { findUserByEmail, validateCredentials };
