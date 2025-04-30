const express = require('express');
const app = express();

const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Atividade Users API',
            version: '1.0.0',
        },
    },
    apis: ['./src/routes/*.js'], 
};

const specs = swaggerJsdoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

const usersRoutes = require('./src/routes/usersRoutes');
const authMiddleware = require('./src/middlewares/authMiddleware');

// Middleware para autenticação
app.use(authMiddleware);

// Middleware para usar as rotas
app.use('/api', usersRoutes);

// Inicie o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(` 🎀 Servidor rodando na porta ${PORT}`);
});
