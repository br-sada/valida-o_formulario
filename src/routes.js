const express = require('express')
const routes = express.Router()

routes.get('/', function(req, res) {
    return res.render('form/index')
})

routes.get('/form', function(req, res){
    return res.render('form/index')
})

module.exports = routes