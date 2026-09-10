// Bài 1: Đếm số user đang hoạt động;
// const users = [
//     { name: "A", active: true },
//     { name: "B", active: false },
//     { name: "C", active: true }
// ];

const users = [
  { name: "A", active: true },
  { name: "B", active: false },
  { name: "C", active: true },
];
let countActiveUsers = users.filter((user) => user.active === true).length;
console.log(countActiveUsers);

/**
 *  Bài 2: Lấy tên từ danh sách user
 * [
    {name: "An", age: 20},
    {name: "Bình", age: 25}
   ]
    → ["An", "Bình"]
 */

const usersList = [
  { name: "An", age: 20 },
  { name: "Bình", age: 25 },
];

let names = usersList.map((user) => user.name);
console.log(names);

/**
 * Bài 3: const number = [2, -5, 6, -7, -4, 7, -1, -1];
        a: tính trung bình cộng số âm
        b: in ra danh sách các số âm lớn hơn giá trị tính ở ý a
        c: tìm số âm lớn nhất trong mảng
 */

const numbers = [2, -5, 6, -7, -4, 7, -1, -1];
//tính trung bình cộng số âm
let negativeNumbers = numbers.filter((num) => num < 0);
let sumNegativeNumbers = negativeNumbers.reduce((sum, num) => sum + num, 0);
let averageNegative = sumNegativeNumbers / negativeNumbers.length;
console.log(`Trung bình cộng số âm: ${averageNegative}`);
//in ra danh sách các số âm lớn hơn giá trị tính ở ý a
let negativeGreaterThanAverage = negativeNumbers.filter(
  (num) => num > averageNegative,
);
console.log(
  `Danh sách các số âm lớn hơn giá trị tính ở ý a: ${negativeGreaterThanAverage}`,
);
//tìm số âm lớn nhất trong mảng
let maxNegativeNumber = negativeNumbers[0];
for (let value of negativeNumbers) {
  if (value > maxNegativeNumber) {
    maxNegativeNumber = value;
  }
}
console.log(`Số âm lớn nhất trong mảng: ${maxNegativeNumber}`);

// Bài 4: Đếm số đơn hàng theo trạng thái
// const orders = [
//     { status: "pending" },
//     { status: "completed" },
//     { status: "pending" },
//     { status: "cancelled" }
// ];
// kết quả: {
//     pending: 2,
//     completed: 1,
//     cancelled: 1
// }

const orders = [
  { status: "pending" },
  { status: "completed" },
  { status: "pending" },
  { status: "cancelled" },
];

let orderCount = {};
for (let order of orders) {
  if (orderCount[order.status]) {
    orderCount[order.status]++;
  } else {
    orderCount[order.status] = 1;
  }
}
console.log(orderCount);

// Bài 5: Tìm đơn hàng có giá trị cao nhất

// const orders = [
//     { id: 1, total: 500 },
//     { id: 2, total: 1200 },
//     { id: 3, total: 800 }
// ];
// Kết quả: { id: 2, total: 1200 }

const ordersList = [
  { id: 1, total: 500 },
  { id: 2, total: 1200 },
  { id: 3, total: 800 },
];
let maxOrder = ordersList[0];
for (let value of ordersList) {
  if (value.total > maxOrder.total) {
    maxOrder = value;
  }
}
console.log(`Đơn hàng có giá trị cao nhất:`, maxOrder);

/**
 * Bài 6: const sales = [
  { user: "An", product: "Áo", price: 100, qty: 2 },
  { user: "Bình", product: "Giày", price: 300, qty: 1 },
  { user: "An", product: "Quần", price: 200, qty: 1 },
  { user: "Chi", product: "Áo", price: 100, qty: 5 }
];
- Lấy danh sách sản phẩm không trùng => ["Áo", "Giày", "Quần"]
- Tính tổng số lượng bán ra của từng sản phẩm
kết quả: 
        {
            Áo: 7,
            Giày: 1,
            Quần: 1
        }
- Lọc các đơn hàng có tổng tiền > 200 -> lấy tên user
 */

