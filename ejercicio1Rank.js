'use strict'
function puntuaje(array,array2){
var array = array;
var array2 = array2;
var alicia = 0;
var bob = 0;
var resultado =[];
    

    for(var i=0;i<array.length;i++){
        if( array[i] >= 1 && array[i]<=100 && array2[i]>=1 && array2[i] <=100){
            if(array[i] > array2[i]){
                alicia++;
            }
            if(array[i] < array2[i]){
                bob++;
            }
        }else{
            console.log("exde de los limites");
            
        }
            
    }
    resultado = [alicia,bob];
    return resultado.join();
   

console.log(resultado);

}
console.log(puntuaje([2,4,3,4],[3,4,1,2]));
