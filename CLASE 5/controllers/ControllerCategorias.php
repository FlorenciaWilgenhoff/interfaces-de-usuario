<?php

require_once("model/ModelCategoria.php");
require_once("view/ViewCategoria.php");
require_once("controller/Controller.php");

class ControllerCategoria extends Controller{

  private $model;
  private $view;

  function __construct(){
    parent::__construct();
    $this->model = new ModelCategoria();
    $this->view = new ViewCategoria();
  }

   function iniciar(){
    $this->assignCategorias();
    $this->view->mostrar();
  }

  function assignCategorias(){
    $categorias = $this->model->getCategorias();
    $this->view->assignCategorias($categorias);
  }
  function listarCat(){
    $this->assignCategorias();
    $this->view->listar_categorias();
  }
  
  
  
 
  
  
}

?>
