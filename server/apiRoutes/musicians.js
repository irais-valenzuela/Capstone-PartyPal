const musiciansRouter = require('express').Router() 



musiciansRouter.get('/', (req, res, next) => {
  try {
    res.send('Hi in musician route').status(200)
  } catch(error) {
      next(error)
  }
})




module.exports = musiciansRouter