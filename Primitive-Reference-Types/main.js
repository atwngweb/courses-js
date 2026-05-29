let person = {
  name: "Nam",
  age: 18,
};

let personCopy = person; // Coppy dia chi tham chieu
// => person va personCopy deu tro toi 1 object ben HEAP
personCopy.name = "Binh"; // => Lam thay doi person

// JSON.stringify(obj)

console.log("- JSON.stringify(obj)");
console.log(JSON.stringify(person));
console.log(JSON.stringify(personCopy));

console.log("- 1");
// person va personCopy se luu dia chi tham chieu o STACK
console.log(personCopy);
console.log(person.name);

console.log(personCopy === person);

console.log("Sử dụng Object.assign để sao chép");
// Để coppy ra 1 object khác mà không trỏ tới cùng 1 object bên HEAP
// Có nghĩa object coppy sẽ có 1 địa chỉ tham chiếu khác so với object nguồn
// Sử dụng Object.asign(target, source)

let personCoppyOk = Object.assign({}, person);

console.log(personCoppyOk);

personCoppyOk.name = "Hieu";

console.log(personCoppyOk);

console.log(person);
