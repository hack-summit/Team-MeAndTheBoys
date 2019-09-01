var socket = io.connect("http://localhost:3000")


    $(function () {
        var socket = io();
        $('form').submit(function(e){
          e.preventDefault(); // prevents page reloading
          socket.emit('chat message', $('#m').val());
          $('#m').val('');
          return false;
        });
        socket.on('chat message', function(msg){
            $('#messages').append($('<li>').text(msg));
        });
      });

      //audio
      function select(){
      $(function () {
        var socket = io();
        $('form').submit(function(e){
          e.preventDefault(); // prevents page reloading
          socket.emit('chat message', $('#mu').val());
          $('#mu').val('');
          return false;
        });
        socket.on('chat message', function(msg){
           $('#messages').append($('<li><audio controls src="audio/mu" type="audio/mpeg"></audio>'));
        });
      });
    }