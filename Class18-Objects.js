// objects

let obj = { name: "Cipher" };
// console.log(obj);


let person = {
    name: 'John',
    email: 'john@wich.com',
    count: 0,
    age: 45,
    status: true,
    children: {
        name: 'Jay'
    },
    hobbies: ['Reading', 'Writing', true, 100, null],  //  Array
    // login: function(){
    //     // console.log('User has logged in'); 
    //     console.log(this.name, 'has logged in');


    // login: () => {
    login() {
        console.log(this.name,' has logged in');
        return this;
        // console.log(this.name)

    },
    logout: function() {
        console.log('Logout', this.login());

    },
    updateLogin(){
        this.count++;
        console.log(this.count);
        return this;
    }


}



// person.login();  // Method

// console.log('hello'.toUpperCase());

// console.log(this);
// person.login();
// person.updateLogin();
// person.updateLogin();
// person.updateLogin();
// person.logout();


// Method Chaining
person.login().updateLogin().updateLogin().logout();
// console.log(person.count);

