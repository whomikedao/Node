// var greeting = "Hello there";

// module.exports = greeting;

// var myObject = {
//     fname: "David",
//     lname: "Yun",
//     city: "Houston",
//     gender: "male",
//     age: 21
// }

// let pi = 3.14;

// let areaCircle = (r)=>{
//     return pi * r * r;
// }

// module.exports = areaCircle;


class Person {
    constructor(fname, lname){
        this.fname = fname,
        this.lname = lname
    }

    printMethod(){
        console.log(`${this.fname} ${this.lname}`)
    }
}

module.exports = Person;
