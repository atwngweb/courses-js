// Tom and Jerry

/*
    Health/hp: Mau
    Attack power/atk: Sat thuong
    defense: phong thu
*/

const tom = {
  name: "Tom",
  hp: 1000,
  atk: 70,
  defense: 50,
  //   Phuong thuc tan cong
  attack(aim) {
    const damage = this.atk - aim.defense < 0 ? 0 : this.atk - aim.defense;
    aim.hp -= damage;
    console.log(
      `${this.name} danh ${aim.name} mat ${damage} mau, ${aim.name} con ${aim.hp} mau.`,
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
  hp: 400,
  atk: 40,
  defense: 10,
  attack(aim) {
    const damage = this.atk - aim.defense < 0 ? 0 : this.atk - aim.defense;
    aim.hp -= damage;
    console.log(
      `${this.name} danh ${aim.name} mat ${damage} mau, ${aim.name} con ${aim.hp} mau.`,
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
