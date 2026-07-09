const messages = document.querySelector(".messages");

const button = document.querySelector(".button");

const input = document.querySelector("#input");

button.onclick = function () {
  //   messages.innerHTML = `${messages.innerHTML} <li>${input.value}</li>`;
  const message = document.createElement("li");
  message.innerText = input.value;
  messages.appendChild(message);
  input.value = "";
};
