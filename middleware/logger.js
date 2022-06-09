// @desc log request to cosole
const logger = (req,res,next) =>{
    // req.hello = 'This is middle world'
    console.log(`${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
}
module.exports = logger