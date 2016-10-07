$(document).ready(function(){

///////////////////////////profile////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
var socket=io();
var user;
$('#perfil').click(function(){
$("#arte").load("mains/v1profile.html");
setTimeout(function mdatos(){socket.emit('sol_datos', 'd1');},60);
});


socket.on('req_datos', function(data) { ///resibir mensajes del servidor     
    console.log(data.local);
    user=data.local;
    $("#mailuser").text(data.local.email);
    $("#nombreuser").text(data.local.nombre);
    $("#puestouser").text(data.local.puesto);
    $("#permisosuser").text(data.local.permisos);
    $("#passworduser").text(data.local.password.substring(1, 12));
});


$('#edituser').click(function(){
   $("#arte").load("mains/edituser.html");
});
$('#historialusr').click(function(){
   $("#arte").load("mains/table.html");
});


$('#arte').on('submit','#myform',function(event){
	var error = 0;
    var datos=[];
    datos[0]=$('#nombre').val();
    datos[1]=$('#puesto').val();
    datos[2]=$('#permisos').val();  
    var m=$(":input").serializeArray();
    //  console.log( document.getElementById("myform") ); 
    setTimeout(function mdatos(){socket.emit('new_info', datos);},60); 
	});

function addInfo(e) {  
  
  //  var nombre = document.getElementById('nombre').value;
    //var permisos = document.getElementById('permisos').value;
    Console.log('form resibido');
  
};

//$("#arte").on("click", ".blog-test", function(){
//	$(this).after("<p class=\"blog-test\">Pulsa para probar " + (++bt_count) + "</p>");
//});
		
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

});