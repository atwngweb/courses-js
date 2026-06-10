// Hãy viết một hàm compareStrings nhận vào hai chuỗi và trả về chuỗi dài hơn. Nếu hai chuỗi có độ dài bằng nhau, trả về chuỗi đầu tiên.

function compareStrings(str1, str2) {
  let length1 = str1.length;
  let length2 = str2.length;
  if (length1 >= length2) {
    return str1;
  } else {
    return str2;
  }
}

// Sample usage
console.log(compareStrings("apple", "banana")); // "banana"
console.log(compareStrings("cherry", "plum")); // "cherry"
console.log(compareStrings("mango", "kiwi")); // "mango"
console.log(compareStrings("apple", "mango")); // "apple"

// Hãy viết một hàm reverseString nhận vào một chuỗi và trả về chuỗi đó nhưng với các ký tự được đảo ngược.

function reverseString(str) {
  let result = str.split("").reverse().join("");
  //   let res = "";
  //   for (let char = str.length - 1; char >= 0; char--) {
  //     res += str[char];
  //   }
  return result;
}

// Sample usage
console.log(reverseString("hello")); // "olleh"
console.log(reverseString("JavaScript")); // "tpircSavaJ"
console.log(reverseString("OpenAI")); // "IAnepO"
console.log(reverseString("12345")); // "54321"

// Viết hàm reverseWordsInSentence nhận vào một chuỗi và trả về một chuỗi mới với từng từ trong câu đảo ngược, nhưng thứ tự của các từ vẫn giữ nguyên.

// Cách 1:

function reverseWordsInSentence(str) {
  let arr = str.split(" ");
  let res = "";
  for (let char = 0; char < arr.length; char++) {
    res += arr[char].split("").reverse().join(""); // Trả về chuỗi ở đâu
    if (char !== arr.length - 1) {
      res += " ";
    }
  }
  return res;
}

// Cách 2:

function reverseWordsInSentence(sentence) {
  let words = sentence.split(" ");
  let reversedSentence = words
    .map((word) => {
      return word.split("").reverse().join("");
    })
    .join(" ");
  return reversedSentence;
}

// Bước 1: Tách các từ bằng kí tự " " => tạo thành mảng với các từ
// Bước 2: Dùng map duyệt qua các phần tử của mảng
//       => Tách các kí tự trong từ => thành mảng
//       => Đảo ngược các kí tự trong mảng
//       => Nối các kí tự
// Xog map => Trả về mảng mới với các từ được đảo ngược
// Nối các từ trong mảng bằng " " => kết quả mong muốn

// Hãy viết một hàm findLongestWord nhận vào một chuỗi sentence và trả về từ dài nhất trong câu đó. Nếu có nhiều từ có độ dài bằng nhau, trả về từ đầu tiên xuất hiện. Nếu đầu vào không phải chuỗi, trả về "Invalid input".

function findLongestWord(sentence) {
  if (typeof sentence !== "string") {
    return "Invalid input";
  }
  let arrWords = sentence.split(" ");
  let res = "";
  for (let word of arrWords) {
    if (word.length > res.length) {
      res = word;
    }
  }
  return res;
}
