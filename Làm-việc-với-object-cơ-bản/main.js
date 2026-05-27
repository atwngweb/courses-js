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
