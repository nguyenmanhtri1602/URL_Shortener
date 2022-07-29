
const Url = require('./shortener/model')('shortener').model;
const utils = require('../helpers/utils');
const shortid = require('shortid');
module.exports = function(app){
    require('./shortener/index')(app);

    app.get('/:urlId', async function(req, res, next) {
        try {
            const url = await Url.findOne({ urlId: req.params.urlId });
            if (url) {
              url.clicks++;
              url.save();
              return res.redirect(url.origUrl);
            } else res.status(404).json('Not found');
          } catch (err) {
            console.log(err);
            res.status(500).json('Server Error');
          }
    });
    app.post('/short', async (req, res, next) => {
        console.log("origUrl",req.body);
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
}