/*El centro de hisopado de Ezeiza recibe una tripulación de 8 personas.
Al ser hisopadas se ingresan sus datos en la aplicación:
-nacionalidad ("argentina", "extranjero")
-resultado("positivo", "negativo")
-edad(entre 18 y 65)
-cepa("delta", "alfa", "beta", "ninguna")
Para poder ingresar ninguna el resultado debe ser negativo
Luego del ingreso informar:
a- Porcentaje de positivos
b- Porcentaje de negativos
c- Cuál es la cepa más encontrada
d- Edad del mayor extranjero contagiado
e- Cantidad de personas argentinas contagiadas con la delta*/


function mostrar() {
    let nacionalidad;
    let resultado;
    let edad;
    let cepa;
    let acumPositivos = 0;
    let acumNegativos = 0;
    let porcentajePos;
    let porcentajeNeg;
    let acumDelta = 0;
    let acumAlfa = 0;
    let acumBeta = 0;
    let mayorCepa;
    let flag=1;
    let maxEdadExtranjero;
    let acumArgDelta = 0;
    let i = 0;


    for (i == 0; i < 2; i++) {
        nacionalidad = prompt("Ingrese la nacionalidad del pasajero(argentina/extranjero)").toLowerCase();
        while (nacionalidad != "argentina" && nacionalidad != "extranjero") {
            nacionalidad = prompt("Nacionalidad invalida, ingresela nuevamente (argentina/extranjero)").toLowerCase();
        }
        resultado = prompt("Ingrese el resultado del test del pasajero (Positivo/Negativo)").toLowerCase();
        while (resultado != "positivo" && resultado != "negativo") {
            resultado = prompt("Resultado incorrecto, por favor ingrese un resultado valido (Positivo/Negativo)").toLowerCase();
        }
        edad = parseInt(prompt("Ingrese la edad del pasajero (Entre 18 y 65 años)"))
        while (!(edad >= 18 && edad <= 65)) {
            edad = parseInt(prompt("Edad invalida, ingrese una edad valida (Entre 18 y 65 años)"));
        }
        if (resultado == "negativo") {
            cepa = "ninguna";
            acumNegativos++;
        } else {
            cepa = prompt("Ingrese la cepa con la que se encuentra infectado (Delta/Alfa/Beta)").toLowerCase();
            acumPositivos++;
        }
        switch (cepa) {
            case "delta":
                acumDelta++;
                break;
            case "alfa":
                acumAlfa++;
                break;
            case "beta":
                acumBeta++;
                break;

        }
        if(flag==1 && nacionalidad == "extranjero" || edad>maxEdadExtranjero){
            maxEdadExtranjero=edad;
            flag=0;

        }
        if(nacionalidad=="argentina"&&cepa=="delta"){
        acumArgDelta++;

    }
}
    porcentajePos = (acumPositivos * 100) / i
    porcentajeNeg = (acumNegativos * 100) / i
    if (acumAlfa > acumBeta && acumAlfa > acumDelta) {
        mayorCepa = "Alfa";
    } else if (acumBeta > acumAlfa && acumBeta > acumDelta) {
        mayorCepa = "Beta";
    } else {
        mayorCepa = "Delta";
    }

document.write("A) El porcentaje de tripulantes positivos es de " +porcentajePos + "% <br>");
document.write("b) El porcentaje de tripulantes negativos es de " + porcentajeNeg +"% <br>");
if(cepa != "ninguna"){
    document.write("c) La cepa mas encontrada es " + mayorCepa +"<br>");

}else{
    document.write("c) No hay infectados en la tripulacion <br>");
}  
if(flag==0){
document.write("d) La edad del mayor extranjero contagiado es de  "+ maxEdadExtranjero +"<br>");
}else{
    document.write("d) No hay extranjeros en la tripulacion <br>");
}   
if(acumArgDelta>0){
    document.write("e) La cantidad de argentinos infectados con la variante Delta es de "+acumArgDelta);

}else{
    document.write("e) No hay argentinos infectados con la variante delta")
}

}

