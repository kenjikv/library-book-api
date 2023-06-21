const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    // Obtén el token desde el encabezado de la solicitud
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(403).json({ error: 'No se proporcionó token.' });
    }

    // Verifica el token
    jwt.verify(token, 'garbage', (err, data) => {
        // if (err) {
        //     return res.status(403).json({ error: 'Falló la autenticación de token.' });
        // }

        // Almacena los datos del token en el objeto req para usarlo en otras rutas
        // req.userData = data;
        next();
    });
};

module.exports = verifyToken;