$( document ).ready(function() {

  // Cargo la home al entrar al index

  $.get("index.php?action=go_home", function(data) { $(".contenido").html(data); });

  partialRender("go_home", "#inicio");
  partialRender("listar_juegos", "#juegos");
  //partialRender("admin_juego", "#aJuego");
  //partialRender("admin_usuario", "#aUsuario");
  //partialRender("admin_categoria", "#aCategoria");

  // Creo ajax para moverme a traves de los menus
  function partialRender(action, selector) {
    $(document).on("click", selector, function(){
      $.ajax({
        url:"index.php?action=" + action,
        method:"GET",
        success: function(textoCargado, status){
          $(".contenido").html(textoCargado);
        }
      });
    });
  }

  // Ajax para ir a un juego en especifico, muestra juego y edita juego
  mostrarDatos(".juego", "mostrar_juego&id_juego=");
  //mostrarDatos(".editarJuego", "editar_juego&id_juego=");


  function mostrarDatos(clase, action){
    $(document).on("click", clase, function(ev){
      ev.preventDefault();
      var idJuego = $(this).attr("data-id");
      $.get("index.php?action=" + action + idJuego, function(data) {
        $(".contenido").html(data);
        getComentarios(idJuego);
      });
    });
  }
   $(document).on("change", ".filtro", function(ev){
    ev.preventDefault();
    var id = $(this).val();
    $.post( "index.php?action=filtro_juegos/" + id, function(data){
      $(".mostrarFiltro").html(data);
       console.log(data);
    });
  });

  
