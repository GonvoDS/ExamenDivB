/*Se necesita llevar el registro de un vacunatorio. Para ello se podrá registrar los datos de las personas vacunadas mientras el usuario quiera.
De cada vacunado se solicita:
-nombre (entre 3 y 10 caracteres)
-edad ( mayor o igual a 12)
-vacuna (“rusa”, “china”, “americana”)
Si la edad esta entre 12 y 17 años ambos incluidos solo se permite la vacuna americana
-dosis (“p” en caso de ser la primer dosis o “s” en caso de ser la segunda dosis)
-sexo( “f” o “m” )
Informar:
a- Promedio de edad de los que se vacunaron con la rusa
b- Nombre y vacuna de la mujer con más edad
c- De las personas que recibieron la vacuna americana que porcentaje son mayores de edad
d- Porcentaje de los que están vacunados con 2 dosis sobre el total de vacunados
e- Vacuna menos inoculada*/
function mostrar() {
	let nombre;
	let edad;
	let vacuna;
	let dosis;
	let sexo;
	let respuesta;
	let contadorEdad = 0;
	let contRusa = 0;
	let contChina = 0;
	let contAmericana = 0;
	let promedioEdad;
	let nomMaxEdad;
	let vacunaMaxEdad;
	let maxEdad = 0;
	let flag = 1;
	let acumMayores = 0;
	let porcMayores;
	let acumSegDosis = 0;
	let vacunasTotales = 0;
	let porcSegDosis




	do {
		nombre = prompt("Ingrese el nombre de la persona a registrar");
		while (nombre.length < 3 || nombre.length > 10) {
			nombre = prompt("Error. Ingrese el nombre de la persona vacunada");
		}
		edad = parseInt(prompt("Ingrese la edad del paciente (Mayor o igual a 12)"));
		while (isNaN(edad) || edad < 12) {
			edad = parseInt(prompt("Error. Ingrese la edad con un numero superior o igual a 12"));
		}
		if (edad >= 12 && edad <= 17) {
			vacuna = "americana";
		}
		else {
			vacuna = prompt("Ingrese la vacuna que recibio (rusa/china/americana)").toLowerCase();
			while (vacuna != "rusa" && vacuna != "china" && vacuna != "americana") {
				vacuna = prompt("Error. Ingrese una vacuna valida (rusa/china/americana)").toLowerCase();
			}
		}

		dosis = prompt("Ingrese si es la primera o segunda dosis (P/S)").toLowerCase();
		while (dosis != "p" && dosis != "s") {
			dosis = prompt("Error. Ingrese 'p' para la primer dosis y 's' para la segunda").toLowerCase();
		}
		sexo = prompt("Ingrese el sexo del vacunado (M/F)").toLowerCase();
		while (sexo != "f" && sexo != "m") {
			sexo = prompt("Error. Ingrese un sexo valido (M/F)").toLowerCase();
		}
		switch (vacuna) {
			case "rusa":
				contRusa++;
				contadorEdad = contadorEdad + edad
				break;
			case "china":
				contChina++;
				break;
			default:
				contAmericana++;
				if (edad >= 18) {
					acumMayores++;
				}
				break;
		}
		if (sexo == "f") {
			if (flag == 1 || maxEdad < edad) {
				maxEdad = edad;
				nomMaxEdad = nombre;
				vacunaMaxEdad = vacuna;
				flag = 0;
			}
		}
		vacunasTotales++;
		if (dosis == "s") {
			acumSegDosis++;
		}

		respuesta = prompt("Quiere agregar mas personas al registro? (Si/no)").toLowerCase();
		while (respuesta != "si" && respuesta != "no") {
			respuesta = prompt("Error. Quiere agregar mas personas al registro? (Si/No)").toLowerCase();
		}
	} while (respuesta == "si");

	promedioEdad = contadorEdad / contRusa;
	porcMayores = (acumMayores * 100) / contAmericana;
	porcSegDosis = (acumSegDosis * 100) / vacunasTotales;
	if (promedioEdad > 0) {
		document.write("a) El promedio de edad de la gente que uso la vacuna rusa es " + promedioEdad + "<br>")
	}
	else {
		document.write("a) Nadie uso la vacuna rusa <br>");
	}
	document.write("b) La mujer con mayor edad se llama " + nomMaxEdad + " y uso la vacuna " + vacunaMaxEdad + "<br>");
	document.write("c) El porcentaje de mayores de edad con la vacuna americana es " + porcMayores + " % <br>");
	document.write("d) El porcentaje de vacunados con la segunda dosis es de " + porcSegDosis + " % <br>");
	if (contAmericana < contChina && contAmericana < contRusa) {
		document.write("e) La vacuna menos inoculada es la americana <br>");
	}
	else if (contChina < contAmericana && contChina < contRusa) {
		document.write("e) La vacuna menos inoculada es la china <br>");
	}
	else {
		document.write("e) La vacuna menos inoculada es la rusa <br>");
	}


}
