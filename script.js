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
// Call the greet method on this instance
person1.greet();

// Create an instance of the Employee class
let employee1 = new Employee("Bob", 30, "Manager");
// Call the jobGreet method on this instance
employee1.jobGreet();

// function Person(name, age) {}

// function Employee(name, age, jobTitle) {}

// // Do not change code below this line
// window.Person = Person;
// window.Employee = Employee;
