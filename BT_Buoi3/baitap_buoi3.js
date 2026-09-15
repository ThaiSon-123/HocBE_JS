/*
Bài 1: 
cho mảng a và b
  const a = ["A", "B", "C"]; .
  const b = [1, 2, 3];
  từ mảng a và b tạo ra mảng c có dạng như sau:
      let c = [
        { value: "A1", id: 1 },
        { value: "B2", id: 2 },
        { value: "C3", id: 3 },
      ];
*/
const a = ["A", "B", "C"];
const b = [1, 2, 3];
let c = [];
for (let i = 0; i < a.length; i++) {
  c.push({ value: a[i] + b[i], id: b[i] });
}
console.log(c);
/**
 * Bài 2: cho mảng users sau
 * const users = [
  {
    id: 1,
    name: "A",
    gender: "nam",
  },
  {
    id: 2,
    name: "B",
    gender: "nữ",
  },
  {
    id: 3,
    name: "C",
    gender: "nam",
  },
  {
    id: 4,
    name: "D",
    gender: "nam",
  },
];

hãy tạo ra mảng mới newUsers
   const newUsers = [
      {human:"A1",gender:"nam"},
      {human:"C3",gender:"nam"},
      {human:"D4",gender:"nam"}
   ]
 */
const users = [
  {
    id: 1,
    name: "A",
    gender: "nam",
  },
  {
    id: 2,
    name: "B",
    gender: "nữ",
  },
  {
    id: 3,
    name: "C",
    gender: "nam",
  },
  {
    id: 4,
    name: "D",
    gender: "nam",
  },
];
let newUsers = [];
for (let i = 0; i < users.length; i++) {
  if (users[i].gender === "nam") {
    newUsers.push({
      human: users[i].name + users[i].id,
      gender: users[i].gender,
    });
  }
}
console.log(newUsers);

/**
 * 
 * Bài 3: const number = [2, -5, 6, -7, -4, 7, -1, -1];
        a: tính trung bình cộng số âm
        b: in ra danh sách các số âm lớn hơn giá trị tính ở ý a
        c: tìm số âm lớn nhất trong mảng
 */
const numbers = [2, -5, 6, -7, -4, 7, -1, -1];

//a: tính trung bình cộng số âm
let negativeNumbers = numbers.filter((x) => x < 0);
console.log(negativeNumbers);
let sumNegativeNumbers = 0;
for (let i = 0; i < negativeNumbers.length; i++) {
  sumNegativeNumbers += negativeNumbers[i];
}
let averageNegativeNumber = sumNegativeNumbers / negativeNumbers.length;
console.log(`Trung binh cong cua cac so am la: ${averageNegativeNumber}`);
//b: in ra danh sách các số âm lớn hơn giá trị tính ở ý a
let negativeGreaterThanAverage = negativeNumbers.filter(
  (x) => x > averageNegativeNumber,
);
console.log(
  "Danh sach cac so am lon hon trung binh cong: ",
  negativeGreaterThanAverage,
);
//c: tìm số âm lớn nhất trong mảng
function findMax(arr) {
  max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
}
console.log(`So am lon nhat la: ${findMax(negativeNumbers)}`);

/**
 *  Bài 4: Loại bỏ các phần tử trùng lặp trong mảng let numbers = [1, 2, 3, 4, 2, 5, 6, 1, 3]; tìm hiểu includes hoặc indexOF hoặc ko dùng 2 hàm đó
 */
let numbers = [1, 2, 3, 4, 2, 5, 6, 1, 3];
let arr = [];
for (let i = 0; i < numbers.length; i++) {
  if (!arr.includes(numbers[i])) {
    arr.push(numbers[i]);
  }
}
console.log(arr);

/**
 * Bài 5: Viết 1 hàm nhận vào 1 mảng và 1 số nguyên dương n
 * sau đó trả về mảng mới chứa các mảng con có kích thước n.
 * let mangSo = [1,2,3,4,5,6,7,8,9]
 * kích thước n = 3
 * viết 1 hàm tachMangCao(mangSo,3)
 * kết quả: [[1,2,3],[4,5,6],[7,8,9]]
 */
function tachMangCao(arr, n) {
  let result = [];

  for (let i = 0; i < arr.length; i += n) {
    result.push(arr.slice(i, i + n));
  }
  return result;
}
let mangSo = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(tachMangCao(mangSo, 3));

/**
 * Bài 6: đếm số lượng phần tử trong mảng
 * const lang = ["php","js","c++","java","php","js","php"]
 * output
 *  {
 *    php:3,
 *    js:2,
 *    java:1,
 *    c++:1
 *  }
 */
const lang = ["php", "js", "c++", "java", "php", "js", "php"];
let arr = {};
for (let value of lang) {
  if (arr[value]) {
    arr[value]++;
  } else {
    arr[value] = 1;
  }
}
console.log(arr);

/**
 *  Bài 7: Lấy tên từ danh sách user
 * [
    {name: "An", age: 20},
    {name: "Bình", age: 25}
   ]
    → ["An", "Bình"]
 */
