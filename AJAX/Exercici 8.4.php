<?php
	$login = $_POST['login'];
	$aleatorio = rand(1,99);
	
	if ( (int) $aleatorio > 50) 
	{		
		echo "si;" . $login;
	}
	else 
	{ 
		echo "no;" . $login ;
	}	
?>