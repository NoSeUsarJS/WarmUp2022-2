//Función para obtener el valor actual de la UTM.

const cheerio = require('cheerio');
const request = require('request-promise')
let today = new Date();
const url = "https://www.sii.cl/valores_y_fechas/utm/utm"+today.getFullYear()+".htm";
let month = today.getMonth() + 1;

async function getUTMValue() {
    const $ = await request({
        uri: url,
        transform: body => cheerio.load(body)
    });
    const tabla = $('tbody');
    let UTM = tabla.find('tr');
    for (let i = 1; i <= month; i++){
        if (i == 1) {
            continue;
        }
        UTM = UTM.next();
    }
    UTM = UTM.find('td').html();
    return UTM;   
}