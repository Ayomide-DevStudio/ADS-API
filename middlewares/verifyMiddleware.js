const verifyApiKey = (req, res, next) => {
    const apiKey =  req.headers['ADS-api-key']
        if (!apiKey) return res.status(401).json({message: "Invalid Key"})
            next()
}
 module.exports = verifyApiKey
