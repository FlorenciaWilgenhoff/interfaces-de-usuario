<?php
require_once 'view/LoginView.php';
require_once 'model/UsuarioModel.php';
class SecuredController extends Controller
{
  function __construct()
  {
    session_start();
    if(isset($_SESSION['USUARIO'])){
      if (isset($_SESSION['LAST_ACTIVITY']) && (time() - $_SESSION['LAST_ACTIVITY'] > 100)) {
          session_start();
          session_destroy();
          header('Location: '. LOGIN); // destruye la sesión, y vuelve al login
        }
          $_SESSION['LAST_ACTIVITY'] = time(); // actualiza el último instante de actividad
    }
    else{
      header('Location: '. LOGIN);
      die();
    }
  }
}
?>