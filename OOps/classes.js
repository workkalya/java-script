class car{
    start(){
        console.log("Car is starting");
    }
    stop(){
        console.log("Car is stopping");
    }
    brand(brand){
        this.brand = brand
    }
}

//construcor

class adrees{
    constructor(city, state){
        this.city = city;
        this.state = state;
    };

    getCity(){
        return `City is ${this.city} located in ${this.state}`;
    }
}

let add1 = new adrees("sahiwal", "punjab");
let add2 = new adrees("lahore", "punjab");
let add3 = new adrees("karachi", "sindh");
let add4 = new adrees("islamabad", "punjab");

//inheritance
class Student {
    constructor(name, age, clas) {
        this.name = name;
        this.age = age;
        this.studentClass = studentClass;
    }
}

class CR extends Student {
    constructor(name,age,clas,rollno){
        super(name,age,clas);
        this.rollno = rollno;
    }
}

try{
    let boy = person("Ali", "sahiwal", "punjab");
}
catch(e){
    console.log("Error: given by code ", e);
}
