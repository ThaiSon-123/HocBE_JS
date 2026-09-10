const users = [
  { name: "A", active: true },
  { name: "B", active: false },
  { name: "C", active: true },
];
let countActiveUsers = users.filter((user) => user.active === true).length;
console.log(countActiveUsers);