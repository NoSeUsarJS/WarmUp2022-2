<?php

include_once "views/header.php";

?>

<body class=anim>
 
  <div>
     <h1>Cálculo de sueldo</h1>
  </div>
     
  <form action="calcular_liquido.php" method="get">
  <label for="afp">Ingrese a que AFP pertenece: </label>
  <input list="afps" name="afp" id="afp">
  <datalist id="afps">
    <option value="AFP Capital"> 
    <option value="AFP Cuprum">
    <option value="AFP Habitat">
    <option value="AFP Modelo">
    <option value="AFP Planvital">
    <option value="AFP Provida">
    <option value="AFP Uno">  
  </datalist>

<br>
   <div>
       <div>
             <label for="sueldo">Ingrese sueldo liquido:</label>
             <input type="number" id="sueldo" name="sueldo">
       </div>
   </div>
   <div>
   <button type="submit"class="buttonCalc button3">Calcular</button>
   
   </form>
   <a href=options.php><button class="buttonCalc button3">Salir</button></a>
   </div>
   
</body> 
</html>
