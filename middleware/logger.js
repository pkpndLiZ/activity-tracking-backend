function logger(req, res, next) {
    //req method และ url ที่ใช้งาน
    console.log(`[Logger]: Requesting to ${req.method} ${req.url} from ${req.ip}`)
    next()
}

module.exports = logger