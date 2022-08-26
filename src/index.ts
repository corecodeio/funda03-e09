// ES import
import Person, { sum, mult } from './models/Person';

const leo = new Person('Leo', 'Lorem', 20, 0);

console.log(leo.age);

const alexandra = new Person('Alex', 'Ipsum', 28, 100000);

// console.log(alexandra.salary);
console.log(alexandra.getSalary());

// alexandra.salary = alexandra.salary * 10;
alexandra.setSalary(10000);

// console.log(alexandra.salary);
console.log(alexandra.getSalary());

// console.log(sum(1, 4));

// console.log(mult(1, 4));
