

var usir;
var lser       = require('../models/user');
var con=0;
var homeController=function(server,io){
console.log('homeController listo');

server.get('/',function(req,res){
 
  	res.render('home/login');

   });


        server.get('/index',function(req,res){
            res.render('home/hola');

        });

        server.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
         });
        //////////////////websocketscode///////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////////////////////77
        io.on('connection', function(socket) {  //evento de coneccion 
        console.log('Un cliente se ha conectado');

        socket.emit('messages', 'hola cliente');  ///enviar mensajes al cliente
         
        socket.on('new-message', function(data) {  ///resibir
        io.sockets.emit('messages', 'resivido');
        console.log(data);
       

        });
        
        socket.on('new_info',function(data) {
        lser.update({'local.email':usir.local.email},
        {$set:{'local.puesto' : data[1],'local.permisos' : data[2],'local.nombre' : data[0]}
        
        },{upsert:true,safe:true},
        function(err, doc){
        if(err){
        console.log("Something wrong when updating data!");
         }else{console.log(usir.local);}       
         });

        });


        socket.on('sol_datos',function(data) {
          con++;
          socket.emit('req_datos', usir);

       
        
        }); 


        });


       
      

        ///////////////////////////////////////////////////////////////////////////////////////////////////////77
        //////////////////////////////////////////////////////////////////////////////////////////////////////////77


        // process the login form
        server.post('/login', passport.authenticate('local-login', {
            successRedirect : '/home', // redirect to the secure profile section
           failureRedirect:'/eror',// redirect back to the signup page if there is an error
            failureFlash: 'Invalid username or password.' // allow flash messages
        }));
        

        server.get('/home',isLoggedIn,function(req,res){
            usir = req.user;
            console.log(usir);

            res.render('home/index');
        });
        server.get('/testimonio',isLoggedIn,function(req,res){
        usir = req.user;
        });


        server.get('/datos',function(req,res){
            res.render('home/datos');
        });
        server.get('/eror',function(req,res){
            res.render('home/login',{error:'Usuario y/o clave incorrecto'});
        });
        server.get('/profile', isLoggedIn, function(req, res) {
        
            usir : req.user
        });

        // SIGNUP =================================
        // show the signup form
        server.get('/signup', function(req, res) {
            res.render('home/signup', { message: req.flash('signupMessage') });
        });

        // process the signup form
        server.post('/signup', passport.authenticate('local-signup', {
            successRedirect : '/', // redirect to the secure profile section
            failureRedirect : '/', // redirect back to the signup page if there is an error
            failureFlash : true 
        }));


        server.get('/connect/local', function(req, res) {
            res.render('connect-local.ejs', { message: req.flash('loginMessage') });
        });
        server.post('/connect/local', passport.authenticate('local-signup', {
            successRedirect : '/profile', // redirect to the secure profile section
            failureRedirect : '/connect/local', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash messages
        }));


                                 };
module.exports= homeController;
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.redirect('/');
}

