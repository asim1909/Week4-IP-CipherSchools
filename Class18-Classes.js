// ES6 Classes
// ES5 Prototypes

// console.log({name: 'Audi'});


class Person{
    constructor(name= 'Jon Doe',email= 'john@doe.com', count=0){
        this.name = name;
        this.email = email;
        this.count = count;
    }

    login(){
        console.log(this.name, 'has logged in!')
    }

    logout(){
        console.log(this.name, 'has logged out!')
    }
}

// New keyword: Creating an instance of Person Class

let person1 = new Person('John', 'john@wich.com');
let person2 = new Person('Jay', 'jay@z.com');
let person3 = new Person('Jake', 'jake@tyler.com',20);


// count number datatype , underfined


person1.login();
person2.login();

console.log(typeof person3);


// console.log(Person.login()); Wrong



//  Number

let rollNo = new Number(10);
console.log(typeof rollNo, typeof 10);

let nm = new String('Nithin');
// console.log(nm);
console.log(nm.toUpperCase());

let obj = new Object({name: 'Izuku'});
console.log(obj);
