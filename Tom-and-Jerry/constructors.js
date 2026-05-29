// Hàm tạo(Bản thiết kế đối tượng) - Function/Object Constructor
// Không tạo hàm tạo bằng arrow function

// // Tom and Jerry

// /*
//     Health/hp: Mau
//     Attack power/atk: Sat thuong
//     defense: phong thu
//      speed: toc do
//  counterRate: phan cong
// */
export function Charater(name, hp, atk, defense, speed, counterRate) {
  this.name = name;
  this.hp = hp;
  this.atk = atk;
  this.defense = defense;
  this.speed = speed;
  this.counterRate = counterRate;
  this.attack = (aim) => {
    const damage = this.atk - aim.defense < 0 ? 0 : this.atk - aim.defense;
    aim.hp -= damage;
    console.log(
      `${this.name} danh ${aim.name} mat ${damage} mau, ${aim.name} con ${aim.hp} mau.`,
    );

    //  Xử lý chỉ số phản công
    if (aim.isAlive() && Math.random() < aim.counterRate) {
      const counterDamage =
        aim.atk - this.defense < 0 ? 0 : aim.atk - this.defense;
      this.hp -= counterDamage;
      console.log(
        `${aim.name} phan cong ${this.name} mat ${counterDamage} mau, ${this.name} con ${this.hp} mau.`,
      );
    }
  };

  this.isAlive = () => {
    if (this.hp > 0) {
      return true;
    } else return false;
  };
}
