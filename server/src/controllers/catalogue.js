const data = require('../../output/services.json')

exports.getCatalogueServices = (req, res, next) => {
  res.json(data)
}
