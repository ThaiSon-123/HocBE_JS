const arrNumber = [1, 4, 44, 64, 55, 24, 32, 55, 19, 17, 74, 22, 23];
const evenNumbers = arrNumber.filter(num => num % 2 === 0);
const oddNumbers = arrNumber.filter(num => num % 2 !== 0);
console.log("evenNumbers =", evenNumbers);
console.log("oddNumbers =", oddNumbers);