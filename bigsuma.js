function sumabigInt(num1,num2) {

    var num1 = String(num1),
        num2 = String(num2),
        acumulado = '',
        arr1 = num1.split(''),
        arr2 = num2.split(''),
        decena = 0,
        maxlength = Math.max(arr1.length, arr2.length);

   let sumadigitos=function(a, b, c) {
        let suma = Number(a) + Number(b) + Number(c),
            nuevonumero = suma % 10,
            segundacifra = Math.floor(suma / 10);
        acumulado = String(nuevonumero) + acumulado;
        return segundacifra;
    };


    for (let i = 0; i < maxlength; i++) {
        let val1 = arr1.length ? arr1.pop() : 0,
            val2 = arr2.length ? arr2.pop() : 0;
        decena = sumadigitos(val1, val2, decena);
    }
    if (decena > 0) {
        acumulado = String(decena) + acumulado;
    }
    return acumulado;
}
console.log(sumabigInt(  '712569312664357328695151392', '8100824045303269669937'));