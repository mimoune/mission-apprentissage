const express = require('express')

const catalogueController = require('../controllers/catalogue')

const router = express.Router()

// /admin/add-product => GET
router.get('/api/catalogue/services', catalogueController.getCatalogueServices)

module.exports = router
