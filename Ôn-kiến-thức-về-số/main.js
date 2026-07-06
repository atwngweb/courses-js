console.log(NaN);
// NaN: Not a Number

console.log(NaN + 2 * 3);

console.log(+"aaa");

// Kiểm tra 1 số có phải là số hay không ?
let num = 3;

console.log(typeof num === "number" && !isNaN(num));

// parseInt()

console.log(parseInt(12.2312));

// Number.prototype.toFixed
// Có sự làm tròn trên
// Trả về chuỗi cần ép kiểu sang số

let a = 213.12881432;

console.log(+a.toFixed(3) + "Đ");

// Hãy viết hàm countNaNValues nhận vào một tham số input. Hàm này sẽ đếm số lượng giá trị NaN xuất hiện trong input. input có thể là một mảng chứa các giá trị bất kỳ hoặc là một đối tượng có các giá trị là các giá trị bất kỳ. Nếu input không phải là mảng hoặc đối tượng, hàm trả về chuỗi "Invalid input".

// Cach 1:
function countNaNValues(input) {
  if (Array.isArray(input)) {
    return input.filter((value) => value !== value).length;
  } else if (typeof input === "object" && input !== null) {
    return Object.values(input).filter((value) => value !== value).length;
  }
  return "Invalid input";
}

// Cach 2:
function countNaNValues(input) {
  let cnt = 0;
  if (Array.isArray(input)) {
    input.forEach((value) => {
      if (value !== value) {
        cnt++;
      }
    });
    return cnt;
  } else if (typeof input === "object" && input !== "null") {
    Object.values(input).forEach((value) => {
      if (value !== value) {
        cnt++;
      }
    });
    return cnt;
  }
  return "Invalid input";
}
// Hãy viết hàm parseIntSum nhận vào một chuỗi có chứa các số nguyên cách nhau bằng dấu phẩy (,) và trả về tổng của các số đó. Nếu chuỗi chứa ký tự không hợp lệ hoặc không có số hợp lệ nào, hàm sẽ trả về null.
function parseIntSum(str) {
  let arr = str.trim().split(","); // Kh cần trim cũng đc
  let sum = 0;
  for (let e of arr) {
    let num = parseInt(e.trim());
    if (typeof num == "number" && !isNaN(num)) {
      sum += num;
    } else {
      return null;
    }
  }
  return sum;
}

// Hãy viết hàm findMax nhận vào một mảng các số và trả về giá trị lớn nhất trong mảng. Nếu mảng rỗng, hàm sẽ trả về -Infinity.

function findMax(arr) {
  if (arr.length == 0) {
    return -Infinity;
  } else {
    let max = -Infinity;
    for (let value of arr) {
      if (value > max) {
        max = value;
      }
    }
    return max;
  }
}
