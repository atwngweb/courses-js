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

// Hãy viết một hàm formatDuration nhận vào một tham số duration là thời lượng tính bằng giây và trả về định dạng:

// Nếu thời gian dưới 1 giờ: dạng “mm:ss” (phút:giây).
// Nếu thời gian trên 60 phút: dạng “hh:mm:ss” (giờ:phút:giây).
// Nếu duration không phải số hợp lệ hoặc nhỏ hơn 0 hàm cần trả về "Invalid duration".

function formatDuration(duration) {
  if (typeof duration !== "number" || isNaN(duration) || duration < 0) {
    return "Invalid duration";
  }
  const hours = Math.floor(duration / 3600);
  const minutes = Math.floor((duration % 3600) / 60);
  const seconds = (duration % 3600) % 60;
  const pad = (num) => String(num).padStart(2, "0");
  if (hours == 0) {
    return `${pad(minutes)}:${pad(seconds)}`;
  } else {
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  }
}

// Hãy viết hàm tên là luckyDraw không nhận tham số. Khi được gọi, hàm này sẽ trả về ngẫu nhiên một trong năm món đồ công nghệ sau: "Smartphone", "Laptop", "Tablet", "Smartwatch", "Headphones".
function luckyDraw() {
  const gift = ["Smartphone", "Laptop", "Tablet", "Smartwatch", "Headphones"];
  const giftIndex = Math.floor(Math.random() * gift.length);
  return gift[giftIndex];
}

// Cho trước hàm bauCuaRoll để mô phỏng việc tung xúc xắc trong trò chơi “Bầu Cua Tôm Cá”. Hãy viết thêm một hàm tên là placeBet nhận vào hai tham số:

// bet: một chuỗi biểu thị mặt xúc xắc mà người chơi đặt cược ("Bầu", "Cua", "Tôm", "Cá", "Gà", "Nai").
// amount: một số nguyên biểu thị số tiền mà người chơi muốn đặt cược.
// Hàm này sẽ sử dụng kết quả của bauCuaRoll để kiểm tra xem người chơi có thắng cược hay không. Nếu kết quả tung xúc xắc có chứa mặt mà người chơi đặt cược, hàm sẽ trả về số tiền thắng cược là amount * số lần mặt cược xuất hiện. Nếu không, hàm sẽ trả về -amount (số tiền thua).

function bauCuaRoll() {
  const faces = ["Bầu", "Cua", "Tôm", "Cá", "Gà", "Nai"];
  const rollDice = () => faces[Math.floor(Math.random() * faces.length)];
  return [rollDice(), rollDice(), rollDice()];
}

function placeBet(bet, amount) {
  const result = bauCuaRoll();
  const check = result.filter((value) => value === bet).length;
  return check > 0 ? amount * check : -amount;
}

// Sample usage
console.log(placeBet("Bầu", 100)); // Kết quả có thể là 100, 200, 300, hoặc -100
console.log(placeBet("Cá", 50)); // Kết quả có thể là 50, 100, 150, hoặc -50
console.log(placeBet("Nai", 200)); // Kết quả có thể là 200, 400, 600, hoặc -200