const users = [
  { name: "An", age: 20 },
  { name: "Bình", age: 25 },
];
let userName = [];
for (let value of users) {
  userName.push(value.name);
}
console.log(userName);

/**
 *  Bài 8: Tìm số âm đầu tiên
 * [5, 2, -3, -8] -> -3
 */
const number = [5, 2, -3, -8];
const result = number.find((x) => x < 0);
console.log(result);

/**
 * Bài 9: const orders = [
  { id: 1, user: "An", total: 200 },
  { id: 2, user: "Bình", total: 500 },
  { id: 3, user: "An", total: 300 }
];

- Tính tổng tiền mỗi user
    Kết quả: {
                An: 500,
                Bình: 500
              }

- Tìm user chi nhiều tiền nhất
- Tính tổng toàn bộ orders của user "An"
 */
//- Tính tổng tiền mỗi user
const orders = [
  { id: 1, user: "An", total: 200 },
  { id: 2, user: "Bình", total: 500 },
  { id: 3, user: "An", total: 200 },
];
const sumTotalUser = {};
for (let value of orders) {
  let name = value.user;
  let money = value.total;
  if (sumTotalUser[name]) {
    sumTotalUser[name] += money;
  } else {
    sumTotalUser[name] = money;
  }
}
console.log("Tổng tiền mỗi user:", sumTotalUser);

// - Tìm user chi nhiều tiền nhất
let name = "";
let max = 0;
for (let value in sumTotalUser) {
  if (sumTotalUser[value] > max) {
    max = sumTotalUser[value];
    name = value;
  }
}
console.log("User tiêu nhiều nhất: ", name);

// - Tính tổng toàn bộ orders của user "An"
let sumTotalAn = 0;
for (let value of orders) {
  if (value.user === "An") {
    sumTotalAn += value.total;
  }
}
console.log("Tổng tiền của An:", sumTotalAn);

/**
 * Bài 10: const sales = [
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

// - Lấy danh sách sản phẩm không trùng => ["Áo", "Giày", "Quần"]

let uniqueProduct = [];
for (let i = 0; i < sales.length; i++) {
  if (!uniqueProduct.includes(sales[i].product)) {
    uniqueProduct.push(sales[i].product);
  }
}
console.log(uniqueProduct);
//- Tính tổng số lượng bán ra của từng sản phẩm
let sumProductQty = {};
for (let value of sales) {
  let product = value.product;
  let qty = value.qty;
  if (sumProductQty[product]) {
    sumProductQty[product] += qty;
  } else {
    sumProductQty[product] = qty;
  }
}
console.log(sumProductQty);
//- Lọc các đơn hàng có tổng tiền > 200 -> lấy tên user
let sumPriceGreaterThan200 = [];
for (let i = 0; i < sales.length; i++) {
  if (sales[i].price * sales[i].qty > 200) {
    sumPriceGreaterThan200.push(sales[i].user);
  }
}
console.log(
  `Danh sách các người mua hàng có tổng tiền 200: ${sumPriceGreaterThan200}`,
);

// Bài 11: Tìm sản phẩm đắt nhất
// const products = [
//     { name: "A", price: 100 },
//     { name: "B", price: 300 },
//     { name: "C", price: 200 }
// ];
// Kết quả: { name: "B", price: 300 }
const products = [
  { name: "A", price: 100 },
  { name: "B", price: 300 },
  { name: "C", price: 200 },
];
let maxPriceProduct = products[0];
for (let i = 1; i < products.length; i++) {
  if (maxPriceProduct.price < products[i].price) {
    maxPriceProduct = products[i];
  }
}
console.log(maxPriceProduct);

// Bài 12: Đếm số user đang hoạt động;
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
let countActiveTrue = 0;
for (let value of users) {
  if (value.active) {
    countActiveTrue++;
  }
}
console.log(`Số user đang hoạt động là: ${countActiveTrue}`);

// Bài 13: Tìm sản phẩm bán chạy nhất
// const orders = [
//     "iphone",
//     "iphone",
//     "samsung",
//     "iphone",
//     "xiaomi",
//     "xiaomi"
// ];
const orders = ["iphone", "iphone", "samsung", "iphone", "xiaomi", "xiaomi"];
let countProduct = {};
for (let value of orders) {
  if (countProduct[value]) {
    countProduct[value]++;
  } else {
    countProduct[value] = 1;
  }
}
console.log(countProduct);

let maxProductSale = "";
let maxCount = 0;
for (let value in countProduct) {
  if (maxCount < countProduct[value]) {
    maxCount = countProduct[value];
    maxProductSale = value;
  }
}
console.log(
  "Sản phẩm bán chạy nhất là:",
  maxProductSale,
  "- Số lượng:",
  maxCount,
);

// Bài 14: Tìm số xuất hiện nhiều nhất
// [1, 1, 2, 2, 2, 3] -> 2
const numbers = [1, 1, 2, 2, 2, 3];
let countNumber = {};
for (let value of numbers) {
  if (countNumber[value]) {
    countNumber[value]++;
  } else {
    countNumber[value] = 1;
  }
}
console;
let maxNumberAppear = "";
let maxCount = 0;
for (let value in countNumber) {
  if (maxCount < countNumber[value]) {
    maxCount = countNumber[value];
    maxNumberAppear = value;
  }
}
console.log("Số xuất hiện nhất là:", maxNumberAppear, "- Số lượng:", maxCount);

// Bài 15: Tìm đơn hàng có giá trị cao nhất

// const orders = [
//     { id: 1, total: 500 },
//     { id: 2, total: 1200 },
//     { id: 3, total: 800 }
// ];
// Kết quả: { id: 2, total: 1200 }
const orders = [
  { id: 1, total: 500 },
  { id: 2, total: 1200 },
  { id: 3, total: 800 },
];
let maxOrderPrice = "";
let max = 0;
for (let value of orders) {
  if (max < value.total) {
    max = value.total;
    maxOrderPrice = value;
  }
}
console.log("Đơn hàng có giá trị cao nhất là: ", maxOrderPrice);

// Bài 16: Đếm số đơn hàng theo trạng thái
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

let countOrder = {};
for (let value of orders) {
  if (countOrder[value.status]) {
    countOrder[value.status]++;
  } else {
    countOrder[value.status] = 1;
  }
}
console.log(countOrder);

// Bài 17: Đếm tổng số học sinh
// const classes = [
//     {
//         name: "A",
//         students: ["An", "Bình"]
//     },
//     {
//         name: "B",
//         students: ["Cường"]
//     }
// ];
const classes = [
  {
    name: "A",
    students: ["An", "Bình"],
  },
  {
    name: "B",
    students: ["Cường"],
  },
];
let countStudent = 0;
for (let value of classes) {
  countStudent += value.students.length;
}
console.log("Tổng số học sinh:", countStudent);

/**
 * 1: Kiểm tra xem một số có phải là số nguyên tố lớn không. Nếu có, in ra số nguyên tố lớn nhất trong khoảng từ 1 đến
  số đó.
  Input: 20
  Output: 19
  Input: 15
  Output: 13
 */
