'use strict'
/*Write a JavaScript program to rotate the string 'w3resource' 
  in right direction by periodically removing one letter from the end of the string 
  and attaching it to the front*/
const repeat = (string,count)=>{
    if((string == null) || (count < 0) || (count === Infinity) || (count == null)){
        return('Error in string or count');
    }
    count = count | 0;
return new Array(count + 1).join(string);
};

console.log(repeat('a', 4));
console.log(repeat('a'));
console.log(repeat('a', -2));
console.log(repeat('a', Infinity));

/******************************************************************************************** */
function repeat_string(string, count) 
  {
    if ((string == null) || (count < 0) || (count === Infinity) || (count == null))
      {
        return('Error in string or count.');
      }
        count = count | 0; // Floor count.
    return new Array(count + 1).join(string);
  }

console.log(repeat_string('a', 4));
console.log(repeat_string('a'));
console.log(repeat_string('a', -2));
console.log(repeat_string('a', Infinity));