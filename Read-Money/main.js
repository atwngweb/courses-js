const readNum = [
  "không",
  "một",
  "hai",
  "ba",
  "bốn",
  "năm",
  "sáu",
  "bảy",
  "tám",
  "chín",
];

const priceMoney = ["", "nghìn", "triệu", "tỷ"];

function readThreeDigits(num, soLon = false) {
  const hangTram = Math.floor(num / 100);
  const hangChuc = Math.floor((num % 100) / 10);
  const hangDonVi = (num % 100) % 10;

  let result = "";

  if (hangTram > 0) {
    result += `${readNum[hangTram]} trăm `;
  } else if (soLon) {
    result += `không trăm `;
  }

  if (hangChuc > 1) {
    result += `${readNum[hangChuc]} mươi `;
  } else if (hangChuc == 1) {
    result += `mười `;
  } else if (hangTram > 0 && hangChuc == 0 && hangDonVi > 0) {
    result += `lẻ `;
  } else if (hangDonVi > 0 && soLon) {
    result += `lẻ `;
  }

  if (hangChuc > 1 && hangDonVi == 1) {
    result += `mốt `;
  } else if (hangChuc > 0 && hangDonVi == 5) {
    result += `lăm `;
  } else if (hangDonVi > 0) {
    result += `${readNum[hangDonVi]}`;
  }

  return result.trim();
}

// console.log(readThreeDigits(1));
// console.log(readThreeDigits(11));
// console.log(readThreeDigits(15));
// console.log(readThreeDigits(21));
// console.log(readThreeDigits(100));
// console.log(readThreeDigits(101));
// console.log(readThreeDigits(111));
// console.log(readThreeDigits(115));
// console.log(readThreeDigits(121));
// console.log(readThreeDigits(11, true));
// console.log(readThreeDigits(1, true));

function readMoney(num) {
  if (num === 0) {
    return "không đồng";
  }
  let index = 0;
  let result = [];
  let lastIndex = Math.floor(String(num).length / 3);
  do {
    const threeDigit = num % 1000;
    const readLe = index !== lastIndex;
    const text = readThreeDigits(threeDigit, readLe);
    if (threeDigit > 0) {
      const part = `${text} ${priceMoney[index]}`;
      result.push(part);
    }

    num = Math.floor(num / 1000);
    index++;
  } while (num > 0);
  return result.reverse().join(" ").trim() + " đồng";
}

console.log(readMoney(123456789));
console.log(readMoney(10001));
console.log(readMoney(101));
console.log(readMoney(0));
console.log(readMoney(1012));
