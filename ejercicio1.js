'use strict'
const today = new Date();
const dia = today.getDay();
const mes = today.getMonth()+1;
const año = today.getFullYear();

console.log(dia+"/"+mes+"/"+año);
