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

// Hãy viết hàm truncateByWords nhận vào hai tham số:

// str (chuỗi cần cắt),
// maxWords (số lượng từ tối đa).
// Hàm trả về chuỗi với tối đa maxWords từ. Nếu chuỗi có nhiều hơn maxWords từ, thêm dấu ... vào cuối chuỗi để biểu thị rằng chuỗi đã bị cắt. Nếu chuỗi có số lượng từ nhỏ hơn hoặc bằng maxWords, trả về chuỗi ban đầu mà không thay đổi.

// Cach 1:

function truncateByWords(str, maxWords) {
  let cntWords = str.split(" ").length;
  if (cntWords > maxWords) {
    return str.split(" ", maxWords).join(" ") + "...";
  } else {
    return str;
  }
}

// Cach 2:

function truncateByWords(str, maxWords) {
  const words = str.split(" ");
  if (words.length <= maxWords) return str;

  return words.slice(0, maxWords).join(" ") + "...";
}

// Yêu cầu bài tập:

// Hãy viết hàm truncateByWordsTrimmed để khắc phục vấn đề khoảng trắng thừa. Hàm này sẽ:

// Nhận vào một chuỗi str và số lượng từ tối đa maxWords.
// Trả về chuỗi với tối đa maxWords từ, loại bỏ tất cả các khoảng trắng thừa (nhiều khoảng trắng liên tiếp chỉ tính là một khoảng trắng).
// Nếu chuỗi có nhiều hơn maxWords từ, thêm dấu ... vào cuối chuỗi.
// Nếu chuỗi có số lượng từ nhỏ hơn hoặc bằng maxWords, trả về chuỗi ban đầu mà không thay đổi.

function truncateByWordsTrimmed(str, maxWords) {
  let arrWords = str.split(" ").filter((word) => {
    return word !== "";
  });

  let cntArrWords = arrWords.length;
  if (cntArrWords > maxWords) {
    return arrWords.slice(0, maxWords).join(" ") + "...";
  } else {
    return arrWords.join(" ");
  }
}

// Hãy viết một hàm isPalindrome nhận vào một chuỗi str và kiểm tra xem chuỗi đó có phải là chuỗi đối xứng (palindrome) hay không. Một chuỗi đối xứng là chuỗi đọc xuôi hay ngược đều giống nhau, không phân biệt chữ hoa chữ thường. Trả về "Invalid input" nếu đầu vào không phải chuỗi.

// Cach 1:
function isPalindrome(str) {
  if (typeof str !== "string") {
    return "Invalid input";
  } else {
    let str1 = str.toLowerCase();
    let str2 = str1.split("").reverse().join("");
    if (str1 === str2) {
      return true;
    } else {
      return false;
    }
  }
}

// Cach 2:
function isPalindrome(str) {
  if (typeof str !== "string") {
    return "Invalid input";
  }
  const lowerStr = str.toLowerCase();
  const reversedStr = lowerStr.split("").reverse().join("");
  return lowerStr === reversedStr;
}

// Hãy viết hàm capitalize nhận vào một chuỗi bất kỳ và trả về chuỗi đó với chữ cái đầu của mỗi từ được viết hoa, các chữ cái còn lại viết thường.

function capitalize(str) {
  return str
    .split(" ")
    .map((word) => {
      if (!word) return "";
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
}

console.log(capitalize("hello world")); // "Hello World"
console.log(capitalize("javascript is fun")); // "Javascript Is Fun"
console.log(capitalize("CAPITALIZE THIS SENTENCE")); // "Capitalize This Sentence"
console.log(capitalize("   multiple    spaces  ")); // "   Multiple    Spaces  "
console.log(capitalize("")); // ""

//Hãy viết một hàm countVowels nhận vào một chuỗi str và trả về số lượng nguyên âm (vowels) trong chuỗi đó. Các nguyên âm gồm: ‘a’, ‘e’, ‘i’, ‘o’, ‘u’, không phân biệt chữ hoa chữ thường. Trả về "Invalid input" nếu đầu vào không phải chuỗi.

function countVowels(str) {
  if (typeof str !== "string") {
    return "Invalid input";
  }
  let cnt = 0;
  let str1 = str.toLowerCase();
  let key = "ueoai";
  for (let char of str1) {
    if (key.includes(char)) {
      cnt++;
    }
  }
  return cnt;
}

//Hãy viết hàm capitalizeFirst nhận vào một đoạn văn (chuỗi) và trả về đoạn văn với ký tự đầu tiên được viết hoa, các ký tự còn lại giữ nguyên (không làm thay đổi bất kỳ ký tự nào khác ngoài ký tự đầu tiên). Loại bỏ khoảng trắng thừa ở đầu và cuối chuỗi.

function capitalizeFirst(str) {
  let newStr = str.trim();
  if (!newStr) {
    return "";
  }
  let result = newStr.replace(newStr[0], newStr[0].toUpperCase());
  return result;
}

//Hãy viết hàm có tên là formatTime, nhận vào ba tham số: giờ, phút và giây. Hàm này sẽ trả về chuỗi thời gian theo định dạng “hh:mm:ss”. Nếu giờ, phút hoặc giây chỉ có một chữ số, hãy thêm số 0 ở phía trước.

function formatTime(hours, minutes, seconds) {
  let nHours = `${hours}`.padStart(2, "0");
  let nMinutes = `${minutes}`.padStart(2, "0");
  let nSeconds = `${seconds}`.padStart(2, "0");
  return `${nHours}:${nMinutes}:${nSeconds}`;
}

// Sample usage
console.log(formatTime(5, 7, 9)); // "05:07:09"
console.log(formatTime(12, 34, 56)); // "12:34:56"
console.log(formatTime(0, 0, 0)); // "00:00:00"
console.log(formatTime(23, 59, 59)); // "23:59:59"

// Hãy viết hàm formatCardNumber nhận vào một số thẻ tín dụng và trả về số thẻ được định dạng theo mẫu ************1234. Hàm sẽ che dấu tất cả các số trừ 4 số cuối cùng của thẻ, có thể chỉ định chuỗi dùng để che các số, mặc định là dấu *. Đảm bảo đầu vào có độ dài hợp lệ của thẻ tín dụng (16 số), nếu không hàm trả về "Invalid card number".

function formatCardNumber(cardNumber, maskChar = "*") {
  let strNum = cardNumber + "";
  if (strNum.length !== 16) {
    return "Invalid card number";
  }
  let visibleNum = strNum.slice(-4);
  let res = visibleNum.padStart(16, maskChar);
  return res;
}

//Hãy cải thiện hàm formatCardNumberWithSpaces để hiển thị số thẻ tín dụng theo định dạng dễ đọc hơn, bằng cách thêm dấu cách giữa các nhóm 4 chữ số. Hàm sẽ che dấu tất cả các số trừ 4 số cuối cùng của thẻ, với kết quả có định dạng như sau: **** **** **** 1234. Người dùng có thể chỉ định chuỗi dùng để che các số, mặc định là dấu *. Đảm bảo đầu vào có độ dài hợp lệ của thẻ tín dụng (16 số), nếu không, trả về "Invalid card number".

function formatCardNumber(cardNumber, maskChar = "*") {
  let strNum = cardNumber + "";
  if (strNum.length !== 16) {
    return "Invalid card number";
  }
  let visibleNum = strNum.slice(-4);
  let res = visibleNum.padStart(16, maskChar);
  let result = "";
  for (let i = 0; i < res.length; i++) {
    result += res[i];
    if ((i + 1) % 4 == 0 && i !== res.length - 1) {
      result += " ";
    }
  }
  return result;
}
