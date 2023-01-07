// Functions

// ES5  - Functionally scoped  (var)
// ES6  - Block Scoped (Let const)

// var abc = 10;

// function testing(){
//     var abc = 20;
//     let def = 100;
//     let xyz = "block scoped";
//     console.log(abc)
//     Block Scope
//     if(1){  //(0)  not defined
//         let xyz = "block scoped";
//         var xyz = "block scoped";
//         console.log('Inside It',xyz);
//         console.log(abc);
//     }
//     console.log('Outside It',xyz);
// }


// testing();   // calling a function
// console.log(abc);


// for(condtion){
     //  block let
     //  var 
// }


// var name = 'Cipher';
// let year = 2020  // Global Scope

// function test(){
//     console.log(name);
//     console.log(year);
// }

// test();


// Function Declaration and Function Expression

// Hoisting
// myFunc()
// myFunc2()

// function myFunc(){
//     console.log('Inside myFunc Declaration')
// }

// Function Expression
// let myFunc2 = function(){
//     console.log('Inside myFunc2:  function expression')
// }

// myFunc()
// myFunc2();


    // console.log(name2)
    // console.log(name())
    // name();

    // var name2 = 'Deku';
    // let nam = 'Izuku';
    // var name = function(){
    // function name(){
        // console.log('hello')
    // }


// Arrow Function - ES6
// this - context

    // let newFunc = () => {  
    //     console.log('Arrow Function Created');
    //     console.log(this);
    // }

    // newFunc();

    // // let funcExp = function(){
    // function funcExp(){
    //     console.log(' Function expression Creation ');
    //     console.log(this);
    // }


    // funcExp();


    // let newFunc = () => console.log('Arrow');
    // let newFunc = () => {
    //     console.log('Arrow');
    //     console.log('2nd statement');
    
    // };
    // newFunc();


    // let newFunc = (name, context) => {  // Parameter
    //     console.log('Arrow', context)
    //     console.log(name);
    // };
    // newFunc('Cipher', this);         // Argument



    let newFunc = name => console.log(name);  // Arrow

    newFunc('Cipher', this);  