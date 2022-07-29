/**
 * library needed
 */
 var LOCATION_DATA =  NODE_CONFIG.REDIS.LOCATION_DATA.HOST;
 var LOCATION_DATA_PORT = NODE_CONFIG.REDIS.LOCATION_DATA.PORT;
 
 var express = require('express'),
    app = express();
 
 var bodyParser = require('body-parser');
 var cookieParser = require('cookie-parser');
 var expressSession = require('express-session');
 var exphbs = require('express-handlebars');
    
//  var i18n = require('i18n');
//const crypto = require('crypto');
// var redisStore = require('connect-redis')(expressSession);
// var redis   = require("ioredis");
// var client  = redis.createClient(LOCATION_DATA_PORT, LOCATION_DATA);
 
 module.exports = function(configs = {}, plugins = {}, extend = null){
    var cors = require('cors');
    app.use(cors());
     
     /**
     * setup basic
     */
    //  app.use('/public', express.static(NODE_ROOT + '/public/dashboard'));
    //  app.use('/admin', express.static(NODE_ROOT + '/public/admin-lte'));
    //  app.use('/static', express.static(NODE_ROOT + '/public/static/'));
    //  app.use('/pages', express.static(NODE_ROOT + '/public/admin-lte/pages'));
    //  app.use('/plugins', express.static(NODE_ROOT + '/public/admin-lte/plugins'));
    //  app.use('/dist', express.static(NODE_ROOT + '/public/admin-lte/dist'));
 
    //  app.disable('x-powered-by');
    
    app.set('views', NODE_ROOT + '/views');
    app.set('view engine', '.hbs');
    app.engine('.hbs', exphbs.engine({
        defaultLayout: 'main',
        extname: '.hbs',
        layoutsDir: 'views/layouts',
        partialsDir: 'views/partials',
        helpers: {
            
        }
    }));
   
    
 
    app.use(bodyParser.json({limit: '50mb'}));
    app.use(bodyParser.urlencoded({limit: '50mb', parameterLimit:50000, extended: true }));
    app.use(cookieParser());
    //  app.use(expressSession({
    //      cookie: {
    //          path: '/', httpOnly: true, maxAge: configs.SESSION
    //      },
    //      secret: configs.SALT,
    //      store: new redisStore({ host: 'redis_cache', port: 6379, client: client,ttl :  260}),
    //      resave: false,
    //      saveUninitialized: true,
    //  }));
 
     /**
      * passport setup
      */
    //  var passport = require('passport');
    //  app.use(passport.initialize());
    //  app.use(passport.session());
    //  //console.log("passport:",passport);
    //  require('../middlewares/passport')(passport); // pass passport for configsuration
 
     /**
      * log requests to the console
      */
     if (NODE_ENV == "dev") {
         var morgan = require('morgan');
         app.use(morgan('dev'));
     }
     else{
         app.enable('view cache');
     }
 
     /**
     * connect database
     */
     var db = require('../helpers/db_util');
 
     /** load routes*/
     require('./routes')(app);
 
     // optional extend app
     if (extend) {
         extend(app);
     }
 
     var serverr = app.listen(process.env.PORT || configs.PORT, function(){
         console.log('\x1b[32m', ' >> Started App:   --HOST:' + configs.HOST+ ' --PORT:' + configs.PORT);
         console.log('\x1b[32m', ' >> Started Redis: --HOST:' + configs.REDIS.LOCATION_DATA.HOST + ' --PORT:' + configs.REDIS.LOCATION_DATA.PORT );
         console.log('\x1b[32m', ' >> Started Mogo:  --HOST:' + configs.DB.MONGODB);
         console.log('\x1b[32m', ' >> ENVIROMENT: ' + NODE_ENV + ' --MEMORY: [ ' + process.memoryUsage().rss, ']', '\n \x1b[0m');
     });
 
     serverr.timeout = 30000;
     // serverr.setTimeout(30000);
 
     return app;
 
 }
 