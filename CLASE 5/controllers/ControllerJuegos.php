<?php
  require_once 'views/ViewJuegos.php';
  require_once 'models/ModelCategorias.php';
  require_once 'models/ModelJuegos.php';
   require_once 'controllers/Controller.php';

  class ControllerJuegos extends Controller{
   private $model;
  private $view;
  private $modelCategoria;

  
    function __construct()
    {
      $this->view = new ViewJuegos();
      $this->modelCategoria = new ModelCategorias();
      $this->model = new ModelJuegos();
    }


    public function index()
    {
      $titulo = "Mateo GROSO";
      $this->view->mostrarIndex($titulo);
    }

    function listar(){
      $categorias = $this->modelCategoria->getCategorias();
      $this->view->listar_juegos($this->model->getJuegos(), $categorias);
    }
     function iniciar(){
    $juegos = $this->model->getJuegos();

    $this->view->mostrar($juegos, $categorias);
  }
     function mostrarJuego(){
    $idJuego = $_GET["id_juego"];
    $juego = $this->model->getJuego($idJuego);
    $idCategoria = $juego["fk_id_categoria"];
    $categoria = $this->modelCategoria->getCategoria($idCategoria);
    $juego["imagenes"] = $this->model->getImagenes($idJuego);
    $this->view->mostrarJuego($juego, $categoria);

  }


  function mostrarJuegos(){
    if(isset($_GET["categoria"])){
      $this->view->filtrar($this->model->getJuegosCat($_GET["categoria"]));
    }
    else {
      $this->editar();
      $this->view->mostrar_admin();
    }
  }

   /*  function editarJuego(){
    $idJuego = $_POST["id_juego"];
    $juego = $this->model->editarJuego($idJuego);
    $idCategoria = $juego["fk_id_categoria"];
    $juego["imagenes"] = $this->model->getImagenes($idJuego);
    $this->view->editarJuego($juego, $categoria);

  }*/
  function filtrar(){
    print_r($_GET);
    die();
     if(isset($_GET["id_categoria"])){
      $categorias = $this->modelCategoria->getCategoria($_GET["id_categoria"]);
      $juegos = $this->model->filtrarJuegos($_GET["id_categoria"]);
      $this->view->filtro_juegos($juegos, $categorias);
    }
  }
 
}

?>