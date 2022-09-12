//Función sueldo bruto a sueldo líquido

console.log();
function SBtoSL (){
  let UTM = getUTMValue();
  let SB = document.getElementById('sueldo_bruto');
  let AFP = document.getElementById('afp');
  let SB_UTM = SB/UTM;
  let SI = SB_UTM * (1 - 0.176 - AFP/100);
  let tax_value = tax(SI, UTM);
  let SL = SI - tax_value;
  document.write(SL);
}