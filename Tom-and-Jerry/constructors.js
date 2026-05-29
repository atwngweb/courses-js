// Hàm tạo(Bản thiết kế đối tượng) - Function/Object Constructor
// Không tạo hàm tạo bằng arrow function
export function Charater(name, hp, atk, defense) {
  this.name = name;
  this.hp = hp;
  this.atk = atk;
  this.defense = defense;
  this.attack = (aim) => {
    const damage = this.atk - aim.defense < 0 ? 0 : this.atk - aim.defense;
    aim.hp -= damage;
    console.log(
      `${this.name} danh ${aim.name} mat ${damage} mau, ${aim.name} con ${aim.hp} mau.`,
    );
  };

  this.isAlive = () => {
    if (this.hp > 0) {
      return true;
    } else return false;
  };
}
