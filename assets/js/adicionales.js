/**
Este script son algunas funciones adicionales que agregue a discreción
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

//fin de fecha

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
//fin de reloj

//frase celebre
var archivoTxt = new XMLHttpRequest();
var fileRuta =  "./assets/js/frases.txt";
archivoTxt.open("GET", fileRuta, false);
archivoTxt.send(null);
var txt = archivoTxt.responseText;
var linea = txt.split(/\r\n|\n/);
function generarRandom(){
    var min= 1,
        max =165;
    return parseInt(Math.random()*(max - min)+min);
}
var frase = document.getElementById('frase');
frase.innerHTML = linea[generarRandom()];
//fin frase celebre

//frase biblica
var documentoTxt = new XMLHttpRequest();
var filebibliaRuta =  "./assets/js/Biblia.txt";
documentoTxt.open("GET", filebibliaRuta, false);
documentoTxt.send(null);
var txt2 = documentoTxt.responseText;
var linea2 = txt2.split(/\r\n|\n/);
function generarRandom2(){
    var min= 1,
        max =135;
    return parseInt(Math.random()*(max - min)+min);
}
var frasebiblica = document.getElementById('biblia');
frasebiblica.innerHTML = linea2[generarRandom2()];
//fin de frase biblica

//inicio de chiste
var documenTxt = new XMLHttpRequest();
var filechiste =  "./assets/js/chistes.txt";
documenTxt.open("GET", filechiste, false);
documenTxt.send(null);
var txt3 = documenTxt.responseText;
var linea3 = txt3.split(/\r\n|\n/);
function generarRandom3(){
    var min= 1,
        max =113;
    return parseInt(Math.random()*(max - min)+min);
}
var chiste = document.getElementById('chiste');
chiste.innerHTML = linea3[generarRandom3()];
//fin de chiste

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
var mesresultado = document.getElementById('messuperior');
mesresultado.innerHTML = mes;