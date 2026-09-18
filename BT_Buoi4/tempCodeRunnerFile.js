const usersDB = [
  { id: 1, name: "Nguyen Van A", email: "a@gmail.com" },
  { id: 2, name: "Tran Thi B", email: "b@gmail.com" },
];

// BÀI 1: CALLBACK
function getUserByIdCallback(id, callback) {
  setTimeout(() => {
    const user = usersDB.find((user) => user.id === id);
    if (user) {
      callback(null, user);
    } else {
      callback("Không tìm thấy user!", null);
    }
  }, 1000);
}

// Test case 1: Tìm ID có thật
getUserByIdCallback(1, (error, user) => {
  if (error) {
    console.error("Lỗi:", error);
  } else {
    console.log("Bài 1 - Tìm thấy user:", user);
  }
});

// Test case 2: Tìm ID không tồn tại
getUserByIdCallback(99, (error, user) => {
  if (error) {
    console.error("Bài 1 - Kết quả mong muốn (Báo lỗi):", error);
  } else {
    console.log("User:", user);
  }
});

// BÀI 2: PROMISE
function getUserByIdPromise(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = usersDB.find((user) => user.id === id);
      if (user) {
        resolve(user);
      } else {
        reject("Không tìm thấy user!");
      }
    }, 1000);
  });
}

// Test case 1: Tìm ID đúng
getUserByIdPromise(2)
  .then((user) => {
    console.log("Bài 2 - Tìm thấy user:", user);
  })
  .catch((error) => {
    console.error("Lỗi:", error);
  });

// Test case 2: Tìm ID sai
getUserByIdPromise(404)
  .then((user) => {
    console.log("User:", user);
  })
  .catch((error) => {
    console.error("Bài 2 - Kết quả mong muốn (Báo lỗi):", error);
  });

// BÀI 3: ASYNC / AWAIT
async function runApp(userId) {
  try {
    console.log(`--- Đang tìm kiếm user có ID: ${userId} ---`);
    const user = await getUserByIdPromise(userId);
    console.log("Bài 3 - Kết quả tìm thấy:", user);
  } catch (error) {
    console.error("Bài 3 - Bắt được lỗi hệ thống:", error);
  }
}

// Gọi hàm chạy thử
runApp(1); // Thành công
runApp(55); // Thất bại
