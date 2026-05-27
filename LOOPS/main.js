// Viết một hàm printNumbers nhận vào hai tham số là
//  start (số bắt đầu) và end (số kết thúc).
// Hàm này sẽ in ra console tất cả các số từ start đến end.

const printNumbers = (start, end) => {
  for (let i = start; i <= end; i++) {
    console.log(i);
  }
};

printNumbers(1, 5);

//Viết hàm reverseString nhận vào một tham số
// str và trả về chuỗi đảo ngược của str.

function reverseString(str) {
  let res = ``;
  for (let i = str.length - 1; i >= 0; i--) {
    res += str[i];
  }
  return res;
}

console.log(reverseString("ABC"));

// Viết hàm findMax nhận vào một mảng số và trả về số
// lớn nhất trong mảng đó sử dụng vòng lặp for.

function findMax(arr) {
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(findMax([3, 2, 66, 3, 87, 2]));
console.log(findMax([3, -3, 6.2, 3, -3442, 2]));

// Viết hàm listEvenNumbers nhận vào hai tham số là
// start và end, sau đó in ra tất cả các số chẵn từ
// start đến end sử dụng vòng lặp for.

function listEvenNumbers(start, end) {
  for (let i = start; i <= end; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
}

listEvenNumbers(1, 10);

// Viết hàm sumOddNumbers nhận vào một mảng số và trả
//về tổng của tất cả các số lẻ trong mảng đó sử dụng
// vòng lặp for.

function sumOddNumbers(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      sum += arr[i];
    }
  }
  return sum;
}

console.log(sumOddNumbers([1, 3, 2, 4, 54, 33]));

// Viết hàm calculateAverage nhận vào một mảng số và trả
// về trung bình cộng của các số trong mảng đó, trả về 0
// nếu mảng trống.

const calculateAvg = (arr) => {
  if (arr.length == 0) {
    return 0;
  } else {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum / arr.length;
  }
};

// Viết hàm isPrime nhận vào một số nguyên n và trả về
// true nếu n là số nguyên tố, ngược lại trả về false.

const isPrime = (n) => {
  if (n == 1 || n < 0) {
    return false;
  } else {
    for (let i = 2; i < n; i++) {
      if (n % i == 0) {
        return false;
      }
    }
  }
  return true;
};

//Viết hàm sumPrimes nhận vào hai số nguyên start và
// end, sau đó tính và trả về tổng của tất cả các số
// nguyên tố trong khoảng từ start đến end.

const sumPrimes = (start, end) => {
  let sum = 0;
  for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }
  return sum;
};

console.log(sumPrimes(10, 20));

//Viết một hàm repeatChar nhận vào hai tham số:
// character và n. Hàm này sẽ trả về một chuỗi gồm kí tự
// character được lặp lại n lần

const repeatChar = (char, n) => {
  let res = ``;
  for (let i = 1; i <= n; i++) {
    res += char;
  }
  return res;
};

console.log(repeatChar("@", 8));

//Viết một hàm arrayToHTMLList nhận vào một mảng các
// chuỗi và trả về một chuỗi HTML. Chuỗi HTML này sẽ thể
// hiện một danh sách không sắp xếp (<ul>) với mỗi phần
// tử của mảng được biểu diễn bằng một mục danh sách (<li>).

const arrToHTMLList = (arr) => {
  let res = `<ul> \n`;
  for (let i = 0; i < arr.length; i++) {
    res += `\t<li> ${arr[i]} </li>\n`;
  }
  res += `</ul>`;

  return res;
};

console.log(arrToHTMLList(["Fe", "Al", "Oxi", "Heli"]));
