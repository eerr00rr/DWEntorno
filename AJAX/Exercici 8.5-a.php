<?php
	header('Content-Type: text/xml');
	$login = $_POST['login'];
	$aleatorio = rand(1,99);
	
	if ( (int) $aleatorio > 50) 
	{				
		$xml = "<?xml version=\"1.0\"?>\n";
		$xml .= "<respuesta>\n<disponible>si</disponible>\n</respuesta>";
	}
	else 
	{ 
		$xml = "<?xml version=\"1.0\"?>\n";
		$xml .= "<respuesta><disponible>no</disponible><alternativas><login>login de prueba1</login><login>login de prueba2</login><login>login de prueba3</login></alternativas></respuesta>";
	}	
	echo $xml;		
?>