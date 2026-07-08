// const test = document.getElementById("heading");
// console.log(test);

// const getTag = document.getElementsByTagName("h2");

// console.log(getTag);

// console.log(getTag[1].innerText);

// getTag[1].innerText = "Sua text thong qua innerText";

// const getClass1 = document.getElementsByClassName("title");

// const getClass2 = document.getElementsByClassName("title official");

// console.log(getClass1);
// console.log(getClass2);

// const h1 = document.querySelector("#heading");
// console.log(h1);

// const h2 = document.querySelector(".title"); // Lay ra phan tu dau tien
// console.log(h2);

// const classTitle = document.querySelectorAll(".title"); // Lay ra tat ca cac phan tu co class title
// console.log(classTitle);

// const courses = ["HTML", "CSS", "Javascropt", "ReactJS"];

// const menu = document.querySelector(".output");

// const result = courses.map((courses) => {
//   return `<li>${courses}</li>`;
// });

// const html = `<ul>${result.join("\n")}</ul>`;

// menu.innerHTML = html;
// console.log(result.join("\n"));

// const menu = document.querySelectorAll(".nav .item");

// let index = 0;
// for (let item of menu) {
//   item.innerHTML = courses[index];
//   index++;
// }

// console.log(menu);

// Hãy viết hàm renderList nhận vào hai tham số:

// items (mảng các chuỗi): chứa danh sách các mục cần hiển thị.
// elementId (chuỗi): là id của phần tử HTML nơi danh sách sẽ được gắn vào.
// Hàm cần thực hiện các yêu cầu sau:

// Nếu items không phải là một mảng hoặc elementId không phải là một chuỗi, in thông báo lỗi:
// "Invalid input: items must be an array and elementId must be a string."
// và không thực hiện thêm hành động nào.
// Nếu không tìm thấy phần tử HTML với id là elementId, in thông báo lỗi:
// "Element with ID '<elementId>' not found."
// và không thực hiện thêm hành động nào.
// Nếu không có lỗi, tạo danh sách HTML (<ul> với các <li>) dựa trên các mục trong mảng items và gắn vào phần tử được chỉ định bởi elementId thông qua thuộc tính innerHTML.
// Lưu ý: Sử dụng console.error() để in lỗi.

function renderList(items, elementId) {
  if (!Array.isArray(items) || typeof elementId !== "string") {
    console.error(
      "Invalid input: items must be an array and elementId must be a string.",
    );
    return;
  }
  const getE = document.getElementById(elementId);
  if (!getE) {
    console.error(`Element with ID '${elementId}' not found.`);
    return;
  }

  const arrItem = items.map((item) => {
    return `<li>${item}</li>`;
  });

  const html = `<ul>${arrItem.join("")}</ul>`;

  getE.innerHTML = html;

  console.log(getE);
}

// Sample usage

// Case 1: Render list into valid element
renderList(["Apple", "Banana", "Cherry"], "list-container");
// Expected: <ul><li>Apple</li><li>Banana</li><li>Cherry</li></ul>

// Case 2: Invalid items input
renderList("Not an array", "test-container");
// Expected console.error: "Invalid input: items must be an array and elementId must be a string."

// Case 3: Invalid elementId input
renderList(["Apple", "Banana"], 123);
// Expected console.error: "Invalid input: items must be an array and elementId must be a string."

// Case 4: Non-existent elementId
renderList(["One", "Two"], "non-existent-container");
// Expected console.error: "Element with ID 'non-existent-container' not found."
