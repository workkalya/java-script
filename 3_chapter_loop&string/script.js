//loops
for (let i = 1; i <= 10; i++) {
    console.log(2 * i);
  }

let i = 1;

while(i <= 10){
  i++;
  console.log(i);
}

do{
  console.log(i);
  i++;
}while(i <= 10);


//for-of-loop
//ittirate over string
let str = "abdullah"

for( let l of str){
  console.log(l);
}

let data = {
  name : "ali",
  father : "fahad",
  roll : 362,
  number : BigInt("032031313")
}



//for-in-loop
//ittirate over object
for( let l in data){
  console.log(l);
}


//strings
console.log(str.length);

//Template Literals in JS
// it is like the foramteed string in python
// we will use `` in place of "" and for var we will use ${}

output = `${str} is a good boy
his number is ${data.number}`;
console.log(output);