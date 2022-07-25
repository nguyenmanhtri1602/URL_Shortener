var express = require('express'),
    router = express.Router();

module.exports = function(Name, EntityName){
    //var Entity = require('./model')(EntityName).model;
    router.get('/', async function(req, res, next) {
        res.redirect('/404');
    })
    return {
        router: router
    }
}