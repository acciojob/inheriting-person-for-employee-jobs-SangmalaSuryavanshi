// complete this js code

// main.js or your script file
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
    }
}

class Employee extends Person {
    constructor(name, age, jobTitle) {
        super(name, age);
        this.jobTitle = jobTitle;
    }

    jobGreet() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
    }
}

// Expose classes to the window object
window.Person = Person;
window.Employee = Employee;


describe('Person and Employee Classes', () => {
    it('should greet correctly for Person', () => {
        cy.visit(baseUrl + "/main.html"); // Adjust the URL accordingly
        cy.window().then(win => {
            const Person = win.Person;
            const Employee = win.Employee;
            const person = new Person("Alice", 25);
            const employee = new Employee("Bob", 30, "Manager");
            cy.stub(win.console, "log").as("consoleLog");

            person.greet();
            cy.get("@consoleLog").should("be.calledWith", 'Hello, my name is Alice, I am 25 years old.');

            employee.jobGreet();
            cy.get("@consoleLog").should("be.calledWith", 'Hello, my name is Bob, I am 30 years old, and my job title is Manager.');
        });
    });
});


// function Person(name, age) {}

// function Employee(name, age, jobTitle) {}

// // Do not change code below this line
// window.Person = Person;
// window.Employee = Employee;
