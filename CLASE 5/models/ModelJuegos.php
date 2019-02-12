<?php
require_once ("models/Model.php");
require_once ("models/ModelJuegos.php");
class ModelJuegos extends Model
{

 function __construct() {

    parent::__construct();


  }
function getJuegos(){
    $sentencia = $this->db->prepare( "SELECT * from juego");
    $sentencia->execute();
    $juegos = $sentencia->fetchAll(PDO::FETCH_ASSOC);
    return $juegos;
  }
 
  function getJuego($id_juego){
    $sentencia = $this->db->prepare( "SELECT* from juego where id_juego=?");
    $sentencia->execute(array($id_juego));
    return $sentencia->fetch(PDO::FETCH_ASSOC);
  }
   function addImagenes($imagenes, $id_juego){
    foreach ($imagenes as $key => $imagen) {
      $path="images/".uniqid()."_".$imagen["name"];
      move_uploaded_file($imagen["tmp_name"], $path);
      $insertImagen = $this->db->prepare("INSERT INTO imagen(path,fk_id_juego) VALUES(?,?)");
      $insertImagen->execute(array($path,$id_juego));
    }
  }

  function getImagenes($id_juego){
    $sentencia = $this->db->prepare( "select * from imagen where fk_id_juego=?");
    $sentencia->execute(array($id_juego));
    return $sentencia->fetchAll(PDO::FETCH_ASSOC);
  }

  function eliminarImagen($id_imagen){
    $sentencia = $this->db->prepare( "delete from imagen where id_imagen=?");
    $sentencia->execute(array($id_imagen));
  }
 /* function editarJuego($id_juego){
     $sentencia = $this->db->prepare( "UPDATE from juego where id_juego=?");
     $sentencia->execute(array($id_juego));
    return $sentencia->fetch(PDO::FETCH_ASSOC);
  }*/
  function filtrarJuegos($id_categoria){
    $juegos = $this->db->prepare( "SELECT * from juego where fk_id_categoria=?");
     $juegos->execute(array($id_categoria));
    return $juegos->fetchAll(PDO::FETCH_ASSOC);
  }
}

?>