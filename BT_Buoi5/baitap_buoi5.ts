// Bài Tập 1: Quản lý học sinh
// Tạo một lớp Student với các thuộc tính:
// - name (string)
// - age (number)
// - grade (string)
// Viết một phương thức để hiển thị thông tin của học sinh.
class Student {
  name: string;
  age: number;
  grade: string;

  constructor(name: string, age: number, grade: string) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  displayInfo(): void {
    console.log(`Tên: ${this.name}`);
    console.log(`Tuổi: ${this.age}`);
    console.log(`Lớp: ${this.grade}`);
  }
}
const student1 = new Student("Võ Thái Sơn", 21, "SV năm 4");
student1.displayInfo();

// Bài Tập 2: Hệ thống ngân hàng
// - Tạo lớp BankAccount với các thuộc tính accountNumber, balance.
// - Tạo các phương thức deposit(amount) và withdraw(amount) để cập nhật số dư.
// - Tạo lớp SavingAccount kế thừa BankAccount, thêm thuộc tính interestRate và phương thức
// calculateInterest().
// Bài Tập 2: Hệ thống ngân hàng
class BankAccount {
  accountNumber: string;
  balance: number;
  constructor(accountNumber: string, balance: number) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }
  deposit(amount: number): void {
    this.balance += amount;
    console.log(`Đã gửi: ${amount}`);
    console.log(`Số dư hiện tại: ${this.balance}`);
  }
  withdraw(amount: number): void {
    if (amount > this.balance) {
      console.log("Số dư không đủ!");
    } else {
      this.balance -= amount;
      console.log(`Đã rút: ${amount}`);
      console.log(`Số dư hiện tại: ${this.balance}`);
    }
  }
}
class SavingAccount extends BankAccount {
  interestRate: number;

  constructor(accountNumber: string, balance: number, interestRate: number) {
    super(accountNumber, balance);
    this.interestRate = interestRate;
  }
  calculateInterest(): number {
    return (this.balance * this.interestRate) / 100;
  }
}
const account = new SavingAccount("TK001", 1000000, 5);
console.log("Số tài khoản:", account.accountNumber);
console.log("Số dư ban đầu:", account.balance);
account.deposit(500000);
account.withdraw(200000);
console.log("Tiền lãi:", account.calculateInterest());

// Bài Tập 3: Quản lý thư viện
// - Tạo lớp Book với các thuộc tính title, author, ISBN.
// - Tạo lớp Library có danh sách các cuốn sách (books) và các phương thức:
// - addBook(book: Book): Thêm sách.
// - removeBook(ISBN: string): Xóa sách theo ISBN.
// - findBook(title: string): Tìm sách theo tên.
class Book {
  title: string;
  author: string;
  ISBN: string;
  constructor(title: string, author: string, ISBN: string) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
  }
}
class Library {
  books: Book[] = [];
  addBook(book: Book): void {
    this.books.push(book);
  }
  removeBook(ISBN: string): void {
    this.books = this.books.filter((book) => book.ISBN !== ISBN);
  }
  findBook(title: string): Book | undefined {
    return this.books.find((book) => book.title === title);
  }
  displayBooks(): void {
    console.log("Danh sách sách:");

    this.books.forEach((book) => {
      console.log(
        `Tên: ${book.title} - Tác giả: ${book.author} - ISBN: ${book.ISBN}`,
      );
    });
  }
}
const library = new Library();
const book1 = new Book("Dế Mèn Phiêu Lưu Ký", "Tô Hoài", "001");
const book2 = new Book("Lão Hạc", "Nam Cao", "002");
const book3 = new Book("Tắt Đèn", "Ngô Tất Tố", "003");
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.displayBooks();
console.log("Tìm sách:");
console.log(library.findBook("Lão Hạc"));
library.removeBook("002");
console.log("Sau khi xóa:");
library.displayBooks();
// Bài Tập 4: Hình học
// - Tạo lớp Shape (trừu tượng) với phương thức calculateArea().
// - Tạo lớp Rectangle và Circle kế thừa từ Shape, triển khai calculateArea() tương ứng.
// - Viết chương trình tính diện tích các hình và hiển thị kết quả.
abstract class Shape {
  abstract calculateArea(): number;
}
class Rectangle extends Shape {
  width: number;
  height: number;
  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }

  calculateArea(): number {
    return this.width * this.height;
  }
}
class Circle extends Shape {
  radius: number;
  constructor(radius: number) {
    super();
    this.radius = radius;
  }
  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}
const rectangle = new Rectangle(5, 10);
const circle = new Circle(5);
console.log("Diện tích hình chữ nhật:", rectangle.calculateArea());
console.log("Diện tích hình tròn:", circle.calculateArea());

// Bài Tập 5: Quản lý nhân viên
// - Tạo lớp Employee với các thuộc tính: name, position, salary.
// - Kế thừa lớp Employee thành các lớp Manager và Developer, thêm phương thức getDetails().
// - Tạo danh sách nhân viên và in thông tin chi tiết.
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
