class Employee {
  name: string;
  position: string;
  salary: number;
  constructor(name: string, position: string, salary: number) {
    this.name = name;
    this.position = position;
    this.salary = salary;
  }
}
class Manager extends Employee {
  constructor(name: string, salary: number) {
    super(name, "Manager", salary);
  }

  getDetails(): string {
    return `Tên: ${this.name}, Chức vụ: ${this.position}, Lương: ${this.salary}`;
  }
}
class Developer extends Employee {
  constructor(name: string, salary: number) {
    super(name, "Developer", salary);
  }

  getDetails(): string {
    return `Tên: ${this.name}, Chức vụ: ${this.position}, Lương: ${this.salary}`;
  }
}
const employees: (Manager | Developer)[] = [
  new Manager("Võ Thái Sơn", 20000000),
  new Developer("Võ Văn Thái", 15000000),
  new Developer("Lê Văn Nam", 17000000),
];
employees.forEach((employee) => {
  console.log(employee.getDetails());
});