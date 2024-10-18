// complete this js code

// main.js or your script file
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
window.Person = Person;

class Employee extends Person {
    constructor(name, age, jobTitle) {
        super(name, age);
        this.jobTitle = jobTitle;
    }

    jobGreet() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
    }
}
window.Employee = Employee;

// Create an instance of the Person class
let person1 = new Person("Alice", 25);
// Now you can call methods on this instance
person1.greet(); // This will print: "Hello, my name is Alice and I am 25 years old."

// Create an instance of the Employee class
let employee1 = new Employee("Bob", 30, "Manager");
// Now you can call methods on this instance
employee1.jobGreet(); // This will print: "Hello, my name is Bob, I am 30 years old, and my job title is Manager."

cy.window().then(win => {
    const Person = win.Person;
    const Employee = win.Employee;
    const person = new Person("Alice", 25);
    const employee = new Employee("Bob", 30, "Manager");
    // ...
});

// function Person(name, age) {}

// function Employee(name, age, jobTitle) {}

// // Do not change code below this line
// window.Person = Person;
// window.Employee = Employee;
