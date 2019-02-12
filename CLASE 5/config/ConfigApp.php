<?php
class ConfigApp{
  public static $ACTION = "action";
  public static $PARAMS = "params";
  public static $ACTIONS = [
	'' =>  'ControllerJuegos#index',
	'index' => 'ControllerJuegos#index',
	'juegos'=> 'ControllerJuegos#listar',
	'listar_juegos'=> 'ControllerJuegos#listar',
	'mostrar_juego'=> 'ControllerJuegos#mostrarJuego',
	'filtro_juegos'=> 'ControllerJuegos#filtrar',
	];
}
?>