"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// ES import
const Person_1 = __importDefault(require("./models/Person"));
const leo = new Person_1.default('Leo', 'Lorem', 20, 0);
console.log(leo.age);
const alexandra = new Person_1.default('Alex', 'Ipsum', 28, 100000);
// console.log(alexandra.salary);
console.log(alexandra.getSalary());
// alexandra.salary = alexandra.salary * 10;
alexandra.setSalary(10000);
// console.log(alexandra.salary);
console.log(alexandra.getSalary());
// console.log(sum(1, 4));
// console.log(mult(1, 4));
