function Responsechack(req, res, next) {
    console.dir(res.headersSent)
    next()
}

module.exports = Responsechack