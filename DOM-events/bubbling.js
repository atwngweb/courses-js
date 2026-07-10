const parent = document.querySelector(".parent");
const child = document.querySelector(".child");
const button = document.querySelector("#button");

parent.onclick = function (e) {
  console.log(e);
};

child.onclick = function (e) {
  e.stopPropagation();
  console.log(e);
};

button.onclick = function (e) {
  console.log(e);
};
