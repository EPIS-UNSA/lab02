// introduciendonos en el ejercicio 1
/*var dia = prompt("ingrese el dia del 1 al 6");
var arrayDias = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
for(var i = 0; i<7; i++){
    if(dia == i){
        alert("el dia es : " + arrayDias[i]);
        }
}
*/

// EJERCICIO NRO 1
/*var dia = new Date();
document.write(dia);
var valor = dia.getDay();
document.write(valor);
var arrayDias = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
for(var i = 0; i<7; i++){
    if(valor == i){
        alert("Hoy dia es : " + arrayDias[i]);
        }
    }
*/

// EJERCICIO NRO 2.
/*var texto = prompt("ingrese una palabra");
var textoInvertido = "";
alert(texto.length);
for(var i = texto.length-1; i >=0; i--){
    textoInvertido = textoInvertido + texto[i];
}
document.write(textoInvertido);
*/

// EJERCICIO NRO 3.
/*var fechaAniversario = new Date(2022,08,15);
alert(fechaAniversario);
var fechaActual = new Date();
document.write(fechaActual + "<br>");
var diferencia = fechaAniversario - fechaActual;// el nro representa la diferencia en milisegundos
var faltan = diferencia/(1000*60*60*24);
document.write("faltan " + faltan + " dias para el aniversario de Arequipa");
*/

// EJERCICIO NRO 4
/*
var link = prompt("ingrese la url del meet");
for(var i = 0; i<link.length-1; i++){
    if(link[i] == '-'){
        link = link.replace("-", "");
    }    
}
document.write("El nuevo link es : " + link);
*/
// JERCICIO NRO 5

function crearTabla(){
    var filas=parseInt(prompt("Insertar cuantas filas tendrá la tabla"));
    var columnas= parseInt(prompt("Insertar cuantas columnas tendrá la tabla"));
    
    for(var i = 0; i < filas; i++){
        var filaActual = document.getElementById("tablaDatos").insertRow(i);

        for(var j=0; j<columnas; j++){
            var celda = filaActual.insertCell(j);
        }
        
    }
}