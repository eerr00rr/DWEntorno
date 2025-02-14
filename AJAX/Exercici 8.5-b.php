<?php

	//header("Content-Type : application/json; charset : UTF-8");
	
	$login = $_POST['login'];
	$aleatorio = rand(1,99);
	
	if ( (int) $aleatorio > 50) 
	{				
		$json = '{"respuesta" : { "disponible" : "si"}}';
	}
	else 
	{ 
		$json = '{"respuesta" : { "disponible" : "no", "alternativas" : {"login" : ["login de prueba1","login de prueba2","login de prueba3"]}}}';	
	}	
	echo $json;		
?>
