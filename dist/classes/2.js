/*
  Ваше завдання полягатиме у створенні двох класів – Employee та Manager.

  Клас Employee повинен включати:

  властивість name, яка буде доступна всім.
  властивість department, яка буде доступна лише всередині класу Employee.
  salary, яке буде доступне лише всередині класу Employee та його підкласів.


  Клас Manager повинен бути підклас класу Employee

  Необхідно реалізувати в класі Manager конструктор, який викликатиме конструктор суперкласу та збільшуватиме salary на 10000.

*/
class Employee {
    constructor(name, department, salary) {
        this.name = name;
        this.department = department;
        this.salary = salary;
    }
    getEmployeeDetails() {
        return `Name: ${this.name}, Department: ${this.department}, Salary: ${this.salary}`;
    }
}
class Manager extends Employee {
    constructor(name, department, salary) {
        super(name, department, salary);
        this.salary += 10000;
    }
}
const emp = new Employee('John', 'dep1', 1000);
const man = new Manager('Boss', 'dep2', 1000);
console.log(emp.getEmployeeDetails());
console.log(man.getEmployeeDetails());
export {};
//# sourceMappingURL=2.js.map