var dia = prompt("ingrese el dia del 1 al 6");
var arrayDias = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
for(var i = 0; i<7; i++){
    //document.write(arrayDias + "<br>");
    if(dia == i){
        alert("el dia es : " + arrayDias[i]);
        }
}