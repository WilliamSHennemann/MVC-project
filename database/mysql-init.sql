-- Banco de dados do projeto MVC de Produtos
-- Execute este arquivo no MySQL Workbench ou com o cliente mysql.

CREATE DATABASE IF NOT EXISTS mvc_produtos
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE mvc_produtos;

CREATE TABLE IF NOT EXISTS usuarios (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  senha VARCHAR(255) NOT NULL,
  criado_em TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY uq_usuarios_email (email)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS produtos (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  nome VARCHAR(150) NOT NULL,
  preco DECIMAL(10, 2) NOT NULL,
  criado_em TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  atualizado_em TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  CONSTRAINT chk_produtos_preco_nao_negativo CHECK (preco >= 0)
) ENGINE=InnoDB;

-- Dados que hoje existem nas listas em memória do projeto.
INSERT IGNORE INTO usuarios (id, nome, email, senha) VALUES
  (1, 'Yas', 'admin@example.com', '123456'),
  (2, 'Joao Silva', 'joao@example.com', 'senha123'),
  (3, 'Maria Santos', 'maria@example.com', 'pass123');

INSERT IGNORE INTO produtos (id, nome, preco) VALUES
  (1, 'Notebook', 3500.00),
  (2, 'Mouse', 80.00),
  (3, 'Teclado', 150.00);
