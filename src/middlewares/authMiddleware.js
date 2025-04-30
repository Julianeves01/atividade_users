module.exports = (req, res, next) => {
    const apiKey = req.headers['x-api-key'];

    if (!apiKey || apiKey !== 'judCeRo8m0JMjQnwIbdr8A7EC0TwfM') {
        return res.status(401).json({ error: 'Chave de API não fornecida ou inválida' });
    }

    next(); // Continua para a próxima função
};