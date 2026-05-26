const { validateCredentials } = require("../Model/User");

exports.getLogin = (req, res) => {
    res.render("login", { error: null });
};

exports.postLogin = (req, res) => {
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
        res.render("login", { error: "Email ou senha inválidos!" });
    }
};

exports.logout = (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error("Erro ao destruir sessão:", err);
        }
        res.redirect("/login");
    });
    console.log(req.session);
};
