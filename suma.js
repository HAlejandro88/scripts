'use strict'

var array = [1,2,8,4];
var array2 = [2,3,4,8];
var array3 = []
var suma = 0;

for (let i = 0; i < array.length; i++) {
    array3.push(array[i] + array2[i]);
    
}
if(array3[array3.length -1] >= 10){
    segundaSifra = (array3[array3.length -1]%10);
    primeraSifra = Math.floor(array3[array3.length -1]/10);
    array3[array3.length -2]=(array3[array3.length -2] + primeraSifra);
    array3[array3.length -1] = segundaSifra;
}


array3.join();

