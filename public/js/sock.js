  $(document).ready(function(){
  var co=0;
  var socket=io(); 
  socket.on('messages', function(data) { ///resibir mensajes del servidor 
    console.log(data);
  });
  $('#principal').click(function(){
   co=co+1;
   socket.emit('new-message', 'mensaje='+co ); 
  });
  
});