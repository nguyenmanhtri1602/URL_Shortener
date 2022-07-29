/**
 * Created by trinm on 2022/07/29
 * handle router api
 */
 var express = require('express'),
 router = express.Router();
 const Url = require('./model')('shortener').model;
 const utils = require('../../helpers/utils');
 const shortid = require('shortid')
 var Promise = require('bluebird');
 
 module.exports = function(Name, EntityName){
     var Entity = require('./model')(EntityName).model;
 
     /**
      * Get all
      */
     router.get('/', function (req, res) {
 
         Entity.getAll({})
         .then(function(doc){
             return res.json({ error: 0, message: 'Get all success', data: doc });
         })
         .catch(function(err){
             return res.json({ error: 1, message: err.message, data: null });
         });
         
     });
 
 
     /**
      * create
      */
     router.post('/', async function (req, res) {
        const { origUrl } = req.body;
        //const origUrl = "https://www.npmjs.com/package/shortid";
        console.log("origUrl",origUrl);
        const base = process.env.BASE || "http://127.0.0.1:3002";
        const urlId = shortid.generate();
        console.log("urlId",urlId);
        console.log("utils",utils.validateUrl(origUrl));
        if (utils.validateUrl(origUrl)) {
          try {
            let url = await Url.findOne({ origUrl });
            if (url) {
              res.json(url);
            } else {
              const shortUrl = `${base}/${urlId}`;
              url = new Url({
                origUrl,
                shortUrl,
                urlId,
                date: new Date(),
              });
      
              await url.save();
              res.json(url);

            }
          } catch (err) {
            console.log(err);
            res.status(500).json('Server Error');
          }
        } else {
          res.status(400).json('Invalid Original Url');
        }
    });
          
 

    return {
        router: router
    }
 
 }