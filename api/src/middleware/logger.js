const logger = (req,res,next) => {
  req.userId = "239";
  
    console.log(`${req.method} ${req.method} ://${req.host} ${req.originalUrl}`);
    next();
  };

  module.exports = logger;
