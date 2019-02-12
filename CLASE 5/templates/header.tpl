<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
		<link rel="stylesheet" type="text/css" href="css/style.css">
		<link rel="stylesheet" type="text/css" href="css/hover.css">
		<link rel="stylesheet" type="text/css" href="css/animations.css">
		<link rel="stylesheet" type="text/css" href="css/font-awesome.min.css">
		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">
		<title>GameCenter</title>
	</head>
	<body>
		<header>
			<nav class="navbar">
	 	  		<div class="dropdown">
				  	<a class="tohome" href=""><img class="gclogo" src="images/gclogo.png"></a>
					<input type="text" class="form-control search" placeholder="Buscar juego...">
					<a href="listar_juegos"><button type="submit" class="btn btn-primary filters juegos">Filtros</button>
				</div>
				<li><a href="index.php?action=login"><img class="shutdown" src="images/shutdown.png">
	           {if isset($usuario)}{$usuario}{/if}</a></li>
	           <li><a href="index.php?action=logout"><span class="glyphicon glyphicon-remove">
	           </span></a></li>	
			</nav>
		</header>
		