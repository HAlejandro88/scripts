let array =[{propiedad:"nombre",valor:"alejandro"}];

let traeme = array.map((obj)=>{
    let robj ={};
    robj[obj.propiedad] = obj.valor;
    return robj; 
});

let array =[{propieda:"nombre",valor:"alejandro"}];
let total = array.reduce((index,item)=>{
    return index[item.propieda] = item.valor;
});
console.log(total);

//filter
var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]