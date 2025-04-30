module.exports = (req, res, next) => {
    const apiKey = req.headers['x-api-key'];

    if (!apiKey || apiKey !== '93TUay44UuDisEjldcpkqmmR8HtFIr7') {
        return res.status(401).json({ error: 'Chave de API não fornecida ou inválida' });
    }

    next(); // Continua para a próxima função
};