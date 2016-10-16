var express =require('express');
    http=require('http');
    swig=require('swig');
    passport =require("passport");
    mongoose = require('mongoose');
    flash    = require('connect-flash');
    session=require('express-session');
    morgan       = require('morgan');
    cookieParser=require('cookie-parser');
    bodyParser   = require('body-parser');
    configDB = require('./config/database.js');
    jsdom = require("jsdom");
    window = jsdom.jsdom().defaultView;
    $ = require('jquery');
    dt = require( 'datatables.net' )();
    schedule = require('node-schedule');
    path = require('path');
    histo= ('../app/models/historialusr');
var server= express();
var server_socket= http.createServer(server).listen(8000);
var io= require('socket.io').listen(server_socket);


swig.setDefaults({

	cache:false
}

	)
// configuration ===============================================================
mongoose.connect(configDB.url); // connect to our database

require('./config/passport')(passport); 
// set up our express application
server.use(morgan('dev')); // log every request to the console
server.use(cookieParser()); // read cookies (needed for auth)
server.use(bodyParser.json()); // get information from html forms
server.use(bodyParser.urlencoded({ extended: true }));








// required for passport
server.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
server.use(passport.initialize());
server.use(passport.session()); // persistent login sessions
server.use(flash()); // use connect-flash for flash messages stored in session

server.engine('html',swig.renderFile);
server.set('view engine','html');
server.set('views',__dirname+'/app/views');
server.use(express.static('./public'));

require('./app/controllers/home')(server,io);

 



