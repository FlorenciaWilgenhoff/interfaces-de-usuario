<?php
define('HOME', 'http://'.$_SERVER['SERVER_NAME'] . ":". $_SERVER['SERVER_PORT']  . dirname($_SERVER['PHP_SELF']).'/');
define('LOGIN', 'http://'.$_SERVER['SERVER_NAME'] . ":". $_SERVER['SERVER_PORT'] . dirname($_SERVER['PHP_SELF']).'/login');
define('LOGOUT', 'http://'.$_SERVER['SERVER_NAME'] . ":". $_SERVER['SERVER_PORT'] . dirname($_SERVER['PHP_SELF']).'/logout');
class Controller
{
    private $view;

    function __construct(){
      
      $this->view = new View();
    }

   function mostrar(){
   	$this->view->MostrarPagina();
   }
   function mostrarHome(){
    $this->view->MostrarHome();
   }

}

 ?>
