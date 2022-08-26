"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mult = exports.sum = void 0;
class Person {
    constructor(name, last_name, age, salary) {
        this.name = name;
        this.last_name = last_name;
        this.age = age;
        this.salary = salary;
        // public name: string;
        // public last_name: string;
        // public age: number;
        // private salary: number;
        // public classes: string[] = [];
        // constructor(name: string, last_name: string, age: number, salary: number) {
        //   this.name = name;
        //   this.last_name = last_name;
        //   this.age = age;
        //   this.salary = salary;
        // }
        this.classes = [];
    }
    setSalary(new_salary) {
        if (new_salary <= 100000) {
            this.salary = new_salary;
        }
    }
    getSalary() {
        return `This is the salary: ${this.salary}`;
    }
}
exports.default = Person;
const sum = (a, b) => {
    return a + b;
};
exports.sum = sum;
const mult = (a, b) => {
    return a * b;
};
exports.mult = mult;