function laSoNguyenTo(n) {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}
function timSoNguyenToLonNhat(n) {
    for (let i = n; i >= 2; i--) {
        if (laSoNguyenTo(i)) {
            return i;
        }
    }
    return null;
}


console.log(timSoNguyenToLonNhat(20)); 
console.log(timSoNguyenToLonNhat(15)); 
/**
 * Bài 2: Tìm tất cả các cặp số (a, b) sao cho a và b là số nguyên tố và a + b = n, với n là số nguyên dương cho trước.
  Input: 10
  Output: (3, 7)
  Input: 20
  Output: (3, 17), (7, 13)
 */
function laSoNguyenTo(n) {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function timCapSoNguyenTo(n) {
    let ketQua = [];
    for (let a = 2; a <= n / 2; a++) {
        let b = n - a;
        if (laSoNguyenTo(a) && laSoNguyenTo(b)) {
            ketQua.push(`(${a}, ${b})`);
        }
    }    
    if (ketQua.length > 0) {
        console.log(ketQua.join(', '));
    } else {
        console.log("Không tìm thấy cặp số nào");
    }
}
console.log("Input: 10");
timCapSoNguyenTo(10); 
console.log("Input: 20");
timCapSoNguyenTo(20); 

/**
 * Bài 3: Cho một mảng nums gồm các số nguyên, hãy trả về số lượng các số trong mảng đó có số chữ số chẵn.
 *
  Đầu vào: nums = [12,345,2,6,7896]
  Đầu ra: 2
  Giải thích:
    12 có 2 chữ số (số chữ số chẵn).
    345 có 3 chữ số (số chữ số lẻ).
    2 có 1 chữ số (số chữ số lẻ).
    6 có 1 chữ số (số chữ số lẻ).
    7896 có 4 chữ số (số chữ số chẵn).
    Do đó, chỉ có 12 và 7896 có số chữ số chẵn.
 */
function countEvenDigitNumbers(nums) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        let soChuSo = nums[i].toString().length;      
        if (soChuSo % 2 === 0) {
            count++;
        }
    }
    
    return count;
}
let nums = [12, 345, 2, 6, 7896];
console.log(countEvenDigitNumbers(nums)); 


/**
 * Bài 4: cho mảng number: const arrNumber = [1, 4, 44, 64, 55, 24, 32, 55, 19, 17, 74, 22, 23];
nếu phần tử trong mảng chẵn thì cho vào mảng evenNumbers = [] => kết quả evenNumber = [4,44,64,24,32,74,22]
và ngược lại lấy số lẻ cho vào mảng oddNumbers
 */
const arrNumber = [1, 4, 44, 64, 55, 24, 32, 55, 19, 17, 74, 22, 23];
const evenNumbers = arrNumber.filter(num => num % 2 === 0);
const oddNumbers = arrNumber.filter(num => num % 2 !== 0);
console.log("evenNumbers =", evenNumbers);
console.log("oddNumbers =", oddNumbers);
