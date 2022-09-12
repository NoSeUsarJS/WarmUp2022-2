//Función sueldo líquido a sueldo bruto

function SLtoSB (){
    let UTM = getUTMValue();
    let SL = document.getElementById('sueldo_liquido');
    let AFP = document.getElementById('afp');
    let SI = inverse_tax(SL, UTM);
    let SB = SI/(1 - 0.176 - AFP/100);
    document.write(SB);
}