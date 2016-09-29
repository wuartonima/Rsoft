
$(document).ready(function(){
var contador = 0;
                

                $("#menu").load("asides/principal.html");
	    		$('#principal').click(function(){
	       		$("#menu").load("asides/principal.html");
	       		contador++;
	    									 });

	    		$('#usuario').click(function(){
	       		$("#menu").load("asides/usuarios.html");
	       		
	    									  });

	    		$('#produccion').click(function(){

	       		$("#menu").load("asides/produccion.html");
	       		
	    									 });

	    		$('#reportes').click(function(){
	       		$("#menu").load("asides/reportes.html");
	       		
	    									 });

	    		$('#configuracion').click(function(){
	       		$("#menu").load("asides/configuracion.html");
	       		
	    									 });

	    		$('#graficos').click(function(){
	       		$("#menu").load("asides/graficas.html");
	       		
	    									 });

										});