<?php
define('ACTION', 0);
define('PARAMS', 1);
require_once 'config/ConfigApp.php';
require_once 'models/Model.php';
require_once 'views/View.php';
require_once 'controllers/Controller.php';
require_once 'controllers/ControllerJuegos.php';
//require_once 'controllers/ControllerLogin.php';
//require_once 'controllers/ControllerSecured.php';

function ParseURL($url)
{
    $urlExploded = explode('/',  $url);
    $arrayReturn[ConfigApp::$ACTION] = $urlExploded[ACTION];
    $arrayReturn[ConfigApp::$PARAMS] = isset($urlExploded[PARAMS]) ? array_slice($urlExploded,1) : null;
    return $arrayReturn;
}
if(isset($_GET['action'])) {
  $urlData = ParseURL($_GET['action']);
  $actions = $urlData[ConfigApp::$ACTION];
  if (array_key_exists($actions,ConfigApp::$ACTIONS)) {
    $params = $urlData[ConfigApp::$PARAMS];
    $action = explode('#', ConfigApp::$ACTIONS[$actions]); //array -> poicion 0: tareasControler // posicion 1:index (método)
    $controller = new $action[0]();
    $metodo = $action[1];
    if (isset($params) && $params != null) {
      echo $controller->$metodo($params);
    }
    else{
      echo $controller->$metodo();
    }
  }
}
 ?>