// Object.create() là phương thức tạo ra đối tượng mới, chỉ định đối tượng khác làm prototype cho đối tượng mới đó.

const prototype = {
  attack(aim) {
    aim.hp -= this.atk;
  },
};

const tom = Object.create(prototype);

tom.name = "Tom";
tom.hp = 1000;
tom.atk = 100;

console.log(tom);

const jerry = Object.create(prototype);

jerry.name = "Jerry";
jerry.hp = 500;
jerry.atk = 50;

console.log(jerry);

// function Character(name, hp, atk) {
//   this.name = name;
//   this.hp = hp;
//   this.atk = atk;
// }

// Character.prototype.attack = function (aim) {
//   aim.hp -= this.atk;
// };

// const tom = new Character("tom", 1000, 100);
// const jerry = new Character("jerry", 500, 50);

// console.log(tom);
// console.log(jerry);

// tom.attack(jerry);