const sales = [
  { user: "An", product: "Áo", price: 100, qty: 2 },
  { user: "Bình", product: "Giày", price: 300, qty: 1 },
  { user: "An", product: "Quần", price: 200, qty: 1 },
  { user: "Chi", product: "Áo", price: 100, qty: 5 },
];

// Lấy danh sách sản phẩm không trùng
let Products = sales.map((sale) => sale.product);
let uniqueProducts = [];
for (let value of Products) {
  if (!uniqueProducts.includes(value)) {
    uniqueProducts.push(value);
  }
}
console.log(`Danh sách sản phẩm không trùng:`, uniqueProducts);

// Tính tổng số lượng bán ra của từng sản phẩm
let productSales = {};
for (let value of sales) {
  if (productSales[value.product]) {
    productSales[value.product] += value.qty;
  } else {
    productSales[value.product] = value.qty;
  }
}
console.log(`Tổng số lượng bán ra của từng sản phẩm:`, productSales);

// Lọc các đơn hàng có tổng tiền > 200 -> lấy tên user
let arr = {};
for (let value of sales) {
  let total = value.price * value.qty;
  if (total > 200) {
    arr[value.user] = total;
  }
}
console.log(`Các đơn hàng có tổng tiền > 200:`, arr);

//Tìm học sinh có điểm cao nhất trong mảng.
const students = [
  { name: "Hùng", score: 75 },
  { name: "Mai", score: 85 },
  { name: "Lan", score: 90 },
];
let maxScoreStudent = students[0];
for (let value of students) {
  if (value.score > maxScoreStudent.score) {
    maxScoreStudent = value;
  }
}
console.log(`Học sinh có điểm cao nhất:`, maxScoreStudent);

// Viết một chương trình quản lý danh sách sản phẩm với các chức năng:
// - Thêm sản phẩm mới vào danh sách.
// - Hiển thị danh sách sản phẩm.
// - Tìm kiếm sản phẩm theo tên.
// - Tính tổng giá trị các sản phẩm.

let products = [
  { name: "Laptop", price: 1500 },
  { name: "Phone", price: 800 },
  { name: "Tablet", price: 400 },
];
let choice;
while (choice !== "5") {
  choice = prompt(
    "Chọn chức năng:\n1. Thêm sản phẩm\n2. Hiển thị danh sách sản phẩm\n3. Tìm kiếm sản phẩm\n4. Tính tổng giá trị các sản phẩm\n5. Thoát\n",
  );
  switch (choice) {
    case "1":
      // Thêm sản phẩm mới vào danh sách
      let name = prompt("Nhập tên sản phẩm: ");
      let price = parseFloat(prompt("Nhập giá sản phẩm: "));
      products.push({ name: name, price: price });
      console.log(
        `Sản phẩm ${name} với giá ${price} đã được thêm vào danh sách.`,
      );
      break;
    case "2":
      // Hiển thị danh sách sản phẩm
      console.log("Danh sách sản phẩm:");
      for (let value of products) {
        console.log(`Tên: ${value.name}, Giá: ${value.price}`);
      }
      break;
    case "3":
      // Tìm kiếm sản phẩm theo tên
      let searchName = prompt("Nhập tên sản phẩm cần tìm: ");
      let searchProduct = products.find(
        (product) => product.name === searchName,
      );
      if (searchProduct) {
        console.log(
          `Tìm thấy sản phẩm: Tên: ${searchProduct.name}, Giá: ${searchProduct.price}`,
        );
      } else {
        console.log(`Không tìm thấy sản phẩm với tên: ${searchName}`);
      }
      break;
    case "4":
      // Tính tổng giá trị các sản phẩm
      let totalPrice = products.reduce(
        (total, product) => total + product.price,
        0,
      );
      console.log(`Tổng giá trị các sản phẩm: ${totalPrice}`);
      break;
    case "5":
      console.log("Thoát chương trình.");
      break;
  }
}
