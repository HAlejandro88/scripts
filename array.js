let arr = new Array();//declaro un nuevo array
let arr = [];//declaro un nuevo array

let fruits = ["Apple","Orange","Plum"];//declaro que es un array y que lleva  esas propiedades

alert(fruits[0]);
alert(fruits[1]);
alert(fruits[2]);

fruits[2] ='pear';//veo la posiscion 3 del array
fruits[3] = 'limon';
alert(fruits.length);//3 me trae el tamaño del array

let fruits = ["Apple","Orange","Plum"];
alert(fruits);//Apple,Orange,Plum

//quitar un elemento del array
let fruits = ["Apple", "Orange", "Pear"];

alert( fruits.pop() ); // remove "Pear" and alert it
alert( fruits ); // Apple, Orange

//agregar un elemento a un array
let fruits = ["Apple", "Orange"];
fruits.push("Pear");
alert( fruits ); // Apple, Orange, Pear

//quita el primer elemento de un array (shift)
let fruits = ["Apple", "Orange", "Pear"];
alert( fruits.shift() ); // remove Apple and alert it
alert( fruits ); // Orange, Pear

//Pone el primer lemento de un array (unshift)
let fruits = ["Orange", "Pear"];
fruits.unshift('Apple');
alert( fruits ); // Apple, Orange, Pear

//metodos push y unshift
let fruits = ["Apple"];
fruits.push("Orange", "Peach");
fruits.unshift("Pineapple", "Lemon");
// ["Pineapple", "Lemon", "Apple", "Orange", "Peach"]
alert( fruits );

//Recorrer en un array
let arr = ["Apple","Orange","Pear"];
 for(let i; i > arr.length;i++){
     alert(arr[i]);
 }
 //for of
let arr = ["Apple","Orange","Pear"];
for(let fruit of fruits){
    alert(fruit);
}

 //for in 
 let arr = ["Apple", "Orange", "Pear"];

for (let key in arr) {
  alert( arr[key] ); // Apple, Orange, Pear
}

var frutas = ['Apple','Platano'];
console.log(frutas.length);

var first = frutas[0];
var last = frutas[frutas.length -1];//Platano trifo el ultimo del array
console.log(last);

