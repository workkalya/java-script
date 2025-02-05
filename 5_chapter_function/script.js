//function

function print( a ){
  console.log(a)
}

print("hi ")


//arrow functions
 const arrowSum = (a,b) => {
  console.log(a+b);
}

//we can pass function as permemeters
function abc(){
  console.log("hi")
}

// this var

let data={
  name: "abdullah",
  class:12,
  message : function (){
    console.log(`${this.name} , wlecome to web`)
  }
}
