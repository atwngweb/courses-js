/*
Hãy viết hàm removeUndefined nhận vào một mảng arr. Hàm này sẽ lọc và trả về một mảng mới chứa tất cả các phần tử không phải là undefined. Sử dụng toán tử void 0 để kiểm tra các phần tử trong mảng.
*/

function removeUndefined(arr) {
  const res = [];
  let index = 0;
  for (const item of arr) {
    if (item !== void 0) {
      res[index] = item;
      index++;
    }
  }
  return res;
}

// Su dung push

// function removeUndefined(arr) {
//   const result = [];
//   for (const value of arr) {
//     if (value !== void 0) {
//       result.push(value);
//     }
//   }
//   return result;
// }

// Sample usage
console.log(removeUndefined([1, 2, void 0, 4, undefined])); // [1, 2, 4]
console.log(removeUndefined([undefined, void 0, null, 0, "", false])); // [null, 0, '', false]
console.log(removeUndefined([void 0, void 0, void 0])); // []
console.log(removeUndefined([])); // []

/*
1.Viết hàm createRange nhận vào hai số nguyên start và end, sau đó tạo và trả về một mảng chứa tất cả các số nguyên từ start đến end.

2.Viết hàm removeDuplicates nhận vào một mảng và trả về một mảng mới mà không có bất kỳ phần tử trùng lặp nào từ mảng ban đầu.

3.Viết hàm findPairsWithSum nhận vào một mảng số nguyên arr và một số nguyên sum. Hàm trả về một mảng của các cặp số từ arr sao cho tổng của mỗi cặp bằng sum.
*/

function createRange(start, end) {
  const res = [];
  while (start <= end) {
    res.push(start);
    start++;
  }
  return res;
}

// Sample usage
console.log(createRange(1, 5)); // [1, 2, 3, 4, 5]

function removeDuplicates(arr) {
  let res = [];
  let index = 0;
  for (const item of arr) {
    if (!res.includes(item)) {
      res[index] = item;
      index++;
    }
  }
  return res;
}

// Sample usage
// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]

function findPairsWithSum(arr, num) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === num) {
        res.push([arr[i], arr[j]]);
      }
    }
  }
  return res;
}

// Sample usage
// console.log(findPairsWithSum([1, 2, 3, 4, 5], 5)); // [[1, 4], [2, 3]]
