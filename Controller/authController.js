const { validateCredentials } = require("../Model/User");

/**
 * Renderiza o formulário de login.
 *
 * @param {import('express').Request} req - Objeto de requisição do Express.
 * @param {import('express').Response} res - Objeto de resposta do Express.
 * @returns {void}
 */
exports.getLogin = (req, res) => {
    res.render("login", { error: null });
};

exports.postLogin = async (req, res) => {
  const { email, password } = req.body;
  const user = await validateCredentials(email, password);

  if (user) {
    req.session.user = {
      id: user.id,
      name: user.name,
      email: user.email
    };
    return res.redirect("/");
  }

  res.render("login", { error: "Email ou senha invalidos!" });
};

/**
 * Encerra a sessão atual do usuário e redireciona para o login.
 *
 * @param {import('express').Request} req - Objeto de requisição do Express com sessão ativa.
 * @param {import('express').Response} res - Objeto de resposta do Express.
 * @returns {void}
 */
exports.logout = (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error("Erro ao destruir sessao:", err);
        }
        res.redirect("/login");
    });
};
