const button = document.querySelector("#button");

const email = document.querySelector("#email");

const submit = document.querySelector("#submit");

submit.onclick = function () {
  console.log(this);
};

button.onclick = function (e) {
  console.log(e);
};

email.onchange = function (e) {
  console.log(email.value);
  console.log(e.target.value);

  console.log(e);
};

// email.onchange = function () {
//   console.log(email.value);
// };

// Cach 1:

// button.onclick = function () {
//   console.log("Click 1");
// };

// button.onclick = function () {
//   console.log("Click 2");
// };

// button.onclick = function () {
//   console.log("Click 3");
// };

// Bị ghi đè

// Để không lắng nghe sự kiện đối với cách 1
// button.onclick = function() {};

// Cach 2:

// const handle = function () {
//   console.log("Click 1");
// };

// // tách hàm ra ngoài mới có thể removeEventListener

// button.addEventListener("click", handle);

// button.addEventListener("click", function () {
//   console.log("Click 2");
// });

// button.addEventListener("click", function () {
//   console.log("Click 3");
// });

// // Lắng nghe sự kiện có click sẽ thực thi các hàm
// // Để không lắng nghe sự kiện với cách 2

// button.removeEventListener("click", handle);
