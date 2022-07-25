module.exports = function(app){
    var Name = 'shorrener'; //use for folder, router, view
    var EntityName = 'shorrener'; //use for collection;

    app.use( '/'+Name, require('./controller')(Name, EntityName).router );
    //app.use('/api/'+Name, require('./api')(Name, EntityName).router );
}