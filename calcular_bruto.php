<?php
date_default_timezone_set('America/Santiago');


if ( isset($_GET['afp']) and isset($_GET['sueldo']) ){
	$afp = $_GET['afp'];
	$comision = 0;
	$sueldo = $_GET['sueldo'];
	switch ($afp) {
    case 'AFP Capital':
        $comision = 1.44;
        break;
    case 'AFP Cuprum':
        $comision = 1.44;
        break;
	case 'AFP Habitat':
        $comision = 1.27;
        break;
	case 'AFP Modelo':
        $comision = 0.58;
        break;
	case 'AFP Planvital':
        $comision = 1.16;
        break;
	case 'AFP Provida':
        $comision = 1.45;
        break;
	case 'AFP Uno':
        $comision = 0.69;
        break;
	}
	echo "afp: " . $afp . "  ";
	echo "comision: " . $comision . "  ";
	echo "sueldo: " . $sueldo . "  ";
}
?>