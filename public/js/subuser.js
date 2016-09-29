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
   setTimeout(function mdatos(){socket.emit('sol_datos', 'd1');},60);
});


$('#arte').on('submit','#myform',function(event){
	var error = 0;
    var p,po;
    po=$('#nombre').val();
    console.log('valor='+po);
	$('.requerido').each(function(i, elem){
		p=$(elem).val();
        console.log(p);
		});
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