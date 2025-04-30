CREATE DATABASE users;
\c users;

CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(100) NOT NULL
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    usuario_id INTEGER REFERENCES usuarios(id) ON DELETE CASCADE,
    titulo VARCHAR(100) NOT NULL,
    conteudo TEXT NOT NULL
);

INSERT INTO usuarios (nome, email, senha) VALUES 
('João Silva', 'joao.silva@email.com', '123'),
('Maria Oliveira', 'maria.oliveira@email.com', '456'),
('Carlos Santos', 'carlos.santos@email.com', '789');

INSERT INTO posts (usuario_id, titulo, conteudo) VALUES 
(1, 'Meu primeiro post', 'Este é o conteúdo do meu primeiro post.'),
(2, 'Dicas de programação', 'Aqui estão algumas dicas úteis para programadores.'),
(3, 'Viagem dos sonhos', 'Compartilhando minha experiência de viagem.');

