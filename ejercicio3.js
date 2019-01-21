function leap (year) {
    return(year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0)
}
console.log(leap(2018));
console.log(leap(1700));
console.log(leap(2000));

/*Escriba un programa de 
JavaScript para determinar si un año dado es un año bisiesto en el calendario gregoriano.*/

