var express = require('express'),
    router = express.Router();

module.exports = function(Name, EntityName){
    //var Entity = require('./model')(EntityName).model;
    router.get('/', async function(req, res, next) {
        //res.render('hello');
        return res.json({ error: 0, message: 'Delete success',});
    })
    router.post('/', async function(req, res, next) {
       
        return res.json({ error: 0, message: 'Delete success',});
    })
    return {
        router: router
    }
}