/*Enunciado:
Llegan 10 vuelos con vacunas de distintos lugares del mundo
Se debe registrar de cada vuelo:
-Origen (“Asia”, “Europa”, “USA”)
-Cantidad de vacunas (no puede ser 0)
-Costo del vuelo (entre 1 millón y 5 millones de pesos)
Informar:
a- El origen que envió mayor cantidad de vacunas
b- El promedio de vacunas llegadas de Asia
c- El total sin descuentos a pagar por los gastos de los viajes
d- Si en total se recibieron mas de 4 millones de vacunas se hace un descuento de 30%, Si se recibieron entre 2 y 4 millones el descuento es del 20% con menor cantidad no hay descuento.
Informar si hubo descuento de cuanto fue y el importe final con descuento*/

function mostrar() {
	let i = 0;
	let origen;
	let cantidad;
	let costo;
	let mayorOrigen;
	let acumVacUsa=0;
	let acumVacEuropa=0;
	let acumVacAsia=0;
	let acumVuelosAsia=0;
	let promVacAsia;
	let costoTotalBruto=0;
	let acumTotalVacunas=0;
	let costoTotalDesc;

	for (i = 0; i < 2; i++) {
		origen = prompt("Ingrese el lugar de origen de los vuelos (Asia/Europa/USA)").toLowerCase();
		while (origen != "asia" && origen != "europa" && origen != "usa") {
			origen = prompt("Lugar de origen invalido, ingrese por favor un lugar de origen valido (Asia/Europa/USA)").toLowerCase();
		}
		cantidad = parseInt(prompt("Ingrese la cantidad de vacunas recibidas"));
		while(!(cantidad>0)){
			cantidad=parseInt(prompt("Cantidad de vacunas invalidas, ingrese un valor valido (mayor a 0)"));
		}
		costo=parseInt(prompt("Ingrese el costo del vuelo (Entre 1 millon y 5 millones de pesos"));
		while(!(costo>=1000000 &&costo<=5000000)){
			costo=parseInt(prompt("Costo invalido, ingrese un costo entre los valores validos (1 millon a 5 millones de pesos)"));
		}
		switch(origen){
			case "usa":
				acumVacUsa=acumVacUsa+cantidad;
				break;
			case "asia":
				acumVacAsia=acumVacAsia+cantidad;
				acumVuelosAsia++;
				break;
			default:
				acumVacEuropa=acumVacEuropa+cantidad;
				break;
		}
costoTotalBruto=costoTotalBruto+costo;
acumTotalVacunas=acumTotalVacunas+cantidad;

}
if(acumVacEuropa>acumVacAsia&&acumVacEuropa>acumVacUsa){
	mayorOrigen="Europa"
}else if(acumVacAsia>acumVacEuropa&&acumVacAsia>acumVacUsa){
mayorOrigen="Asia"

}else{
	mayorOrigen="USA"
}
promVacAsia=acumVacAsia/acumVuelosAsia



document.write("a) El lugar que envio mayor cantidad de vacunas es " + mayorOrigen +"<br>")
if(acumVuelosAsia>0){
document.write("b) El promedio de vacunas llegadas de Asia es " +promVacAsia + "<br>")
} else{
	document.write("b) No se recibieron vacunas de Asia")
}
document.write("c) El coste total a pagar es igual a " + costoTotalBruto + "<br>")

if (acumTotalVacunas > 4000000) {
    costoTotalDesc = costoTotalBruto * 0.70;
   document.write("d) El precio a pagar con descuento por haber comprado mas de 4 millones de unidades es " + costoTotalDesc + "$ Para un total de " +acumTotalVacunas +" Millones de vacunas");
  } else if (!(acumTotalVacunas <= 2000000 && acumTotalVacunas >= 4000000)) {
    costoTotalDesc = costoTotalBruto * 0.80;
   document.write("d) El precio a pagar con descuento por haber comprado entre 2 y 4 millones de unidades es " + costoTotalDesc + "$ Para un total de " +acumTotalVacunas +" Millones de vacunas");
  }else {
	  document.write("d) La compra fue menor a las 2 millones de unidades con un total de" + acumTotalVacunas + " millones por lo que no hubo descuento")
  }




}
