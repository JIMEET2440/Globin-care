"use strict";
let use_this_only;
var dont_use_this;
const keep_constant = "123";

console.log(use_this_only);
console.table([dont_use_this,use_this_only,keep_constant]);

// alert("hi");
    
/*
    READ DOCUMENTATON, THAT'S THE SOLE LIFE SAVIOUR FOR YOU
*/
let score = "33abc";
let inNum = Number(score);
console.log(typeof(inNum));


// methods of String
// methods of Date->(object), time

const arr = [0, 32, true, "Dhingli"]

/*
    .push(element to be added)
    .pop()->remove last element
    both are expensive {.unshift(element)-> add at first element
                       {.shift()->remove first element 
    .join()->makes the array as string 

    .slice()
    .splice()

*/

let User = {

    Name : {
        first_name : "Jmeet",
        last_name : "Shastri"
    }

    

}