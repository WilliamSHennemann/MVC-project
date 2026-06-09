/**
 * @typedef {Object} User
 * @property {number} id - Identificador único do usuário.
 * @property {string} name - Nome do usuário.
 * @property {string} email - Email usado para autenticação.
 * @property {string} password - Senha usada apenas no ambiente didático.
 */

/**
 * Lista em memória de usuários autorizados a acessar a aplicação.
 *
 * @type {User[]}
 */
const users = [
    {
        id: 1,
        name: "Yas",
        email: "admin@example.com",
        password: "123456"
    },
    {
        id: 2,
        name: "Joao Silva",
        email: "joao@example.com",
        password: "senha123"
    },
    {
        id: 3,
        name: "Maria Santos",
        email: "maria@example.com",
        password: "pass123"
    }
];

/**
 * Busca um usuário pelo email informado.
 *
 * @param {string} email - Email do usuário pesquisado.
 * @returns {User|undefined} Usuário encontrado ou undefined quando não existir.
 * @throws {Error} Lança erro quando o email não é informado.
 */
const findUserByEmail = (email) => {
    if (!email) {
        throw new Error("Email é obrigatório.");
    }

    return users.find((user) => user.email === email);
};

/**
 * Valida as credenciais de login do usuário.
 *
 * @param {string} email - Email informado no login.
 * @param {string} password - Senha informada no login.
 * @returns {User|null} Usuário autenticado ou null quando as credenciais forem inválidas.
 * @throws {Error} Lança erro quando email ou senha não são informados.
 */
const validateCredentials = (email, password) => {
    if (!email || !password) {
        throw new Error("Email e senha são obrigatórios.");
    }

    const user = findUserByEmail(email);

    if (user && user.password === password) {
        return user;
    }

    return null;
};

module.exports = {
    users,
    findUserByEmail,
    validateCredentials
};
