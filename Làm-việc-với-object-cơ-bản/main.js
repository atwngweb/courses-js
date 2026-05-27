// OBJECT DESTRUCTURING

const course = {
  title: "JavaScript Pro",
  info: {
    url: "https://fullstack.edu.vn",
    description: "JavaScript Basic, Advanced.",
    keywords: "js basic, js advanced",
  },
};

const {
  title,
  info: {
    url: link, // đổi tên url => link
  },
} = course;

console.log(title);
console.log(link);

// ENHANCED OBJECT LITERALS

let name = "A";
let age = 12;

const user = { name, age }; // RÚT GỌN CỦA BÊN DƯỚI
// Tuong tu
/*
const user = {
    name: name,
    age: age
}
*/

console.log(user);

// Computed property names (Tên thuộc tính động)

// Cho phép bạn sử dụng biểu thức trong ngoặc vuông [] để đặt tên cho các thuộc
//tính của object.
const person = {
  firstName: "A",
  ["lastName"]: "B",
};

console.log(person);

// Viết ngắn ngọn phương thức trong object

// Thay vì viết speak() như dưới:
// const dog = {
//   name: "Scooby Doo",
//   speak: function() {
//     console.log('Go go...');
//   }
// };

// Viết tắt phương thức
const dog = {
  name: "Scooby Doo",
  speak() {
    console.log("Go go...");
  },
};

dog.speak(); // Go go...

// =========== Các phương thức của Object================

// Object.keys(obj)
const obj = {
  a: 1,
  b: 2,
  c: 3,
  info: {
    color: "red",
  },
};

console.log(Object.keys(obj)); // Trả về 1 mảng gồm tất cả các key

// Khác với for-in
// for-in chỉ lấy ra các key và kh đưa vào mảng

// Object.values(obj)
console.log(Object.values(obj));

for (let key in obj) {
  console.log(obj[key]);
}

// Object.entries(obj)

// Trả về 1 mảng
// bên trong mảng chứa các mảng con là các cặp key-value

console.log(Object.entries(obj));

// Object.assign(target, ...sources)  // return target

// Phương thức Object.assign cho phép bạn sao chép các thuộc tính từ một hoặc
// nhiều đối tượng nguồn (source objects) vào một đối tượng đích (target object).

// Định nghĩa đối tượng đích và đối tượng nguồn
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

// Sử dụng Object.assign để sao chép thuộc tính từ source sang target
const returnedTarget = Object.assign(target, source);

// Hiển thị kết quả
console.log(target); // { a: 1, b: 4, c: 5 }
console.log(returnedTarget); // { a: 1, b: 4, c: 5 }

// Object.freeze(obj)
//Sử dụng phương thức Object.freeze để “đóng băng” một đối tượng, làm cho tất cả
//các thuộc tính của đối tượng đó trở nên không thể thay đổi. Một khi đối tượng \
//đã bị đóng băng, bạn sẽ không thể:

//Thêm thuộc tính mới vào đối tượng
//Sửa đổi giá trị của các thuộc tính hiện có
//Xóa các thuộc tính từ đối tượng

const frozenObj = Object.freeze({ a: 1 });

frozenObj.a = 2; // Cố gắng thay đổi giá trị của 'a' không có hiệu lực
frozenObj.b = 3; // Cố gắng thêm thuộc tính mới 'b' không thành công

console.log(frozenObj.a); // 1
console.log(frozenObj.b); // undefined
