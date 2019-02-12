<?php
require_once ("models/ModelCategorias.php");
class ModelCategorias extends Model
{

 function __construct() {

    parent::__construct();


  }
function getCategorias(){
    $sentencia = $this->db->prepare( "SELECT * from categoria");
    $sentencia->execute();
    $categorias = $sentencia->fetchAll(PDO::FETCH_ASSOC);
    return $categorias;
  }
 
  function getCategoria($id_categoria){
    $sentencia = $this->db->prepare( "SELECT * from categoria where id_categoria=?");
    $sentencia->execute(array($id_categoria));
    return $sentencia->fetch(PDO::FETCH_ASSOC);
  }

}

?>