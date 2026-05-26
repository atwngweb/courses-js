// Định nghĩa hàm

// Syntax: function ten_ham(tham_so) {
// code
// }

// Gọi hàm
// ten_ham(truyen_doi_so);

// Tham số hàm có hoặc không

// Giá trị truyền vào khi gọi hàm là đối số

// Còn khi định nghĩa hàm là tham số

// Return value
function sum(a, b) {
  return a + b;
}

console.log(sum(3, 7));

// i++ và ++i

let i = 5;

console.log(i++); // 5 => Trả về giá trị của biến

console.log(i); // 6  => RỒI MỚI TĂNG giá trị của biến

let j = 1;

console.log(++j); // 2 => tăng giá trị của biến

console.log(j); // 2 => Trả về giá trị

// exaple

let a = 1;
console.log("Check");

console.log(++a); // 2
console.log(a++); // 2
console.log(a--); // 3
console.log(--a); // 1
console.log(++a); // 2

let res = ++a + a++ - a-- + --a + ++a;

console.log("gia tri cua res = ", res); // 4

// ++a = 2
// a++ = 2
// => a = 3
// a-- = 3
// --a = 1
// ++a = 2
