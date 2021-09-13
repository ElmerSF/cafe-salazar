/**
Este script son algunas funciones adicionales que agregue a discreción
*/

/*switch (expresión) {
    case valor1:
      //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor1
      [break;]
*/
//insertar fecha

var fecha = new Date();
var dia = fecha.getDate();
var diaresultado = document.getElementById('dia');
diaresultado.innerHTML = dia;

var mes = (fecha.getUTCMonth()+1);
switch (mes){
case (mes =1): mes = 'Enero'; break;
case (mes =2): mes = 'Febrero'; break;
case (mes =3): mes = 'Marzo'; break;
case (mes =4): mes = 'Abril'; break;
case (mes =5): mes = 'Mayo'; break;
case (mes =6): mes = 'Junio'; break;
case (mes =7): mes = 'Julio'; break;
case (mes =8): mes = 'Agosto'; break;
case (mes =9): mes = 'Septiembre'; break;
case (mes =10): mes = 'Octubre'; break;
case (mes =11): mes = 'Noviembre'; break;
case (mes =12): mes = 'Diciembre'; break;
}
var mesresultado = document.getElementById('mes');
mesresultado.innerHTML = mes;

// insertar reloj
var horas = fecha.getHours();
var tardes;
if (horas>12) 
{horas = (horas-12);
tardes = ' pm';
}
else{ tardes = ' am';}

var minutos = fecha.getMinutes();
if (minutos<10){minutos = '0'+minutos;}
var horacompleta = horas+":"+minutos+':'+tardes;

var objetivo = document.getElementById('clock');
objetivo.innerHTML = horacompleta;


//frase celebre
const API_URL ='https://frasedeldia.azurewebsites.net/api/phrase'
const xhr = new XMLHttpRequest();
function onRequestHandler(){
    if (this.readySate ===4 && this.status ===200)
console.log(this.response)
}
xhr.addEventListener("load", onRequestHandler);
xhr.open('GET',  "${API_URL}");
xhr.send();



