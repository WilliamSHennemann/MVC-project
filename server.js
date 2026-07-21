const path = require("path");
require("dotenv").config();
const express = require("express");
const session = require("express-session");
const app = express();
const userRoutes = require("./Routes/Routes");
const authRoutes = require("./Routes/authRoutes");
const checkAuth = require("./middlewares/auth");
const bodyParser = require("body-parser");

// Configuração do template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "View"));

// Middlewares estáticos
app.use(express.static(path.join(__dirname, "Public")));
app.use(bodyParser.urlencoded({ extended: true }));

// Configuração de sessão
app.use(session({
    secret: "chave_secreta_aula05", // Chave para criptografar a sessão
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        secure: false, // true em produção com HTTPS
        maxAge: 60 * 60 * 1000 // Expira em 1 hora
    }
}));

// Middlewares de rotas
// Rotas públicas (login)
app.use(authRoutes);

// Rotas protegidas (requerem autenticação)
app.use(checkAuth, userRoutes);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3000}`);
});