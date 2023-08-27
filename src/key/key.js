
export async function checkAccessKey(req, res, next) {
    const providedKey = req.headers['x-access-key']; // Chave de acesso enviada no header

    if (providedKey === process.env.ACCESSKEY) {
        next();
    } else {
        res.status(403).json({ message: 'Acesso proibido' });
    }
}