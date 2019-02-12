<?php
require_once('libs/Smarty.class.php');
require_once('views/View.php');
  class ViewJuegos extends View {
    function __construct()
    {
      parent::__construct();
      $this->smarty->assign('session', 'out');
    }

    function mostrarIndex($titulo) {
      $this->smarty->assign('Titulo',$titulo);
      return $this->smarty->display('templates/index.tpl');
    }
      function listar_juegos($listaJuegos, $categorias){
    $this->smarty->assign('juegos',$listaJuegos);
    $this->smarty->assign('categorias',$categorias);
    $this->smarty->display("filtroJuegos.tpl");
  }
    function mostrarJuego($juego, $categoria){
    $this->smarty->assign('juego',$juego);
    $this->smarty->assign('categoria',$categoria);
    $this->smarty->display("juego.tpl");
  }
  /*function editarJuego($juego, $categoria,{} $imagenes){
    $this->smarty->assign('juego',$juego);
    $this->smarty->assign('categoria',$categoria);
    $this->smarty->assign('imagenes',$imagenes);
    $this->smarty->display("editar.tpl");
  }*/
  function filtro_juegos($juego, $categoria){
    $this->smarty->assign('juego',$juego);
    $this->smarty->assign('categoria',$categoria);
    $this->smarty->display("resultadoFiltro.tpl");
  }
  }
 ?> 