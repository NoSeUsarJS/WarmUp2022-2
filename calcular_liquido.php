<?php
date_default_timezone_set('America/Santiago');


if ( isset($_GET['afp']) and isset($_GET['sueldo']) ){
	echo "afp: " . $_GET['afp'] . " sueldo:" . $_GET['sueldo'];
} else {
  echo "variables not set";
}
?>