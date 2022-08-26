export default class Person {
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

  public classes: string[] = [];

  constructor(
    public name: string,
    public last_name: string,
    public age: number,
    private salary: number
  ) {}

  setSalary(new_salary: number): void {
    if (new_salary <= 100000) {
      this.salary = new_salary;
    }
  }

  getSalary(): string {
    return `This is the salary: ${this.salary}`;
  }
}

export const sum = (a: number, b: number) => {
  return a + b;
};

export const mult = (a: number, b: number) => {
  return a * b;
};
