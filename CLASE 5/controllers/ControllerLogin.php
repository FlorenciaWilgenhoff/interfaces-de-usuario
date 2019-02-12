
<?php
require_once('views/ViewLogin.php');
require_once('models/ModelLogin.php');
require_once('controllers/ControllerJuegos.php');
class ControllerLogin extends Controller
{
  private $view;
  private $model;
  function __construct()
  {
    parent::__construct();
    $this->model = $this->modelLogin;
    $this->view = new ViewLogin();
  }
  public function cambiarPermisos(){
    $id = $_GET["id_usuario"];
    $usuario = $this->model->getUsuarioByID($id);
    $this->model->cambiarPermiso($usuario);
    $this->mostrarAdminUsuario();
  }
  public function login(){
    if(!isset($_REQUEST['txtUser']))
      $this->view->mostrar([]);
    else {
      $usuario = $_REQUEST['txtUser'];
      $pass = $_REQUEST['txtPass'];
      $user = $this->model->getUsuario($usuario);
      if(password_verify($pass, $user['password']))
      {
        session_start();
        $_SESSION['id'] = $user['id_usuario'];
        $_SESSION['USER'] = $user["email"];
        header("Location: index.php");
        die();
      }
      else
      {
            $this->view->mostrar(["BAD"]);
      }
    }
  }
  public function checkLogin(){
    session_start();
    if(!isset($_SESSION['USER'])){
      header("Location: index.php");
      die();
    };
  }
  public function logout(){
    session_start();
    session_destroy();
    header("Location: login");
    die();
  }
  
  public function registrarse (){
    $usuario = []; 
    if (isset($_POST["email"]) && isset( $_POST["password"])&& isset( $_POST["nombre"])){
      $usuario["email"] = $_POST["email"];
      $encriptar = password_hash($_POST["password"], PASSWORD_DEFAULT);
      $usuario["password"] = $encriptar;
      $usuario["nombre"] = $_POST["nombre"];
      $this->model->agregarUsuario($usuario);
      header("Location: login");
      die();
     }
     $this->view->mostrarRegistro(); 
     
  }
  function mostrarAdminUsuario(){
    $this->comprobarAdmin();
    $usuarios = $this->model->getUsuarios();
    $this->view->mostrarAdminUser($usuarios);
  }
 
}
?>