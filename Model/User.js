// Dados fictícios de usuários para autenticação
const users = [
    {
        id: 1,
        name: "Yas",
        email: "admin@example.com",
        password: "123456"
    },
    {
        id: 2,
        name: "João Silva",
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

const findUserByEmail = (email) => {
    return users.find(user => user.email === email);
};

const validateCredentials = (email, password) => {
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
