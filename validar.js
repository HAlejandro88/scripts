const balancedOrNot = (expressions,maxReplacements)=>{
    let array = [];
    let result =[];
    let rombo = new RegExp("<>", "g");
	
	for (let [index,symbol] of expressions.entries()){
        while(symbol.includes('<>')){
            let emptyRombos = symbol.replace(rombo, ''); 
            symbol = emptyRombos;
        }
        array.push(symbol);
        console.log(array);
        if(symbol.includes('<')){
            result.push(0);
        }
        else if(symbol.includes('>')&& symbol.lenght <= maxReplacements[index] || symbol === ''){
            result.push(1);
        }
        else if(symbol.lenght >= maxReplacements[index]){
            result.push(0);
        } 
      
    }
    return result;
}
let a = balancedOrNot(["<>", "<>><>><<<<<<<","<><>>><<<>","<><>"], [5,3,5,1]);
console.log(a);