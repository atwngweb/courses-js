// Tom and Jerry

/*
    Health/hp: Mau
    Attack power/atk: Sat thuong
*/

const tom = {
  name: "Tom",
  hp: 1000,
  atk: 50,
  //   Phuong thuc tan cong
  attack(aim) {
    aim.hp -= this.atk;
    console.log(
      `${this.name} danh ${aim.name} mat ${this.atk} mau, ${aim.name} con ${aim.hp} mau.`,
    );
  },
  //   Check health
  isAlive() {
    if (this.hp > 0) {
      return true;
    } else return false;
  },
};

const jerry = {
  name: "Jerry",
  hp: 300,
  atk: 20,
  attack(aim) {
    aim.hp -= this.atk;
    console.log(
      `${this.name} danh ${aim.name} mat ${this.atk} mau, ${aim.name} con ${aim.hp} mau.`,
    );
  },
  //   Check health
  isAlive() {
    if (this.hp > 0) {
      return true;
    } else return false;
  },
};

let round = 1;
while (tom.isAlive() && jerry.isAlive()) {
  console.log(`Lan ${round} combat:`);
  if (round % 2 == 0) {
    jerry.attack(tom);
  } else tom.attack(jerry);
  round++;
}

if (tom.isAlive()) {
  console.log(`${tom.name} win`);
} else console.log(`${jerry.name} win`);
