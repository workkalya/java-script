//this 
//when we define an object,to access the properties of the object we use this keyword
//this keyword refers to the object itself
const student = {
    name: 'John',
    age: 20,
    marks: 80,
    greet: function(){
        return `Hello, ${this.name}`;
    }
}

//prototype
//prototype is an object that is associated with every functions and objects
//  by default in JavaScript, where function's prototype property is accessible
//  and modifiable and object's prototype property (aka attribute) is not visible.
// make own prototype

const tax = {
    calTax(){
        return this.income * 0.3;
    },
    
};

const john = {
    name: 'John',
    income: 50000,
}

//setting a prototype
john.__proto__=tax;


//if we define a function insdie the object it will have preority over the prototype
const ali={
    calTax(){
        return this.income * 0.2;
    }
}
ali.__proto__=tax; // in tbis case methode in ali will have priority over the prototype beacuse both have same name




