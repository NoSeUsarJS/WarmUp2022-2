<?php
include_once "views/navbar-header.php";
date_default_timezone_set('America/Santiago');

?>
    <body>
    <!--<button onclick= "actualizar()" class="btn btn-outline-primary" type="submit">Actualizar</button> -->
    <div class ="row">
        <div class = "container col-sm-7">
            <div class = "card my-4">
                <div class = "card-body mx-2">
				<div class="mb-3">
					<label for="myfile" class="form-label">Default file input example</label>
					<input class="form-control" type="file" id="myfile" name="myfile" accept=".xls, .xlsx">
				</div>
					
					<div id="print_output"></div>
					<py-script output="print_output" src="test.py"></py-script>
					<p>File Content:</p>
					<div style="border:2px inset #AAA;cursor:text;height:120px;overflow:auto;width:600px; resize:both">
					<div id="content">
					</div>
					</div>
			<div class="container">
			  <div class="row">
				<div class="col-md-auto">
					<div class="form-group mb-2">
					<label for="nombre">Nombre Cotizacion</label>
					<input type="text" class="form-control" id="nombre" name="nombre" placeholder="Nombre Cotizacion" required>
				  </div>
				  <button type="submit" class="btn btn-primary mb-2">Guardar</button>					
				
				</div>
				<div id ="calculo" class="col d-flex justify-content-center" style="visibility: hidden">
				  <div id = "card-resultado" class="card text-white bg-primary mb-3 mt-3" style="max-width: 30rem;">
					  <div class="card-header">Resultado</div>
					  <div class="card-body">
						<h5 id ="titulo" class="card-title"></h5>
						<p id = "texto" class="card-text"></p>
					  </div>
					</div>
				</div>
				
			  </div>
			</div>
			</form>
						<div class="d-grid mx-auto mt-1">
                            <button onclick= "calcular()" class="btn btn-outline-primary" type="submit">Calcular</button>
                        </div>
                    
                </div>
            </div>
        </div>
    </div>
    </body>

    

    
</html>
