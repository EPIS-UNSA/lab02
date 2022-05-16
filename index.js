/*var dia = prompt("ingrese el dia del 1 al 6");
var arrayDias = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
for(var i = 0; i<7; i++){
    if(dia == i){
        alert("el dia es : " + arrayDias[i]);
        }
}
*/
var dia = new Date();
document.write(dia);
var valor = dia.getDay();
document.write(valor);
var doa = 'el gato de mama';
var cantidad = doa.slice(3, -2);
document.write(cantidad);