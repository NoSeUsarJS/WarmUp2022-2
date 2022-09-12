//Función para obtener el sueldo imponible en base al sueldo líquido.

function inverse_tax (SL, UTM){

    if (SL > (13.5 * UTM - UTM * (13.5 * 0.04 - 0.54)) && SL <= (30 * UTM - UTM * (30 * 0.04 - 0.54))) {
        return ((SL - 0.54 * UTM)/(1 - 0.04));
    }

    if (SL > (30 * UTM - UTM * (30 * 0.08 - 1.74)) && SL <= (50 * UTM - UTM * (50 * 0.08 - 1.74))) {
        return ((SL - 1.74 * UTM)/(1 - 0.08));
    }

    if (SL > (50 * UTM - UTM * (50 * 0.135 - 4.49)) && SL <= (70 * UTM - UTM * (70 * 0.135 - 4.49))) {
        return ((SL - 4.49 * UTM)/(1 - 0.135));
    }

    if (SL > (70 * UTM - UTM * (70 * 0.23 - 11.14)) && SL <= (90 * UTM - UTM * (90 * 0.23 - 11.14))) {
        return ((SL - 11.14 * UTM)/(1 - 0.23));
    }

    if (SL > (90 * UTM - UTM * (90 * 0.304 - 17.8)) && (SL <= 120 * UTM - UTM * (120 * 0.304 - 17.8))) {
        return ((SL - 17.8 * UTM)/(1 - 0.304));
    }

    if (SL > (120 * UTM - UTM * (120 * 0.35 - 23.32)) && SL <= (310 * UTM - UTM * (310 * 0.35 - 23.32))) {
        return ((SL - 23.32 * UTM)/(1 - 0.35));
    }

    if (SL > (310 * UTM - UTM * (310 * 0.4 - 38.82))) {
        return ((SL - 38.82 * UTM)/(1 - 0.4));
    }

    return SL;
}

console.log(inverse_tax(1700000, 60310));