<?php
  include_once 'libs/Smarty.class.php';
  class View
  {
    protected $smarty;
    function __construct()
    {
      $this->smarty = new smarty();
    }

    function MostrarPagina(){
    session_start();
    if (isset($_SESSION["USER"]))
    $this->smarty->assign("usuario", $_SESSION["USER"]); 

		$this->smarty->display("header.tpl");
	}
	function MostrarHome(){
		$this->smarty->display("index.tpl");
	}
  
  }
?>