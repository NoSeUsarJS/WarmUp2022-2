//Función sueldo bruto a sueldo líquido

function SBtoSL (){
  let UTM = getUTMValue();
  let SB = document.getElementById('sueldo_bruto');
  let AFP = document.getElementById('afp');
  let SI = SB * (1 - 0.176 - AFP/100);
  let tax_value = tax(SI, UTM);
  let SL = SI - tax_value;
  document.write(SL);
}