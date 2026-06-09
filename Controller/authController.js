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

/**
 * Processa as credenciais enviadas pelo formulário de login.
 *
 * @param {import('express').Request<{}, {}, { email: string, password: string }>} req - Requisição com email e senha no corpo.
 * @param {import('express').Response} res - Objeto de resposta do Express.
 * @returns {void}
 */
exports.postLogin = (req, res) => {
    try {
        const { email, password } = req.body;
        const user = validateCredentials(email, password);

        if (user) {
            req.session.user = {
                id: user.id,
                name: user.name,
                email: user.email
            };
            res.redirect("/");
        } else {
            res.render("login", { error: "Email ou senha invalidos!" });
        }
    } catch (error) {
        res.render("login", { error: "Email ou senha invalidos!" });
    }
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
